const Product = require('../models/product.model')

async function findAllProducts(request, reply) {
    try {
        const products = await Product.find({})
        return reply.send({ products })
    } catch (error) {
        return reply.status(500).send({ error: 'Collection not found' })
    }
}

async function findProductById(request, reply) {
    const id = request.params.id
    if (id) {
        try {
            const product = await Product.findById(id)
            if (product) {
                return reply.status(200).send({ product })
            }
        } catch (error) {
            return reply.status(404).send({ error: 'Product not found' })
        }
    }
}

function createProduct(request, reply) {
    const { name, category, price } = request.body
    if (name && category && price) {
        try {
            const product = new Product({ name, category, price })
            product.save()
            return reply
                .status(201)
                .send({ success: `product created with id ${product._id}` })
        } catch (error) {
            return reply
                .status(400)
                .send({ error: 'Todos os itens são obrigatórios' })
        }
    }
}

async function updateProductById(request, reply) {
    const id = request.params.id
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
            return reply.status(404).send({ error: `${name} not found!` })
        }
    }
}

async function deleteProductById(request, reply) {
    const id = request.params.id
    if (id) {
        try {
            const product = await Product.findByIdAndDelete(id)
            return reply
                .status(204)
                .send({ success: `${product.name} has been deleted.` })
        } catch (error) {
            console.error(error)
            return reply.status(404).send({ error: 'Product not found.' })
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
