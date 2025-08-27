// Mock Payment Service (Stripe, Paystack, Flutterwave simulation)

export const processPayment = (amount, method = "Stripe") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        method,
        transactionId: Date.now(),
        message: "Payment successful!",
      });
    }, 1000);
  });
};
