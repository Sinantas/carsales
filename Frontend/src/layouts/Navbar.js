import axios from 'axios';
import React, { Component } from 'react'
import { Tab } from 'react-tabs';
import { TabPanel } from 'react-tabs';
import { TabList } from 'react-tabs';
import { Tabs } from 'react-tabs';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalDisplay : false,
            displayLoginTab:true,
            displayRegister:false,
            loginClass:'current',
            registerClass:'passive',
            isLogin:false,
            name:'',
            email:'',
            phone:'',
            password:'',
            user: {}
        }
    }
    handleModalDisplay = (status) => {
        this.setState({modalDisplay:status});
        console.log(status);
    }
    handleTabDisplay = (tab) => {
        console.log(tab)
       switch (tab) {
           case 'login':
            this.setState({displayRegister:false,displayLoginTab:true,loginClass:'current',registerClass:'passive'});
               break;
            case 'register': 
            this.setState({displayRegister:true,displayLoginTab:false,loginClass:'passive',registerClass:'current'});
            break;
           default:
               break;
       }

    
        
    } 
    
    handleSubmit = (event)=>
      {
        event.preventDefault();
          const {name,email,password,phone} = this.state;
        axios.post(`http://localhost:8000/api/v1/user`, { name,email,phone,password })
        .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({displayRegister:false,displayLoginTab:true,loginClass:'current',registerClass:'passive'});
        });
        
      } 

      handleLoginSubmit = (event) => {
          event.preventDefault();
        const {email,password} = this.state;
        const username=email;
        axios.post(`http://localhost:8000/authenticate`, { username,password })
        .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({displayRegister:false,displayLoginTab:true,loginClass:'current',registerClass:'passive',isLogin:true,modalDisplay:false,user:res.data.user});
        });
      }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

      }
    render() {
        return (
          <header
            id="header-container"
            className="header head-tr"
            style={{ backgroundColor: "#211e1ea1" }}
          >
            <div id="header" className="head-tr bottom">
              <div className="container container-header">
                <div className="left-side">
                  <div id="logo">
                    <a href="index.html">
                      <img
                        src="images/logo-white-1.svg"
                        data-sticky-logo="images/logo-red.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="mmenu-trigger">
                    <button
                      className="hamburger hamburger--collapse"
                      type="button"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                      </span>
                    </button>
                  </div>
                  <nav id="navigation" className="style-1 head-tr">
                    <ul id="responsive">
                      <li>
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <a href="#">Home Map</a>
                            <ul>
                              <li>
                                <a href="index-9.html">Home Map Style 1</a>
                              </li>
                              <li>
                                <a href="index-12.html">Home Map Style 2</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Home Image</a>
                            <ul>
                              <li>
                                <a href="index.html">Modern Home</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Boxed Image</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Modern Image</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home Minimalist Style</a>
                              </li>
                              <li>
                                <a href="index-6.html">Home Parallax Image</a>
                              </li>
                              <li>
                                <a href="index-8.html">Home Search Form</a>
                              </li>
                              <li>
                                <a href="index-10.html">Modern Full Image</a>
                              </li>
                              <li>
                                <a href="index-15.html">Home Typed Image</a>
                              </li>
                              <li>
                                <a href="index-17.html">
                                  Modern Parallax Image
                                </a>
                              </li>
                              <li>
                                <a href="index-18.html">Image Filter Search</a>
                              </li>
                              <li>
                                <a href="index-21.html">Parallax Image video</a>
                              </li>
                              <li>
                                <a href="index-23.html">Home Image</a>
                              </li>
                              <li>
                                <a href="index-24.html">Image and video</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Home Video</a>
                            <ul>
                              <li>
                                <a href="/">Home Video Image</a>
                              </li>
                              <li>
                                <a href="index-7.html">Home Video</a>
                              </li>
                              <li>
                                <a href="index-20.html">Home Modern Video</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Home Slider</a>
                            <ul>
                              <li>
                                <a href="index-11.html">
                                  Slider Presentation 2
                                </a>
                              </li>
                              <li>
                                <a href="index-16.html">
                                  Slider Presentation 3
                                </a>
                              </li>
                              <li>
                                <a href="index-19.html">Home Modern Slider</a>
                              </li>
                              <li>
                                <a href="index-22.html">Home Image Slider</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Home Styles</a>
                            <ul>
                              <li>
                                <a href="index-13.html">Home Style Dark</a>
                              </li>
                              <li>
                                <a href="index-14.html">Home Style White</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Listing</a>
                        <ul>
                          <li>
                            <a href="#">Listing Grid</a>
                            <ul>
                              <li>
                                <a href="properties-grid-1.html">Grid View 1</a>
                              </li>
                              <li>
                                <a href="properties-grid-2.html">Grid View 2</a>
                              </li>
                              <li>
                                <a href="properties-grid-3.html">Grid View 3</a>
                              </li>
                              <li>
                                <a href="properties-grid-4.html">Grid View 4</a>
                              </li>
                              <li>
                                <a href="properties-full-grid-1.html">
                                  Grid Fullwidth 1
                                </a>
                              </li>
                              <li>
                                <a href="properties-full-grid-2.html">
                                  Grid Fullwidth 2
                                </a>
                              </li>
                              <li>
                                <a href="properties-full-grid-3.html">
                                  Grid Fullwidth 3
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Listing List</a>
                            <ul>
                              <li>
                                <a href="properties-full-list-1.html">
                                  List View 1
                                </a>
                              </li>
                              <li>
                                <a href="properties-list-1.html">List View 2</a>
                              </li>
                              <li>
                                <a href="properties-full-list-2.html">
                                  List View 3
                                </a>
                              </li>
                              <li>
                                <a href="properties-list-2.html">List View 4</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Listing Map</a>
                            <ul>
                              <li>
                                <a href="properties-half-map-1.html">
                                  Half Map 1
                                </a>
                              </li>
                              <li>
                                <a href="properties-half-map-2.html">
                                  Half Map 2
                                </a>
                              </li>
                              <li>
                                <a href="properties-half-map-3.html">
                                  Half Map 3
                                </a>
                              </li>
                              <li>
                                <a href="properties-top-map-1.html">
                                  Top Map 1
                                </a>
                              </li>
                              <li>
                                <a href="properties-top-map-2.html">
                                  Top Map 2
                                </a>
                              </li>
                              <li>
                                <a href="properties-top-map-3.html">
                                  Top Map 3
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Agent View</a>
                            <ul>
                              <li>
                                <a href="agents-listing-grid.html">
                                  Agent View 1
                                </a>
                              </li>
                              <li>
                                <a href="agents-listing-row.html">
                                  Agent View 2
                                </a>
                              </li>
                              <li>
                                <a href="agents-listing-row-2.html">
                                  Agent View 3
                                </a>
                              </li>
                              <li>
                                <a href="agent-details.html">Agent Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Agencies View</a>
                            <ul>
                              <li>
                                <a href="agencies-listing-1.html">
                                  Agencies View 1
                                </a>
                              </li>
                              <li>
                                <a href="agencies-listing-2.html">
                                  Agencies View 2
                                </a>
                              </li>
                              <li>
                                <a href="agencies-details.html">
                                  Agencies Details
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Property</a>
                        <ul>
                          <li>
                            <a href="single-property-1.html">
                              Single Property 1
                            </a>
                          </li>
                          <li>
                            <a href="single-property-2.html">
                              Single Property 2
                            </a>
                          </li>
                          <li>
                            <a href="single-property-3.html">
                              Single Property 3
                            </a>
                          </li>
                          <li>
                            <a href="single-property-4.html">
                              Single Property 4
                            </a>
                          </li>
                          <li>
                            <a href="single-property-5.html">
                              Single Property 5
                            </a>
                          </li>
                          <li>
                            <a href="single-property-6.html">
                              Single Property 6
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <a href="#">Shop</a>
                            <ul>
                              <li>
                                <a href="shop-with-sidebar.html">
                                  Product Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-full-page.html">
                                  Product Fullpage
                                </a>
                              </li>
                              <li>
                                <a href="shop-single.html">Product Single</a>
                              </li>
                              <li>
                                <a href="shop-checkout.html">Checkout Page</a>
                              </li>
                              <li>
                                <a href="shop-order.html">Order Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">User Panel</a>
                            <ul>
                              <li>
                                <a href="dashboard.html">Dashboard</a>
                              </li>
                              <li>
                                <a href="user-profile.html">User Profile</a>
                              </li>
                              <li>
                                <a href="my-listings.html">My Properties</a>
                              </li>
                              <li>
                                <a href="favorited-listings.html">
                                  Favorited Properties
                                </a>
                              </li>
                              <li>
                                <a href="add-property.html">Add Property</a>
                              </li>
                              <li>
                                <a href="payment-method.html">Payment Method</a>
                              </li>
                              <li>
                                <a href="invoice.html">Invoice</a>
                              </li>
                              <li>
                                <a href="change-password.html">
                                  Change Password
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="pricing-table.html">Pricing Tables</a>
                          </li>
                          <li>
                            <a href="404.html">Page 404</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="under-construction.html">
                              Under Construction
                            </a>
                          </li>
                          <li>
                            <a href="ui-element.html">UI Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                        <ul>
                          <li>
                            <a href="#">Grid Layout</a>
                            <ul>
                              <li>
                                <a href="blog-full-grid.html">Full Grid</a>
                              </li>
                              <li>
                                <a href="blog-grid-sidebar.html">
                                  With Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">List Layout</a>
                            <ul>
                              <li>
                                <a href="blog-full-list.html">Full List</a>
                              </li>
                              <li>
                                <a href="blog-list-sidebar.html">
                                  With Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                      <li className="d-none d-xl-none d-block d-lg-block">
                        <a href="login.html">Login</a>
                      </li>
                      <li className="d-none d-xl-none d-block d-lg-block">
                        <a href="register.html">Register</a>
                      </li>
                      <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0">
                        <a
                          href="add-property.html"
                          className="button border btn-lg btn-block text-center"
                        >
                          Add Listing
                          <i className="fas fa-laptop-house ml-2"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {this.state.isLogin ? (
                  <>
                    <div className="right-side d-none d-none d-lg-none d-xl-flex">
                      <div className="header-widget">
                        <a href="add-property.html" className="button border">
                          Add Listing
                          <i className="fas fa-laptop-house ml-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="header-user-menu user-menu add">
                      <div className="header-user-name">
                        <span>
                          <img src="images/testimonials/ts-1.jpg" alt="" />
                        </span>
                        {this.state.user.name}
                      </div>
                      <ul>
                        <li>
                          <a href="user-profile.html"> Edit profile</a>
                        </li>
                        <li>
                          <a href="add-property.html"> Add Property</a>
                        </li>
                        <li>
                          <a href="payment-method.html"> Payments</a>
                        </li>
                        <li>
                          <a href="change-password.html"> Change Password</a>
                        </li>
                        <li>
                          <a href="#">Log Out</a>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                    <div className="header-widget sign-in">
                      <div className="show-reg-form modal-open">
                        <a
                          href="#"
                          onClick={this.handleModalDisplay.bind(this, true)}
                        >
                          Sign In
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="clearfix"></div>

            <div
              className="login-and-register-form"
              style={{ display: this.state.modalDisplay ? "block" : "none" }}
            >
              <div className="main-overlay"></div>
              <div className="main-register-holder">
                <div className="main-register fl-wrap">
                  <div
                    className="close-reg"
                    onClick={this.handleModalDisplay.bind(this, false)}
                  >
                    <i className="fa fa-times"></i>
                  </div>
                  <h3>
                    Welcome to{" "}
                    <span>
                      Find<strong>Houses</strong>
                    </span>
                  </h3>
                  <div className="soc-log fl-wrap">
                    <p>Login</p>
                  </div>
                  <div id="tabs-container">
                    <ul className="tabs-menu">
                      <li className={this.state.loginClass}>
                        <a
                          href="#tab-1"
                          onClick={this.handleTabDisplay.bind(this, "login")}
                        >
                          Login
                        </a>
                      </li>
                      <li className={this.state.registerClass}>
                        <a
                          href="#tab-2"
                          onClick={this.handleTabDisplay.bind(this, "register")}
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                    <div className="tab">
                      <div
                        id="tab-1"
                        className="tab-contents"
                        style={{
                          display: this.state.displayLoginTab
                            ? "block"
                            : "none",
                        }}
                      >
                        <form onSubmit={this.handleLoginSubmit}>
                          <div className="custom-form">
                            <label>Username or Email Address * </label>
                            <input
                              name="email"
                              type="text"
                              onChange={this.handleInputChange}
                            />
                            <label>Password * </label>
                            <input
                              name="password"
                              type="password"
                              onChange={this.handleInputChange}
                            />
                            <button type="submit" className="log-submit-btn">
                              <span>Log In</span>
                            </button>
                            <div className="clearfix"></div>
                            <div className="filter-tags">
                              <input
                                id="check-a"
                                type="checkbox"
                                name="check"
                              />
                              <label htmlFor="check-a">Remember me</label>
                            </div>

                            <div className="lost_password">
                              <a href="#">Lost Your Password?</a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="tab">
                        <div
                          id="tab-2"
                          className="tab-contents"
                          style={{
                            display: this.state.displayRegister
                              ? "block"
                              : "none",
                          }}
                        >
                          <div className="custom-form">
                            <form onSubmit={this.handleSubmit}>
                              <label>Name * </label>
                              <input
                                name="name"
                                type="text"
                                required
                                onChange={this.handleInputChange}
                              />
                              <label>Email Address *</label>
                              <input
                                name="email"
                                type="text"
                                required
                                onChange={this.handleInputChange}
                              />
                              <label>Phone *</label>
                              <input
                                name="phone"
                                type="text"
                                required
                                onChange={this.handleInputChange}
                              />
                              <label>Password *</label>
                              <input
                                name="password"
                                type="password"
                                required
                                onChange={this.handleInputChange}
                              />
                              <button type="submit" className="log-submit-btn">
                                <span>Register</span>
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default Navbar;