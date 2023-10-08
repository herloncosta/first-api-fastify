const ProductService = require('../service/product.service')

class ProductController {
    static async findAllProducts(request, reply) {
        const result = await ProductService.getProducts()
        if (result.success) return reply.status(200).send(result.foundProducts)
        console.error(`Error fetching products: ${result.error}`)
        return reply.status(404).send({ error: result.error })
    }

    static async findProductById(request, reply) {
        const result = await ProductService.getProductBy(request)
        if (result.success) return reply.status(200).send(result.foundProduct)
        return reply.status(404).send({ error: result.error })
    }

    static createProduct(request, reply) {
        const result = ProductService.createProduct(request)
        if (result.success) {
            const successMessage = 'Product created'
            return reply.status(201).send({ success: successMessage })
        }
        return reply.status(400).send({ error: result.error })
    }

    static async updateProductById(request, reply) {
        const result = await ProductService.updateProductById(request)
        if (result.success) return { success: 'Product updated' }
        return reply.status(404).send({ error: result.error })
    }

    static async deleteProductById(request, reply) {
        const result = await ProductService.deleteProductById(request)
        if (result.success) return { success: 'Product deleted' }
        return reply.status(404).send({ error: result.error })
    }
}

module.exports = ProductController
