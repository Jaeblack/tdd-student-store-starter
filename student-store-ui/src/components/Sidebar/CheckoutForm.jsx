export default function CheckoutForm() {
    return (
        < div id="checkout-form">
            <h2> Payment Info</h2>
            <div>
                <label htmlFor="input-name"> Name </label>
                <input type="text" name="input-name" id="input-name" />
            </div>
            <div>
                <label htmlFor="input-email"> Email </label>
                <input type="text" name="input-email" id="input-email" />
            </div>
            <div>
                <input type="checkbox" name="check-terms" id="check-terms" />
                I agree to the terms and conditions
            </div>
            <div>
                <button type="submit"> Checkout</button>
            </div>
        </div >
    )
}
