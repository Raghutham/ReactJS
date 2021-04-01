import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props){
    return( <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              #1240, 9th C main, 5th Cross, Srinivasanagar 
                      <br></br> BSK Stage 3, Bengaluru<br/>
		              <i className="fa fa-phone fa-lg"></i>: +91 7349160520<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 8217379113<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:rbkestur@gmail.com">
                         Melting Memories CEO</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://www.instagram.com/raghutham_b_kestur/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/raghutham.bkestur"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/raghutham-b-kestur/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/results?search_query=melting+memories+ice+cream"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Melting Memories</p>
                </div>
            </div>
        </div>
    </div>
        
    
    
    
    
    );
    
    
    
    
}
export default Footer;