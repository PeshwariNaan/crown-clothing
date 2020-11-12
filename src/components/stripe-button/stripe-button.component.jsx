import react from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HmkcLLPcWJtmE5er23pVI5V1nGWsffZPn1dNzlPc2FXl34vN2nEKlhf80INYy71FDgs6UrvAL0KNoGfI37rpGvX00IXofBkCw'; //Key is in string value

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripCheckoutButton;