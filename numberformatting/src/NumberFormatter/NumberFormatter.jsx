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

export default NumberFormatter;
