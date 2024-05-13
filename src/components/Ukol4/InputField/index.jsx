import './style.css';

export const InputField = ({ label, type }) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input className="input-field__input" type={type} />
    </div>
  );
};
