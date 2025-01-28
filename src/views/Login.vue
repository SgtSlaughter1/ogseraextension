<template>
  <div class="login-container">
    <div class="row g-0">
      <!-- Left side with image and overlay -->
      <div class="col-lg-6 d-none d-lg-block position-relative">
        <div>
          <img 
            src="../assets/login/Login .png"
            alt="Tailor at work"
            class="img-fluid h-100 w-100 object-fit-cover"
          />
          <div class="overlay-content text-white">
            <h1 class="display-4 fw-light mb-0">Ogun Skills</h1>
            <h1 class="display-4 fw-light">Qualifications</h1>
          </div>
        </div>
      </div>

      <!-- Right side with login form -->
      <div class="col-lg-6">
        <div class="login-form-container p-4 p-lg-5">
          <div class="text-center mb-4">
            <img 
              src="../assets/Home/logo .png"
              alt="GSQ Logo"
              class="img-fluid mb-3"
            />
            <h2 class="mb-0">Login to <span class="text-success">OG</span><span class="text-warning">SG </span>Account</h2>
          </div>

          <form class="mt-5">
            <div class="mb-4">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control bg-light" 
                id="email"
                placeholder="email@gmail.com"
              />
            </div>

            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input 
                type="password" 
                class="form-control bg-light" 
                id="password"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="keepLoggedIn"
                />
                <label class="form-check-label" for="keepLoggedIn">
                  Keep me Logged in
                </label>
              </div>
              <a href="#" class="text-warning text-decoration-none">Recover Password</a>
            </div>

            <CustomButton 
              variant="success" 
              size="lg"
              label="Login"
              class="w-100"
            />
          </form>

          <div class="powered-by mt-3">
            <span class="me-2 text-dark">Powered by</span>
            <img src="/src/assets/Home/Ogun 1.png" alt="GSERA Logo" height="30">
            <span class="ms-1 fw-bold fs-6">GSERA</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'LoginView',
  components: {
    CustomButton
  }
}
</script>

<style scoped>
.login-container {
  width: 90%;
  margin: 0 auto;
  background-color: #118E34;
  padding: 10px 5px;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

.form-control {
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
}

.form-control:focus {
  box-shadow: none;
  border-color: #14833D;
}

.btn-success {
  background-color: #14833D;
  border: none;
}

.btn-success:hover {
  background-color: #116f33;
}

.login-form-container {
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #118E34;
  border-radius: 10px;

}
</style>