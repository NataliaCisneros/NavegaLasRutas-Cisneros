import hebilla from "../assets/hebilla.jpg"
import cinto from "../assets/cinto.jpg"
import cartera from "../assets/cartera.jpg"
import collar from "../assets/collar.jpg"
import anillo from "../assets/anillo.jpg"
import reloj from "../assets/reloj.jpg"

const productos = [
    { title: 'hebilla', price: 50, id: 1, img: hebilla, category: "accesorio"},
    { title: 'cinto', price: 100, id: 2, img: cinto, category: "complemento"},
    { title: 'cartera', price: 250, id: 3, img: cartera, category: "complemento"},
    { title: 'collar', price: 200, id: 4, img: collar, category: "alhaja"},
    { title: 'anillo', price: 500, id: 5, img: anillo, category: "alhaja"},
    { title: 'reloj', price: 250, id: 6, img: reloj, category: "accesorio"},
]

export const getProducts =(categoryId)=>{

    return new Promise ((resolve)=>{
        setTimeout(() => {
            if (categoryId === undefined) resolve(productos)
            else resolve(productos.filter((producto)=> producto.category === categoryId))
            },1000)
    })
}

export const getSingleProduct =(itemId)=>{

    return new Promise ((resolve)=>{
        setTimeout(() => resolve(productos.find((product)=> product.id === Number(itemId))),1000)
    })
}