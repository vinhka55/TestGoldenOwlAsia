import trash from '../assets/trash.png'
import nike from '../assets/nike.png'

function Cart(props){
    const {onAdd, onReduce, onRemove} = props
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    console.log(cartItems);
    const totalPrice = cartItems ? cartItems.reduce((x,y) => {return (x + y.price * y.qty)},0) : 0
    return(
        <div className='card'>
            <div className='cart'>
                <div className='card-top'><img src={nike} alt="nike" className='card-top-logo'/></div>
                <div className="card-title flex-between"><span>Your cart</span><span>${totalPrice.toFixed(2)}</span></div>
                {(cartItems === null || cartItems.length === 0) && <div className='notification-empty-cart'>Your cart is empty</div>}
                <div className='card-body'>
                {   
                    cartItems!==null && cartItems.map((item)=>{
                        return(
                            <div key={item.id} className='flex-around cart-item'>
                                <div className='cart-item-image' style={{backgroundColor:item.color}}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='cart-item-content'>
                                    <p className='cart-item-name'>{item.name}</p>
                                    <p className='cart-item-price'>${item.price}</p>
                                    <div className='flex-between cart-item-action'>
                                        <div className='flex-start'>
                                            <button onClick={()=>onReduce(item)} className='btn-count'>-</button>
                                            <span className='cart-item-qty'>{item.qty}</span>
                                            <button onClick={()=>onAdd(item)} className='btn-count'>+</button>
                                        </div>
                                        <div onClick={() => onRemove(item)} className='cart-item-remove'><img src={trash} className='icon-remove'></img></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Cart