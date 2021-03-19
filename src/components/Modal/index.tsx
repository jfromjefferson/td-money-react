import { useState } from 'react'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

Modal.setAppElement('#root')

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export const TransactionModal = (props: ModalProps) => {
    const { createTransaction } = useTransactions()
    const [type, seType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    const handleNewTransaction = async () => {

        await createTransaction({
            title,
            type,
            amount,
            category,
        })
        
        props.onRequestClose()

        setTitle('')
        setAmount(0)
        setCategory('')
    }

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} overlayClassName="modal-overlay" className="modal-content">
            <div id="close-modal">
                <img src={closeImage} alt="Close modal" onClick={props.onRequestClose} />
            </div>

            <Container>
                <h2>Nova transação</h2>

                <input type="text" onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Título" />
                <input type="number" onChange={(event) => setAmount(Number(event.target.value))} value={amount} min="0" placeholder="Valor" />
                <input type="text" onChange={(event) => setCategory(event.target.value)} value={category} placeholder="Categoria" />

                <TransactionTypeContainer>
                    <RadioBox onClick={() => seType('deposit')} isActive={type === 'deposit'} activeColor="green">
                        <img src={incomeImage} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox onClick={() => seType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImage} alt="Outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button id="newTransaction" onClick={handleNewTransaction}>Cadastrar</button>
            </Container>
        </Modal>
    )
}