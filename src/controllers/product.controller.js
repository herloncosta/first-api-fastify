const products = [{ id: 1, name: 'Pen', category: 'office supplies', price: 2 }]

function findAllProducts(request, reply) {
    return reply.send({ products })
}

function findProductById(request, reply) {
    const id = request.params.id
    const product = products.find((product) => product.id === id)
    if (product) {
        return reply.status(200).send({ product })
    }
    return reply.status(404).send({ error: 'Product not found' })
}

function createProduct(request, reply) {
    const { id, name, category, price } = request.body
    if (id && name && category && price) {
        products.push({ id, name, category, price })
        return reply
            .status(201)
            .send({ success: `product created with id ${id}` })
    }
    return reply.status(400).send({ error: 'Todos os itens são obrigatórios' })
}

function updateProductById(request, reply) {
    const id = request.params.id
    const { name, category, price } = request.body
    const updated = { id, name, category, price }
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex !== -1) {
        products.splice(productIndex, 1, updated)
        return reply
            .status(201)
            .send({ success: `product with id ${id} is updated` })
    }
    return reply.status(404).send({ error: 'Product not found' })
}

function deleteProductById(request, reply) {
    const id = request.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex !== -1) {
        products.splice(productIndex, 1)
        return reply.status(204).send({ success: 'Product deleted' })
    }
    return reply.status(404).send({ error: 'Product not found ' })
}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProductById,
    deleteProductById,
}
