import NavBar from "./components/NavBar"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faBagShopping, faCouch, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import imagef from "./components/images/content1.png"
import { useNavigate } from "react-router"
import setIcon from './components/SetIcon'


export default function App() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const [data, setData] = useState([]);
    useEffect(() => {
        axios({
            method:"GET",
            url:"https://dummyjson.com/products?limit=5"
        }).then(res => {
            setData(res.data.products)
        }).catch(e => console.log(e))        
    }, [])


    const goToShop = () => {
        navigate("/store")
    }

    const searchProduct = event => {
        event.preventDefault();
        navigate("/store", {state: {searchItem: search}})
    }



    

    return (
        <div>
            <NavBar />
            
            <div className="first-content">
                <div className="first-left">
                    <h1>Every Purchase Will Be Made With Pleasure</h1>
                    <h2>Start shopping now.</h2>
                    <button onClick={goToShop}>Browse products</button>
                </div>
                <div className="first-right">
                    <img src={imagef} alt=""></img>
                </div>
            </div>

            <div className="searchProduct">
                <div className="searchProduct-bar">
                    <form onSubmit={searchProduct}>
                        <input spellCheck="false" placeholder="Search..." onChange={event => setSearch(event.target.value)}/>
                        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</button>

                    </form>

                </div>
            </div>


            <div className="second-content">
                <h1>Shop by categories</h1>
                <div className="categories">
                    <div className="first-category">
                    <div className="icon-space">
                        <div className="icon icon1">
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                    </div>
                        <h1>Smartphones</h1>
                        <div className="productDescription">
                            <p>Browse through a huge list of smartphones.</p>
                        </div>
                    </div>
                    <div className="second-category">
                    <div className="icon-space">
                        <div className="icon icon2">
                            <FontAwesomeIcon icon={faCouch} />
                        </div>
                    </div>
                        <h1>Furniture</h1>
                        <div className="productDescription">
                            <p>Get everything you need for home.</p>
                        </div>
                    </div>
                    <div className="third-category">
                    <div className="icon-space">
                        <div className="icon icon3">
                            <FontAwesomeIcon icon={faBagShopping} />
                        </div>
                    </div>
                        <h1>Groceries</h1>
                        <div className="productDescription">
                            <p>Save time and get your groceries now.</p>
                        </div>
                    </div>

                </div>
                <div className="snd-content-btn">
                    <button>Browse more</button>
                </div>
            </div>
            <div className="third-content-title">
                <h1>Latest products</h1>
            </div>
            <div className="third-content">
                <div className="third-content-cards">
                {data.map((product) => (
                <div key={product.id} className="home-products-card">
                    <div></div>
                    <div className="home-products-card-description">
                        <div className="icon-space">
                            <div className="icon1 icon-thrd">
                                <FontAwesomeIcon icon={faMobileScreenButton} />
                            </div>
                        </div>
                        <div className="crd-title">
                            <h1>{product.title}</h1>
                        </div>
                        <div className="crd-price">
                            <h2>${product.price}</h2>
                        </div>
                        <div className="crd-shipping">
                            <h2>Free shipping</h2>
                        </div>    
                        <div className="crd-description">
                            <h3 id="crd-h3-description">{product.description}</h3>
                        </div>
                        
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className="third-end-more">
                <h2>Not what you're looking for?</h2>
            </div>
            <div className="third-end-more-btn">
                <button>See more</button>
            </div>
            


            <footer>
                <div className="footer-content">
                    <div className="first-footer-content">
                        <h1>Paga con tarjeta</h1>
                    </div>
                    <div className="second-footer-content">
                        <h1>Envio gratis</h1>
                    </div>
                    <div className="third-footer-content">
                        <h1>Seguridad</h1>
                    </div>
                </div>

            </footer>
        </div>
    )
}