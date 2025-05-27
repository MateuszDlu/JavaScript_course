import { renderOrderSummery } from "./checkout/orderSummary.js";
import { renderPaymentSummery } from "./checkout/paymentSummery.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js'
//import '../data/backend-practice.js'

async function loadPage(){
    try{
        //throw 'error1'

        await loadProductsFetch()

        await new Promise((resolve, reject) => {
            //throw 'error2'
            loadCart(() => {
                //reject('error3')
                resolve('value3')
            })
        })//.then((value) => {
            //console.log(value)
        //})
    }catch(error){
        console.log('Unexpected error. Please try again later')
    }

    renderOrderSummery();
    renderPaymentSummery();
}
loadPage()

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         })
//     })

// ]).then((values) => {
//     console.log(values)
//     renderOrderSummery();
//     renderPaymentSummery();
// })


// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });
// }).then((value) => {
//     console.log(value)

//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         })
//     })
// }).then(() => {
//     renderOrderSummery();
//     renderPaymentSummery();
// })


// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummery();
//         renderPaymentSummery();
//     })
// })
