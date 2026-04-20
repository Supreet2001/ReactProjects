import Header from "./components/Header.jsx";
import UserInputBoard from "./components/UserInputBoard/UserInputBoard.jsx";
import { useState } from "react";
import Result from "./components/Result.jsx";
function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = (inputs.duration > 0)
  function handleInputChange(key, value) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [key]: +value,
    }));
  }
  return (
    <>
      <Header />
      <UserInputBoard
        handleInputChange={(key, value) => handleInputChange(key, value)}
        defaultValue={inputs}
      />
      {!isValid ? <p className="center">Please enter a valid duration</p> : <Result inputs={inputs}/>}
    </>
  );
}

export default App;
