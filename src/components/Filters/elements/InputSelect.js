import { getSelectAllLabel } from './../data';

function InputSelect({ label, options, value, handler }) {
  const allLabel = getSelectAllLabel(label);

  const handleChange = (event) => {
    handler(event.target.value);
  };

  return (
    <div className="filtros__group">
      <label>
        <span className="filtros__label">{label}:</span>
        <select
          value={value}
          onChange={handleChange}
          className="filtros__control"
        >
          <option value="all">{allLabel}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default InputSelect;
