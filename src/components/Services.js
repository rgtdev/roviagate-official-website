import { Link } from "react-router-dom";

const Services = () => {
    return ( 
        <>            
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-3">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Service Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
                        <h1 class="display-6 mb-4">We Focus On Making The Best In All Sectors</h1>
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
                                <h4 class="mb-0">App Development</h4>
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
                                <h4 class="mb-0">Email Marketing</h4>
                            </Link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <Link class="service-item d-block rounded text-center h-100 p-4" to="/">
                                <img class="img-fluid rounded mb-4" src="/dist/img/service-6.jpg" alt="" />
                                <h4 class="mb-0">PPC Advertising</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}

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
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
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
 
export default Services;