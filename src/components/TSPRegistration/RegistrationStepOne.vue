<template>
  <div class="registration-step-one row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-lg-6 d-none d-lg-block">
      <img
        src="@/assets/TSP Registration/image 01.png"
        alt="Registration Image"
        class="registration-image"
        width="100%"
        height="100%"
      />
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-lg-6 p-0 m-0">
      <ProgressBar :current-step="1" :total-steps="4" />
      <div class="form-content">
        <!-- Organization Info Section -->
        <div class="form-shadow my-3">
          <h2 class="info-title p-0 m-4 mt-2">Organization Info</h2>
          <div class="form-container p-4">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formData.organizationName"
                  placeholder="Organisation Name"
                  required
                />
                <span v-if="errors.organizationName" class="error">{{
                  errors.organizationName
                }}</span>
              </div>

              <div class="form-group">
                <input
                  type="tel"
                  class="form-control"
                  v-model.trim="formData.phoneNumber"
                  placeholder="Phone Number"
                  required
                />
                <span v-if="errors.phoneNumber" class="error">{{
                  errors.phoneNumber
                }}</span>
              </div>

              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  v-model.trim="formData.emailAddress"
                  placeholder="Email Address"
                  required
                />
                <span v-if="errors.emailAddress" class="error">{{
                  errors.emailAddress
                }}</span>
              </div>

              <div class="form-group">
                <select
                  class="form-select"
                  v-model="formData.organizationType"
                  required
                >
                  <option value="" disabled selected>Organisation Type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </select>
                <span v-if="errors.organizationType" class="error">{{
                  errors.organizationType
                }}</span>
              </div>

              <div class="form-group">
                <select
                  class="form-select"
                  v-model="formData.localGovernment"
                  required
                >
                  <option value="" disabled selected>Local Government</option>
                  <option value="lg1">Local Government 1</option>
                  <option value="lg2">Local Government 2</option>
                  <option value="lg3">Local Government 3</option>
                </select>
                <span v-if="errors.localGovernment" class="error">{{
                  errors.localGovernment
                }}</span>
              </div>
            </form>
          </div>
        </div>

        <!-- Organization Admin Section -->
        <div class="form-shadow my-4">
          <h2 class="info-title p-0 m-4 mt-2">Organization Coordinator</h2>
          <div class="alert alert-info info-sec d-flex mx-4 mt-0 mb-3">
            <div class="mr-2">
              <small>
                <svg
                  class="info-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </small>
            </div>
            <div>
              This account will be use to login for your organization and
              default password: 12345678
            </div>
          </div>

          <div class="admin-form-container p-4">
            <!-- Row 1: First Name and Last Name -->
            <div class="admin-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formData.firstName"
                  placeholder="Enter First Name"
                  required
                />
                <span v-if="errors.firstName" class="error">{{
                  errors.firstName
                }}</span>
              </div>

              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formData.lastName"
                  placeholder="Enter Last Name"
                  required
                />
                <span v-if="errors.lastName" class="error">{{
                  errors.lastName
                }}</span>
              </div>
            </div>

            <!-- Row 2: Middle Name and Email -->
            <div class="admin-row">
              <div class="form-group">
                <label for="middleName">Middle Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formData.middleName"
                  placeholder="Enter Middle Name"
                />
                <span v-if="errors.middleName" class="error">{{
                  errors.middleName
                }}</span>
              </div>

              <div class="form-group">
                <label for="adminEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model.trim="formData.adminEmail"
                  placeholder="Enter Email"
                  required
                />
                <span v-if="errors.adminEmail" class="error">{{
                  errors.adminEmail
                }}</span>
              </div>
            </div>

            <!-- Row 3: Gender and Phone -->
            <div class="admin-row">
              <div class="form-group">
                <label for="gender">Gender</label>
                <select class="form-select" v-model="formData.gender" required>
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <span v-if="errors.gender" class="error">{{
                  errors.gender
                }}</span>
              </div>

              <div class="form-group">
                <label for="adminPhone">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  v-model.trim="formData.adminPhone"
                  placeholder="Enter Phone Number"
                  required
                />
                <span v-if="errors.adminPhone" class="error">{{
                  errors.adminPhone
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="navigation-buttons">
          <button type="button" class="btn btn-outline-success" @click="goBack">
            <img
              src="@/assets/TSP Registration/icon/arrowleft.png"
              alt="Back"
              class="arrow-icon me-2"
            />
            Back
          </button>
          <button type="submit" class="btn btn-suces" @click="submitForm">
            Next
            <img
              src="@/assets/TSP Registration/icon/arrowright.png"
              alt="Next"
              class="arrow-icon ms-2"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "RegistrationStepOne",
  components: {
    ProgressBar,
  },
  data() {
    return {
      formData: {
        organizationName: "",
        phoneNumber: "",
        emailAddress: "",
        organizationType: "",
        localGovernment: "",
        lastName: "",
        firstName: "",
        middleName: "",
        adminEmail: "",
        gender: "",
        adminPhone: "",
      },
      errors: {},
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    clearError(field) {
      if (this.errors[field]) {
        this.errors = Object.fromEntries(
          Object.entries(this.errors).filter(([key]) => key !== field)
        );
      }
    },
    validateField(field) {
      switch (field) {
        case "organizationName":
          if (!this.formData.organizationName.trim()) {
            this.errors = {
              ...this.errors,
              organizationName: "Organization name is required",
            };
          } else if (this.formData.organizationName.trim().length < 5) {
            this.errors = {
              ...this.errors,
              organizationName: "Name must be 5 characters long",
            };
          } else {
            this.clearError("organizationName");
          }
          break;
        case "phoneNumber":
          if (!this.formData.phoneNumber.trim()) {
            this.errors = {
              ...this.errors,
              phoneNumber: "Phone number is required",
            };
          } else if (!this.validatePhone(this.formData.phoneNumber)) {
            this.errors = {
              ...this.errors,
              phoneNumber: "Please enter a valid phone number",
            };
          } else {
            this.clearError("phoneNumber");
          }
          break;
        case "emailAddress":
          if (!this.formData.emailAddress.trim()) {
            this.errors = { ...this.errors, emailAddress: "Email is required" };
          } else if (!this.validateEmail(this.formData.emailAddress)) {
            this.errors = {
              ...this.errors,
              emailAddress: "Please enter a valid email",
            };
          } else {
            this.clearError("emailAddress");
          }
          break;
        case "organizationType":
          if (!this.formData.organizationType) {
            this.errors = {
              ...this.errors,
              organizationType: "Organization type is required",
            };
          } else {
            this.clearError("organizationType");
          }
          break;
        case "localGovernment":
          if (!this.formData.localGovernment) {
            this.errors = {
              ...this.errors,
              localGovernment: "Local government is required",
            };
          } else {
            this.clearError("localGovernment");
          }
          break;
        case "lastName":
          if (!this.formData.lastName) {
            this.errors = { ...this.errors, lastName: "Last name is required" };
          } else {
            this.clearError("lastName");
          }
          break;
        case "firstName":
          if (!this.formData.firstName) {
            this.errors = {
              ...this.errors,
              firstName: "First name is required",
            };
          } else {
            this.clearError("firstName");
          }
          break;
        case "adminEmail":
          if (!this.formData.adminEmail) {
            this.errors = { ...this.errors, adminEmail: "Email is required" };
          } else if (!this.validateEmail(this.formData.adminEmail)) {
            this.errors = {
              ...this.errors,
              adminEmail: "Please enter a valid email",
            };
          } else {
            this.clearError("adminEmail");
          }
          break;
        case "gender":
          if (!this.formData.gender) {
            this.errors = { ...this.errors, gender: "Gender is required" };
          } else {
            this.clearError("gender");
          }
          break;
        case "adminPhone":
          if (!this.formData.adminPhone) {
            this.errors = {
              ...this.errors,
              adminPhone: "Phone number is required",
            };
          } else if (!this.validatePhone(this.formData.adminPhone)) {
            this.errors = {
              ...this.errors,
              adminPhone: "Please enter a valid phone number",
            };
          } else {
            this.clearError("adminPhone");
          }
          break;
      }
    },
    validateForm() {
      const fields = [
        "organizationName",
        "phoneNumber",
        "emailAddress",
        "organizationType",
        "localGovernment",
        "lastName",
        "firstName",
        "adminEmail",
        "gender",
        "adminPhone",
      ];
      fields.forEach((field) => this.validateField(field));
    },
    validateAdminFields() {
      let isValid = true;

      if (!this.formData.lastName) {
        this.errors.lastName = "Last name is required";
        isValid = false;
      }
      if (!this.formData.firstName) {
        this.errors.firstName = "First name is required";
        isValid = false;
      }
      if (!this.formData.adminEmail) {
        this.errors.adminEmail = "Email is required";
        isValid = false;
      } else if (!this.validateEmail(this.formData.adminEmail)) {
        this.errors.adminEmail = "Please enter a valid email";
        isValid = false;
      }
      if (!this.formData.gender) {
        this.errors.gender = "Gender is required";
        isValid = false;
      }
      if (!this.formData.adminPhone) {
        this.errors.adminPhone = "Phone number is required";
        isValid = false;
      } else if (!this.validatePhone(this.formData.adminPhone)) {
        this.errors.adminPhone = "Please enter a valid phone number";
        isValid = false;
      }

      return isValid;
    },
    submitForm() {
      this.validateForm();
      const adminValid = this.validateAdminFields();

      if (Object.keys(this.errors).length === 0 && adminValid) {
        this.$emit("step-completed", this.formData);
        this.$router.push({ name: "registration-step-2" });
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validatePhone(phone) {
      const re = /^[0-9]{11}$/;
      return re.test(phone.replace(/\D/g, ""));
    },
  },
  watch: {
    "formData.organizationName"() {
      this.validateField("organizationName");
    },
    "formData.phoneNumber"() {
      this.validateField("phoneNumber");
    },
    "formData.emailAddress"() {
      this.validateField("emailAddress");
    },
    "formData.organizationType"() {
      this.validateField("organizationType");
    },
    "formData.localGovernment"() {
      this.validateField("localGovernment");
    },
    "formData.lastName"() {
      this.validateField("lastName");
    },
    "formData.firstName"() {
      this.validateField("firstName");
    },
    "formData.adminEmail"() {
      this.validateField("adminEmail");
    },
    "formData.gender"() {
      this.validateField("gender");
    },
    "formData.adminPhone"() {
      this.validateField("adminPhone");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
.d-flex {
  justify-content: space-between;
}
.registration-step-one {
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
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.info-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.admin {
  background-color: #edf0f9;
}

.form-group {
  position: relative;
}

.form-control,
.form-select {
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f8f9fa;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-bottom: 0.25rem;
}

.form-control:focus,
.form-select:focus {
  background-color: #fff;
  border-color: #28a745;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
  outline: none;
}

.error {
  color: #dc3545;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  bottom: -1.5rem;
  margin-top: 0.25rem;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 2rem;
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
  color: #118e34;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.btn-suces {
  background-color: #118e34;
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

.form-shadow {
  background-color: #fff;
  padding: 0;
  width: 97%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: auto;
}

.admin-form-container {
  width: 100%;
  margin: 0 auto;
  padding: 2rem !important;
}

.admin-row {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.form-group {
  flex: 1;
  margin-bottom: 1.2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.8rem;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
}

.form-control::placeholder {
  color: #adb5bd;
}

.form-control:hover,
.form-select:hover {
  border-color: #ced4da;
  background-color: #fff;
}

.form-select {
  cursor: pointer;
  appearance: none;
}

.form-control.has-error,
.form-select.has-error {
  border-color: #dc3545;
}

.form-control.has-error:focus,
.form-select.has-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.info-sec {
  background-color: #e8f4f8;
  border: none;
  color: #0c5460;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  line-height: 1.5;
}

.alert-info i {
  color: #17a2b8;
}

.info-icon {
  color: #17a2b8;
  vertical-align: -2px;
}

@media (max-width: 992px) {
  .registration-step-one {
    flex-direction: column;
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

  .navigation-buttons {
    margin-top: 4rem;
  }
}

@media (max-width: 768px) {
  * {
    font-size: 13px;
  }
  .form-content {
    padding: 0.5rem;
  }

  .form-group {
    padding: 0;
  }

  .info-title {
    padding: 0 2rem;
    margin-bottom: 0 !important;
  }

  .navigation-buttons {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
  .admin-row {
    flex-direction: column;
    gap: 0.2rem;
  }

  .form-group {
    margin-bottom: 1.2rem !important;
  }

  .error {
    bottom: -1.2rem;
  }

  .info-sec {
    margin: 1rem 1rem !important;
    padding: 1rem;
  }
}
</style>
