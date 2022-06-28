
const {BadRequestError, NotFoundError} = require('../utils/errors')

const  {storage} = require('../data/storage');


class Store {
    constructor(){
        this.super()
    }
    static getAll(){
        const allOfThem = storage.get('products').value()
        return allOfThem
    }

    static getProduct(productId){
        const products = storage.get('products').value()
        const product = products.find((prod) => prod.id == productId);
        if(!product){
            throw new NotFoundError();

        } else {
            return product;
        }
    }

}

module.exports = Store
