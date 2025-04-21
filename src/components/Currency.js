import { useState, react } from 'react';
import { useEffect } from 'react';
import { useContext, createContext } from 'react';

function Currency() {
  const [input, setInput] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [error, setError] = useState(null);

  const newContext = createContext();

function handleChange() {
    setFromCurrency(prev => !prev);
}

  useEffect = () => {
  async function currencyFetch() {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.err('Try again later');
        setError('Try again later');
      }
    };
    currencyFetch()
  }, [input, fromCurrency, toCurrency,];
}
export default Currency;
