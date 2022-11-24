import axios from "axios"
import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import setIcon from './components/SetIcon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faArrowLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from 'react-burger-menu'





export default function App() {
    const PAGE_PRODUCTS = 'products';
    const PAGE_CART = 'cart';
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [apiResponse, setApiResponse] = useState();
    const [actualCategory, setActualCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);
    const [fixedCart, setFixedCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    const [viewingCategory, setViewingCategory] = useState("Products");
    const [showMoreBtn, setShowMoreBtn] = useState(true)
    let actualLimit
    let searchItem
    
    
    useEffect(() => {
        setLoading(true)
        setShowMoreBtn(true)
        axios({
            method:"GET",
            url:"https://dummyjson.com/products?limit=15"
        }).then(res => {
            setApiResponse(res.data)
            setData(res.data.products)
            setActualCategory("first-page")
            
        }).catch(e => console.log(e))
        .finally(() => setLoading(false));

        axios({
            method:"GET",
            url:"https://dummyjson.com/products/categories"
        }).then(restC => {
            setCategories(restC.data)
        }).catch(e => console.log(e))
        
        
        
    }, [])


    const loadMore = () => {
        actualLimit = apiResponse.limit
        if (actualLimit === 90){
            setShowMoreBtn(false);
            actualLimit += 10;
            axios({
                method:"GET",
                url:`https://dummyjson.com/products?limit=${actualLimit}`
            }).then(res => {
                setApiResponse(res.data)
                setData(res.data.products)
                
            }).catch(e => console.log(e))
            .finally(() => setLoading(false));
        } else {
            actualLimit += 15;
            axios({
                method:"GET",
                url:`https://dummyjson.com/products?limit=${actualLimit}`
            }).then(res => {
                setApiResponse(res.data)
                setData(res.data.products)
                
            }).catch(e => console.log(e))
            .finally(() => setLoading(false));

        }

    }

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    

    const removeFromCart = (productToRemove) => {
        setFixedCart(fixedCart.filter(product => product !== productToRemove))
    }

    const getProductsOfCategory = (categoryName) => {
        setLoading(true)
        setActualCategory("another-page")
        setViewingCategory(categoryName);
        axios({
            method:"GET",
            url:`https://dummyjson.com/products/category/${categoryName}`
        }).then(res => {
            setApiResponse(res.data)
            setData(res.data.products)
        }).catch(e => console.log(e))
        .finally(() => setLoading(false));
    }

    const searchProduct = event => {
        setActualCategory("another-page")
        event.preventDefault();
        axios({
            method:"GET",
            url:`https://dummyjson.com/products/search?q=${search}`
        }).then(res => {
            setApiResponse(res.data)
            setData(res.data.products)
        }).catch(e => console.log(e))

        

    }

    useEffect(() => {
        setShowMoreBtn(true)
        if (search === ""){
            axios({
                method:"GET",
                url:"https://dummyjson.com/products?limit=15"
            }).then(res => {
                setApiResponse(res.data)
                setData(res.data.products)
                setActualCategory("first-page")
                
            }).catch(e => console.log(e))
            .finally(() => setLoading(false));

        } else {
            setActualCategory("another-page")
        }
    }, [search])

    

    const navigateTo = (nextPage) => {
        setFixedCart([...new Set(cart)])
        setCart(fixedCart)
        setPage(nextPage)
        setShowMoreBtn(true)
    }

    const goBack = () => {
        setViewingCategory("Products");
        setShowMoreBtn(true);
        axios({
            method:"GET",
            url:"https://dummyjson.com/products?limit=15"
        }).then(res => {
            setApiResponse(res.data)
            setData(res.data.products)
            setActualCategory("first-page")
            
        }).catch(e => console.log(e))
        .finally(() => setLoading(false));
    }
    

    const renderProducts = () => (
        <>
        
        <div className="products">
            {loading && (
                <div className="sbl-circ-path"></div>
            )}
            
            <div className="products-sidebar">
                    <div className="products-search">
                        <form onSubmit={searchProduct}>
                            <input placeholder="Search products..." value={searchItem} onChange={event => setSearch(event.target.value)} />
                            <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>

                        </form>
                    </div>
                    <div className="products-sidebar-categories">
                        <p>Categories</p>
                        {categories.map((category) => (
                                    <button key={category} onClick={() => getProductsOfCategory(category)}>{category}</button>
                        ))}
                    </div>
            </div>
            <Menu>
                <div className="burger-menu-categories">
                    <p>Categories</p>
                    {categories.map((category) => (
                        <button key={category} onClick={() => getProductsOfCategory(category)}>{category}</button>
                    ))}
                </div>
            </Menu>
                <div className="categories-back-title">
                    {viewingCategory !== "Products" &&
                    <button onClick={() => goBack()}><FontAwesomeIcon icon={faArrowLeft}/></button>
                    }
                    <h2>{viewingCategory}</h2>
                </div>
                <button className="cart-btn" onClick={ () => navigateTo(PAGE_CART)}><FontAwesomeIcon icon={faShoppingCart}/></button>
                <div className="products-container">
                {data.map((product) => (
                    <div key={product.id} className="card">
                        <div className="card-icon">{setIcon(product.category)}</div>
                        <div className="card-description">
                            <div className="card-description-category"><h2>{product.category}</h2></div>
                            <div className="card-description-title"><h2>{product.title}</h2></div>
                            <div className="card-description-price"><h2>${product.price}</h2></div>
                            <div className="card-description-desc"><h2>{product.description}</h2></div>
                        </div>
                        <button id="add-cart-btn"onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                ))}

                
                </div>
        </div>
        <div className="show-more">
            {showMoreBtn === true && actualCategory === "first-page" &&
                <button id="show-more-btn" onClick={loadMore}>More</button>
            }
        </div>
        </>
    );

    const renderCart = () => (
        <>
        <div className="cart-categories-back-title">
                    <button onClick={() => navigateTo(PAGE_PRODUCTS)}><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <h2>Cart</h2>
        </div>

        <div className="cart-container">
        {fixedCart.map((product) => (
                <div key={product.id} className="cart-card">
                    <div className="cart-card-icon">{setIcon(product.category)}</div>
                    <div className="cart-card-description">
                        <h2 id="cart-card-title">{product.title}</h2>
                        <h2 id="cart-card-price">${product.price}</h2>
                        <h2 id="cart-card-desc">{product.description}</h2>
                    </div>
                    <div className="remove-cart">
                        <button id="remove-cart-btn" onClick={() => removeFromCart(product)}><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                </div>
        ))}
        </div>
        </>
    );
    
    return (
        <div>
            <NavBar />
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
        </div>
    )
}