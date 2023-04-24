import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faUser, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {useState} from "react";


function App() {
    const [loginBtn, setloginBtn] = useState(false)

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

                </div>
            </div>
        </>
    );
}

export default App;
