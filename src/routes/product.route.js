const {
    findAllProducts,
    findProductById,
    createProduct,
    updateProductById,
    deleteProductById,
} = require('../controllers/product.controller')

const getAll = {
    method: 'GET',
    url: '/api/products',
    schema: {},
    preHandler: (request, reply, done) => {
        done()
    },
    handler: findAllProducts,
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
    handler: findProductById,
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
    handler: createProduct,
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
    handler: updateProductById,
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
    handler: deleteProductById,
}

const productRoutes = [getAll, getById, create, update, remove]

module.exports = { productRoutes }
