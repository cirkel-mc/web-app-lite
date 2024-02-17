import fp from '@fingerprintjs/fingerprintjs'

/**
 * @function generateFingerPrint generated only once after signin
 * @returns {string} fingerprintId that required to crafting digital signature
 */
export async function generateFingerPrint() {
  return fp
    .load()
    .then((fp) => fp.get())
    .then((result) => {
      // This is the visitor identifier:
      return result
    })
}
