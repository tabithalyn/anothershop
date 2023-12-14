import { SetStateAction, useEffect, useState } from "react"
import CurrencySelect from "./CurrencySelect";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const FormatLocalCurrency = ({price}:{price:number}) => {
  const [apiData, setApiData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState();

  const URL = `https://api.exchangeratesapi.io/v1/convert?access_key=${API_KEY}`;

  useEffect(() => {
    const fetch = async () => {
      try {
        const {data} = await axios.get(`${URL}&from=${fromCurrency}&to=${toCurrency}&amount=${price}`);
        setApiData(data);
        console.log(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    if (fromCurrency !== null && toCurrency !== null) {
      const fetch = async () => {
        try {
          const {data} = await axios.get(URL);
          setExchangeRate(data.rates[toCurrency]);
        } catch (error) {
          console.log(error);
        }
      }
      fetch();
    }
  }, [fromCurrency, toCurrency]);

  return (
    <>
    <CurrencySelect
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={(e:{target:{value: SetStateAction<string>}}) => setFromCurrency(e.target.value)}
    />
    </>
  );
  
}