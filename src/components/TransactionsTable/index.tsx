import { useState, useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

export const TransactionsTable = () => {
    const [trasactions, setTransactions] = useState([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from(Array(5).keys()).map(item => (
                            <tr key={item+1}>
                                <td className="title">{item%2 === 0 ? 'Receita' : 'Despesa'}</td>
                                <td className={item%2 === 0 ? 'deposit' : 'withdraw'} >{item%2 === 0 ? '' : '-'} R$ {(Math.random()*1000).toFixed(2)}</td>
                                <td>Categorizar</td>
                                <td>16/03/2021</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </Container>
    )
}