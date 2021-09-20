function InputDate({ label, name, value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <div className="filtros__group">
      <label>
        <span className="filtros__label">{label}:</span>
        <input
          type="date"
          className="filtros__control"
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default InputDate;
