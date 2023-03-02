//1. Import Area
import React from 'react'
import { Link } from 'react-router-dom'

//2. Defination Area
export default function Login(props) {
  //21. Hook Area

  //2.2 Function Defination Area

  //2.3 Return Statement
    // Every function return something
    return (
        <>
          <div id="loading-overlay" />
            <div id="loading">
              <span>Loading...</span>
            </div>
            <section id="toolbar">
              <div className="container_12">
                <div className="left">
                  <ul className="breadcrumb">
                    <li><a href="#">Mango</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left" />Back to Dashboard</a></li>
                    <li className="red"><a href="#">Purchase</a></li>
                  </ul>
                </div>
                <div className="phone">
                  <li><a href="#"><span className="icon icon-home" /></a></li>
                  <li><a href="#"><span className="icon icon-heart" /></a></li>
                </div>
              </div>
            </section>
            <header className="container_12">
              <div className="container">
                <a href="/tf-mango/"><img src="img/logo-light.png" alt="Mango" width={210} height={67} /></a>
                <a className="phone-title" href="login.html"><img src="img/logo-mobile.png" alt="Mango" height={22} width={70} /></a>
                <div className="right">
                  <span>Got no account?</span>
                  <a href="#">Register</a>
                </div>
              </div>
            </header>
            <section id="login" className="container_12 clearfix">
              <form method="post" className="box validate">
                <div className="header">
                  <h2><span className="icon icon-lock" />Login</h2>
                </div>
                <div className="content">
                  {/* Login messages */}
                  <div className="login-messages">
                    <div className="message welcome">Welcome back!</div>
                    <div className="message failure">Invalid credentials.</div>
                  </div>
                  <div className="form-box">
                    <div className="row">
                      <label htmlFor="login_name">
                        <strong>Username</strong>
                        <small>Or email address</small>
                      </label>
                      <div>
                        <input tabIndex={1} type="text" className="required" name="login_name" id="login_name" />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="login_pw">
                        <strong>Password</strong>
                        <small><a href="#" id>Forgot it?</a></small>
                      </label>
                      <div>
                        <input tabIndex={2} type="password" className="required" name="login_pw" id="login_pw" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <div className="left">
                    <div className="rememberme">
                      <input tabIndex={4} type="checkbox" name="login_remember" id="login_remember" defaultChecked /><label htmlFor="login_remember">Remember me?</label>
                    </div>
                  </div>
                  <div className="right">
                    <Link to="/dashboard"><button className='btn btn-secondary'>Sign In</button></Link>
                    {/*<input tabIndex={3} type="submit" defaultValue="Sign In" name="login_btn" onClick={()=>{dataSubmit()}} />*/}
                  </div>
                </div>
              </form>
            </section>
        </>
  )
}

//3. Export Area
