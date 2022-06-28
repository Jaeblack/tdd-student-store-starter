
const {BadRequestError} = require('../utils/errors')

const  {storage} = require('../data/storage');


class Store {
    constructor(){
        this.super()
    }
    static getAll(){
        const allOfThem = storage.get('products').value()
        return allOfThem

    }

}

module.exports = Store
