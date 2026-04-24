import {styled} from 'styled-components';
const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color:${({notValid}) => (notValid ? '#fed2d2' : '#d1d5db')} ;
  color: ${({notValid}) => (!notValid ? '#374151' : '#ef4444')};
  border: 1px solid ${({notValid}) => (notValid ? '#f73f3f' : 'transparent')}  ;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({notValid}) => (notValid ? '#f87171' : '#374151')};
`;

export default function StyledInputs({label, notValid, ...props}) {
  console.log(notValid);
  return (
      <p>
        <StyledLabel notValid={notValid}>{label}</StyledLabel>
        <StyledInput notValid={notValid} {...props}/>
      </p>
     
  );
}