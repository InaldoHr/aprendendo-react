
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Calculadora() {
    //Variaveis:
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {
        setResultado(parseFloat(numero1) + parseFloat(numero2));
    }
    return (
        <div className="mt-5 p-5">
            <p>
                <label htmlFor="n1">Numero 1:  </label>
                <input onChange={(e) => setNumero1(e.target.value)} name="n1" id="n1" type="number" />
            </p>
            <p>
                <label htmlFor="n2">Numero 2:  </label>
                <input onChange={(e) => setNumero2(e.target.value)} name="n2" id="n2" type="number" />
            </p>
            <p>
                <div>
                    <Button  onClick={calcular}
                        color="primary"
                        outline
                    >
                        Calcular
                    </Button>
                </div>
            </p>
            <p> Resultado: {resultado} </p>

        </div>
    )

}
export default Calculadora;