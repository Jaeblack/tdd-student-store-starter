
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


        const products = this.getAll();

        let purchase = {
            id : 1,
            name : user.name,
            email : user.email,
            order : shoppingCart,
            total : 0,
            createdAt : new Date(),
            receipt : { lines : []}
        }



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

            // calculating the total price
            let product = products.find(prod => prod.id == item.itemId);
            if(!product) throw new BadRequestError(`item with id ${item.itemId} not found`);

            product.price *= item.quantity;

            purchase.total += product.price;


        });

        //Adding single lines for the purchase receipt
        purchase.receipt.lines.push((`You have purchased ${purchase.order.length} different kind of items`));

        purchase.receipt.lines.push(`With an original total price of $ ${purchase.total}`);
        purchase.receipt.lines.push(`and $${((purchase.total * 0.0875).toFixed(2))} of taxes (8.75%)`);
        purchase.total *= 1.0875
        purchase.total = (purchase.total).toFixed(2);
        purchase.receipt.lines.push(`The total cost is $${(purchase.total)}`);
        /*
*/

        return purchase;
    }

}

module.exports = Store
