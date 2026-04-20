import { useState } from "react";
export default function UserInput({
  labelName,
  defaultValue,
  handleInputChange,
}) {
  const [inputValue, setInputValue] = useState(defaultValue);
  function handleInput(e) {
    const value = e.target.value;
    setInputValue(value);
    if (handleInputChange) handleInputChange(value);
  }
  return (
    <p>
      <label>{labelName}</label>
      <input type="number" required value={inputValue} onChange={handleInput} />
    </p>
  );
}
