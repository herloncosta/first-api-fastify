const Product = require('../models/product.model')

class ProductService {
    static async getProducts() {
        try {
            const foundProducts = await Product.find({})
            if (foundProducts) return { success: true, foundProducts }
        } catch (error) {
            const errorMessage = 'Collection not found in the database'
            return { success: false, error: errorMessage }
        }
    }

    static async getProductBy(id) {
        try {
            const foundProduct = await Product.findById(id)
            if (foundProduct) return { success: true, foundProduct }
            throw new Error('Product not found')
        } catch (error) {
            console.error(error)
            return { success: false, error: error.message }
        }
    }

    static createProduct({ body }) {
        const { name, category, price } = body
        if (!name || !category || !price) {
            const messageError = 'All parameters are mandatory'
            return { success: false, error: messageError }
        }
        try {
            const product = new Product({ name, category, price })
            product.save()
            return { success: true, product }
        } catch (error) {
            const messageError = 'An error ocurred while creating the product'
            return { success: false, error: messageError }
        }
    }

    static async updateProductById({ params, body }) {
        const { id } = params
        const { name, category, price } = body
        const newProduct = { name, category, price }
        try {
            const product = await Product.findByIdAndUpdate(id, newProduct)
            if (product) return { success: true }
            throw new Error('Product not found')
        } catch (error) {
            console.error(error)
            return { success: false, error: error.message }
        }
    }

    static async deleteProductById({ params }) {
        const { id } = params
        try {
            const product = await Product.findByIdAndDelete(id)
            if (product) return { success: true }
            throw new Error('Product not found')
        } catch (error) {
            console.error(error)
            return { success: false, error: error.message }
        }
    }
}

module.exports = ProductService
