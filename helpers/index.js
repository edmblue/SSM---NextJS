export const formatAmount = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
