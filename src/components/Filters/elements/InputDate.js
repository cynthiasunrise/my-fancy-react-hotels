function InputDate({ label, value, handler, error }) {
  const handleChange = (event) => {
    handler(event.target.value);
  };

  return (
    <div className="filtros__group">
      <label>
        <span className="filtros__label">{label}:</span>
        <input
          type="date"
          value={value}
          onChange={handleChange}
          className="filtros__control"
        />
      </label>
    </div>
  );
}

export default InputDate;
