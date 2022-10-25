import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
  maxAge: 3600,
  alias: {
    local: 'https://next.np-overflow.club'
  },
  domains: [
    'localhost:3000',
    'next.np-overflow.club',
    'np-overflow.club',
  ],
})

const ipxMiddleware = createIPXMiddleware(ipx)
const ipxHandler = fromNodeMiddleware(ipxMiddleware)

export default defineEventHandler((event) => {
  event.req.originalUrl = event.req.url = `/${event.context.params.path}`
  return ipxHandler(event)
})
