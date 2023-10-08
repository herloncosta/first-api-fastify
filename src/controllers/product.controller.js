const Product = require('../models/product.model')
const ProductService = require('../service/product.service')

async function findAllProducts(request, reply) {
    const result = await ProductService.getProducts()
    if (result.success) {
        return reply.status(200).send(result.foundProducts)
    }
    console.error(`Error fetching products: ${result.error}`)
    return reply.status(404).send({ error: result.error })
}

async function findProductById(request, reply) {
    const { id } = request.params
    const result = await ProductService.getProductBy(id)
    if (result.success) {
        return reply.status(200).send(result.foundProduct)
    }
    return reply.status(404).send({ error: result.error })
}

function createProduct(request, reply) {
    const result = ProductService.createProduct(request)
    if (result.success) {
        const successMessage = `product created with ID ${result.product._id}`
        return reply.status(201).send({ success: successMessage })
    }
    return reply.status(400).send({ error: result.error })
}

async function updateProductById(request, reply) {
    const { id } = request.params
    const { name, category, price } = request.body
    if (id && name && category && price) {
        try {
            const product = await Product.findByIdAndUpdate(
                id,
                { name, category, price },
                { new: true }
            )
            return reply
                .status(201)
                .send({ success: `product with id ${product._id} is updated` })
        } catch (error) {
            return reply.status(404).send({ error: `${name} not found` })
        }
    }
}

async function deleteProductById(request, reply) {
    const { id } = request.params
    if (id) {
        try {
            const product = await Product.findByIdAndDelete(id)
            return reply
                .status(204)
                .send({ success: `${product.name} has been deleted` })
        } catch (error) {
            console.error(error)
            return reply.status(404).send({ error: 'Product not found' })
        }
    }
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProductById,
    deleteProductById,
}
