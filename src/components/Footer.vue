<template>
    <footer class="footer mt-auto py-4">
        <div class="container">
            <div class="row align-items-center">
                <!-- Logo and Description -->
                <div class="col-md-8">
                    <div class="align-items-center mb-3">
                        <img src="/src/assets/Home/logo .png" alt="GSQ Logo" height="60" class="me-3">
                        <div class="mt-2">
                            <h5 class="mb-1">Ogun State Skills Qualification</h5>
                            <p class="mb-0 text-muted">Equipping you with Skills for the Future</p>
                        </div>
                    </div>
                </div>

                <!-- Address and Contact -->
                <div class="col-md-4 ">
                    <div class="address-block">
                        <h5>Address</h5>
                        <p class="mb-1">Ministry of Education, Science and Technology,</p>
                        <p class="mb-2">Governor's Office, Oke Mosan, Abeokuta.</p>
                        <a class="text-success text-decoration-none">
                            moest@ogunstate.gov.ng
                        </a>
                    </div>
                    <div class="powered-by mt-3">
                        <span class="me-2 text-dark">Powered by</span>
                        <img src="/src/assets/Home/Ogun 1.png" alt="GSERA Logo" height="30">
                        <span class="ms-1 fw-bold fs-6">GSERA</span>
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
    border-top: 1px solid #e0e0e0;
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

@media (max-width: 768px) {
    .col-md-6 {
        text-align: center !important;
        margin-bottom: 1rem;
    }
    
    .powered-by {
        margin-top: 1.5rem;
    }
}
</style>