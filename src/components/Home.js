import { Link } from "react-router-dom";
// import CountUp from "react-countup";

const Home = () => {

    return ( 
        <>
            {/* <!-- Carousel Start --> */}
            <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                            <img class="img-fluid" src="/dist/img/carousel-1.jpg" alt="" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2">
                            <img class="img-fluid" src="/dist/img/carousel-2.jpg" alt="" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3">
                            <img class="img-fluid" src="/dist/img/carousel-3.jpg" alt="" />
                        </button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="/dist/img/carousel-1.jpg" alt="" />
                            <div class="carousel-caption">
                                <div class="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 class="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 class="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="/dist/img/carousel-2.jpg" alt="" />
                            <div class="carousel-caption">
                                <div class="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 class="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 class="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="/dist/img/carousel-3.jpg" alt="" />
                            <div class="carousel-caption">
                                <div class="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 class="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                                    <h1 class="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            {/* <!-- Facts Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Years Experience</h5>
                                {/* <h1><CountUp end={1234} class="display-5 mb-0" /></h1> */}
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-users-cog fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Team Members</h5>
                                {/* <h1><CountUp end={1234} class="display-5 mb-0" /></h1> */}
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-users fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Satisfied Clients</h5>
                                {/* <h1><CountUp end={1234} class="display-5 mb-0" /></h1> */}
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-check fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Projects Done</h5>
                                {/* <h1><CountUp end={1234} class="display-5 mb-0" /></h1> */}
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}

            {/* <!-- About Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="img-border">
                                <img class="img-fluid" src="/dist/img/demo-1.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="h-100">
                                <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 class="display-6 mb-4">#1 Digital Solution With <span class="text-primary">10 Years</span> Of Experience</h1>
                                <p>RoviaGate Technology is a premier regional West African Information and Communication Technologies (ICT) firm headquartered in Liberia delivering data-driven integrated solutions. With our experience and strategic positioning, RoviaGate is poised to take advantage of the exponential market opportunities in sub-Saharan Africa in the data and analytics space.</p>
                                <p class="mb-4">Our goal is to build capacity in several industry verticals; particularly government, financial services, security, agriculture, and healthcare sectors. This will lead to a data-driven culture in the region by establishing a Single Source Of Truth (SSOT) that will enhance productivity and help business leaders to make more informed decisions with regard to resource allocation and deployment. RoviaGate’s market position offers a unique perspective for sustainable collaborations and partnerships with global firms exploring growth opportunities, especially on the African continent...</p>
                                <div class="d-flex align-items-center mb-4 pb-2">
                                    <img class="flex-shrink-0 rounded-circle" src="/dist/img/demo-1.jpg" alt="" style={{ width: "50px", height: "50px" }} />
                                    <div class="ps-4">
                                        <h6>Oliver W Klark, Jr</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                                <Link class="btn btn-primary rounded-pill py-3 px-5" to="/about-us">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Service Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 class="display-6 mb-4">We Serves The Best In All Sectors</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-1.jpg" alt="" />
                                <h4 class="mb-0">Web Design</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-2.jpg" alt="" />
                                <h4 class="mb-0">Software Development</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-6.jpg" alt="" />
                                <h4 class="mb-0">Web Application</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-3.jpg" alt="" />
                                <h4 class="mb-0">SEO Optimization</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-4.jpg" alt="" />
                                <h4 class="mb-0">Social Marketing</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-5.jpg" alt="" />
                                <h4 class="mb-0">Consultancy</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

            {/* <!-- Feature Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="h-100">
                                <h6 class="section-title bg-white text-start text-primary pe-3">Why Choose Us</h6>
                                <h1 class="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
                                <p class="mb-4">We strive to make Information Technology expertise readily available in West Africa, through our professional services. In doing so, we take the burden of IT administration off the shoulders of our clients, giving them the ability to focus on their core business aspects.</p>
                                <div class="row g-4">
                                    <div class="col-12">
                                        <div class="skill">
                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Digital Marketing</p>
                                                <p class="mb-2">99%</p>
                                            </div>                                            
                                            <div class="progress">
                                                <div class="progress-bar bg-primary" style={{ width: "99%" }} role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="skill">
                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Software & Security</p>
                                                <p class="mb-2">90%</p>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="skill">
                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Design & Development</p>
                                                <p class="mb-2">95%</p>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="img-border">
                                <img class="img-fluid" src="/dist/img/demo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}

            {/* <!-- Project Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Our Projects</h6>
                        <h1 class="display-6 mb-4">Learn More About Our Complete Projects</h1>
                    </div>
                    <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div class="project-item border rounded h-100 p-4" data-dot="01">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-1.jpg" alt="" />
                                <Link to="/dist/img/project-1.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="02">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-2.jpg" alt="" />
                                <Link to="/dist/img/project-2.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="03">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-3.jpg" alt="" />
                                <Link to="/dist/img/project-2.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="04">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-4.jpg" alt="" />
                                <Link to="/dist/img/project-4.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="05">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-5.jpg" alt="" />
                                <Link to="/dist/img/project-5.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="06">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-6.jpg" alt="project-6.jpg" />
                                <Link to="/dist/img/project-6.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="07">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-7.jpg" alt="" />
                                <Link to="/dist/img/project-7.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="08">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-8.jpg" alt="" />
                                <Link to="/dist/img/project-8.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="09">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-9.jpg" alt="" />
                                <Link to="/dist/img/project-9.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="10">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="/dist/img/project-10.jpg" alt="" />
                                <Link to="/dist/img/project-10.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Project End --> */}
            
            {/* <!-- Team Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Our Team</h6>
                        <h1 class="display-6 mb-4">Our Creative & Innovative Team For Your Project</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item text-center p-4">
                                <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src="/dist/img/team.jpeg" alt="" />
                                <div class="team-text">
                                    <div class="team-title">
                                        <h5>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div class="team-social">
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-facebook-f"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-twitter"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item text-center p-4">
                                <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src="/dist/img/team.jpeg" alt="" />
                                <div class="team-text">
                                    <div class="team-title">
                                        <h5>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div class="team-social">
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-facebook-f"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-twitter"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item text-center p-4">
                                <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src="/dist/img/team.jpeg" alt="" />
                                <div class="team-text">
                                    <div class="team-title">
                                        <h5>Full Name</h5>
                                        <span>Designation</span>
                                    </div>
                                    <div class="team-social">
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-facebook-f"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-twitter"></i></Link>
                                        <Link class="btn btn-square btn-primary rounded-circle" to="/"><i class="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
            
            {/* <!-- Testimonial Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 class="display-6 mb-4">What Our Clients Say!</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div class="testimonial-item bg-light rounded p-4">
                            <div class="d-flex align-items-center mb-4">
                                <img class="flex-shrink-0 rounded-circle border p-1" src="/dist/img/testimonial-1.jpg" alt="" />
                                <div class="ms-4">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p class="mb-0">Tempore erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div class="testimonial-item bg-light rounded p-4">
                            <div class="d-flex align-items-center mb-4">
                                <img class="flex-shrink-0 rounded-circle border p-1" src="/dist/img/testimonial-2.jpg" alt="" />
                                <div class="ms-4">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div class="testimonial-item bg-light rounded p-4">
                            <div class="d-flex align-items-center mb-4">
                                <img class="flex-shrink-0 rounded-circle border p-1" src="/dist/img/testimonial-3.jpg" alt="" />
                                <div class="ms-4">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div class="testimonial-item bg-light rounded p-4">
                            <div class="d-flex align-items-center mb-4">
                                <img class="flex-shrink-0 rounded-circle border p-1" src="/dist/img/testimonial-4.jpg" alt="" />
                                <div class="ms-4">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
     );
}
 
export default Home;