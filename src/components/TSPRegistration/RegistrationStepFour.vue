<template>
  <div class="registration-step-four row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-5">
      <img src="@/assets/TSP Registration/image 01.png" alt="Registration Image" class="registration-image" width="100%" height="100%">
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-7 p-0 m-0">
      <ProgressBar :current-step="4" :total-steps="4" />
      <div class="form-content">
        <h2 class="info-title">Review Your Information</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <p>Name: {{ name }}</p>
          </div>

          <div class="form-group mb-3">
            <p>Email: {{ email }}</p>
          </div>

          <div class="form-group mb-3">
            <p>Address: {{ address }}</p>
          </div>

          <div class="form-group mb-3">
            <p>City: {{ city }}</p>
          </div>

          <div class="form-group mb-3">
            <p>Phone: {{ phone }}</p>
          </div>
        </form>
        <div class="navigation-buttons">
          <button type="button" class="btn btn-outline-success" @click="goBack">
            <img src="@/assets/TSP Registration/icon/arrowleft.png" alt="Back" class="arrow-icon me-2"> Back
          </button>
          <button type="submit" class="btn btn-suces" @click="submitForm">
            Complete Registration <img src="@/assets/TSP Registration/icon/arrowright.png" alt="Next" class="arrow-icon ms-2">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
  props: {
    name: String,
    email: String,
    address: String,
    city: String,
    phone: String,
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'registration-step-3' })
    },
    submitForm() {
      // Emit the complete event with all the registration data
      this.$emit('registration-complete', {
        name: this.name,
        email: this.email,
        address: this.address,
        city: this.city,
        phone: this.phone
      })
      
      // Navigate to success page or home
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

.registration-step-four {
  display: flex;
  width: 100%;
  height: auto;
  background: white;
  margin: 0;
  padding: 0;
}

.form-section {
  flex: 1.3;
  display: flex;
  flex-direction: column;
  background-color: #edf0f9;
  height: 100%;
}

.form-content {
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.info-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  padding: 0rem 3.7rem;
}

.form-group {
  margin-bottom: 0 !important;
  height: auto;
  margin: 0;
  padding-left: 3.7rem;
}

input {
  background-color: #edf0f9;
  width: 100%;
}

input:focus {
  background-color: #edf0f9;
}

.form-control {
  padding: 0.75rem;
  border: 1px solid #393939;
  border-radius: 4px;
  background-color: #edf0f9;
}

.error {
  color: red;
  font-size: 0.8rem;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 5rem;
  background: #edf0f9;
  border-top: 1px solid #eee;
}

.btn {
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline-success {
  border-color: #28a745;
  color: #118E34;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.btn-suces {
  background-color: #118E34;
  color: white;
  border-color: #28a745;
}

.btn-suces:hover {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 992px) {
  .registration-step-four {
    flex-direction: column;
  }
}
</style>
