import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import logo from '../../public/assets/images/logo.png'
import loadable from '@loadable/component';
const Modal = loadable(() => 
    import('react-bootstrap/Modal')
, {ssr: true});
const Collapse = loadable(() =>
    import('react-bootstrap/Collapse')
, {ssr: true});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Header = () => {
    const query = useQuery();
    const history = useHistory()
    const [show, setShow] = useState({
        loginModal: false,
        registerModal: false
    });
    const [open, setOpen] = useState(false);
    return (<div>
        <header>
          <div className="main-nav">
              <div className="container">
                  <div className="main-nav-wrapper">
                      <nav className="navbar navbar-expand-lg">
                          <div className="logo-wrapper">
                              <div className="logo-holder">
                                  <a href="" onClick={() => history.push('/')}>
                                    <img src={logo} alt="Logo" />
                                  </a>
                              </div>
                          </div> 
                          <button onClick={()=> setOpen(!open)} className='navbar-toggler' type="button" aria-controls="navbarSupportedContent" aria-expanded={open} aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                          </button>
                          <Collapse in={open}>
                            <div className='navbar-collapse' id="navbarSupportedContent">
                                <ul className="navbar-list">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="" onClick={() => history.push('/categories')}>Categories </a>
                                    </li>
                                    { !query.get('loggin') ? <li className="nav-item">
                                        <div className="lg-reg-holder">
                                            <button type="button" className="nav-link login" onClick={()=>setShow(obj => ({ ...obj, loginModal: true }) )}>Login</button>
                                            <button type="button" className="nav-link register" onClick={()=>setShow(obj => ({ ...obj, registerModal: true }) )}>Register</button>
                                        </div>   
                                    </li> :
                                    <li className="nav-item dropdown">
                                        <a 
                                            className="nav-link dropdown-toggle waves-effect waves-dark" 
                                            href="" 
                                            data-toggle="dropdown" 
                                            aria-haspopup="true" 
                                            aria-expanded="false">
                                            <i className="fas fa-user-circle"></i> <span>Naeem</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                            <a className="dropdown-item" href="#"> My Profile</a>
                                            <a className="dropdown-item" href="#">Listings</a>
                                            <a className="dropdown-item" href="#">Reviews</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#"> Get Listed</a>
                                            <a className="dropdown-item" href="#"> Write a Review</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="" onClick={() => history.push('/')}>Logout</a> 
                                        </div>
                                    </li> }
                                    <li className="nav-item">
                                        <div className="top-btn-holder">
                                            <a 
                                                style={{marginRight: '5px'}}
                                                className="nav-link site-btn-secodary" 
                                                onClick={() => history.push('/get-listed')}>Get Listed</a>
                                            <a className="nav-link site-btn" onClick={() => history.push('/write-a-review')}>Write a Review</a>
                                        </div>
                                    </li>
                                </ul>
                             </div>
                            </Collapse>
                      </nav>
                  </div>
              </div>
          </div>
        </header>
        <Modal dialogClassName="modal-lg signin" show={show.loginModal} onHide={() => setShow(obj => ({ ...obj, loginModal: false }) )}>
            <div className="mdc-wrapper">
                <button type="button" onClick={() => setShow(obj => ({ ...obj, loginModal: false }) )} className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fas fa-times"></i>
                </button>
            </div>		
            <div className="modal-body">
                    <div className="form-heading text-center">
                        <h3 className="modal-title" id="modalLabel2">LogIn Your Account</h3>
                        <div className="bottom-login ">Don't have an account <button onClick={() => setShow(obj => ({ ...obj, loginModal: false, registerModal: true }) )} className="act-tab-cl" >Create An Account</button></div>
                    </div>
                <form>	
                    <div className="form-group">
                        <label className="form-label">Email Adress</label>
                        <input type="email" className="form-control" />
                    </div>		
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="rem-fog-wrapper">
                    
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="remember-chk" />
                            <label className="custom-control-label" htmlFor="remember-chk">Remember me</label>
                        </div>

                        <a href="#" className="forgot-link forgot-password"> Forgot Password?</a>
                    </div>	
                    <div className="fm-btn-wrapper text-center">
                        <button type="button" id="login-btn" className="site-btn" onClick={() => { history.push('/?loggin=true');setShow(obj => ({ ...obj, loginModal: false })); }}> Login </button>
                        <p className="fmd-btmP">
                        By signing up you agree to receive email communication about our products and services.
                        </p>
                    </div>		
                </form>		
            </div>
        </Modal>
        <Modal dialogClassName="modal-lg register" show={show.registerModal} onHide={() => setShow(obj => ({ ...obj, registerModal: false }) )}>
            <div className="mdc-wrapper">
                <button type="button" onClick={() => setShow(obj => ({ ...obj, registerModal: false }) )} className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className="modal-body">
                <div  className="form-heading text-center">
                    <h3 className="modal-title" id="modalLabel3">Create an Account</h3>
                    <div className="bottom-login text-center">Already have an account? <button onClick={() => setShow(obj => ({ ...obj, registerModal: false, loginModal: true }) )} className="act-tab-cl" >Login</button></div>
                </div>
                <form>
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    
                    <div className=" fm-btn-wrapper text-center">
                        <button type="submit" id="login-btn" className="site-btn"> Register </button>
                        <p className="fmd-btmP">
                        By signing up you agree to receive email communication about our products and services.
                        </p>
                    </div>
                </form>
            </div>
        </Modal>
    </div>);
}

export default Header;