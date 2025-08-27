// Mock Exchange Rate API
// You can replace this with a real API (like exchangerate-api.com)

export const getExchangeRates = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        USD: 1,
        NGN: 1500,
        EUR: 0.9,
        GBP: 0.8,
      });
    }, 500);
  });
};
