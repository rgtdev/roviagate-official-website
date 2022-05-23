import { Link } from "react-router-dom";
import  { format } from 'date-fns';

const Footer = () => {
    // Displaying the full date on the Footer
    const dateTime = format(new Date(), 'yyyy' );
    
    return ( 
        // <!-- Footer Start -->
        <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Address</h5>
                        <p class="mb-2 text-light"><i class="fa fa-map-marker-alt me-3"></i>15<sup>th</sup> & 16<sup>th</sup> Sinkor, Liberia</p>
                        <p class="mb-2 text-light"><i class="fa fa-phone-alt me-3"></i>+(231) 776-765-707</p>
                        <p class="mb-2 text-light"><i class="fa fa-envelope me-3"></i>info@roviagatetechnology.com</p>
                        <div class="d-flex pt-2">
                            <Link class="btn btn-square btn-outline-secondary rounded-circle me-1" to="/"><i class="fab fa-twitter"></i></Link>
                            <Link class="btn btn-square btn-outline-secondary rounded-circle me-1" to="/"><i class="fab fa-facebook-f"></i></Link>
                            <Link class="btn btn-square btn-outline-secondary rounded-circle me-1" to="/"><i class="fab fa-youtube"></i></Link>
                            <Link class="btn btn-square btn-outline-secondary rounded-circle me-0" to="/"><i class="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Quick Links</h5>
                        <Link class="btn btn-link" to="/about-us">About Us</Link>
                        <Link class="btn btn-link" to="/contact-us">Contact Us</Link>
                        <Link class="btn btn-link" to="/services">Our Services</Link>
                        <Link class="btn btn-link" to="/">Terms & Condition</Link>
                        <Link class="btn btn-link" to="/">Support</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Popular Links</h5>
                        <Link class="btn btn-link" to="/about-us">About Us</Link>
                        <Link class="btn btn-link" to="/contact-us">Contact Us</Link>
                        <Link class="btn btn-link" to="/services">Our Services</Link>
                        <Link class="btn btn-link" to="/">Terms & Condition</Link>
                        <Link class="btn btn-link" to="/">Support</Link>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Newsletter</h5>
                        <p class="text-light">Subscribe now for updates.</p>
                        <div class="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input class="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 text-light">
                            Copyright&copy; { dateTime } - <Link to="/">RoviaGate Technology, LLC</Link> | All Right Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //  <!-- Footer End -->
     );
}
 
export default Footer;