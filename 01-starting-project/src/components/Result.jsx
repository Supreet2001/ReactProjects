import { formatter } from "../util/investment";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
export default function Result({ inputs }) {
  const results = calculateInvestmentResults(inputs);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Value</th>
          <th>Interest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>
              {formatter.format(
                data.valueEndOfYear -
                  data.annualInvestment * data.year -
                  initialInvestment,
              )}
            </td>
            <td>
              {formatter.format(
                data.valueEndOfYear -
                  (data.valueEndOfYear -
                  data.annualInvestment * data.year -
                  initialInvestment),
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
