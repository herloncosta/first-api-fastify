const products = [{ id: 1, name: 'Pen', category: 'office supplies', price: 2 }]

function findAll(request, reply) {
    reply.send({ products })
}

function findById(request, reply) {
    const id = request.params.id
    const product = products.find((product) => product.id === id)
    if (product) {
        reply.status(200).send({ product })
        return
    }
    reply.status(404).send({ error: 'Product not found' })
}

function insert(request, reply) {
    const { id, name, category, price } = request.body
    if (id && name && category && price) {
        products.push({ id, name, category, price })
        reply.status(201).send({ success: `product created with id ${id}` })
        return
    }
    reply.status(400).send({ error: 'Todos os itens são obrigatórios' })
}

function updateById(request, reply) {
    const id = request.params.id
    const { name, category, price } = request.body
    const updated = { id, name, category, price }
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex !== -1) {
        products.splice(productIndex, 1, updated)
        reply.status(201).send({ success: `product with id ${id} is updated` })
    }
    reply.status(404).send({ error: 'Product not found' })
}

function deleteById(request, reply) {
    const id = request.params.id
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex !== -1) {
        products.splice(productIndex, 1)
        reply.status(204).send({ success: 'Product deleted' })
        return
    }
    reply.status(404).send({ error: 'Product not found ' })
}

module.exports = { findAll, findById, insert, updateById, deleteById }
