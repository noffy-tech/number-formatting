# JavaScript: Format numbers with commas and decimals.
Sometimes, you may need to format a number value with commas and decimals in your HTML pages to make it easier to read. Here I found both in one. You can transform a number value into a comma-separated with decimals by using JavaScript. Here are several ways to do that.

## Method : Using NumberFormatter()
- The **NumberFormat()** object is used to represent numbers in a language-sensitive formatting. It can be used to represent currency or percentages according to the locale specified.
- The locales parameter of this object is used to specify the format of the number. The ‘en-US’ locale is used to specify that the locale takes the format of the United States and the English language, where numbers are represented with a comma between the thousands.
- The method of this object can be used to return a string of the number in the specified locale and formatting options. This will format the number with commas at the thousands of places and return a string with the formatted number.

## The following example shows how it works:
- **value:** the number which we want to add commas.
- **decimal:** the number of digits after decimal points. It should be a number like 1,2 and 3 etc.
- Here you can specify Language. like ‘en-IN’, ‘ja-JP’, ’en-US’ and ‘de-DE’, etc.

```
const NumberFormatter = (value, decimal) => {
    return parseFloat(parseFloat(value).toFixed(decimal)).toLocaleString(
      "en-IN",
      {
        useGrouping: true,
      }
    );
};
```

## Output :
![](https://miro.medium.com/max/679/1*Qlalz1obEnCUttzr11ngQA.png)
