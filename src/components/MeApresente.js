import PropTypes from 'prop-types';

function MeApresente({nome}){
    return(
     <div>
        <h1>Olá {nome}!</h1>
        <p>O {nome} é super especial!</p>
        <p>{nome} não seja gado e gore</p>
     </div>   
    )
}
//valores padroes em caso de omissão:
MeApresente.defaultProps = {
    nome: "Sem nome"
}

export default MeApresente