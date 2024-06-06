import { StyledButton } from '../../styles/Common/ButtonStyle';

function Button({ value }) {
  return (
    <div>
      <StyledButton type="submit">{value}</StyledButton>
    </div>
  );
}

export default Button;
