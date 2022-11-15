import check from '../assets/check.png'
import nike from '../assets/nike.png'

function Products(props){
    return(
        <div className='card'>
            <div className='products'>
                <div className='card-top'><img src={nike} alt="nike" className='card-top-logo'/></div>
                <div className='card-title'>Our Products</div>
                <div className='card-body'>
                {
                    props.products.map((product)=>{
                        return(
                            <div key={product.id} className='shop-item' >
                                <div className='shop-item-image' style={{backgroundColor:product.color}}>
                                    <img src={product.image} alt={product.name} className='style-image'/>
                                </div>
                                <h3 className='shop-item-name'>{product.name}</h3>
                                <p className='shop-item-text'>{product.description}</p>
                                <div className='shop-item-bottom flex-between'>
                                    <span className='shop-item-price'>${product.price}</span>
                                    {product.check === undefined ? <button onClick={()=>props.addToCart(product)} className='btn-add-cart'>ADD TO CART</button> : <img src={check} className='checked-product'></img>}
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

export default Products