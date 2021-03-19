import { useState } from 'react'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { TransactionModal } from './components/Modal'
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from './hooks/useTransactions'

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

	return (
		<TransactionsProvider>
			<Header onOpenModal={handleOpenModal} />
			<Dashboard />

			<TransactionModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />

			<GlobalStyle />
		</TransactionsProvider>
	)
}
