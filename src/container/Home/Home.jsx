import React from "react";
import "./Home.css"
import ItemCard from "../../component/ItemCard/ItemCard";
import ProductCounter from "../ProductCounter/ProductCounter";



class Home extends React.Component{
    state = {
        order : 0
    }
    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <div className="home">
                <div className="header">
                    <h1>Simple E-Commerce</h1>
                    <hr/>
                </div>
                <div className="body">
                    <div className="item-container">
                        <div className="item">
                            <ItemCard 
                                title="Head n Sholders" 
                                price="Rp 25000" 
                            />
                            <ItemCard 
                                title="Lifebuoy" 
                                price="Rp 5000" 
                            />
                            <ItemCard 
                                title="Sarimie" 
                                price="Rp 3000" 
                            />
                            <ItemCard 
                                title="Indomilk" 
                                price="Rp 15000" 
                            />
                            <ItemCard 
                                title="Chitatos" 
                                price="Rp 7000" 
                            />
                        </div>
                    </div>
                    <div className="cart"> 
                        <h1>Cart</h1>
                        <p>Total Product : {this.state.order}</p>  
                        <ProductCounter onCounterChange={(value)=>this.handleCounterChange(value)} />                   
                    </div>
                </div>
              
                
            </div>
        )
    }
}

export default Home