import { useState } from 'react';

function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");

  if (fromCurrency === toCurrency) {
    setAmount(amount);
    return;
  }

  function handleChange() {
    setResult(data.rates[toCurrency]);
  }

  useEffect =
    (() => {
      async function currencyFetch() {
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.error("Try again later");
          setError("Try again later");
        }
      }
      currencyFetch();
    },
    [amount, fromCurrency, toCurrency]);
}

return (
  <div className={styles.wrapper}>
    <div className={styles.currencyCard}>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select
        className={styles.fromCurrency}
        value={fromCurrency}
        onChange={handleChange((e) => setFromCurrency(e.target.value))}
      >
        <option>EUR</option>
        <option>USD</option>
        <option>TRY</option>
      </select>
      <select
        className={styles.toCurrency}
        value={toCurrency}
        onChange={handleChange((e) => setToCurrency(e.target.value))}
      >
        <option>EUR</option>
        <option>USD</option>
        <option>TRY</option>
      </select>
      <p>{result}</p>
    </div>
  </div>
);

function App() {
  return (
    <Currency />
  )
}

export default App;
