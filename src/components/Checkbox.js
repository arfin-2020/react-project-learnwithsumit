const Checkbox = ({text, ...props}) =>{
    return (
        <label> 
        <input type="checkbox" {...props}/> 
        <span>{text}</span> 
        </label>
    )
}

export default Checkbox;