const fastify = require('fastify')({ logger: true })
require('dotenv').config()

const PORT = process.env.PORT || 3000

const products = [{ id: 1, name: 'Pen', category: 'office supplies', price: 2 }]

fastify.get('/api/product', (request, reply) => {
    reply.send({ products })
})

fastify.get('/api/product/:id', (request, reply) => {
    const id = parseInt(request.params.id)
    const product = products.find((product) => product.id === id)
    reply.send({ product })
})

fastify.post('/api/product', (request, reply) => {
    const { id, name, category, price } = request.body
    products.push({ id, name, category, price })
    reply.send({ 201: 'created' })
})

async function init() {
    await fastify.listen({ port: PORT })
}

init()
