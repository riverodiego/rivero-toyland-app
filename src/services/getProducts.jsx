let data = require('../Products.json')

export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(data)
    }, 3000);
    //reject('400 not found')
})
