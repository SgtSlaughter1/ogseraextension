<template>
  <div class="registration-step-three row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-5">
      <img src="@/assets/TSP Registration/image 01.png" alt="Registration Image" class="registration-image" width="100%" height="100%">
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-7 p-0 m-0">
      <ProgressBar :current-step="3" :total-steps="4" />
      <div class="form-content">
        <h2 class="info-title">Additional Information</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <label for="requirement1">Requirement 1</label>
            <input 
              type="text" 
              id="requirement1"
              class="form-control" 
              v-model="formData.requirement1"
              required
            />
            <span v-if="errors.requirement1" class="error">{{ errors.requirement1 }}</span>
          </div>
          <div class="form-group mb-3">
            <label for="requirement2">Requirement 2</label>
            <input 
              type="text" 
              id="requirement2"
              class="form-control" 
              v-model="formData.requirement2"
              required
            />
            <span v-if="errors.requirement2" class="error">{{ errors.requirement2 }}</span>
          </div>
        </form>
        <div class="navigation-buttons">
          <button type="button" class="btn btn-outline-success" @click="goBack">
            <img src="@/assets/TSP Registration/icon/arrowleft.png" alt="Back" class="arrow-icon me-2"> Back
          </button>
          <button type="submit" class="btn btn-suces" @click="submitForm">
            Next <img src="@/assets/TSP Registration/icon/arrowright.png" alt="Next" class="arrow-icon ms-2">
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
  data() {
    return {
      formData: {
        requirement1: '',
        requirement2: ''
      },
      errors: {}
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'registration-step-2' })
    },
    submitForm() {
      this.errors = {}
      
      // Validate form fields
      if (!this.formData.requirement1) {
        this.errors.requirement1 = 'This field is required'
      }
      if (!this.formData.requirement2) {
        this.errors.requirement2 = 'This field is required'
      }

      // If no errors, proceed to next step
      if (Object.keys(this.errors).length === 0) {
        this.$emit('step-completed', this.formData)
        this.$router.push({ name: 'registration-step-4' })
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}

.registration-step-three {
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
  .registration-step-three {
    flex-direction: column;
  }
}
</style>
