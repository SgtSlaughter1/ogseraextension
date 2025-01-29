<template>
  <div class="registration-step-three row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-5">
      <img src="@/assets/TSP Registration/image 03 .png" alt="Registration Image" class="registration-image"
        width="100%" height="100%">
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-7 p-0 m-0">
      <ProgressBar :current-step="3" :total-steps="4" />

      <div class="form-content p-0 ">
        <div class="form-shadow my-4">
          <h2 class="info-title p-0 m-4 mt-2">Equipment</h2>
          <form @submit.prevent="submitForm">
            <!-- First Equipment Section -->
            <div class="equipment-section first mb-4">
              <div class="form-group mrt mb-2">
                <div class="d-flex ">
                  <label for="equipment1" class="mb-2">Name of equipment</label>
                  <div v-if="errors.equipment1Name" class="error">{{ errors.equipment1Name }}</div>
                </div>
                <select class="form-select" v-model="formData.equipment1.name" required>
                  <option value="" disabled selected>Select Category</option>
                  <option value="equipment1">Equipment 1</option>
                  <option value="equipment2">Equipment 2</option>
                  <option value="equipment3">Equipment 3</option>
                </select>
              </div>

              <div class="form-group mb-2">
                <div class="d-flex ">
                <label for="quantity1">Quantity</label>
                <div v-if="errors.equipment1Quantity" class="error ms-5">{{ errors.equipment1Quantity }}</div>
              </div>
                <input type="number" class="form-control" v-model.number="formData.equipment1.quantity"
                  placeholder="Enter quantity" required min="1" />
              </div>

              <div class="form-group  mb-2">
                <div class="d-flex ">
                <label for="available1">Available equipment</label>
                <div v-if="errors.equipment1Available" class="error ms-5">{{ errors.equipment1Available }}</div>
                </div>
                <input type="number" class="form-control" v-model.number="formData.equipment1.available"
                  placeholder="Enter available quantity" required min="0" />
              </div>
            </div>

            <!-- Second Equipment Section -->
            <div class="equipment-section second mb-4">
              <div class="form-group mb-2 ">
                <div class="d-flex ">
                <label for="equipment2">Name of equipment</label>
                <div v-if="errors.equipment2Name" class="error ms-5">{{ errors.equipment2Name }}</div>
                </div>
                <select class="form-select select2" v-model="formData.equipment2.name" required>
                  <option value="" disabled selected>Select Category</option>
                  <option value="equipment1">Equipment 1</option>
                  <option value="equipment2">Equipment 2</option>
                  <option value="equipment3">Equipment 3</option>
                </select>
              </div>

            <div class="form-group select2 mb-2">
              <div class="d-flex ">
                <label for="quantity2">Quantity</label>
                <div v-if="errors.equipment2Quantity" class="error ms-5">{{ errors.equipment2Quantity }}</div>
                </div>
                <input type="number" class="form-control" v-model.number="formData.equipment2.quantity"
                  placeholder="Enter quantity" required min="1" />
              </div>

              <div class="form-group select2 mb-2">
                <div class="d-flex ">
                <label for="available2">Available equipment</label> 
                <div v-if="errors.equipment2Available" class="error ms-5">{{ errors.equipment2Available }}</div>
                </div>
                <input type="number" class="form-control" v-model.number="formData.equipment2.available"
                  placeholder="Enter available quantity" required min="0" />
              </div>
            </div>
          </form>
        </div>

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
        equipment1: {
          name: '',
          quantity: '',
          available: ''
        },
        equipment2: {
          name: '',
          quantity: '',
          available: ''
        }
      },
      errors: {}
    }
  },

  mounted() {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0);
  },
  watch: {
    // Watch for changes in form fields and validate them
    'formData.equipment1.name'() {
      this.validateField('equipment1Name')
    },
    'formData.equipment1.quantity'() {
      this.validateField('equipment1Quantity')
    },
    'formData.equipment1.available'() {
      this.validateField('equipment1Available')
    },
    'formData.equipment2.name'() {
      this.validateField('equipment2Name')
    },
    'formData.equipment2.quantity'() {
      this.validateField('equipment2Quantity')
    },
    'formData.equipment2.available'() {
      this.validateField('equipment2Available')
    }
  },

  methods: {
    // Navigate back to previous step
    goBack() {
      this.$router.push({ name: 'registration-step-2' })
    },

    // Clear error for a specific field
    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    },

    // Validate individual form fields
    validateField(field) {
      switch (field) {
        case 'equipment1Name':
          if (!this.formData.equipment1.name) {
            this.errors.equipment1Name = 'Equipment name is required'
          } else {
            this.clearError('equipment1Name')
          }
          break
        case 'equipment1Quantity':
          if (!this.formData.equipment1.quantity) {
            this.errors.equipment1Quantity = 'Quantity is required'
          } else if (this.formData.equipment1.quantity < 1) {
            this.errors.equipment1Quantity = 'Quantity must be at least 1'
          } else {
            this.clearError('equipment1Quantity')
          }
          break
        case 'equipment1Available':
          if (this.formData.equipment1.available === '') {
            this.errors.equipment1Available = 'Available equipment is required'
          } else if (this.formData.equipment1.available < 0) {
            this.errors.equipment1Available = 'Available equipment cannot be negative'
          } else if (this.formData.equipment1.available > this.formData.equipment1.quantity) {
            this.errors.equipment1Available = 'Available equipment cannot exceed total quantity'
          } else {
            this.clearError('equipment1Available')
          }
          break
        case 'equipment2Name':
          if (!this.formData.equipment2.name) {
            this.errors.equipment2Name = 'Equipment name is required'
          } else {
            this.clearError('equipment2Name')
          }
          break
        case 'equipment2Quantity':
          if (!this.formData.equipment2.quantity) {
            this.errors.equipment2Quantity = 'Quantity is required'
          } else if (this.formData.equipment2.quantity < 1) {
            this.errors.equipment2Quantity = 'Quantity must be at least 1'
          } else {
            this.clearError('equipment2Quantity')
          }
          break
        case 'equipment2Available':
          if (this.formData.equipment2.available === '') {
            this.errors.equipment2Available = 'Available equipment is required'
          } else if (this.formData.equipment2.available < 0) {
            this.errors.equipment2Available = 'Available equipment cannot be negative'
          } else if (this.formData.equipment2.available > this.formData.equipment2.quantity) {
            this.errors.equipment2Available = 'Available equipment cannot exceed total quantity'
          } else {
            this.clearError('equipment2Available')
          }
          break
      }
    },

    // Validate all form fields
    validateForm() {
      const fields = [
        'equipment1Name',
        'equipment1Quantity',
        'equipment1Available',
        'equipment2Name',
        'equipment2Quantity',
        'equipment2Available'
      ]
      fields.forEach(field => {
        this.validateField(field)
      })
    },

    // Submit form if validation passes
    submitForm() {
      this.validateForm()

      if (Object.keys(this.errors).length === 0) {
        this.$emit('step-completed', this.formData)
        this.$router.push({ name: 'registration-step-4' })
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
.registration-step-three {
  display: flex;
  width: 100%;
  height: auto;
  background: #edf0f9;
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
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 2rem;
}

.first {
  width: 100%;
margin: 0 auto;
padding: 0.6rem; 
background-color: #7FFF7F1F;
}

.second{
  background: #D4FF7F1F;
}

.info-title {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  color: #333;
  padding: 0rem 3.7rem;
  font-weight: 400;
}

.form-group {
  height: auto;
  margin: 0;
}

.form-select {
  background-color: #edf0f9;
}
.select2 {
  background: #D4FF7F1F;
}

.form-shadow {
  background-color: #FFF;
  padding: 0;
  width: 84%;
  margin: 0 auto;
}

input {
  background-color: #edf0f9;
  width: 100%;
}

input:focus {
  background-color: #edf0f9;
}

.select2 > input {
  background: #D4FF7F1F;

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
.d-flex {
  justify-content: space-between;
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

.equipment-section{
  width: 90%;
  margin: 0 auto;
  padding: 0.6rem;
  /* border: 1px solid red; */
}

/* Responsive Design */
@media (max-width: 992px) {
  .registration-step-three {
    flex-direction: column;
    height: auto;
  }

  .image-section {
    height: 300px;
  }

  .form-section {
    height: auto;
  }

  .form-content {
    padding: 1.5rem;
  }

  .form-group {
    padding-left: 1.5rem;
  }

  .info-title {
    padding: 0 1.5rem;
  }
}

@media (max-width: 576px) {
  .form-content {
    padding: 1rem;
  }

  .form-group {
    padding-left: 1rem;
  }

  .info-title {
    padding: 0 1rem;
  }

  .navigation-buttons {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
