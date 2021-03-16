import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenModal: () => void
}

export const Header = ({ onOpenModal }: HeaderProps) => {

    return (
        <Container>
            <Content>
                <img src={logo} alt="Logo" />
                <button onClick={onOpenModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}