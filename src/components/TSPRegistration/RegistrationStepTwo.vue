<template>
  <div class="registration-step-two row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-lg-6 d-none d-lg-block">
      <img
        src="@/assets/TSP Registration/image 02.png"
        alt="Registration Image"
        class="registration-image"
        width="100%"
        height="100%"
      />
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-lg-6 p-0 m-0">
      <ProgressBar :current-step="2" :total-steps="4" />
      <div class="form-content">
        <h2 class="info-title">Organization Detail</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-4">
            <label for="trainingcenter">Address of the training centre</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="formData.trainingCenter"
              placeholder=""
              required
            />
            <span v-if="errors.trainingCenter" class="error">{{
              errors.trainingCenter
            }}</span>
          </div>

          <div class="form-group mb-4">
            <div class="custom-select">
              <label for="locationowned"
                >Is the training Location Owned, Leased or Rented</label
              >

              <select
                class="form-select"
                v-model="formData.isLocationOwned"
                required
              >
                <option value="" disabled selected>Select Category</option>
                <option value="owned">Owned</option>
                <option value="leased">Leased</option>
                <option value="rented">Rented</option>
              </select>
              <span v-if="errors.isLocationOwned" class="error"
                >{{ errors.isLocationOwned }}</span
              >
            </div>
          </div>

          <div class="facilities-section">
            <h3 class="facilities-title">Facilities available in the Centre</h3>

            <div class="facilities-grid">
              <div class="row g-0">
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="generator">Generator / UPS</label>
                    <input
                      type="checkbox"
                      id="generator"
                      v-model="selectedFacilities"
                      value="generator"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="reception">Reception Area</label>
                    <input
                      type="checkbox"
                      id="reception"
                      v-model="selectedFacilities"
                      value="reception"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <hr class="divider" />
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="water">Drinking Water Facility</label>
                    <input
                      type="checkbox"
                      id="water"
                      v-model="selectedFacilities"
                      value="water"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="library">Library With Book</label>
                    <input
                      type="checkbox"
                      id="library"
                      v-model="selectedFacilities"
                      value="library"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <hr class="divider" />

                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="classroom"
                      >Class room that can accommodate 25 students</label
                    >
                    <input
                      type="checkbox"
                      id="classroom"
                      v-model="selectedFacilities"
                      value="classroom"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="whiteboard"
                      >White / BLACK Board available in each classroom</label
                    >
                    <input
                      type="checkbox"
                      id="whiteboard"
                      v-model="selectedFacilities"
                      value="whiteboard"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <hr class="divider" />

                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="classroomCount"
                      >Fully equipped Workshop as per QSF requirements for the
                      trade</label
                    >
                    <input
                      type="checkbox"
                      id="classroomCount"
                      v-model="selectedFacilities"
                      value="classroomCount"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="ventilation"
                      >Ventilation with light and fans available in each class
                      room</label
                    >
                    <input
                      type="checkbox"
                      id="ventilation"
                      v-model="selectedFacilities"
                      value="ventilation"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
                <hr class="divider" />

                <div class="col-md-6">
                  <div class="facility-item">
                    <label for="workshop"
                      >50% equipped workshop as per NSQF requirements for the
                      trade</label
                    >
                    <input
                      type="checkbox"
                      id="workshop"
                      v-model="selectedFacilities"
                      value="workshop"
                      class="custom-checkbox"
                    />
                  </div>
                </div>
              </div>
              <span v-if="errors.facilities" class="error">{{
                errors.facilities
              }}</span>
            </div>
          </div>

          <div class="available-spaces">
            <div class="space-inputs">
              <div class="input-box">
                <label class="label"
                  >No of Classrooms <br />
                  Available</label
                >
                <div class="input-wrapper">
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.classroomsAvailable"
                    min="0"
                    required
                  />
                </div>
                <span v-if="errors.classroomsAvailable" class="error">{{
                  errors.classroomsAvailable
                }}</span>
              </div>

              <div class="input-box">
                <label class="label"
                  >No of Offices <br />
                  Available</label
                >
                <div class="input-wrapper">
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.officesAvailable"
                    min="0"
                    required
                  />
                </div>
                <span v-if="errors.officesAvailable" class="error">{{
                  errors.officesAvailable
                }}</span>
              </div>
            </div>
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
  name: "RegistrationStepTwo",
  components: {
    ProgressBar,
  },
  data() {
    return {
      formData: {
        trainingCenter: "",
        isLocationOwned: "",
        classroomsAvailable: "",
        officesAvailable: "",
      },
      selectedFacilities: [],
      errors: {
        classroomsAvailable: "",
        officesAvailable: "",
      },
      availableFacilities: [
        { id: "generator", label: "Generator / UPS" },
        { id: "reception", label: "Reception Area" },
        { id: "water", label: "Drinking Water Facility" },
        { id: "library", label: "Library With Book" },
        {
          id: "classroom",
          label: "Class room that can accommodate 25 students",
        },
        {
          id: "classroomCount",
          label:
            "Fully equipped Workshop as per QSF requirements for the trade",
        },
        {
          id: "whiteboard",
          label: "White / BLACK Board available in each classroom",
        },
        {
          id: "ventilation",
          label: "Ventilation with light and fans available in each class room",
        },
        {
          id: "workshop",
          label:
            "Fully equipped Workshop as per OGF requirements for the trade",
        },
        { id: "offices", label: "No of offices available" },
      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  watch: {
    "formData.trainingCenter"() {
      this.validateField("trainingCenter");
    },
    "formData.isLocationOwned"() {
      this.validateField("isLocationOwned");
    },
    selectedFacilities() {
      this.validateField("facilities");
    },
    "formData.classroomsAvailable"() {
      this.validateField("classroomsAvailable");
    },
    "formData.officesAvailable"() {
      this.validateField("officesAvailable");
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "registration-step-1" });
    },

    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    },
    submitForm() {
      this.validateForm();

      if (Object.keys(this.errors).length === 0) {
        const formDataWithFacilities = {
          ...this.formData,
          facilities: this.selectedFacilities,
        };
        this.$emit("step-completed", formDataWithFacilities);
        this.$router.push({ name: "registration-step-3" });
      }
    },
    validateField(field) {
      switch (field) {
        case "trainingCenter":
          if (!this.formData.trainingCenter.trim()) {
            this.errors.trainingCenter = "Training center name is required";
          } else if (this.formData.trainingCenter.trim().length < 5) {
            this.errors.trainingCenter = "Name must be 5 characters long";
          } else {
            this.clearError("trainingCenter");
          }
          break;
        case "isLocationOwned":
          if (!this.formData.isLocationOwned) {
            this.errors.isLocationOwned = "Please select an option";
          } else {
            this.clearError("isLocationOwned");
          }
          break;
        case "facilities":
          if (
            !this.selectedFacilities ||
            this.selectedFacilities.length === 0
          ) {
            this.errors.facilities = "Select at least one facility";
          } else {
            this.clearError("facilities");
          }
          break;
        case "classroomsAvailable":
          if (
            !this.formData.classroomsAvailable &&
            this.formData.classroomsAvailable !== 0
          ) {
            this.errors.classroomsAvailable =
              "Number of classrooms is required";
          } else if (this.formData.classroomsAvailable < 0) {
            this.errors.classroomsAvailable =
              "Number of classrooms cannot be negative";
          } else {
            this.clearError("classroomsAvailable");
          }
          break;
        case "officesAvailable":
          if (
            !this.formData.officesAvailable &&
            this.formData.officesAvailable !== 0
          ) {
            this.errors.officesAvailable = "Number of offices is required";
          } else if (this.formData.officesAvailable < 0) {
            this.errors.officesAvailable =
              "Number of offices cannot be negative";
          } else {
            this.clearError("officesAvailable");
          }
          break;
      }
    },

    validateForm() {
      let isValid = true;
      this.clearErrors();

      ["trainingCenter", "isLocationOwned", "facilities"].forEach((field) => {
        this.validateField(field);
      });

      // Validate classrooms
      if (
        !this.formData.classroomsAvailable &&
        this.formData.classroomsAvailable !== 0
      ) {
        this.errors.classroomsAvailable = "Number of classrooms is required";
        isValid = false;
      } else if (this.formData.classroomsAvailable < 0) {
        this.errors.classroomsAvailable =
          "Number of classrooms cannot be negative";
        isValid = false;
      }

      // Validate offices
      if (
        !this.formData.officesAvailable &&
        this.formData.officesAvailable !== 0
      ) {
        this.errors.officesAvailable = "Number of offices is required";
        isValid = false;
      } else if (this.formData.officesAvailable < 0) {
        this.errors.officesAvailable = "Number of offices cannot be negative";
        isValid = false;
      }

      return isValid;
    },

    clearErrors() {
      this.errors = {
        trainingCenter: "",
        isLocationOwned: "",
        classroomsAvailable: "",
        officesAvailable: "",
      };
    },

    resetForm() {
      this.formData = {
        trainingCenter: "",
        isLocationOwned: "",
        classroomsAvailable: "",
        officesAvailable: "",
      };
      this.clearErrors();
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}

.registration-step-two {
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

.label {
  background: #e0f2ea96;
  border: 1px solid #e0f2ea96;
  padding: 10px 10px;
  margin-right: 0 !important;
  border-radius: 1px 0 0 1px;
  height: 100%;
  display: flex;
  align-items: center;
}

.form-content {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.info-title {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.facilities-section {
  background-color: #7fff7f1f;
  border-radius: 8px;
  padding: 1.5rem;
  width: 97%;
}

.facilities-title {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #333;
}

.divider {
  border: none;
  border-top: 1px solid #d9d9d9;
  margin: 0.5rem 0 1rem 0;
}

.facilities-grid {
  margin-bottom: 0;
}

.facility-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 4px;
}

.custom-checkbox {
  width: 29px;
  height: 29px;
  border: 3px solid #393939;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
}

.custom-checkbox:checked {
  background-color: #0e640e;
  border-color: #393939;
}

.custom-checkbox:checked::after {
  content: "\2713";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
}

/* Ensure consistent sizing across browsers */
input[type="checkbox"].custom-checkbox {
  min-width: 29px;
  min-height: 29px;
  max-width: 29px;
  max-height: 29px;
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
  border-color: #393939;
}

.custom-select {
  position: relative;
}
.form-group {
  width: 97%;
}

.custom-select::after {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border: solid #333;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: translateY(-50%) rotate(45deg);
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


input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.error {
  color: #dc3545;
  font-size: 0.8rem;
  bottom: -1.2rem;
  left: 0;
}

.available-spaces {
  width: 97%;
  margin-top: 1.5rem;
}

.space-inputs {
  display: flex;
  gap: 2rem;
}

.input-box {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
}

.input-box label {
  color: #333;
  font-size: 0.9rem;
  white-space: nowrap;
  padding-top: 0.5rem;
}

.input-wrapper {
  flex: 1;
  background: #fff;
  padding: 0.25rem;
  border-radius: 0 1px 1px 0;
  border: 1px solid #e0e0e0;
  border-left: none;
  height:100%;
}

.input-wrapper input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  background: transparent;
  outline: none;
}

.input-wrapper input:focus {
  background: white;
}

.input-box .error {
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  font-size: 0.8rem;
  color: #dc3545;
}


@media (max-width: 992px) {
  .registration-step-two {
    flex-direction: column;
  }

  .form-content {
    padding: 1.5rem;
  }

  .info-title,
  .facilities-section {
    margin: 0;
    padding: 1rem 0rem;
  }

  .navigation-buttons {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  * {
    font-size: 14px;
  }
  .form-content {
    padding: 1rem;
  }

  .form-group {
    margin-bottom: 0.8rem !important;
  }

  .facilities-section {
    padding: 1rem;
  }

  .facility-item {
    flex-direction: row;
    padding: 0.5rem;
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
   .label br {
    display: none; 
  }

   .space-inputs {
    flex-direction: column;
    gap: 1.5rem;
  }

  .input-box {
    flex-direction: column;
    gap: 0.5rem;
  }

  .input-box label {
    padding-top: 0;
  }

  .label {
    border-radius: 1px;
  }

  .input-wrapper {
    border-radius: 1px;
    border-left: 1px solid #e0e0e0;
    width:100%;

  }
}


</style>
