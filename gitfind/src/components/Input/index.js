import { InputContainer } from "./styles";

export const Input = ({ placeholder, onChange }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};
