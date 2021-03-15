import { Container } from './styles'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'

export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Income icon"/>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Outcome icon"/>
                </header>
                <strong>- R$ 1200,00</strong>
            </div>

            <div className="green-bg">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total icon"/>
                </header>
                <strong>- R$ 200,00</strong>
            </div>
        </Container>
    )
}