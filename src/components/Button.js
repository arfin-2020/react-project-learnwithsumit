
import Classes from './style/Button.module.css';
const Button = ({className,children}) =>{
    return (
        <div className={`${Classes.button} ${className}`}>
        {children}
      </div>
    )
}

export default Button;