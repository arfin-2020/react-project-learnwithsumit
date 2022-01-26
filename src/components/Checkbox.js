const Checkbox = ({className,text, ...props}) =>{
    return (
        <label className={className}> 
        <input type="checkbox" {...props}/> 
        <span>{text}</span> 
        </label>
    )
}

export default Checkbox;