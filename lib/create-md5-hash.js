export default function () {
  const crypto = require('crypto')
  const now = `${Date.now()}`
  const hash = crypto.createHash('md5').update(now).digest('hex')
  return hash.slice(-8)
}
