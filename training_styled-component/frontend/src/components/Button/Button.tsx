import { StyledButton } from "./styles";

interface Post {
  id: string;
}

interface ButtonProps {
  btnText: string | number;
  isPublished: boolean;
  post?: Post;
  delete?: (id: string) => void;
  handleDate: () => void;
  variant: string
}

const Button: React.FC<ButtonProps> = ({ btnText, handleDate, variant }) => {
  return (
    <StyledButton onClick={handleDate} variant={variant}> {btnText} </StyledButton>
  )
}

export default Button;