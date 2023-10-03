const products = [{ id: 1, name: 'Pen', category: 'office supplies', price: 2 }]

const getAll = {
    method: 'GET',
    url: '/api/products',
    schema: {},
    preHandler: (request, reply, done) => {
        done()
    },
    handler: (request, reply) => {
        reply.send({ products })
    },
}

const getById = {
    method: 'GET',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'number' },
        },
    },
    preHandler: (request, reply, done) => {
        done()
    },
    handler: (request, reply) => {
        const id = request.params.id
        const product = products.find((product) => product.id === id)
        reply.send({ product })
    },
}

const create = {
    method: 'POST',
    url: '/api/products',
    schema: {
        body: {
            id: { type: 'number' },
            name: { type: 'string' },
            category: { type: 'string' },
            price: { type: 'number' },
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    success: { type: 'string' },
                },
            },
        },
    },
    preHandler: (request, reply, done) => {
        done()
    },
    handler: (request, reply) => {
        const { id, name, category, price } = request.body
        products.push({ id, name, category, price })
        reply.send({ success: `product created with id ${id}` })
    },
}

const productRoutes = [getAll, getById, create]

module.exports = { productRoutes }
