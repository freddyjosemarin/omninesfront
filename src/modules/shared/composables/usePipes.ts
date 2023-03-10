const usePipes = () => {
  // number in format 1,000,000 with 2 decimal places
  const integer = (value = 0) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  // number in format 1,000,000 with 2 decimal places
  const number = (value = 0) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // number in format currency
  const currency = (value = 0) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  // number in format percentage
  const percentage = (value = 0) =>
    new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
    }).format(value);

  // string in format date
  const date = (value: string) =>
    new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(new Date(value));

  return { integer, number, currency, percentage, date };
};

export default usePipes;
