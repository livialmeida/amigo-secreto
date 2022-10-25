import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import { useSorteador } from "../state/hooks/useSorteador"

import './Rodape.css'

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()
    
    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (<footer className="rodape-configuracoes">
        <button className="botao" disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
    </footer>)
}

export default Rodape