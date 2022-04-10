import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
        <div  className="login-and-register-form ">
        <div  className="main-overlay"></div>
        <div  className="main-register-holder">
            <div  className="main-register fl-wrap">
                <div  className="close-reg"><i  className="fa fa-times"></i></div>
                <h3>Welcome to <span>Find<strong>Houses</strong></span></h3>
                <div  className="soc-log fl-wrap">
                    <p>Login</p>
                    <a href="#"  className="facebook-log"><i  className="fa fa-facebook-official"></i>Log in with Facebook</a>
                    <a href="#"  className="twitter-log"><i  className="fa fa-twitter"></i> Log in with Twitter</a>
                </div>
                <div  className="log-separator fl-wrap"><span>Or</span></div>
                <div id="tabs-container">
                    <ul  className="tabs-menu">
                        <li  className="current"><a href="#tab-1">Login</a></li>
                        <li><a href="#tab-2">Register</a></li>
                    </ul>
                    <div  className="tab">
                        <div id="tab-1"  className="tab-contents">
                            <div  className="custom-form">
                               
                                    <label>Username or Email Address * </label>
                                    <input name="email" type="text"   />
                                    <label>Password * </label>
                                    <input name="password" type="password"   />
                                    <button type="submit"  className="log-submit-btn"><span>Log In</span></button>
                                    <div  className="clearfix"></div>
                                    <div  className="filter-tags">
                                        <input id="check-a" type="checkbox" name="check"/>
                                        <label htmlFor="check-a">Remember me</label>
                                    </div>
                              
                                <div  className="lost_password">
                                    <a href="#">Lost Your Password?</a>
                                </div>
                            </div>
                        </div>
                        <div  className="tab">
                            <div id="tab-2"  className="tab-contents">
                                <div  className="custom-form">
                                        <label>First Name * </label>
                                        <input name="name" type="text"   />
                                        <label>Second Name *</label>
                                        <input name="name2" type="text"   />
                                        <label>Email Address *</label>
                                        <input name="email" type="text"   />
                                        <label>Password *</label>
                                        <input name="password" type="password"   />
                                        <button type="submit"  className="log-submit-btn"><span>Register</span></button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
