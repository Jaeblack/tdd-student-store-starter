
const { BadRequestError, NotFoundError } = require('../utils/errors')

const { storage } = require('../data/storage');
const { use } = require('../routes/Store');


class Store {
    constructor() {
        this.super()
    }
    static getAll() {
        const allOfThem = storage.get('products').value()
        return allOfThem
    }

    static getProduct(productId) {
        const products = storage.get('products').value()
        const product = products.find((prod) => prod.id == productId);
        if (!product) {
            throw new NotFoundError();

        } else {
            return product;
        }
    }

    static makeOrder(checkout) {
        //check if there are valid fields
        if (checkout === undefined || checkout.user === undefined || checkout.shoppingCart === undefined) {
            throw new BadRequestError("No user or shopping cart")
        }
        const user = checkout.user;
        const shoppingCart = checkout.shoppingCart;
        if (!user.name || !user.email) throw new BadRequestError("No name or email");
        if (shoppingCart.length === 0) throw new BadRequestError("Shopping cart without items");

        //checking items
        shoppingCart.map((item, idx) => {
            //check there are no missing fields in the item
            if( !item.itemId || !item.quantity) throw new BadRequestError(`item without id or quantity`);

            if( !Number.isInteger(item.itemId)  || !Number.isInteger(item.quantity)){
                throw new BadRequestError(`item id or quantity is not an integer`);
            }

            // if there is a repeated item, when eliminated, the size of the shopping cart will decrease more than 1
            if ((shoppingCart.length - 1) !==
                shoppingCart.filter((itmFilter) => itmFilter.itemId !== item.itemId).length) {
                    console.log('repeateeed', item)
                    throw new BadRequestError(`item id ${item.itemId} repeated`);
            }



        });

        return { cost: 100 }
    }

}

module.exports = Store
