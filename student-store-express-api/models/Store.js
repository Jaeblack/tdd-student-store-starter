
const {BadRequestError, NotFoundError} = require('../utils/errors')

const  {storage} = require('../data/storage');
const { use } = require('../routes/Store');


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

    static makeOrder(checkout){
        if( checkout === undefined || checkout.user === undefined || checkout.shoppingCart === undefined){
            throw new BadRequestError()
        }
        const user = checkout.user;
        const shoppingCart = checkout.shoppingCart;
        if( !user.name || !user.email) throw new BadRequestError();
        if(shoppingCart.length === 0) throw new BadRequestError();

        return {cost : 100}
    }

}

module.exports = Store
