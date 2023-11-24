function Entrada(props) {
    return (
        //Entrada label="Nom name="nome" tipo="text" ph="Digitie seu nome"
        <p>
            <label for={props.name}>{props.label}: </label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph} />
        </p>
    )
}

export default Entrada;