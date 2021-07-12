const Button = ({ label, cssClass, onClick }) => {
  return (
    <div className={cssClass}>
      <button onClick={onClick} className="btn texto-btn">
        {label}
      </button>
    </div>
  );
};

export default Button;
