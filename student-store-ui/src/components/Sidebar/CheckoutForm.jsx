export default function CheckoutForm({ handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
    return (
        < div id="checkout-form">
            <h2> Payment Info</h2>
            <form>
                <div>
                    <label htmlFor="input-name"> Name </label>
                    <input type="text" name="input-name" id="input-name" onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)} />
                </div>
                <div>
                    <label htmlFor="input-email"> Email </label>
                    <input type="email" name="input-email" id="input-email" onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)} />
                </div>
                <div>
                    <input type="checkbox" value="accept" name="check-terms" id="check-terms" onChange={(e) => handleOnCheckoutFormChange('terms', e.target.checked)} />
                    I agree to the terms and conditions
                </div>
                <div>
                    <button type="submit" onClick={handleOnSubmitCheckoutForm}> Checkout</button>
                </div>
            </form>
        </div >
    )
}
