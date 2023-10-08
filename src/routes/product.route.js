const ProductController = require('../controllers/product.controller')

const getAll = {
    method: 'GET',
    url: '/api/products',
    schema: {},
    preHandler: (request, reply, done) => {
        done()
    },
    handler: ProductController.findAllProducts,
}

const getById = {
    method: 'GET',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'string' },
        },
    },
    preHandler: (request, reply, done) => {
        done()
    },
    handler: ProductController.findProductById,
}

const create = {
    method: 'POST',
    url: '/api/products',
    schema: {
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
    handler: ProductController.createProduct,
}

const update = {
    method: 'PUT',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'string' },
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
    handler: ProductController.updateProductById,
}

const remove = {
    method: 'DELETE',
    url: '/api/products/:id',
    schema: {
        params: {
            id: { type: 'string' },
        },
    },
    preHandler: (request, reply, done) => {
        done()
    },
    handler: ProductController.deleteProductById,
}

const productRoutes = [getAll, getById, create, update, remove]

module.exports = { productRoutes }
