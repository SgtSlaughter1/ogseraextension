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
            <div class="input-group  mb-3">
              <span class="input-group-text">Name</span>
              <input 
                type="text" 
                class="form-control" 
                v-model="formData.name" 
                placeholder="Enter your full name"
                required
              />
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Years of Experience</span>
              <input 
                type="number" 
                class="form-control" 
                v-model.number="formData.experience" 
                min="0" 
                max="50" 
                placeholder="Enter years of experience"
                required
              />
              <span v-if="errors.experience" class="error">{{ errors.experience }}</span>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Position</span>
              <select 
                class="form-select" 
                v-model="formData.position" 
                required
              >
                <option value="" disabled>Select Position</option>
                <option value="manager">Manager</option>
                <option value="facilitator">Facilitator</option>
              </select>
              <span v-if="errors.position" class="error">{{ errors.position }}</span>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Employment Type</span>
              <select 
                class="form-select" 
                v-model="formData.employmentType" 
                required
              >
                <option value="" disabled>Select Employment Type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
              </select>
              <span v-if="errors.employmentType" class="error">{{ errors.employmentType }}</span>
            </div>

            <div class="qualifications-section p-3 rounded mb-3">
              <div class="row">
                <div class="col text-end">
                  <button 
                    type="button" 
                    class="btn btn-success btn-sm"
                    @click="addMoreQualification"
                  >
                    + Add More
                  </button>
                </div>
              </div>
              <div v-for="(qualification, index) in formData.qualifications" :key="index" class="position-relative mb-3">
                <button 
                  v-if="formData.qualifications.length > 1"
                  type="button" 
                  class="btn btn-sm text-danger position-absolute top-0 end-0 m-1"
                  @click="removeQualification(index)"
                  style="z-index: 10;"
                >
                  <i class="bi bi-trash"></i>
                </button>
                
                <div class="row">
                  <div class="col-md-6">
                    <label :for="`qualification-${index}`" class="form-label">Qualification</label>
                    <input 
                      :id="`qualification-${index}`"
                      type="text" 
                      class="form-control" 
                      v-model="qualification.name" 
                      placeholder="Enter your qualification"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label :for="`date-${index}`" class="form-label">Date</label>
                    <input 
                      :id="`date-${index}`"
                      type="date" 
                      class="form-control" 
                      v-model="qualification.date" 
                      required
                    />
                  </div>
                </div>
              </div>
              
              
            </div>

            <h6>Documentation</h6>
            <div class="documentation p-3 rounded mb-3">
              <small class="d-block mb-3">Extension: <span class="text-danger">pdf*docx*jpeg*png</span></small>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cvUpload" class="form-label">Upload CV</label>
                  <input 
                    id="cvUpload"
                    type="file" 
                    class="form-control" 
                    @change="handleFileUpload('cv', $event)"
                    accept=".pdf,.docx,.jpeg,.png" 
                    required
                  />
                  <span v-if="errors.cv" class="error">{{ errors.cv }}</span>
                </div>

                <div class="col-md-6 mb-3">
                  <label for="degreeUpload" class="form-label">Upload Highest Degree</label>
                  <input 
                    id="degreeUpload"
                    type="file" 
                    class="form-control" 
                    @change="handleFileUpload('degree', $event)"
                    accept=".pdf,.docx,.jpeg,.png" 
                    required
                  />
                  <span v-if="errors.degree" class="error">{{ errors.degree }}</span>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="employmentUpload" class="form-label">Upload Employment Letter</label>
                  <input 
                    id="employmentUpload"
                    type="file" 
                    class="form-control" 
                    @change="handleFileUpload('employment', $event)"
                    accept=".pdf,.docx,.jpeg,.png" 
                    required
                  />
                  <span v-if="errors.employment" class="error">{{ errors.employment }}</span>
                </div>

                <div class="col-md-6 mb-3">
                  <label for="previousExperienceUpload" class="form-label">Previous Work Experience</label>
                  <input 
                    id="previousExperienceUpload"
                    type="file" 
                    class="form-control" 
                    @change="handleFileUpload('previousExperience', $event)"
                    accept=".pdf,.docx,.jpeg,.png" 
                    required
                  />
                  <span v-if="errors.previousExperience" class="error">{{ errors.previousExperience }}</span>
                </div>
              </div>
            </div>

            <div class="small mb-3">
              <p class="mb-1">i. Professional Work Experience in the relevant Industry will be encouraged</p>
              <p class="mb-0">ii. Copy of C.V, Highest Degree, Current Employment Letter & Copy of Previous Work experience must be attached</p>
            </div>

            <div class="d-flex justify-content-end">
              <button 
                type="submit" 
                class="btn btn-success btn-sm px-3" 
                :disabled="isSubmitting"
              >
                {{ isEditing ? 'Update Staff' : 'Add Staff' }}
              </button>
            </div>
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
        qualifications: [
          {
            name: "",
            date: ""
          }
        ],
        cv: null,
        degree: null,
        employment: null,
        previousExperience: null,
      },
      errors: {
        name: "",
        experience: "",
        position: "",
        employmentType: "",
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

      // File validations
      const fileFields = ['cv', 'degree', 'employment', 'previousExperience'];
      fileFields.forEach(field => {
        if (!this.formData[field]) {
          this.errors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
          isValid = false;
        }
      });

      // Qualifications validation
      if (this.formData.qualifications.length === 0 || !this.formData.qualifications[0].name || !this.formData.qualifications[0].date) {
        this.errors.qualifications = "At least one qualification is required";
        isValid = false;
      }

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
        qualifications: this.formData.qualifications,
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
        qualifications: [
          {
            name: "",
            date: ""
          }
        ],
        cv: null,
        degree: null,
        employment: null,
        previousExperience: null,
      };
      
      // Reset errors
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = "";
      });

      this.isSubmitting = false;
    },
    addMoreQualification() {
      this.formData.qualifications.push({
        name: "",
        date: ""
      });
    },
    removeQualification(index) {
      this.formData.qualifications.splice(index, 1);
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
/* Base Styles */
.input-group {
  margin-bottom: 1rem;
  width: 100%;
}

.input-group-text {
  min-width: 120px;
  text-align: left;
  white-space: normal;
  word-break: break-word;
}

.qualifications-section{
  background-color: #F7FEFE;
}

.input-group .form-control {
  flex-grow: 1;
}

.error {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

/* Modal Specific Styles */
.modal-dialog {
  max-width: 800px;
}

.modal-body {
  padding: 1.5rem;
}

/* Responsive Breakpoints */
@media screen and (max-width: 992px) {
  .modal-dialog {
    max-width: 95%;
    margin: 1.75rem auto;
  }

  .input-group {
    flex-direction: column;
  }

  .input-group-text {
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }

  .input-group .form-control,
  .input-group .form-select {
    width: 100%;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .row .col {
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .modal-body {
    padding: 1rem;
  }

  .input-group-text {
    font-size: 0.9rem;
  }

  .input-group .form-control,
  .input-group .form-select {
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
    width: 100%;
  }

  .documentation {
    padding: 0.75rem !important;
  }

  .modal-header {
    padding: 1rem;
  }

  .modal-title {
    font-size: 1.1rem;
  }
}

/* File Input Specific Styles */
input[type="file"]::file-selector-button {
  background-color: #D9D9D9;
  color: #333;
  cursor: pointer;
  margin-right: 1rem;
}

/* Documentation Section */
.documentation {
  background-color: #F7FEFE;
  border-radius: 0.25rem;
  padding: 1rem;
}

/* Error Handling */
.error {
  color: #dc3545;
  font-size: 0.8rem;
  display: block;
  margin-top: 0.5rem;
}

/* Accessibility and Focus States */
.input-group .form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>