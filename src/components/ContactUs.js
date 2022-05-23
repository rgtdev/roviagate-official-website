/* eslint-disable jsx-a11y/iframe-has-title */
import { Link } from "react-router-dom";

const ContactUs = () => {
    return ( 
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-3">Contact</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            {/* <!-- Contact Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 class="display-6 mb-4">Please Feel Free, Contact Us</h1>
                    </div>
                    <div class="row g-0 justify-content-center">
                        <div class="col-lg-10 wow fadeInUp" data-wow-delay="0.5s">
                            <p class="text-center mb-4">RoviaGate Technology is a ICT based Software company, where we do websites, software and many more. We're open to any inquiries and quotes from our lovely customers. </p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" required autoComplete="off" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" required autoComplete="off" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" required autoComplete="off" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "200px" }} required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            {/* <!-- Google Map Start --> */}
            <div class="container-xxl pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                <iframe class="w-100 mb-n2" style={{ height: "450px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.783056076102!2d-10.780487685157363!3d6.29221832755424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a0347d511ca5f%3A0x3fdd9eae1690ac03!2sRoviaGate%20Technology%20LLC!5e0!3m2!1sen!2s!4v1652881983796!5m2!1sen!2s" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
            {/* <!-- Google Map End --> */}
        </>
     );
}
 
export default ContactUs;