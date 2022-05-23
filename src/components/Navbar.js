import { Link } from "react-router-dom";

const Navbar = () => {

    return (        
        // <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: "#2196F3" }}>
            <Link to="" class="navbar-brand ms-3 d-lg-none">MENU</Link>
            <button type="button" class="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav me-auto p-3 p-lg-0" style={{ fontWeight: "bolder"}}>
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <Link to="/about-us" class="nav-item nav-link">About Us</Link>
                    <Link to="/services" class="nav-item nav-link">Services</Link>
                    <Link to="/projects" class="nav-item nav-link">Projects</Link>
                    <Link to="/teams" class="nav-item nav-link">Teams</Link>
                    <Link to="/contact-us" class="nav-item nav-link">Contact Us</Link>
                </div>
                <Link to="/contact-us" class="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Get a quote</Link>
            </div>
        </nav>
        // <!-- Navbar End -->
     );
}
 
export default Navbar;