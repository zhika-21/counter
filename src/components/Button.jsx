import "./Button.css"
const Button = (props) => {
    return <button className={props.name} onChange = {props.func}>{props.name}</button> 
       
    
}
export default Button;
