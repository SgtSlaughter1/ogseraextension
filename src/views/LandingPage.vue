<template>
    <div class="landing-page">

          <!-- Back to Top Button -->
          <transition name="fade">
            <CustomButton 
                v-if="showBackToTop" 
                @click="scrollToTop" 
                variant="warning" 
                size="md"
                customClass="back-to-top-btn"
                icon="bi bi-arrow-up"
            />
        </transition>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 p-0 text-center">
                            <div class="hero-title mt-5">
                                <h1 class="brand-text fw-bold">OG<span class="text-warning">SQ</span></h1>
                                <p>Ogun State Skills Qualification</p>
                            </div>
                            <h5 class="hero-text text-white">
                                Empower your career with industry-recognized certifications that validate your skills
                                and competency.
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="container mb-4 mt-4">
                    <div class="row justify-content-center features">
                        <div class="col-md-4 mb-3 text-center">
                            <div class="feature-card position-relative">
                                <img src="/src/assets/Home/Ogz  n.png" alt="" class="mt-3 img-fluid">
                                <p class="mb-0 text-left">Globally Recognized Certification:
                                    Stand out with qualifications employers trust.</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 text-center">
                            <div class="feature-card  position-relative">
                                <img src="/src/assets/Home/Settling icon.png" alt="" class="mt-3 img-fluid">
                                <p class="mb-0">Practical and Flexible Training: Learn on the job and at your pace.</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 text-center">
                            <div class="feature-card position-relative">
                                <img src="/src/assets/Home/start.png" alt="" class="mt-3 img-fluid">
                                <p class="mb-0">Career Advancement:
                                    Unlock new opportunities in your chosen field.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <CustomButton variant="light" size="lg" label="Learn More" to="/about" class="px-4 mb-4 custom-button" />
                </div>
            </div>
        </section>

        <section class="stat py-5">
            <div class="container">
                <div class="row  g-4">
                    <!-- First Stat -->
                    <div class="col-md-4 stats text-center">
                        <div class="stat-card p-4">
                            <h1 class="display-3 text-warning fw-bold mb-3">10,000+</h1>
                            <p class="fs-5 text-dark fw-semibold text-secondary mb-0">Certifications <br> Issued</p>
                        </div>
                    </div>

                    <!-- Second Stat -->
                    <div class="col-md-4 stats text-center">
                        <div class="stat-card p-4">
                            <h1 class="display-3 text-warning fw-bold mb-3">300+</h1>
                            <p class="fs-5 text-dark fw-semibold text-secondary mb-0">Accredited Training <br> Providers
                            </p>
                        </div>
                    </div>

                    <!-- Third Stat -->
                    <div class="col-md-4 stats text-center">
                        <div class="stat-card p-4">
                            <h1 class="display-3 text-warning fw-bold mb-3">98%</h1>
                            <p class="fs-5 text-dark fw-semibold text-secondary mb-0">Satisfaction Rate from Certified
                                Professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- New Journey Section -->
        <section class="journey-section py-5">
            <div class="container journey-text">
                <div class="row align-items-center">
                    <div class="col-lg-7 boosts">
                        <h5 class="text-light mb-3">Start Your NSQ Journey Today</h5>
                        <h2 class="mb-2 boost fw-bold fs-small">Boost Your Career, Build Confidence, & Demonstrate Competency
                        </h2>
                        <p class="mb-3">With Ogun Skills Qualification, you can gain the recognition you deserve by
                            earning an NSQ certification.</p>

                        <h5 class="text-warning mb-3">Why Choose NSQ Certification?</h5>

                        <div class="benefits mb-3">
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-circle me-3">
                                    <i class="bi bi-check-circle-fill text-warning me-2" style="font-size: 1.5rem;"></i>
                                </div>
                                <p class="mb-0">Practical Recognition: Validate your ability to perform job tasks
                                    effectively</p>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-circle me-3">
                                    <i class="bi bi-check-circle-fill text-warning me-2" style="font-size: 1.5rem;"></i>
                                </div>
                                <p class="mb-0">Industry Standards: Meet and exceed the expectations of employers in
                                    your sector</p>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div class="check-circle me-3">
                                    <i class="bi bi-check-circle-fill text-warning me-2" style="font-size: 1.5rem;"></i>
                                </div>
                                <p class="mb-0">Career Growth: Open doors to new opportunities and professional
                                    development.</p>
                            </div>
                        </div>

                        <p class="mb-3 text-dark">Take the First Step Today</p>
                        <CustomButton variant="warning" label="Apply for NSQ Certification" icon="bi bi-arrow-right"
                            to="/apply" class="custom-button"/>
                    </div>
                    <div class="col-lg-5 position-relative">
                        <div class="journey">
                            <img src="/src/assets/Home/Home section.png" alt="NSQ Certification"
                                class="img-fluid rounded">

                            <div class="col-lg-4 competency-card position-absolute">
                                <div>
                                    <img src="/src/assets/Home/section 2 analg icon.png" alt="NSQ Certification"
                                        class="img-fluid rounded">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Training Service Provider section -->
        <section>
            <div class=" training container my-5">
                <div class="row ">
                    <div class="col-md-5">
                        <div class="image-grid">

                            <img src="../assets/Home/home page .png" alt="Training provider workspace"
                                class="img-fluid mb-3 rounded" />

                        </div>
                    </div>

                    <div class="col-md-7">
                        <div class="content-section ">
                            <p class="mb-1 fw-bold">Training Service Provider</p>
                            <h2 class="mb-3 fw-bold">Become an Accredited Training Provider with Ogun Skills
                                Qualification</h2>

                            <p class="mb-4 fw-medium">As an NSQ Training Provider, you gain access to:</p>

                            <div class="benefits-list">
                                <div class="benefit-item d-flex align-items-center mb-3">
                                    <i class="bi bi-check-circle-fill text-success me-3" style="font-size: 1.5rem;"></i>
                                    <p class="mb-0">Recognition and Credibility: Your institution will be accredited
                                        by nationally recognised awarding bodies, boosting your credibility in the
                                        industry.</p>
                                </div>

                                <div class="benefit-item d-flex align-items-center mb-3">
                                    <i class="bi bi-check-circle-fill text-success me-3" style="font-size: 1.5rem;"></i>
                                    <p class="mb-0">Expand Impact: Deliver NSQs that help individuals gain the
                                        skills needed for career advancement.</p>
                                </div>

                                <div class="benefit-item d-flex align-items-center mb-3">
                                    <i class="bi bi-check-circle-fill text-success me-3" style="font-size: 1.5rem;"></i>
                                    <p class="mb-0">Support Workforce Development: Contribute to creating a skilled
                                        workforce in line with national and international standards.</p>
                                </div>

                                <div class="benefit-item d-flex align-items-center  mb-4">
                                    <i class="bi bi-check-circle-fill text-success me-3" style="font-size: 1.5rem;"></i>
                                    <p class="mb-0">Access to Resources: Benefit from robust frameworks, tools, and
                                        support systems to deliver high-quality training.</p>
                                </div>
                            </div>

                            <CustomButton variant="success" label="Register as TSP" icon="bi bi-arrow-right"
                                to="/registration" class="pe-5 custom-button" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Testimonial Section -->
        <section class="testimonial p-4">


            <div class="container my-5">
                <h2 class="mb-5 text-center fw-bold">What People are Saying......</h2>

                <div class="row g-3 justify-content-center">
                    <!-- First Testimonial -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card  h-100 border-0 p-4 rounded-4">
                            <div class="card-body">
                                <p class="testimonial-text mb-4">
                                    "The application process was seamless, and the certification has set me apart in my
                                    workplace. Highly recommended!"
                                </p>
                                <div class="testimonial-author">
                                    <img src="../assets/Home/image.png" alt="Mary A." class="rounded-circle me-3" />
                                    <div class="testimonial-author-info">
                                        <h5 class="mb-0 fw-bold">Mary A.</h5>
                                        <p class="mb-0 text-muted">Skilled Artisan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Second Testimonial -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card testimonial-card h-100 border-0 p-4 rounded-4">
                            <div class="card-body">
                                <p class="testimonial-text mb-4">
                                    "Earning my NSQ certification through Ogun Skills Qualification gave me the
                                    confidence and credibility I needed to advance in my career. It's practical,
                                    industry-relevant, and highly rewarding!"
                                </p>
                                <div class="testimonial-author">
                                    <img src="../assets/Home/image.png" alt="Mary A." class="rounded-circle me-3" />
                                    <div class="testimonial-author-info">
                                        <h5 class="mb-0 fw-bold">Adebayo O.</h5>
                                        <p class="mb-0 text-muted">Certified Professional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Third Testimonial -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card  testimonial-card h-100 border-0  p-4 rounded-4">
                            <div class="card-body">
                                <p class="testimonial-text mb-4">
                                    "The application process was seamless, and the certification has set me apart in my
                                    workplace. Highly recommended!"
                                </p>
                                <div class="testimonial-author">
                                    <img src="../assets/Home/image.png" alt="Mary A." class="rounded-circle me-3" />
                                    <div class="testimonial-author-info">
                                        <h5 class="mb-0 fw-bold">Mary A.</h5>
                                        <p class="mb-0 text-muted">Skilled Artisan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Indicator Dots -->
                <div class="text-center mt-4">
                    <div class="d-inline-flex gap-2">
                        <div class="indicator-dot active"></div>
                        <div class="indicator-dot"></div>
                        <div class="indicator-dot"></div>
                    </div>
                </div>
            </div>




        </section>
    </div>


</template>

<script>
import CustomButton from '@/components/CustomButton.vue'

export default {
    name: 'LandingPage',
    components: {
        CustomButton
    },
    data() {
        return {
            showBackToTop: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            // Show back to top button when scrolled down
            this.showBackToTop = window.scrollY > window.innerHeight
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bellefair&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Manrope:wght@200..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.landing-page {
    font-family: Poppins;
}

.landing-page .hero {
    background: url('/src/assets/Home/Landing\ Background.png') center/cover;
    min-height: 100vh;
    color: white;
    display: flex;
}

.back-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-items: center;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.back-to-top-btn:hover {
    opacity: 1;
}

html {
    scroll-behavior: smooth;
}

.hero-content {
    width: 100%;
    padding: 0;
}

.hero-title>p {
    margin-top: -25px;
    letter-spacing: 1.5px;
}

.hero-text {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.7;
    width: 100%;
}

.brand-text {
    font-weight: 700;
    font-size: 100px;
}

.col-lg-6 {
    width: 50%;
}

.brand-text>.text-warning {
    color: #FFC727;
}

.features {
    width: 80%;
    margin: 5px auto;
}

.feature-card {
    width: 90%;
    height: 200px;
    align-content: center;
}

.feature-card>p {
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;
    text-align: left;
    width: 95%;
    margin: 20px auto;
}

.feature-card>img {
    width: 30%;
}

.card{
    width: 90%;
}

.display-3 {
    font-size: 3.5rem;
    letter-spacing: -0.5px;
}

.benefits {
    width: 90%;
}

.journey>img {
    right: -60px;
    top: -250px;
    position: absolute;
}

.journey-section {
    background-color: #118E34;
    font-family: 'Poppins', sans-serif;
    color: white;
}

.col-lg-7>h2 {
    font-size: 33px;
}

.competency-card {
    top: -100px;
    width: 30%;
    left: -30px;
}

.content-section>p {
    font-size: 20px;
}

.content-section>h2 {
    font-size: 30px;
}

.testimonial-text {
    font-size: 13px;
    line-height: 1.5;
    color: #2D3748;
    height: 100px;
}

.card {
    background-color: #F4FFF7;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.rounded-circle {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.indicator-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #CBD5E0;
    opacity: 0.5;
}

.indicator-dot.active {
    background-color: #2D3748;
    opacity: 1;
}

.testimonial {
    background-color: #F2F2F2;
}

.testimonial-author {
    display: flex;
    align-items: center;
}

@media (max-width: 760px) {
    /* Hero and General Layout */
    .landing-page .hero {
        min-height: auto;
        padding: 32px 0;
    }

    .hero-title {
        width: 300px;
        margin-left: -70px;
    }

    .hero-title > p {
        margin-top: -10px;
        font-size: 14px;
        width: 100%;
    }

    .hero-text {
        font-size: 15px;
        text-align: center;
        width: 300px;
        margin-left: -70px;
        line-height: 25px;
    }

    /* Hide unnecessary elements */
    .features, .competency-card, .indicator-dot {
        display: none;
    }

    /* Typography and Text Styles */
    .brand-text {
        font-size: 50px;
    }

    .content-section > p {
        font-size: 15px;
    }

    .content-section > h2, 
    .boosts > h2 {
        font-size: 20px;
        line-height: 1.5;
    }

    .boosts > h5 {
        font-size: 15px;
    }

    .boosts > p {
        font-size: 14px;
    }

    /* Card and Feature Styles */
    .card, .stat-card {
        width: 90%;
        margin: 5px auto;
        padding: 0 !important;
    }

    .feature-card {
        height: auto;
        margin-bottom: 16px;
    }

    .feature-card > img {
        width: 15%;
        margin-bottom: 10px;
    }

    .feature-card > p {
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
    }

    .stat-card > h1 {
        font-size: 32px;
        margin-bottom: 5px;
    }

    .stat-card > p {
        font-size: 14px;
        width: 100%;
        margin-top: 0;
    }

    /* Journey and Benefits Sections */
    .journey-text, .content-section {
        width: 90%;
        margin: 0 auto;
        padding: 0;
    }

    .journey-section .row {
        flex-direction: column-reverse;
    }

    .journey-section .col-lg-6 {
        width: 100%;
        text-align: center;
        margin-bottom: 16px;
    }

    .journey > img {
        top: 0;
        position: relative;
        margin-bottom: 20px;
        left: 0;
    }

    .benefits {
        text-align: left;
    }

    .benefits .check-circle {
        font-size: 20px;
    }

    .benefits p, 
    .benefit-item p {
        font-size: 10px;
        line-height: 1.5;
    }

    .benefits-list .benefit-item {
        align-items: center;
        text-align: left;
        margin-bottom: 16px;
    }

    .benefits-list .benefit-item i {
        margin-bottom: 8px;
        margin-right: 0;
    }

    /* Testimonial Section */
    .testimonial .row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .testimonial-text {
        height: auto;
    }

    /* Custom Button */
    .custom-button {
        font-size: 5px;
        padding: 8px 12px !important;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .features .col-md-4 {
        margin-bottom: 16px;
    }

    .stat .col-md-4 {
        margin-bottom: 16px;
    }

    .competency-card {
        display:none;
    }

    .journey>img {
        top: 0;
        position: relative;
        margin: 20px 0;
        left: 0;
    }
    .training .row {
        flex-direction: column-reverse;
        border: 1px solid red;
        width: 90%;
        margin: 0 auto;
    }
}
</style>
