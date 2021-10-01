function App() {
  const NumberFormatter = (value, decimal) => {
    // values : the number which we want to add commas
    // decimal: the number of digits after decimal points
    // separates the decimal values and restricts the decimal to two digits only.
    return parseFloat(parseFloat(value).toFixed(decimal)).toLocaleString(
      // here you can specify Language.
      // like 'de-DE', 'ja-JP','en-US' and 'en-IN' etc.
      "en-IN",
      {
        useGrouping: true,
      }
    );
  };

  const num = "4294967295.002357";

  return (
    <div>
      <p>Default Number : {num}</p>
      <p>Separated with commas : {NumberFormatter(num)}</p>
      <p>Separated with Commas & Decimal : {NumberFormatter(num, 3)}</p>
    </div>
  );
}

export default App;
