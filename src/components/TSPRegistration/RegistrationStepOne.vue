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
        <h2 class="info-title">Info Details</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-4">
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

          <div class="form-group mb-4">
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

          <div class="form-group mb-4">
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

          <div class="form-group mb-4">
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

          <div class="form-group mb-4">
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
      }
    },
    validateForm() {
      const fields = [
        "organizationName",
        "phoneNumber",
        "emailAddress",
        "organizationType",
        "localGovernment",
      ];
      fields.forEach((field) => this.validateField(field));
    },
    submitForm() {
      this.validateForm();

      if (Object.keys(this.errors).length === 0) {
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

.form-group {
  margin-bottom: 0 !important;
  height: auto;
  margin: 0;

  padding-bottom: 1.5rem;
}

.form-control,
.form-select {
  padding: 0.75rem;
  border: 1px solid #393939;
  border-radius: 4px;
  background-color: #edf0f9;
}

.form-control:focus,
.form-select:focus {
  background-color: #edf0f9;
  outline: none;
  box-shadow: none;
  border-color: #28a745;
}

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 8rem;
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
