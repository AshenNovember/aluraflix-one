const DataList = (props) => {

    return (
        <div className={`campo-texto ${!props.isValid ? 'invalido' : ''}`}>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                <option></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DataList