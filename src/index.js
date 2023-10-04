const mongoose = require('mongoose')
const { productRoutes } = require('./routes/product.route')
const fastify = require('fastify')({ logger: true })
require('dotenv').config()

const PORT = process.env.PORT || 3001
const URI = process.env.URI

// CONNECT DATABASE
async function connect() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected!')
    } catch (error) {
        console.error(error)
    }
}

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

connect()
init()
