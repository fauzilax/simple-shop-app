import React from "react";

class ProductCounter extends React.Component{
    state = {
        order : 0
    }
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue)
    }

    buttonPlus = ()=>{
        this.setState({
            order: this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order);
        })
    }
    buttonMinus= () =>{
        if (this.state.order >0 ) {
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render(){
        return(            
            <div> 
                <button className="minus" onClick={this.buttonMinus}>-</button> 
                <input type="text" value={this.state.order} />      
                <button className="plus" onClick={this.buttonPlus}>+</button>                     
            </div>

        )
    }
}

export default ProductCounter