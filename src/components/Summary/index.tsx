import { Container } from './styles'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export const Summary = () => {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, curr) => {
        if (curr.type === 'deposit') {
            acc.deposits += curr.amount
            acc.total += curr.amount
        } else {
            acc.withdraws += curr.amount
            acc.total -= curr.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Income icon" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Outcome icon" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>
            </div>

            <div className="green-bg">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total icon" />
                </header>
                <strong>{summary.total < 0 ? '-' : ''} {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(Math.abs(summary.total))}</strong>
            </div>
        </Container>
    )
}