import { InputContainer, InputContent } from "./styles"

export const Input = ({value}) => {
    return(
        <InputContainer>
            <InputContent value={value} readOnly/>
        </InputContainer>
    )
}