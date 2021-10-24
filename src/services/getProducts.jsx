const productos = [
    { id: 1,foto:'https://www.kanton.com.ar/8874-home_default/mini-pista-hockey-hielo-juego-de-mesa-.jpg', name: "Mini pista de hockey sobre hielo", price: 299 },
    { id: 2,foto:'https://www.kanton.com.ar/8875-large_default/squishy-ardilla-apretar-antistress.jpg' , name: "Squishy Ardilla Apretar Antistress", price: 419 },
    { id: 3,foto:'https://www.kanton.com.ar/902-home_default/juego-pesca-fishing-peces.jpg' , name: "Juego pesca fishing peces mini pescamagic a rosca", price: 249 },
  ];

 export const getProducts = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 3000);
    //reject('400 not found')
})