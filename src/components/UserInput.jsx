import { useState } from "react";

export default function UserInput () {
  useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 20000,
    Duration: 1,
  });
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investsment</label>
          <input type="number" required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  )
}
