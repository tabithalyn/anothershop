import { SetStateAction } from "react";

type PropsProps = {
  currencyOptions: string[];
  selectedCurrency: string;
  onChangeCurrency: (e:{target:{value: SetStateAction<string>}}) => void;
}

const CurrencySelect = (props:PropsProps) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency
  } = props;

  return (
    <>
    <select value={selectedCurrency} onChange={onChangeCurrency}>
      {currencyOptions.map((option, key) => (
        <option key={key} value={option}>{option}</option>
      ))}
    </select>
    </>
  );
}
 
export default CurrencySelect;