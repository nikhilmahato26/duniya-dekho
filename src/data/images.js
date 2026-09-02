/**
 * Central image bank. Swap these IDs (or drop in local files under /public)
 * when the client supplies their own photography — nothing else needs to change.
 */
const UNSPLASH = 'https://images.unsplash.com'

export function photo(id, { w = 1200, h, q = 75 } = {}) {
  const size = h ? `w=${w}&h=${h}&fit=crop` : `w=${w}`
  return `${UNSPLASH}/${id}?auto=format&${size}&q=${q}`
}

export const IMG = {
  kashmir: 'photo-1595815771614-ade9d652a65d',
  manali: 'photo-1626621341517-bbf3d9990a23',
  rajasthan: 'photo-1599661046289-e31897846e41',
  goa: 'photo-1512343879784-a960bf40e7f2',
  kerala: 'photo-1602216056096-3b40cc0c9944',
  keralaBackwater: 'photo-1590050752117-238cb0fb12b1',
  ladakh: 'photo-1581793745862-99fde7fa73d2',
  andaman: 'photo-1544551763-46a013bb70d5',
  uttarakhand: 'photo-1470071459604-3b5ec3a7fe05',
  varanasi: 'photo-1571536802807-30451e3955d8',
  sikkim: 'photo-1506905925346-21bda4d32df4',
  agra: 'photo-1548013146-72479768bada',
  tajReflection: 'photo-1524492412937-b28074a5d7da',
  tajLeaves: 'photo-1580889240912-c39ecefd3d95',

  dubai: 'photo-1518684079-3c830dcef090',
  dubaiSkyline: 'photo-1512453979798-5ea266f8880c',
  thailand: 'photo-1552465011-b4e21bf6e79a',
  bali: 'photo-1537996194471-e657df975ab4',
  singapore: 'photo-1525625293386-3f8f99389edd',
  maldives: 'photo-1514282401047-d79a71a590e8',
  europe: 'photo-1502602898657-3e91760cbb34',
  switzerland: 'photo-1530122037265-a5f1f91d3b99',
  nepal: 'photo-1544735716-392fe2489ffa',
  vietnam: 'photo-1596401057633-54a8fe8ef647',

  planeWing: 'photo-1436491865332-7a61a109cc05',
  flatlay: 'photo-1488646953014-85cb44e25828',
  backpacker: 'photo-1503220317375-aaad61436b1b',
  beachSunset: 'photo-1507525428034-b723cf961d3e',
  roadTrip: 'photo-1469854523086-cc02fe5d8800',
  starryPeaks: 'photo-1519681393784-d120267933ba',
}
