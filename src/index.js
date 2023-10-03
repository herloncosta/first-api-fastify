const { productRoutes } = require('./routes/product.route')
const fastify = require('fastify')({ logger: true })
require('dotenv').config()

const PORT = process.env.PORT || 3001

// ROUTES
productRoutes.forEach((route) => {
    fastify.route(route)
})

// SERVER
function init() {
    fastify.listen({ port: PORT, host: '127.0.0.1' }, (err, addr) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        console.log(`Service running on ${addr}`)
    })
}

init()
