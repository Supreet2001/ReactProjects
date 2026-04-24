import { styled } from "styled-components";
import StyledInputs from "./StyledInputs";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
`;

export default function StyledControl({handleInputChange, emailNotValid, passwordNotValid}) {
  return <StyledContainer>
    <StyledInputs
      label="Email"
      notValid={emailNotValid}
      type="email"
      onChange={(event) => handleInputChange("email", event.target.value)}
    />
    <StyledInputs
      label="Password"
      notValid={passwordNotValid}
      type="text"
      onChange={(event) => handleInputChange("password", event.target.value)}
    />
  </StyledContainer>;
}
