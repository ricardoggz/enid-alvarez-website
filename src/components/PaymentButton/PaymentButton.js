'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export const PaymentButton = () => {
  const paypalOptions = {
    'client-id': 'TU_CLIENT_ID_DE_PAYPAL',
    currency: 'USD',
  };

  const buttonStyle = {
    layout: 'horizontal',
    color: 'gold',
    shape: 'rect',
    label: 'paypal',
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '10.00', // Monto del pago
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={buttonStyle}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};