import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// const API_KEY = import.meta.env.BASE_URL;

const FormatCurrency = () => {
  const [resData, setResData] = useState<AxiosResponse[]|any[]>([]);
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(0);
  const [defaultCurrency, setDefaultCurrency] = useState(0);

  const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cDjnWj7wLG1K3jiTqp3tcDubW3VAbNA3wTNCnPtI`;

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(URL);
      setResData([response.data.data]);
    }
    fetch();
  }, []);

  useEffect(() => {
    const setCurrency = (item:number) => {
      setDefaultCurrency(item);
    }
    setCurrency(fromCurrency);
  }, []);

  const convertCurrency = () => {
    const converted = defaultCurrency / toCurrency;
    setFromCurrency(converted);
  }

  return (
    <div>
    <div className="z-20 bg-blue-400 pt-20">
      {resData.map((item,id) => (
        <form key={id} name="select-currency">
          <select name="currencies" onChange={(e) => setToCurrency(parseInt(e.target.value))}>
            <option defaultValue={item.USD}>USD - US Dollar 🇺🇸</option>
            <option value={item.AUD}>AUD - Australian Dollar 🇦🇺</option>
            <option value={item.BGN}>BGN - Bulgarian Lev 🇧🇬</option>
            <option value={item.BRL}>BRL - Brazilian Real 🇧🇷</option>
            <option value={item.CAD}>CAD - Canadian Dollar 🇨🇦</option>
            <option value={item.CHF}>CHR - Swiss Franc 🇨🇭</option>
            <option value={item.CNY}>CNY - Chinese Yuan 🇨🇳</option>
            <option value={item.CZK}>CZK - Czech Koruna 🇨🇿</option>
            <option value={item.DKK}>DKK - Danish Krone 🇩🇰</option>
            <option value={item.EUR}>EUR - Euro 🇪🇺</option>
            <option value={item.GBP}>GBP - Pound Sterling 🇬🇧</option>
            <option value={item.HKD}>HKD - Hong Kong Dollar 🇭🇰</option>
            <option value={item.HRK}>HRK - Croatian Kuna 🇭🇷</option>
            <option value={item.IDR}>IDR - Rupiah 🇮🇳</option>
            <option value={item.ILS}>ILS - New Israeli Sheqel 🇮🇱</option>
            <option value={item.INR}>INR - Indian Rupee 🇮🇳</option>
            <option value={item.ISK}>ISK - Iceland Krona 🇮🇸</option>
            <option value={item.JPY}>JPY - Japanese Yen 🇯🇵</option>
            <option value={item.KRW}>KRW - Korean Won 🇰🇷</option>
            <option value={item.MXN}>MXN - Mexican Peso 🇲🇽</option>
            <option value={item.MYR}>MYR - Malaysian Ringgit 🇲🇾</option>
            <option value={item.NOK}>NOK - Norwegian Krone 🇳🇴</option>
            <option value={item.NZD}>NZD - New Zealand Dollar 🇳🇿</option>
            <option value={item.PHP}>PHP - Philippine Peso 🇵🇭</option>
            <option value={item.PLN}>PLN - Polish Zloty 🇵🇱</option>
            <option value={item.RON}>RON - Romanian Leu 🇷🇴</option>
            <option value={item.RUB}>RUB - Russian Ruble 🇷🇺</option>
            <option value={item.SEK}>SEK - Swedish Krona 🇸🇪</option>
            <option value={item.SGD}>SGD - 	Singapore Dollar 🇸🇬</option>
            <option value={item.THB}>THB - Thai Baht 🇹🇭</option>
            <option value={item.TRY}>TRY - Turkish Lira 🇹🇷</option>
            <option value={item.ZAR}>ZAR - South African Rand 🇿🇦</option>
          </select>
          <button onClick={convertCurrency}>Set Currency</button>
        </form>
      ))}
    </div>
    </div>
  );
}
 
export default FormatCurrency;