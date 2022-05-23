import { Link } from "react-router-dom";

const Project = () => {
    return ( 
        <>            
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-3">Portfolio</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Portfolio</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


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
                                <img class="img-fluid rounded" src="/dist/img/project-6.jpg" alt="" />
                                <Link to="/dist/img/project-6.jpg" data-lightbox="project"><i class="fa fa-eye fa-2x"></i></Link>
                            </div>
                            <h6>UI / UX Design</h6>
                            <span>Digital agency website design and development</span>
                        </div>
                        <div class="project-item border rounded h-100 p-4" data-dot="07">
                            <div class="position-relative mb-4">
                                <img class="img-fluid rounded" src="img/project-7.jpg" alt="" />
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
 
export default Project;