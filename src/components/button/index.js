import './button.css'

const Button = (props) => {
    return (
    <div className='m_botoes'>
        <button type={props.type} onClick={props.onClick} className='button'>
            {props.children}
        </button>
    </div>)
}

export default Button