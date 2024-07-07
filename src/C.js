import D from "./D";
const C = (props)=>{

    return <div>
        
        <p>C: name{props.token}  email: {props.email}</p>
        <D {...props}/>
    </div>
}

export default C;