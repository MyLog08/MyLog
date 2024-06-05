import { StyledInput } from '../../styles/Common/InputStyle';

function Input({ type, label, onChange, value, name, id, placeholder }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        type={type ?? 'text'}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
