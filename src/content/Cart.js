import formatNumber from "./utl";
import Fade from 'react-reveal/Fade';

function Cart(props) {
    const { cartItem, removeItem } = props
    const itemPrice = cartItem.reduce((a,c) => a + c.price * c.qty, 0 )
    const totalPrice = itemPrice;
    return (
        <>

            {
                cartItem.length === 0 ?
                    <div className="emty-price">سبد خرید شما خالی است</div> :
                    <div className="show-price">شما {cartItem.length} محصول در سبد خرید دارید</div>
            }

            {
                cartItem.map((item) =>
                    <Fade left>
                        <div className="cart-mobiles" key={item.id}>
                        <div className="mobile-info">
                            <img src={item.image} alt="" />
                            <span>{item.title}</span>
                        </div>
                        <div className="mobile-price">
                            <div className="mobile-price-info">
                                
                                <span className="price-num">{formatNumber(item.price)}</span>
                                <span className="buy-num">{item.qty}</span>
                            </div>
                            <button onClick={()=> removeItem(item)}>حذف</button>
                        </div>
                    </div>
                    </Fade>
                )
            }
            <div className="total-price">
                <div className="price-text">جمع کل خرید :</div>
                <div className="price-number">{formatNumber(totalPrice)}</div>
            </div>
        </>
    );
}

export default Cart;