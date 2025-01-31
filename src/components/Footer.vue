<template>
    <footer class="footer mt-auto py-4">
        <div class="container p-2">
            <div class="row align-items-center">
                <!-- Logo and Description -->
                <div class="col-md-8">
                    <div class="align-items-center mb-3">
                        <img src="/src/assets/Home/logo .png" alt="GSQ Logo" height="60" class="me-3">
                        <div class="mt-2">
                            <h5 class="mb-1 text-dark">Ogun State Skills Qualification</h5>
                            <p class="mb-0 text-dark">Equipping you with Skills for the Future</p>
                        </div>
                    </div>
                </div>

                <!-- Address and Contact -->
                <div class="col-md-4 ">
                    <div class="address-block">
                        <h5 class="fw-bold">Address</h5>
                        <p class="mb-1 fw-bold">Ministry of Education, Science and Technology,</p>
                        <p class="mb-2 fw-bold">Governor's Office, Oke Mosan, Abeokuta.</p>
                        <a class="text-success text-decoration-none">
                            moest@ogunstate.gov.ng
                        </a>
                    </div>
                    <div class="powered-by mt-3">
                        <div class="d-flex align-items-center justify-content"> 
                        <span class="me-2 fw-bold text-dark">Powered by</span>
                            <img src="/src/assets/Home/Ogun 1.png" alt="GSERA Logo" height="40">
                            <h1 class="ms-1 fw-bold sera">GSERA</h1>

                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    background: linear-gradient(to bottom, #EEFCF1,90%, #0C8127);
}

.container {
    height: 250px;
    width: 90%;
    margin: 0 auto;

}

.sera {
    font-size: 30px;
}

.address-block {
    color: #333;
}

.address-block h5 {
    color: #000;
    font-weight: 600;
}

.address-block p {
    font-size: 0.95rem;
    line-height: 1.4;
}

.powered-by {
    font-size: 18px;
}

@media (max-width: 767px) {
    .footer {
        padding: 20px 0 !important;
    }

    .container {
        height: 400px;
        width: 95%;
        padding: 0 15px !important;
    }

    .row {
        flex-direction: column;
        text-align: center;
    }

    /* Logo and Description Section */
    .col-md-8 {
        margin-bottom: 20px;
    }

    .col-md-8 img {
        height: 50px;
        margin-bottom: 10px;
    }

    .col-md-8 h5 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .col-md-8 p {
        font-size: 0.875rem;
    }

    /* Address and Contact Section */
    .col-md-4 {
        text-align: center;
    }

    .address-block h5 {
        font-size: 1rem;
    }

    .address-block p {
        font-size: 0.75rem;
        line-height: 1.3;
        margin-bottom: 0.5rem;
    }

    .powered-by {
        margin: 0 auto;
        font-size: 0.875rem;
        width: 60%;
        
    }

    .powered-by img {
        height: 30px;
    }

    .sera {
        font-size: 1.5rem;
        margin-left: 0.25rem !important;
    }
}
</style>