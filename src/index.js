const Fastify = require('fastify')({ logger: true })
require('dotenv').config()

const fastify = Fastify
const PORT = process.env.PORT || 3000

fastify.get('/product', (request, reply) => {
    const route = request.url
    return { route: { path: route } }
})

async function init() {
    await fastify.listen({ port: PORT })
}

init()
