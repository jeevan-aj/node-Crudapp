let products = require("../data/product.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");
function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product};
    products.push(newProduct);
    writeDataToFile("./data/product.json", products);
    resolve(newProduct);
  });
}
function updateProduct(id, product){
    return new Promise((resolve,reject)=> {
        const index = products.findIndex((e)=> e.id===id)
        products[index] = {id, ...product}
        writeDataToFile('./data/product.json',products)
        resolve(products[index])
    })
}

function removeProduct(id){
    return new Promise((resolve,reject)=> {
       products = products.filter((cur,idx)=> cur.id !== id)
        writeDataToFile('./data/product.json',products)
        resolve()
    })
}

module.exports = {
  find,
  findById,
  create,
  updateProduct,
  removeProduct,
}
