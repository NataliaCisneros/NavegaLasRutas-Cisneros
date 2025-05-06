const productos = [
    { title: 'hebilla', price: 50, id: 1, category: "accesorio"},
    { title: 'cinto', price: 100, id: 2, category: "complemento"},
    { title: 'cartera', price: 250, id: 3, category: "complemento"},
    { title: 'collar', price: 200, id: 4, category: "alhaja"},
    { title: 'anillo', price: 500, id: 5, category: "alhaja"},
    { title: 'reloj', price: 250, id: 6, category: "accesorio"},
]

export const getProducts =()=>{

    return new Promise ((resolve)=>{
        setTimeout(() => resolve(productos),1000)
    })
}

export const getSingleProduct =(itemId)=>{

    return new Promise ((resolve)=>{
        setTimeout(() => resolve(productos.find((product)=> product.id === Number(itemId))),1000)
    })
}