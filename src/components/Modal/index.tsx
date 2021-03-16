import Modal from 'react-modal'

Modal.setAppElement('#root')

interface ModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export const TransactionModal = (props: ModalProps) => {

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
            <h2>Nova transação</h2>
        </Modal>
    )
}