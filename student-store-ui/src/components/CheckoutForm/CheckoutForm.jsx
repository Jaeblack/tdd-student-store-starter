import "./CheckoutForm.css"

export default function CheckoutForm({ isOpen, shoppingCart, checkoutForm, success, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
    return (
        < div className={isOpen ? "checkout-form" : "checkout-form closed"}>
            <h2> Payment Info</h2>
            <form>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" className="checkout-form-input" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" className="checkout-form-input" placeholder="Student Name" value={checkoutForm.name}  onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)} />
                </div>
                <div>
                    <input type="checkbox" value="accept" name="check-terms" id="check-terms" className="checkout-form-input" onChange={(e) => handleOnCheckoutFormChange('terms', e.target.checked)} />
                    I agree to the terms and conditions
                </div>
                <div>
                    <button type="submit" className="checkout-button" onClick={handleOnSubmitCheckoutForm}> Checkout</button>
                </div>
            </form>
            {success && <h1 className="success"> Success!</h1> }
        </div >
    )
}
