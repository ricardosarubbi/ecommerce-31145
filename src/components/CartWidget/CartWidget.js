import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className="CartWidget">
            <img src='./images/cart.png' alt='cart' className='CartImg' style={{ width: 10, marginRight: 15}}/>
            0
        </div>
    )
}

export default CartWidget