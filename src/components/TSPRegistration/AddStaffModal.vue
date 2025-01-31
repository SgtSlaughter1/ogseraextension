<template>
  <!-- Modal -->
  <div class="modal fade" :class="{ 'show d-block': isOpen }" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? "Edit Staff" : "Add Staff details here" }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="input-box mb-3">
              <label class="label">Name</label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="formData.name" 
                  required
                />
              </div>
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div class="input-box mb-3">
              <label class="label">Years of Experience</label>
              <div class="input-wrapper">
                <input 
                  type="number" 
                  class="form-control" 
                  v-model.number="formData.experience" 
                  min="0" 
                  max="50" 
                  required
                />
              </div>
              <span v-if="errors.experience" class="error">{{ errors.experience }}</span>
            </div>

            <div class="input-box mb-3">
              <label class="label">Position</label>
              <div class="input-wrapper">
                <select 
                  class="form-select" 
                  v-model="formData.position" 
                  required
                >
                  <option value="" disabled>Select Position</option>
                  <option value="manager">Manager</option>
                  <option value="facilitator">Facilitator</option>
                </select>
              </div>
              <span v-if="errors.position" class="error">{{ errors.position }}</span>
            </div>

            <div class="input-box mb-3">
              <label class="label">Employment Type</label>
              <div class="input-wrapper">
                <select 
                  class="form-select" 
                  v-model="formData.employmentType" 
                  required
                >
                  <option value="" disabled>Select Employment Type</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                </select>
              </div>
              <span v-if="errors.employmentType" class="error">{{ errors.employmentType }}</span>
            </div>

            <div class="row mb-3">
              <div class="col">
                <div class="input-box">
                  <label class="label">Qualification</label>
                  <div class="input-wrapper">
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="formData.qualification" 
                      required
                    />
                  </div>
                  <span v-if="errors.qualification" class="error">{{ errors.qualification }}</span>
                </div>
              </div>
              <div class="col">
                <div class="input-box">
                  <label class="label">Date</label>
                  <div class="input-wrapper">
                    <input 
                      type="date" 
                      class="form-control" 
                      v-model="formData.date" 
                      required
                    />
                  </div>
                  <span v-if="errors.date" class="error">{{ errors.date }}</span>
                </div>
              </div>
            </div>
            <h6>Documentation</h6>
            <div class="documentation p-3 rounded mb-3">
              
              <small class="d-block mb-3">Extension: <span class="text-danger">pdf*docx*jpeg*png</span></small>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="input-box">
                    <label class="label fw-bold">Upload CV</label>
                    <div class="input-wrapper">
                      <input 
                        type="file" 
                        class="form-control" 
                        @change="handleFileUpload('cv', $event)"
                        accept=".pdf,.docx,.jpeg,.png" 
                        required
                      />
                    </div>
                    <span v-if="errors.cv" class="error">{{ errors.cv }}</span>
                  </div>
                </div>

                <div class="col-md-6 mb-3">
                  <div class="input-box">
                    <label class="label fw-bold">Upload Highest Degree</label>
                    <div class="input-wrapper">
                      <input 
                        type="file" 
                        class="form-control" 
                        @change="handleFileUpload('degree', $event)"
                        accept=".pdf,.docx,.jpeg,.png" 
                        required
                      />
                    </div>
                    <span v-if="errors.degree" class="error">{{ errors.degree }}</span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="input-box">
                    <label class="label fw-bold">Upload Employment Letter</label>
                    <div class="input-wrapper">
                      <input 
                        type="file" 
                        class="form-control" 
                        @change="handleFileUpload('employment', $event)"
                        accept=".pdf,.docx,.jpeg,.png" 
                        required
                      />
                    </div>
                    <span v-if="errors.employment" class="error">{{ errors.employment }}</span>
                  </div>
                </div>

                <div class="col-md-6 mb-3">
                  <div class="input-box">
                    <label class="label fw-bold">Previous Work Experience</label>
                    <div class="input-wrapper">
                      <input 
                        type="file" 
                        class="form-control" 
                        @change="handleFileUpload('previousExperience', $event)"
                        accept=".pdf,.docx,.jpeg,.png" 
                        required
                      />
                    </div>
                    <span v-if="errors.previousExperience" class="error">{{ errors.previousExperience }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="small mb-3">
              <p class="mb-1">i. Professional Work Experience in the relevant Industry will be encouraged</p>
              <p class="mb-0">ii. Copy of C.V, Highest Degree, Current Employment Letter & Copy of Previous Work experience must be attached</p>
            </div>

            <button type="submit" class="btn btn-success w-100" :disabled="isSubmitting">
              {{ isEditing ? 'Update Staff' : 'Add Staff' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal backdrop -->
  <div class="modal-backdrop fade show" v-if="isOpen" @click="closeModal"></div>
</template>

<script>
export default {
  name: "AddStaffModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    editingStaff: {
      type: Object,
      default: null,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        name: "",
        experience: null,
        position: "",
        employmentType: "",
        qualification: "",
        date: "",
        cv: null,
        degree: null,
        employment: null,
        previousExperience: null
      },
      errors: {
        name: "",
        experience: "",
        position: "",
        employmentType: "",
        qualification: "",
        date: "",
        cv: "",
        degree: "",
        employment: "",
        previousExperience: ""
      },
      isSubmitting: false,
    };
  },
  methods: {
    closeModal() {
      this.resetForm();
      this.$emit("close");
    },
    handleFileUpload(fileType, event) {
      const file = event.target.files[0];
      this.formData[fileType] = file;
      this.errors[fileType] = file ? "" : "File is required";
    },
    validateForm() {
      // Reset errors
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = "";
      });

      // Validate each field
      let isValid = true;

      if (!this.formData.name) {
        this.errors.name = "Name is required";
        isValid = false;
      }

      if (this.formData.experience === null || this.formData.experience < 0) {
        this.errors.experience = "Valid experience is required";
        isValid = false;
      }

      if (!this.formData.position) {
        this.errors.position = "Position is required";
        isValid = false;
      }

      if (!this.formData.employmentType) {
        this.errors.employmentType = "Employment type is required";
        isValid = false;
      }

      if (!this.formData.qualification) {
        this.errors.qualification = "Qualification is required";
        isValid = false;
      }

      if (!this.formData.date) {
        this.errors.date = "Date is required";
        isValid = false;
      }

      // File validations
      const fileFields = ['cv', 'degree', 'employment', 'previousExperience'];
      fileFields.forEach(field => {
        if (!this.formData[field]) {
          this.errors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
          isValid = false;
        }
      });

      return isValid;
    },
    submitForm() {
      if (this.isSubmitting) return;

      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      // Prepare staff data
      const staffData = {
        name: this.formData.name.trim(),
        experience: this.formData.experience,
        position: this.formData.position,
        employmentType: this.formData.employmentType,
        qualification: this.formData.qualification,
        date: this.formData.date,
        files: {
          cv: this.formData.cv,
          degree: this.formData.degree,
          employment: this.formData.employment,
          previousExperience: this.formData.previousExperience
        }
      };

      // Emit form data
      this.$emit('submit', staffData);
      this.closeModal();

      setTimeout(() => {
        this.isSubmitting = false;
      }, 300);
    },
    resetForm() {
      this.formData = {
        name: "",
        experience: null,
        position: "",
        employmentType: "",
        qualification: "",
        date: "",
        cv: null,
        degree: null,
        employment: null,
        previousExperience: null
      };
      
      // Reset errors
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = "";
      });

      this.isSubmitting = false;
    },
  },
  mounted() {
    this.resetForm();
  },
  watch: {
    editingStaff(newVal) {
      if (newVal) {
        this.formData = { ...newVal };
      }
    },
    isOpen(newVal) {
      if (!newVal) {
        this.resetForm();
      } else if (this.editingStaff) {
        this.formData = { ...this.editingStaff };
      }
    },
  },
};
</script>

<style scoped>
.input-box {
  flex: 1;
  display: flex;
  align-items: stretch;
  gap: 0;
  position: relative;
  border: 1px solid black;
}

.input-box label {
  color: #333;
  font-size: 12px;
  word-wrap: break-word;
  width: 40%;
  background-color: #E9FDFC;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  border-right: 1px solid black;
}

.input-wrapper {
  flex: 1;
  background: #fff;
  padding: 0.25rem;
  border-radius: 0 1px 1px 0;
  border: 1px solid #e0e0e0;
  border-left: none;
  display: flex;
  align-items: center;
}

.label {
  width: 10%;
}

.input-wrapper input,
.input-wrapper select {
  width: 100%;
  padding: 0.5rem;
  border: none;
  background: transparent;
  outline: none;
  height: 40px;
  box-shadow: none;
}

.input-wrapper input:focus,
.input-wrapper select:focus {
  background: white;
  border: none;
  outline: none;
  box-shadow: none;
}

.input-box .error {
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  font-size: 0.8rem;
  color: #dc3545;
}

.modal-header {
  background-color: #D9D9D9;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

input[type="file"]::file-selector-button {
  background-color: #D9D9D9;
  color: #333;
  cursor: pointer;
}

.documentation {
  background-color: #F7FEFE;
}

@media screen and (max-width: 768px) {
  .modal-dialog {
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
  }

  .modal-content {
    height: 100%;
    border-radius: 0;
  }

  .input-box {
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 1rem;
  }

  .input-box label {
    width: 100%;
    padding: 0.5rem;
    border-right: none;
    border-bottom: 1px solid black;
  }

  .input-wrapper {
    width: 100%;
    border-left: 1px solid black;
    border-top: none;
  }

  .row {
    flex-direction: column;
  }

  .row .col {
    margin-bottom: 1rem;
  }

  .modal-body {
    padding: 1rem;
    overflow-y: auto;
    max-height: calc(100vh - 100px);
  }

  .bg-light {
    padding: 1rem !important;
  }

  .small {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 480px) {
  .input-box label {
    font-size: 0.8rem;
  }

  .input-wrapper input,
  .input-wrapper select {
    font-size: 0.9rem;
    padding: 0.3rem;
  }

  .modal-header {
    padding: 0.5rem;
  }

  .modal-title {
    font-size: 1rem;
  }

  .btn-success {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}
</style>