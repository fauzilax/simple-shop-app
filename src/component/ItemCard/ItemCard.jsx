import React from "react";
import "./ItemCard.css"

const ItemCard = (props) => {
    return (
        <div className="product-cont">
            <div className="item-card">
                <div className="image-product">
                    <img className="img-01" src="https://m.media-amazon.com/images/I/71FpHXDGZOL.jpg" alt="" />
                </div>
                <p>{props.title}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

ItemCard.defaultProps = {
    title:"product",
    price:"Rp 999999"
}

export default ItemCard