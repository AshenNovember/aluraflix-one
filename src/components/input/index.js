import { useState } from 'react'
import './input.css'

const Input = (props) => {

    const [valor, setValor] = useState('')
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto ${!props.isValid ? 'invalido' : ''}`}>
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}
export default Input