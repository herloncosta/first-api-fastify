const {
    findAll,
    findById,
    insert,
    updateById,
    deleteById,
} = require('../controllers/product.controller')

const getAll = {
    method: 'GET',
    url: '/api/products',
    schema: {},
    preHandler: (request, reply, done) => {
        done()
    },
    handler: findAll,
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
    handler: findById,
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
    handler: insert,
}

const update = {
    method: 'PUT',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'number' },
        },
        body: {
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
    handler: updateById,
}

const remove = {
    method: 'DELETE',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'number' },
        },
    },
    preHandler: (request, reply, done) => {
        done()
    },
    handler: deleteById,
}

const productRoutes = [getAll, getById, create, update, remove]

module.exports = { productRoutes }
