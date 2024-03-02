import React, { useEffect } from 'react';

export default function Payment() {
  useEffect(() => {
    let script; 
    const loadRazorpay = async () => {
      script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpay();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_DtIgPxH4saEt0X",
      amount: "50000",
      currency: "INR",
      name: "Blue Bus Services",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      prefill: {
        name: "xyz",
        email: "xyz@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      },
      handler: function (response) {
        alert("Payment Done.....");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      }
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', function (response) {
      alert("Payment fail....");
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <div>
      <button id="rzp-button1" onClick={handlePayment()}>Pay with Razorpay</button>
    </div>
  );
}
