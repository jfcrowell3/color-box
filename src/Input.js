import colorNames from 'colornames';

const Input = ({ color, setColor, setHex }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Input Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Input Color Name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default Input;
