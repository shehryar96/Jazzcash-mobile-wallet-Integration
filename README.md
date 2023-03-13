# Jazzcash-mobile-wallet-Integration
Jazzcash mobile wallet integration for recurring payments in nodejs 

#### Pre-Requisites
- Node v16.14.0
- axios ^1.3.3

## First Create sandbox jazzcash account 
- https://sandbox.jazzcash.com.pk/MerchantDashboard/Login?redirection=yes

## After creating account generate credentials

## In the script replace YOUR_MERCHANT_ID, YOUR_PASSWORD, YOUR_INTEGRITY_SALT, YOUR_PAYMENT_TOKEN (you need to create it with using html file)with jazzcash sandbox account.

## Steps to retrieve payment token (FOR SANDBOX ACCOUNT)

- First, run html file
- Enter testing number 03123456789
- Submit the form
- After submiting the form you will redirect to the JazzCash sandbox page, where you will enter a random MPIN after entering MPIN it will ask you to enter OTP on the next page after entering OTP you will receive a payment token on jazz response function

- After receiving payment token run the main script to make recurring payments

## Payment Token expiry
- Token will expire after 12 months
- If user MPIN changed after thans token expired, you need to retrieve a token again.