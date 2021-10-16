import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JjzalSHY5XF9mRDk8cRarFh1S0Ce8bB8yTlzs2W9rCE1U4AVf7FQXHX5ffOZjwaJdABOcX7wGKKZFXPUMUnXuTF00UL0ckeof';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='crwn clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            style={{backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}}
        />
    )
}

export default StripeCheckoutButton