import React from "react"
import C from "./C"

class B extends React.Component{
    constructor(){
        super()
        this.state = {email: "hemajeya004@gmail.com"}
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log("old.name"+ this.props.name+"       New Name:  "+nextProps.name)
        console.log("old.token"+ this.props.token+"       New token:  "+nextProps.token)
        return true;
        // return false;
    }
    render(){
        return <div>
            <p>B: {this.props.token}</p>
            <button onClick={()=>{this.setState({email:"hemajeya004@gmail.com"})}}>Change Age</button>
            <p><C {...this.props} email = {this.state.email}/></p>
        </div>
    }
}

export default B;