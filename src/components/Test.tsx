import React, { useEffect, useState } from 'react';

export default function PayfastRedirectForm() {
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/payfast/token') 
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .catch((err) => console.error('Token error', err));
  }, []);

  if (!token) return <p>Loading...</p>;

  return (
    <form
      method="post"
      action="https://ipguat.apps.net.pk/Ecommerce/api/Transaction/PostTransaction"
    >
      <input type="hidden" name="CURRENCY_CODE" value="PKR" />
      <input type="hidden" name="MERCHANT_ID" value="102" />
      <input type="hidden" name="MERCHANT_NAME" value="Demo Merchant" />
      <input type="hidden" name="TOKEN" value={token} />
      <input type="hidden" name="BASKET_ID" value="ITEM-AZ13" />
      <input type="hidden" name="TXNAMT" value="10" />
      <input type="hidden" name="ORDER_DATE" value={new Date().toISOString()} />
      <input type="hidden" name="SUCCESS_URL" value="http://localhost:3000/success" />
      <input type="hidden" name="FAILURE_URL" value="http://localhost:3000/failure" />
      <input type="hidden" name="CUSTOMER_EMAIL_ADDRESS" value="customer@example.com" />
      <input type="hidden" name="TXNDESC" value="Test Transaction" />
      <input type="hidden" name="PROCCODE" value="00" />
      <input type="hidden" name="TRAN_TYPE" value="ECOMM_PURCHASE" />

      <button type="submit">Pay with PayFast</button>
    </form>
  );
}
