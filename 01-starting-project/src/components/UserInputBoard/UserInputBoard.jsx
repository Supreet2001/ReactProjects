import { useState } from "react";
import UserInput from "./UserInput";

export default function UserInputBoard({handleInputChange, defaultValue}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput labelName={"Initial Investment"} defaultValue={defaultValue.initialInvestment} handleInputChange={(value)=>handleInputChange("initialInvestment", value)} />
        <UserInput labelName={"Annual Investment"} defaultValue={defaultValue.annualInvestment} handleInputChange={(value)=>handleInputChange("annualInvestment", value)}/>
      </div>
      <div className="input-group">
        <UserInput labelName={"Expected Return"} defaultValue={defaultValue.expectedReturn} handleInputChange={(value)=>handleInputChange("expectedReturn", value)}/>
        <UserInput labelName={"Duration"} defaultValue={defaultValue.duration} handleInputChange={(value)=>handleInputChange("duration", value)}/>
      </div>
    </div>
  );
}
