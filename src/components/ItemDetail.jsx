import ItemCount from "./ItemCount"

const ItemDetail = (props) =>{

    return (
        <div>
            <p>{props.product?.title}</p>
            <img width={150} src={props.product.img} alt="imagen" />
            <p>Precio: $ {props.product?.price}</p>
            <ItemCount></ItemCount>
        </div>

    )

}

export default ItemDetail