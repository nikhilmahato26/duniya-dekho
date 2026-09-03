/**
 * UPI payment details. Kept free of imports so the QR generator script
 * (`npm run qr`) can read the same source of truth as the UI.
 */
export const payment = {
  provider: 'slice',
  upiId: 's3062150258519127@slc',
  payeeName: 'Duniya Dekho Travels',
  qr: '/upi-qr.png',
  apps: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay'],
  note: 'Booking amount or full payment — both work. Share the screenshot on WhatsApp and we send your receipt and vouchers right away.',

  /** NEFT / IMPS / RTGS details. `copy: false` fields are shown but not copyable. */
  bank: {
    name: 'slice Small Finance Bank',
    branch: 'Koramangala, Bangalore',
    fields: [
      { label: 'Account Holder Name', value: 'Duniya Dekho Travels' },
      { label: 'Account Number', value: '033311501058510', mono: true },
      { label: 'IFSC Code', value: 'NESF0000333', mono: true },
      { label: 'Customer ID', value: '380005035770', mono: true },
      { label: 'Bank', value: 'slice Small Finance Bank', copy: false },
      { label: 'Branch', value: 'Koramangala, Bangalore', copy: false },
    ],
    note: 'NEFT, IMPS and RTGS all work. Transfers usually reflect within a few minutes — send us the reference number on WhatsApp to confirm instantly.',
  },
}

/** upi://pay deep link — opens the UPI app chooser on a phone. */
export function upiIntent({ amount, note } = {}) {
  const params = new URLSearchParams({
    pa: payment.upiId,
    pn: payment.payeeName,
    cu: 'INR',
  })
  if (amount) params.set('am', String(amount))
  if (note) params.set('tn', note)
  return `upi://pay?${params.toString()}`
}
