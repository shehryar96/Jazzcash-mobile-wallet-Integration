const express = require('express');
const axios = require('axios');
const cryptoJS = require("crypto-js");
const moment = require('moment');

app.use(express.json())


/**
 * Here you will receive payment token from HTML page response
 */
app.post('/jazzresponse',(req,res)=>{
    console.log('Here you will receive payment token',req.body)
    
})

/**
 * In this function you can do recurring wallet payments
 */
async function main() {

    const url = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/4.0/purchase/domwallettransactionviatoken';
    const merchantId = 'YOUR_MERCHANT_ID';
    const password = 'YOUR_PASSWORD';
    const integritySalt = 'YOUR_INTEGRITY_SALI';
    const paymentToken = 'YOUR_PAYMENT_TOKEN';
    const txnRefNo = `TxnRef${moment().format('YYYYMMDDHHmmss')}`;

    const amount = '100';
    const txnCurrency = "PKR";
    const txnDateTime = moment().format('YYYYMMDDHHmmss');
    const billReference = 'billRef123';
    const description = 'Testpayment';
    const txnExpiryDateTime = moment().add(1, 'days').format('YYYYMMDDHHmmss');
    const cnic = '4121545787646';
    const mobileNo = '03123456789';
    const language = 'EN';
    const productId = "";
    const discountedAmount = "";
    const subMerchantID = "";
    const ppmpf1 = "";
    const ppmpf2 = "";
    const ppmpf3 = "";
    const ppmpf4 = "";
    const ppmpf5 = "";

    const messageHash = [
        integritySalt, amount, billReference,
        description,
        language, merchantId,
        password,
        txnCurrency, txnDateTime,
        txnExpiryDateTime, txnRefNo
    ].join("&");

    console.log('messageHash', messageHash);

    const secureHash = `${cryptoJS.HmacSHA256(messageHash, integritySalt)}`.toUpperCase();

    console.log("secureHash", `${secureHash}`);

    const requestBody = {
        "pp_MerchantID": merchantId,
        "pp_Password": password,
        "pp_PaymentToken": paymentToken,
        "pp_TxnRefNo": txnRefNo,
        "pp_Amount": amount,
        "pp_TxnCurrency": txnCurrency,
        "pp_TxnDateTime": txnDateTime,
        "pp_BillReference": billReference,
        "pp_Description": description,
        "pp_TxnExpiryDateTime": txnExpiryDateTime,
        "pp_SecureHash": secureHash,
    };

    console.log('requestBody', JSON.stringify(requestBody));

    const { data: response } = await axios.post(url, requestBody);

    console.log("response", JSON.stringify(response));
}


// calling above function to make a payment
main();