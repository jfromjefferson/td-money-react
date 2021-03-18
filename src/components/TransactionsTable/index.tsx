import { useState, useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

interface Transaction {
    id: number,
    title: string,
    type: string,
    amount: number
    category: string,
    createdAt: string,
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data.transactions))
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
                        transactions.map(item => (
                            <tr key={item.id}>
                                <td className="title">{item.title}</td>
                                <td className={item.type} >{item.type === 'deposit' ? '' : '-'} R$ {item.amount.toFixed(2)}</td>
                                <td>{item.category}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </Container>
    )
}