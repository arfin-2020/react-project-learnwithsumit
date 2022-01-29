
import Classes from './style/Button.module.css';
const Button = ({className,children}) =>{
    return (
        <button className={`${Classes.button} ${className}`}>
        {children}
      </button>
    )
}

export default Button;