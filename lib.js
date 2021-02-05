const converters = {
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

export default (temperature, conversion) => {
  const parsedTemp = parseFloat(temperature);
  if (Number.isNaN(parsedTemp)) {
    return "Not something we can convert! 😞";
  }

  return Math.round(converters[conversion](parsedTemp) * 1000) / 1000;
};
