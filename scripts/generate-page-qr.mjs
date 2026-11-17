import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const url = 'https://safeena-website.pages.dev/'
const version = 4
const size = version * 4 + 17
const dataCodewords = 80
const errorCodewords = 20

function appendBits(bits, value, length) {
  for (let shift = length - 1; shift >= 0; shift -= 1) bits.push((value >>> shift) & 1)
}

function gfMultiply(x, y) {
  let result = 0
  for (let i = 7; i >= 0; i -= 1) {
    result = (result << 1) ^ (((result >>> 7) & 1) * 0x11d)
    result ^= ((y >>> i) & 1) * x
  }
  return result
}

function reedSolomon(data, degree) {
  let generator = [1]
  let root = 1
  for (let i = 0; i < degree; i += 1) {
    const next = Array(generator.length + 1).fill(0)
    generator.forEach((coefficient, index) => {
      next[index] ^= coefficient
      next[index + 1] ^= gfMultiply(coefficient, root)
    })
    generator = next
    root = gfMultiply(root, 2)
  }

  const remainder = Array(degree).fill(0)
  for (const byte of data) {
    const factor = byte ^ remainder[0]
    remainder.shift()
    remainder.push(0)
    for (let i = 0; i < degree; i += 1) remainder[i] ^= gfMultiply(generator[i + 1], factor)
  }
  return remainder
}

const payload = new TextEncoder().encode(url)
if (payload.length > 78) throw new Error('The URL exceeds the byte capacity of this QR code.')

const bits = []
appendBits(bits, 0b0100, 4)
appendBits(bits, payload.length, 8)
for (const byte of payload) appendBits(bits, byte, 8)
appendBits(bits, 0, Math.min(4, dataCodewords * 8 - bits.length))
while (bits.length % 8 !== 0) bits.push(0)

const data = []
for (let i = 0; i < bits.length; i += 8) {
  data.push(bits.slice(i, i + 8).reduce((value, bit) => (value << 1) | bit, 0))
}
for (let pad = 0; data.length < dataCodewords; pad += 1) data.push(pad % 2 === 0 ? 0xec : 0x11)

const codewords = [...data, ...reedSolomon(data, errorCodewords)]
const matrix = Array.from({ length: size }, () => Array(size).fill(null))
const functionModules = Array.from({ length: size }, () => Array(size).fill(false))

function setFunction(x, y, value) {
  matrix[y][x] = Boolean(value)
  functionModules[y][x] = true
}

function drawFinder(cx, cy) {
  for (let dy = -4; dy <= 4; dy += 1) {
    for (let dx = -4; dx <= 4; dx += 1) {
      const x = cx + dx
      const y = cy + dy
      if (x >= 0 && x < size && y >= 0 && y < size) {
        const distance = Math.max(Math.abs(dx), Math.abs(dy))
        setFunction(x, y, distance !== 2 && distance !== 4)
      }
    }
  }
}

drawFinder(3, 3)
drawFinder(size - 4, 3)
drawFinder(3, size - 4)

for (let i = 8; i < size - 8; i += 1) {
  setFunction(6, i, i % 2 === 0)
  setFunction(i, 6, i % 2 === 0)
}

for (let dy = -2; dy <= 2; dy += 1) {
  for (let dx = -2; dx <= 2; dx += 1) {
    setFunction(26 + dx, 26 + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1)
  }
}

function drawFormat(mask) {
  const formatData = (0b01 << 3) | mask
  let remainder = formatData << 10
  for (let bit = 14; bit >= 10; bit -= 1) {
    if (((remainder >>> bit) & 1) !== 0) remainder ^= 0x537 << (bit - 10)
  }
  const formatBits = ((formatData << 10) | remainder) ^ 0x5412
  const bitAt = (index) => ((formatBits >>> index) & 1) !== 0

  for (let i = 0; i <= 5; i += 1) setFunction(8, i, bitAt(i))
  setFunction(8, 7, bitAt(6))
  setFunction(8, 8, bitAt(7))
  setFunction(7, 8, bitAt(8))
  for (let i = 9; i < 15; i += 1) setFunction(14 - i, 8, bitAt(i))
  for (let i = 0; i < 8; i += 1) setFunction(size - 1 - i, 8, bitAt(i))
  for (let i = 8; i < 15; i += 1) setFunction(8, size - 15 + i, bitAt(i))
  setFunction(8, size - 8, true)
}

const maskFunctions = [
  (x, y) => (x + y) % 2 === 0,
  (_x, y) => y % 2 === 0,
  (x) => x % 3 === 0,
  (x, y) => (x + y) % 3 === 0,
  (x, y) => (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0,
  (x, y) => ((x * y) % 2) + ((x * y) % 3) === 0,
  (x, y) => (((x * y) % 2) + ((x * y) % 3)) % 2 === 0,
  (x, y) => (((x + y) % 2) + ((x * y) % 3)) % 2 === 0,
]

const mask = 0
drawFormat(mask)

let bitIndex = 0
let upward = true
for (let right = size - 1; right >= 1; right -= 2) {
  if (right === 6) right -= 1
  for (let vert = 0; vert < size; vert += 1) {
    const y = upward ? size - 1 - vert : vert
    for (let offset = 0; offset < 2; offset += 1) {
      const x = right - offset
      if (matrix[y][x] === null) {
        const value = bitIndex < codewords.length * 8
          ? ((codewords[bitIndex >>> 3] >>> (7 - (bitIndex & 7))) & 1) !== 0
          : false
        matrix[y][x] = value
        bitIndex += 1
      }
    }
  }
  upward = !upward
}

for (let y = 0; y < size; y += 1) {
  for (let x = 0; x < size; x += 1) {
    if (!functionModules[y][x] && maskFunctions[mask](x, y)) matrix[y][x] = !matrix[y][x]
  }
}

const quietZone = 4
const viewSize = size + quietZone * 2
const pathData = []
for (let y = 0; y < size; y += 1) {
  for (let x = 0; x < size; x += 1) {
    if (matrix[y][x]) pathData.push(`M${x + quietZone},${y + quietZone}h1v1h-1z`)
  }
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="820" height="820" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="crispEdges" role="img" aria-labelledby="title description">
  <title id="title">SAFEENA website QR code</title>
  <desc id="description">Scan to open ${url}</desc>
  <rect width="100%" height="100%" fill="#fffaf2"/>
  <path d="${pathData.join('')}" fill="#173e34"/>
</svg>
`

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const outputPath = resolve(scriptDirectory, '../public/safeena-website-qr.svg')
writeFileSync(outputPath, svg, 'utf8')
console.log(`Created ${outputPath}`)
