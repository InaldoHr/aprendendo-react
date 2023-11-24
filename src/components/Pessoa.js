
import PropTypes from 'prop-types'
import styles from './Pessoa.components.css'
function Pessoa({nome, img, idade, profissao}) {
    return (
        <div className="fundo">
            <h1>Perfil de {nome}</h1>
            <p>idade={idade}</p>
            <p>profissao={profissao}</p>
            <img src={img} alt={nome} width="300px"></img>
        </div>

    )
}
Pessoa.propTypes = {
    nome: PropTypes.string.isRequired, // texto é obrigatório
    idade: PropTypes.number, //numero
}



Pessoa.defaultProps = {
    img: "https://placehold.co/400",
    profissao: "Desempregado",
    idade: "?",
}
export default Pessoa;