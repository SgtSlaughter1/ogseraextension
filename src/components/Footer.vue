<template>
    <footer class="footer mt-auto py-4">
        <div class="container p-2">
            <div class="row align-items-center">
                <!-- Logo and Description -->
                <div class="col-md-8">
                    <div class=" container align-items-center mb-3">
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

/* @media (max-width: 768px) {
    .col-md-6 {
        text-align: center !important;
        margin-bottom: 1rem;
    }
    
    .powered-by {
        margin-top: 2rem;
        margin-bottom: 70px !important;
    }

    .container {
        height: auto;
    }
    .footer{
        padding-left: 25px !important;
    }
} */
</style>