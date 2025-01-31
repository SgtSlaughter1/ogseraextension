<template>
  <div class="registration-step-three row">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-lg-6 d-none d-lg-block">
      <img
        src="@/assets/TSP Registration/image 03 .png"
        alt="Registration Image"
        class="registration-image"
        width="100%"
        height="100%"
      />
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-lg-6 p-0 m-0">
      <ProgressBar
        :current-step="3"
        :total-steps="4"
        :completed-steps="completedSteps"
        @navigate="handleNavigation"
      />

      <div class="form-content p-0">
        <div class="form-shadow my-4">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="info-title p-0 m-4 mt-2">Equipment</h2>
            <button class="btn btn-add-new" @click="addNewEquipment">
              + Add New
            </button>
          </div>

          <div class="equipment-forms-container">
            <form @submit.prevent="handleSubmit">
              <!-- First Equipment Section -->
              <div class="equipment-section first mb-4">
                <div class="form-group mb-2">
                  <label>Name of equipment as per Training Guide of the Proposed Trade</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="formData.equipment1.name"
                    placeholder=""
                    required
                  />
                  <span v-if="errors.equipment1Name" class="error">{{
                    errors.equipment1Name
                  }}</span>
                </div>

                <div class="form-group mb-2">
                  <label for="quantity1">Quantity as per the Training Guide </label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.equipment1.quantity"
                    placeholder=""
                    required
                    min="1"
                  />
                  <span v-if="errors.equipment1Quantity" class="error">{{
                    errors.equipment1Quantity
                  }}</span>
                </div>

                <div class="form-group mb-2">
                  <label for="quantity2">Quantity physically available at the training location</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.equipment1.quantity2"
                    placeholder=""
                    required
                    min="1"
                  />
                  <span v-if="errors.equipment1Quantity2" class="error">{{
                    errors.equipment1Quantity2
                  }}</span>
                </div>
              </div>

              <!-- Additonal Equipment Sections -->
              <div
                v-for="(equipment, index) in additionalEquipment"
                :key="index"
                class="equipment-section second mb-4"
              >
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                ></div>
                <div class="form-group mb-2 select2">
                  <div class="d-flex deletebtn">
                    <label :for="'equipment' + (index + 2)"
                      >Name of equipment as per Training Guide of the Proposed Trade</label
                    >
                    <span>
                      <button
                        type="button"
                        class="btn-remove"
                        @click="removeEquipment(index)"
                        title="Remove equipment"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          class="delete-icon"
                        >
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="equipment.name"
                    placeholder=""
                    required
                  />
                  <span
                    v-if="errors['equipment' + (index + 2) + 'Name']"
                    class="error"
                  >
                    {{ errors["equipment" + (index + 2) + "Name"] }}
                  </span>
                </div>

                <div class="form-group select2 mb-2">
                  <label :for="'quantity' + (index + 2)">Quantity as per the Training Guide</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="equipment.quantity"
                    placeholder=""
                    required
                    min="1"
                  />
                  <span
                    v-if="errors['equipment' + (index + 2) + 'Quantity']"
                    class="error"
                  >
                    {{ errors["equipment" + (index + 2) + "Quantity"] }}
                  </span>
                </div>

                <div class="form-group select2 mb-2">
                  <label :for="'quantity' + (index + 2)">Quantity physically available at the training location</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="equipment.quantity2"
                    placeholder=""
                    required
                    min="1"
                  />
                  <span
                    v-if="errors['equipment' + (index + 2) + 'Quantity2']"
                    class="error"
                  >
                    {{ errors["equipment" + (index + 2) + "Quantity2"] }}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="notes-content m-0">
          <!-- Flex container for question and answer -->
          <div
            class="question-answer-container d-flex justify-content-between align-items-center mb-4"
          >
            <!-- Question Box -->
            <div class="question-box flex-grow-1 me-3">
              <p class="mb-0">
                Does your organization agree to ensure the availability of all
                the tools & equipment required as per the relevant training
                guide during the training program?
              </p>
              <span v-if="errors.answer" class="text-danger">{{ errors.answer }}</span>
            </div>
            <!-- Answer Box -->
            <div class="answer-box">
              <button
                type="button"
                class="btn btn-success"
                :class="{ 'btn-selected': answer === 'yes', 'btn-unselected': answer !== 'yes' }"
                @click="setAnswer('yes')"
              >
                Yes
              </button>
              <button
                type="button"
                class="btn btn-outline-success ms-2"
                :class="{ 'btn-selected': answer === 'no', 'btn-unselected': answer !== 'no' }"
                @click="setAnswer('no')"
              >
                No
              </button>
            </div>
          </div>

          <!-- Notes Section -->
          <div class="notes-section m-0 p-0">
            <h6 class="notes-title">Notes:</h6>
            <ol class="mb-0">
              <li>
                Separate list is required for each proposed training location.
              </li>
              <li>
                All training facilities will be inspected on the basis of the
                information provided above.
              </li>
            </ol>
            <p class="fw-bold warning-text p-0 mt-0">
              False or misleading information will lead to disqualification of
              the Training Provider.
            </p>
          </div>

          <!-- Trainees Info -->
          <p class="trainees-info p-0 m-0">
            Training provider must have at least 1 classroom to accommodate
            maximum of 25 trainees each along with practical lab/Workshop/Office
            & Toilet
          </p>
        </div>

        <div class="navigation-buttons">
          <button type="button" class="btn btn-outline-success" @click="goBack">
            <img
              src="@/assets/TSP Registration/icon/arrowleft.png"
              alt="Back"
              class="arrow-icon me-2"
            />
            Back
          </button>
          <button type="button" class="btn btn-suces" @click="handleSubmit">
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
  components: {
    ProgressBar,
  },
  data() {
    return {
      additionalEquipment: [],
      formData: {
        equipment1: {
          name: "",
          quantity: "",
          quantity2: "",
        },
      },
      errors: {},
      answer: "",
    };
  },

  props: {
    completedSteps: {
      type: Array,
      default: () => [1],
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },

  watch: {
    // Watch first equipment fields individually
    "formData.equipment1.name"(newVal) {
      if (newVal) {
        this.clearError("equipment1Name");
      }
    },
    "formData.equipment1.quantity"(newVal) {
      if (newVal) {
        this.clearError("equipment1Quantity");
      }
    },
    "formData.equipment1.quantity2"(newVal) {
      if (newVal) {
        this.clearError("equipment1Quantity2");
      }
    },

    // Watch each additional equipment field
    additionalEquipment: {
      deep: true,
      handler(newVal) {
        newVal.forEach((equipment, index) => {
          const prefix = `equipment${index + 2}`;

          // Clear errors when the field has a value
          if (equipment.name) {
            this.clearError(`${prefix}Name`);
          }
          if (equipment.quantity) {
            this.clearError(`${prefix}Quantity`);
          }
          if (equipment.quantity2) {
            this.clearError(`${prefix}Quantity2`);
          }
        });
      },
    },
  },

  methods: {
    goBack() {
      this.$router.push({ name: "registration-step-2" });
    },

    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field];
      }
    },

    validateEquipment(equipment, prefix = "equipment1") {
      let isValid = true;

      // Validate name
      if (!equipment.name) {
        this.errors[`${prefix}Name`] = "Equipment name is required";
        isValid = false;
      }

      // Validate quantity
      if (!equipment.quantity) {
        this.errors[`${prefix}Quantity`] = "Quantity is required";
        isValid = false;
      } else if (equipment.quantity < 1) {
        this.errors[`${prefix}Quantity`] = "Quantity must be at least 1";
        isValid = false;
      }

      // Validate quantity2
      if (!equipment.quantity2) {
        this.errors[`${prefix}Quantity2`] = "Quantity physically available at the training location is required";
        isValid = false;
      } else if (equipment.quantity2 < 1) {
        this.errors[`${prefix}Quantity2`] = "Quantity physically available at the training location must be at least 1";
        isValid = false;
      }

      return isValid;
    },

    setAnswer(value) {
      this.answer = value;
      this.clearError("answer");
    },

    validateAnswer() {
      if (!this.answer) {
        this.errors.answer = "You must choose an option.";
      }
    },

    handleSubmit() {
      // Clear all previous errors
      this.errors = {};

      let isValid = true;

      // Validate first equipment
      isValid = this.validateEquipment(this.formData.equipment1, "equipment1");

      // Validate additional equipment
      this.additionalEquipment.forEach((equipment, index) => {
        const equipmentValid = this.validateEquipment(
          equipment,
          `equipment${index + 2}`
        );
        isValid = isValid && equipmentValid;
      });

      // Validate answer
      this.validateAnswer();
      isValid = isValid && !this.errors.answer;

      //checks the entries for both first and additonal equip
      if (isValid) {
        const allEquipment = {
          equipment1: this.formData.equipment1,
          ...this.additionalEquipment.reduce((acc, equipment, index) => {
            acc[`equipment${index + 2}`] = equipment;
            return acc;
          }, {}),
        };

        this.$emit("step-completed", allEquipment);
        this.$router.push({ name: "registration-step-4" });
      } else {
        // Scroll to first error
        setTimeout(() => {
          const firstError = document.querySelector(".error");
          if (firstError) {
            firstError.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    },

    addNewEquipment() {
      this.additionalEquipment.push({
        name: "",
        quantity: "",
        quantity2: "",
      });
    },

    removeEquipment(index) {
      this.additionalEquipment.splice(index, 1);

      // Clear errors for removed equipment
      const prefix = `equipment${index + 2}`;
      this.clearError(`${prefix}Name`);
      this.clearError(`${prefix}Quantity`);
      this.clearError(`${prefix}Quantity2`);
    },

    handleNavigation(step) {
      this.$emit("navigate", step);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

.first {
  width: 100%;
  margin: 0 auto;
  padding: 0.6rem;
  background-color: #7fff7f1f;
}

.second {
  background: #d4ff7f1f;
}

.deletebtn {
  justify-content: space-between;
}


.info-title {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 400;
}

.form-group {
  height: auto;
  margin: 0;
}

.form-group, .deletebtn > label {
  font-size: 13px;
}


.form-select {
  background-color: #edf0f9;
}
.select2 {
  background: #d4ff7f1f;
}

.form-shadow {
  background-color: #fff;
  padding: 0;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 350px;
}

input {
  background-color: #edf0f9;
  width: 100%;
}

input:focus {
  background-color: #edf0f9;
}

.select2 > input {
  background: #d4ff7f1f;
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
  background: #edf0f9;
  margin-top: 5px;
}

.btn {
  padding: 0.5rem 2rem;
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

.btn-add-new {
  background-color: #118e34;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.6rem;
  cursor: pointer;
  margin-right: 1rem;
}

.btn-add-new:hover {
  background-color: #118e34;
  color: white;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.equipment-section {
  width: 100%;
  margin: 0 auto;
  padding: 0.6rem;
  transition: all 0.3s ease;
}

.equipment-forms-container {
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

/* scrollbar styles */
.equipment-forms-container::-webkit-scrollbar {
  width: 6px;
}

.equipment-forms-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.equipment-forms-container::-webkit-scrollbar-thumb {
  background: #cdcdcd;
  border-radius: 3px;
}

.equipment-forms-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.equipment-title {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.btn-remove {
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #dc3545;
}

.btn-remove:hover {
  transform: scale(1.1);
  color: #c82333;
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.equipment-section.second {
  position: relative;
}

.question-answer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.question-box {
  flex-grow: 1;
  margin-right: 1rem;
  background-color: #7fff7f1f;
  padding: 1rem;
  border-radius: 4px;
}

.answer-box {
  display: flex;
  align-items: center;
}

.notes-section {
  margin-bottom: 1.5rem;
}

.notes-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}
.warning-text {
  font-size: 13px;
}

ol {
  padding-left: 0.2rem;
  margin-bottom: 1rem;
  list-style-position: inside;
}

li {
  color: #333;
  font-size: 13px;
  list-style-type: lower-roman;
  line-height: 1.9;
}

.trainees-info {
  background-color: #edf0f9;
  padding: 0 1rem;
  border-radius: 4px;
  color: #666;
  font-size: 13px;
}

.btn-selected {
  background-color: #28A745;
  color: white;
  border: 2px solid #28A745;
}
.btn-unselected {
  background-color: #f8f9fa;
  color: #212529;
  border: 2px solid #ced4da;
}
.notes-content {
padding:0 33px;
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
    height: auto;
    padding: 1.5rem;
  }

  .form-group {
    padding: 0;
  }

  .info-title {
    padding: 0 1.5rem;
  }

  .equipment-forms-container {
    max-height: 60vh;
  }

  .navigation-buttons {
    position: static;
    margin-top: 1rem;
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
    margin-bottom: 1rem !important;
    padding: 0;
  }

  .info-title {
    padding: 0 1rem;
    margin-left: 6px !important;
    font-size: 1.2rem;
  }

  .navigation-buttons {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .equipment-title {
    font-size: 0.9rem;
  }

  .equipment-section {
    width: 100%;
  }

  .delete-icon {
    width: 16px;
    height: 16px;
  }
  .equipment-forms-container {
    padding: 0;
  }
  .question-answer-container {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding:0;
  }
  .question-box {
    margin-bottom: 1rem; 
    width: 100%;
  }
  .notes-content {
  padding: 20px !important;
  font-size:13px !important;
}
.form-shadow {
  background-color: transparent;
}
  
}



</style>
