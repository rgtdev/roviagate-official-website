import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-3">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Facts Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Years Experience</h5>
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-users-cog fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Team Members</h5>
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-users fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Satisfied Clients</h5>
                                <h1 class="display-5 mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="fact-item bg-light rounded text-center h-100 p-5">
                                <i class="fa fa-check fa-4x text-primary mb-4"></i>
                                <h5 class="mb-3">Projects Done</h5>
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
                    <div class="row g-0 justify-content-center">
                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="h-100">
                                <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 class="display-6 mb-4">#1 Digital Solution With <span class="text-primary">10 Years</span> Of Experience</h1>
                                <p>RoviaGate Technology is a premier regional West African Information and Communication Technologies (ICT) firm headquartered in Liberia delivering data-driven integrated solutions. With our experience and strategic positioning, RoviaGate is poised to take advantage of the exponential market opportunities in sub-Saharan Africa in the data and analytics space. Our goal is to build capacity in several industry verticals; particularly government, financial services, security, agriculture, and healthcare sectors. This will lead to a data-driven culture in the region by establishing a Single Source Of Truth (SSOT) that will enhance productivity and help business leaders to make more informed decisions with regard to resource allocation and deployment. RoviaGate’s market position offers a unique perspective for sustainable collaborations and partnerships with global firms exploring growth opportunities, especially on the African continent.</p>
                                <p class="mb-4">The major business problem RoviaGate is solving in the region is data collection, warehousing, mining, and governance. At RoviaGate Technology, we have been able to tackle that problem by providing SMART (Scalable – Marketable – Actionable – Resourceful – Technological) solutions through our applications and devices. For example, we have worked extensively with the governments, businesses, and the public in general, providing data-driven solutions in the areas of revenue generation, security, agriculture, education, and healthcare.</p>
                                <p>RoviaGate provides the planning, designing, implementation, and maintenance of your ICT infrastructure; our technology experts maintain a deep knowledge of available and emerging technologies, which results in the ability to offer our clients the best solutions. RGT strives to achieve superior quality in everything we do. That quality is exemplified in every instance of client interaction, and in each member of our team. Our client relationships are built on partnerships, where we work to reduce the total cost of ownership on technology and to achieve their technology goals. We accomplish this by leveraging industry-accepted and proven technologies to further improve efficiency and promote productivity. Our success is measured by the consistency of stable, secure, and valuable technology systems that contribute to the achievements of our clients.</p>
                                <div class="d-flex align-items-center mb-4 pb-2">
                                    <img class="flex-shrink-0 rounded-circle" src="/dist/img/demo-1.jpg" alt="" style={{ width: "50px", height: "50px" }} />
                                    <div class="ps-4">
                                        <h6>Oliver W Klark, Jr</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="row g-5 justify-content-center">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 class="section-title bg-white text-start text-primary pe-3">Our Mission</h6>
                            <p>We strive to make Information Technology expertise readily available in West Africa, through our professional services. In doing so, we take the burden of IT administration off the shoulders of our clients, giving them the ability to focus on their core business aspects.</p>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 class="section-title bg-white text-start text-primary pe-3">Our Vision</h6>
                            <p>We are working to become the future technology company of choice and a driving force towards the best technology development in Africa. We envision ourselves as, becoming the number one in West Africa’s Technology industry; known for providing cost-effective, innovative, and high-quality Technology products and services to customers with special emphasis on the pillar of our customer-centric value.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            
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
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "99%" }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
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
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
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
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
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

            {/* <!-- Partners Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="">
                                <h1 class="display-6 mb-4 text-center bg-white">RoviaGate Technology Integrates With</h1>
                                <hr />
                                <div class="row">
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/UNPOL.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/conex.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/LRA.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/UNPOL.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/OSIWA.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="col col-xl-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 pb-2">
                                        <Link to="/">
                                            <div class="card shadow d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center outsideCard">
                                                <img class="m-5" src="https://www.roviagatetechnology.com/assets/img/USA.png" alt="" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Partners End --> */}
        </>
     );
}
 
export default AboutUs;