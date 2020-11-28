const Button = (props) => {
    const{btnName,btntype,handlerEvent}=props;
    return (<button type ={btntype} onClick = {handlerEvent}>{btnName}
    </button>);
}
export default Button;