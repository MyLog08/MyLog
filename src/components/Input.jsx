function Input({ type, label, onChange, value, name, id }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type ?? 'text'} onChange={onChange} value={value} name={name} id={id} />
    </div>
  );
}

export default Input;
