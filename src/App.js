import { useEffect, useState } from "react";
import "./App.css";

const URL = 'https://api.exchangerate.host/latest';

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  

  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);
  
      if (response.ok) {
        const json = await response.json();
        setRate(json.rates.GBP);
        setGbp(eur * json.rates.GBP);
      } else {
        alert('Error retrieving exchange rate');
      }
    } catch (err) {
      alert(err);
    }
  }

  
  return (
    <div style={{margin: '50px'}} id="container">
      <h3 style={{margin: '20px'}}>Currency Converter</h3>
      <form onSubmit={convert}>
        <div>
          <label style={{margin: '20px'}}>Eur</label>&nbsp;
          <input
            type="number"
            step="0.01"
            value={eur}
            onChange={(e) => setEur(e.target.value)}
          />
          <output>{rate}</output>
        </div>
        <div>
          <label style={{margin: '20px'}}>Gbp</label>
          <output>{gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button style={{margin: '20px'}}>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
