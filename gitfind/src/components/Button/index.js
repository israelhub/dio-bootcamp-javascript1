import { ButtonContainer } from "./styles"

export const Button = ({title, onClick}) => {
    return <ButtonContainer onClick={onClick} >{title}</ButtonContainer>
}