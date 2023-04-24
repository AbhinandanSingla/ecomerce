import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faUser, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {useEffect, useState} from "react";
import {Rating} from 'react-simple-star-rating'


function App() {
    const [loginBtn, setloginBtn] = useState(false)
    const [products, setProduct] = useState([])
    const [request, setRequest] = useState("initial")
    const [price, setPrice] = useState(2000)
    const urls = {
        "initial": "http://127.0.0.1:8080/getProducts",
        "price": "http://127.0.0.1:8080/getProductsPrice",
    }
    const fetchProduct = async () => {
        const productsRes = await fetch(urls[request]);
        const product = await productsRes.json();
        return product;
    }
    const fetchProductPrice = async () => {
        const productsRes = await fetch(`http://127.0.0.1:8080/getProductPriceComp?value=${price}`);
        const product = await productsRes.json();
        return product;
    }


    const changePrice = (event) => {
        fetchProductPrice().then(r => setProduct(r));
        setPrice(event.target.value);
    };

    useEffect(() => {
        fetchProduct().then(r => setProduct(r));
    }, [request])
    return (<>
            <div className="navbar">
                <div className="max_width">
                    <div className="nav_log">
                        eCom
                    </div>
                    <ul className="nav_container">
                        <li className="navs ar">CATEGORIES</li>
                        <li className="navs">DAILY DEALS</li>
                        <li className="navs">GIFT WITH BOAT</li>
                        <li className="navs ar">MORE</li>
                    </ul>
                    <div className="nav_bottom">
                        <div className="nav_searchBox">
                            <input type="text" placeholder={"Search Product"}/>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                        <div className="login">
                            <FontAwesomeIcon icon={faUser} onClick={() => setloginBtn(false)}/>
                            <span onClick={() => setloginBtn(true)}>Login</span>
                            {loginBtn ? <div className="loginBox">
                                <FontAwesomeIcon icon={faTimes} className={"close"}/>
                                <div className="heading">
                                    Hii User
                                </div>
                                <div className="btn">Connect</div>
                            </div> : ""}
                        </div>
                        <div className="cart">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <span>Cart</span>

                        </div>
                    </div>

                </div>
            </div>
            <div className="home">
                <div className="max_width">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/6443eeaaaef1c026036142_1600x.gif?v=1682346083"
                                alt=""/>
                        </SwiperSlide>
                        <SwiperSlide> <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Deals-Desktop_6438ad51-5e74-46f8-aec0-b1790fad4b98_1600x.jpg?v=1682082813"
                            alt=""/>
                        </SwiperSlide> <SwiperSlide> <img
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wave-flex-desktop_new._1600x.jpg?v=1681986242"
                        alt=""/>
                    </SwiperSlide> <SwiperSlide> <img
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_offer_desktop_1600x.jpg?v=1681301106"
                        alt=""/>
                    </SwiperSlide>
                    </Swiper>

                    <div className="filtersContainer">
                        <ul>
                            <li className={request == "initial" ? "filtersNav activeFilter" : "filtersNav"}
                                onClick={() => setRequest("initial")}>All HeadPhones
                            </li>
                            <li className={request == "price" ? "filtersNav activeFilter" : "filtersNav"}
                                onClick={() => setRequest("price")}><span>Price</span>

                                <div className="priceFilterContainer">
                                    <input
                                        type='range'
                                        onChange={changePrice}
                                        min={50}
                                        max={3000}
                                        step={100}
                                        value={price}
                                        className='priceSlider'>
                                    </input>
                                    <span>Rs{price}</span>
                                </div>
                            </li>
                            <li className="filtersNav">Review</li>
                            <li className="filtersNav">Color</li>
                            <li className="filtersNav">Material</li>
                            <li className="filtersNav">Offer</li>
                            <li className="filtersNav">All Filter</li>
                        </ul>

                    </div>
                    <div className="h_heading">
                        Headphones For You!!
                    </div>
                    <div className="headphoneGallery">
                        {products.map((value, index) => <div className="card">
                            <figure>
                                <img
                                    src={value.img}
                                    alt=""/>
                            </figure>
                            <div className="heading">
                                {value.name}
                            </div>
                            <div className="price">
                                Rs{value.price}
                            </div>
                            <div className="startRating">
                                <Rating
                                    initialValue={value.rating}
                                    readonly={true}
                                />
                            </div>
                            <div className="btn">
                                Add to Cart
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
