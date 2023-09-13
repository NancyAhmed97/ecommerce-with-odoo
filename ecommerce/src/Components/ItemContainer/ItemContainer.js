import React, { useState } from 'react'
import "./ItemContainer.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { cartCount, cartID } from '../../Redux/Cart';
import { favoritCount, favoritID } from '../../Redux/Favorit';
function ItemContainer({item}) {
    const reduxState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [favoriteState, setFavoriteState] = useState(false);
 return (
        <div className='mt-4 item_container' style={{ width: "282px" }}>
            <div className='img_container'>
                <Link to={`/single-product/${item.item.id}`}  >
                    <span className='quick_view'>
                    </span>

                    <span>
                        <img src='https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=1920&q=75' alt='' />
                    </span>

                </Link>
                <button className='sc-edc892ab-0 sc-c9b84bf5-2 kxhA-di cjFXxH product-actions'
                id="1"
                    onClick={(e) => {
                  
                        dispatch(cartCount(reduxState.cart.count+1))


                        if (reduxState.cart.id.length === 0) {
                            // dispatch(cartCount(reduxState.cart.count+1))
                            // dispatch(cartID(item.item.id))


                        }
                    }}

                >

                    <div className='sc-284c1b4c-0 bvPGkq'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                    </div>
                </button>
                {/* <button className='mt-3 sc-edc892ab-0 sc-c9b84bf5-3 kxhA-di jAiwNq product-actions' 
                onClick={(e) => {
                    setFavoriteState(!favoriteState)
                    if (reduxState.favorit.id.length === 0) {
                        dispatch(favoritCount(reduxState.favorit.count+1))
                        dispatch(favoritID(e.target.id))


                    }else{
                        dispatch(favoritCount(reduxState.favorit.count-1))

                    }


                }}
                >

                    <div className='sc-284c1b4c-0 bvPGkq'>
                        <div>
                            {
                                favoriteState ?


                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                            }

                        </div>
                    </div>
                </button> */}
                {/* <button className="sc-76470375-0 sc-c9b84bf5-4 bUhXyO fVWeMJ product-view-action">Quick View</button> */}

            </div>
        </div>
    )
}

export default ItemContainer