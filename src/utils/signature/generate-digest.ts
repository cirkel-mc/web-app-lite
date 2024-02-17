import { AxiosRequestConfig } from 'axios'
import { SHA256, enc } from 'crypto-js'
import moment from 'moment'
import { generateFingerPrint } from './generate-fingerprint'

/**
 * @function generateDigest generated only once after signin
 * @param config
 * @returns {string} raw digest for signature
 */
export async function generateDigest(config: AxiosRequestConfig) {
  const { url, method, data } = config

  const timestamp = moment().unix()
  const path = url
  const httpMethod = method?.toUpperCase()
  const channel = 'B'
  const { visitorId } = await generateFingerPrint()
  const rawDigest = process.env.NEXT_PUBLIC_DIGEST_SECRET_KEY
  const hash = SHA256(data).toString(enc.Hex)

  return `${httpMethod}:${path}:${hash}:${visitorId}:${channel}:${timestamp}:${rawDigest}`
}
