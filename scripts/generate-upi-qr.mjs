/**
 * Regenerates the UPI payment QR shown on the site.
 *
 *   npm run qr
 *
 * Edit `payment.upiId` / `payment.payeeName` in src/data/payment.js, then rerun.
 * Output: public/upi-qr.png (and .svg for print use).
 */
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// Read the UPI details from the same module the UI uses, so the two never drift.
const { payment } = await import(path.join(root, 'src/data/payment.js'))
const { upiId, payeeName } = payment

const payload = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR`

const options = {
  errorCorrectionLevel: 'M',
  margin: 1,
  color: { dark: '#0b2545', light: '#ffffff' },
}

const png = await QRCode.toBuffer(payload, { ...options, type: 'png', width: 900 })
await writeFile(path.join(root, 'public/upi-qr.png'), png)

const svg = await QRCode.toString(payload, { ...options, type: 'svg' })
await writeFile(path.join(root, 'public/upi-qr.svg'), svg)

console.log(`✓ QR written for ${upiId}`)
console.log(`  payload: ${payload}`)
