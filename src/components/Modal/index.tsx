import React, { useState } from 'react' 
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'

Modal.setAppElement('#root')

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export const TransactionModal = (props: ModalProps) => {
    const [type, seType] = useState('deposit')

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} overlayClassName="modal-overlay" className="modal-content">
            <div id="close-modal">
                <img src={closeImage} alt="Close modal" onClick={props.onRequestClose} />
            </div>

            <Container>
                <h2>Nova transação</h2>

                <input type="text" placeholder="Título" />
                <input type="number" min="0" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />

                <TransactionTypeContainer>
                    <RadioBox onClick={() => seType('deposit')} isActive={type === 'deposit'}>
                        <img src={incomeImage} alt="Income image"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox onClick={() => seType('withdraw')} isActive={type === 'withdraw'}>
                        <img src={outcomeImage} alt="Outcome image"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}