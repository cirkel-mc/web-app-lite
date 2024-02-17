import { pki, sha256, util } from 'node-forge'

/**
 * @function generateSignature
 * @param stringToSign
 * @returns
 */
export function generateSignature(stringToSign: string) {
  const envSignature = process.env.NEXT_PUBLIC_SIGNATURE_SECRET_KEY
  const encryptedSignature = pki.privateKeyFromPem(envSignature ?? '')

  const md = sha256.create()
  md.update(stringToSign, 'utf8')

  const signature = encryptedSignature.sign(md)
  return util.encode64(signature)
}
