import { ButtonContainer, ButtonElement } from "./styles";

interface IButtonProps {
  Text: string;
  Variant: "solid" | "outlined";
}

const Button = (props: IButtonProps) => {
  return ( 
    <ButtonContainer>
      <ButtonElement>
        {props.Text}
      </ButtonElement>
    </ButtonContainer>
  );
};

export default Button;