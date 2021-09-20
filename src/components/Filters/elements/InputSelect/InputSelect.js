import { getSelectAllLabel } from './../../data';

function InputSelect({ label, name, options, value, onChange }) {
  const allLabel = getSelectAllLabel(label);

  const handleChange = (event) => {
    onChange(event.target.name, event.target.value);
  };

  return (
    <div className="filtros__group">
      <label>
        <span className="filtros__label">{label}:</span>
        <select
          className="filtros__control"
          name={name}
          value={value}
          onChange={handleChange}
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
