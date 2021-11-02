const productos = [
    { id: 1,foto:'https://www.kanton.com.ar/8874-home_default/mini-pista-hockey-hielo-juego-de-mesa-.jpg', name: "Mini pista de hockey sobre hielo", category: 'juegosdemesa',detail: 'Este es un juego para divertirse jugando con imanes',price: 299, stock: 9 },
    { id: 2,foto:'https://www.kanton.com.ar/8875-large_default/squishy-ardilla-apretar-antistress.jpg' , name: "Squishy Ardilla Apretar Antistress", category: 'peluches', detail: 'Este muñequito te quita el estress, muy recomendado',price: 419, stock: 10 },
    { id: 3,foto:'https://www.kanton.com.ar/902-home_default/juego-pesca-fishing-peces.jpg' , name: "Juego pesca fishing peces mini pescamagic a rosca", category: 'juegosdemesa',detail: 'para divertirse con los mas chiquitos y pescar de a dos',price: 249, stock: 11 },
];

export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000);
    //reject('400 not found')
})

//Devuelve un solo producto se expresa solo para el desafio de getItem con Detail
export const getItem = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos.filter(prod => prod.id === 1))
    }, 2000);
    //reject('400 not found')
})