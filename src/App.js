import './App.css';

function App() {
  return (
    <div className="App">
        {/* <!-- header start --> */}
    <header className="header">
        <a href="#" className="logo"><i className="fas fa-shopping-basket"> Kasatly</i></a>
        <nav className="navbar">
            <a href="#home" id="home">home</a>
            <a href="#features" id="features">features</a>
            <a href="#products" id="products">products</a>
            <a href="#categories" id="categories">categories</a>
            <a href="#reviews" id="reviews">reviews</a>
            <a href="#blogs" id="blogs">blogs</a>
        </nav>
        <div className="icons">
            <div className="fas fa-bars" id="menu-btn"></div>
            <div className="fas fa-search" id="search-btn"></div>
            <div className="fas fa-shopping-cart" id="cart-btn"></div>
            <div className="fas fa-user" id="login-btn"></div>
        </div>
        <form action="" className="search-form">
            <input type="search" id="search-box" placeholder="search..."/>
            <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
        <div className="shopping-cart">
            <div className="box">
                <i className="fas fa-trash"></i>
                <img src="" alt=""/>
                <div className="content">
                    <h3>fridge</h3>
                    <span className="price">$ 110.9</span>
                    <span className="quantity">qty : 1</span>
                </div>
            </div>

            <div className="total">total : 100.4$</div>
            <a href="" className="btn">checkout</a>
        </div>
        <form action="" className="login-form">
            <h3>login form</h3>
            <input type="email" className="box" placeholder="your email"/>
            <input type="password" className="box" placeholder="your password"/>
            <p>forget your password ? <a href="#">click here</a></p>
            <p>don't have an account ? <a href="#">sign up</a></p>
            <input type="submit" value="login" className="btn"/>
        </form>
    </header>
    {/* <!-- header end --> */}

    {/* <!-- home start --> */}
    <section className="home" id="home">
        <div className="content">
            <h3>تقسيط <span>بأقل فايدة</span> فى مصر</h3>
            <p> هنسهـــــــــــــــل عليك الدفع</p>
            <a href="#" className="btn">اطلب الآن</a>
        </div>
    </section>
    {/* <!-- home end --> */}

    {/* <!-- products start --> */}
    <section className="products" id="products">
        <h1 className="heading">exclusive <span>products</span> </h1>
        <div className="filter-buttons">
            <div className="buttons active" data-filter="all">all</div>
            <div className="buttons" data-filter="arrivals">arrivals</div>
            <div className="buttons" data-filter="featured">featured</div>
            <div className="buttons" data-filter="special">special offer</div>
            <div className="buttons" data-filter="seller">best seller</div>
        </div>
        <div className="box-container">
            <div className="box" data-item="all">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="./images/features/1.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>product name</h3>
                    <div className="price">
                        <div className="amount">120.00</div>
                        <div className="cut">120.00</div>
                        <div className="offer">120.00</div>
                    </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(50)</span>
                    </div>
                </div>
            </div>

            <div className="box" data-item="special">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="./images/features/1.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>product name</h3>
                    <div className="price">
                        <div className="amount">120.00</div>
                        <div className="cut">120.00</div>
                        <div className="offer">120.00</div>
                    </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(50)</span>
                    </div>
                </div>
            </div>

            <div className="box" data-item="special">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="./images/features/1.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>product name</h3>
                    <div className="price">
                        <div className="amount">120.00</div>
                        <div className="cut">120.00</div>
                        <div className="offer">120.00</div>
                    </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(50)</span>
                    </div>
                </div>
            </div>

            <div className="box" data-item="seller">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="./images/features/1.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>product name</h3>
                    <div className="price">
                        <div className="amount">120.00</div>
                        <div className="cut">120.00</div>
                        <div className="offer">120.00</div>
                    </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(50)</span>
                    </div>
                </div>
            </div>

            <div className="box" data-item="arrivals">
                <div className="icons">
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-search"></a>
                    <a href="#" className="fas fa-eye"></a>
                </div>
                <div className="image">
                    <img src="./images/features/1.jpeg" alt=""/>
                </div>
                <div className="content">
                    <h3>product name</h3>
                    <div className="price">
                        <div className="amount">120.00</div>
                        <div className="cut">120.00</div>
                        <div className="offer">120.00</div>
                    </div>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>(50)</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- products end --> */}

    {/* <!-- features start --> */}
    <section className="features" id="features">
        <h1 className="heading">our <span>features</span></h1>
        <div className="box-container">
            <div className="box">
                <img src="./images/features/1.jpeg" alt=""/>
                <h3>سهولة التقسيط</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt aspernatur commodi
                    incidunt nihil ducimus illum nostrum est necessitatibus molestiae aliquam recusandae, eaque sint,
                    dolore modi, fugiat quae saepe eligendi?</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="./images/features/1.jpeg" alt=""/>
                <h3>سهولة التقسيط</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt aspernatur commodi
                    incidunt nihil ducimus illum nostrum est necessitatibus molestiae aliquam recusandae, eaque sint,
                    dolore modi, fugiat quae saepe eligendi?</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="./images/features/1.jpeg" alt=""/>
                <h3>سهولة التقسيط</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nesciunt aspernatur commodi
                    incidunt nihil ducimus illum nostrum est necessitatibus molestiae aliquam recusandae, eaque sint,
                    dolore modi, fugiat quae saepe eligendi?</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>
    </section>
    {/* <!-- features end --> */}

    {/* <!-- reviews start --> */}
    <section className="review" id="review">
        <h1 className="heading">customer's <span>review</span></h1>
        <div className="review-slider swiper">
            <div className="wrapper swiper-wrapper">
                <div className="swiper-slide box">
                    <img src="./images/review/1.jpg" alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem asperiores commodi,
                        veritatis fugit iste sint corporis aliquid velit maiores harum itaque beatae deserunt ratione
                        dolore ducimus odit consequuntur nam omnis!</p>
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="swiper-slide box">
                    <img src="./images/review/2.jpg" alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem asperiores commodi,
                        veritatis fugit iste sint corporis aliquid velit maiores harum itaque beatae deserunt ratione
                        dolore ducimus odit consequuntur nam omnis!</p>
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="swiper-slide box">
                    <img src="./images/review/3.jpg" alt=""/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem asperiores commodi,
                        veritatis fugit iste sint corporis aliquid velit maiores harum itaque beatae deserunt ratione
                        dolore ducimus odit consequuntur nam omnis!</p>
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- reviews end --> */}

    {/* <!-- blogs start --> */}
    <section className="blogs" id="blogs">
        <h1 className="heading">our <span>blogs</span></h1>
        <div className="box-container">
            <div className="box">
                <img src="" alt=""/>
                <div className="content">
                    <div className="icons">
                        <a href="#"><i className="fas fa-user"></i>by user</a>
                        <a href="#"><i className="fas fa-calendar"></i>1st may, 2021</a>
                    </div>
                    <h3>fresh and organic</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum sed beatae nesciunt
                        nihil nostrum debitis repellendus accusamus reiciendis. Minus incidunt assumenda quibusdam!
                        Perferendis sapiente minima ratione, asperiores saepe provident!</p>
                    <a href="#" className="btn">read mo</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- blogs end --> */}

    {/* <!-- footer start --> */}
    <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>groco <i className="fas fa-shopping-basket"></i></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore porro expedita id vero quasi
                    corrupti! Quae itaque voluptatem tempora perferendis consectetur. Quidem libero iure repellat
                    dolorem odit modi sed alias.</p>
                <div className="share">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <a href="#" className="links"><i className="fas fa-phone"></i>010</a>
                <a href="#" className="links"><i className="fas fa-envelope"></i>tt@gmail.com</a>
                <a href="#" className="links"><i className="fas fa-map-marker-alt"></i>cairo - egypt</a>
            </div>

            <div className="box">
                <h3>quick links</h3>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>home</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>features</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>blogs</a>
                <a href="#" className="links"><i className="fas fa-arrow-right"></i>review</a>
            </div>

            <div className="box">
                <h3>newsletter</h3>
                <p>subscribe for latest updates</p>
                <input type="email" className="email" placeholder="your email"/>
                <input type="submit" className="btn" value="Subscribe"/>
                <img src="" alt="" className="payment-img"/>
            </div>

        </div>
    </section>
    {/* <!-- footer end --> */}
    </div>
  );
}

export default App;
