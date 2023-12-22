'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaymentButton = () => {
  const paypalOptions = {
    'client-id': 'Aar49Y3nJdBHKlVUKHuyiIl7i4pJNd6Uch_zgumwMBZ15_y-oxqfwOhcbUAFBA9E6Op9fdeoY0533qcT',
    currency: 'USD',
  };

  const buttonStyle = {
    layout: 'vertical',
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
    <PayPalScriptProvider
    options={paypalOptions}
    >
      <PayPalButtons
        style={buttonStyle}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PaymentButton