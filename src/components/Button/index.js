import './style.css'
import { Link } from 'react-router-dom'

function Button({to, text}) {
    return(
        <Link className='btn' to={to}>
        {text}
        </Link>
    )
}
export default Button;