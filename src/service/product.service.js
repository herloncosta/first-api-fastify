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
        } catch (error) {
            return { success: false, error: 'Product not found' }
        }
    }

    static createProduct(request) {
        const { name, category, price } = request.body
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
}

module.exports = ProductService
