import { useState, useEffect } from "react";

const AutoSaveInput = () => {
  const [inputValue, setInputValue] = useState<string>(
    localStorage.getItem("inputData") || ""
  );

  useEffect(() => {
    localStorage.setItem("inputData", inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        className="auto-save-input"
        type="text"
        name="fullname"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter fullname..."
      />
    </div>
  );
};

export default AutoSaveInput;
