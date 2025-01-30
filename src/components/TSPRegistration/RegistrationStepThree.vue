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
                <div class="form-group mrt mb-2">
                  <label for="equipment1" class="mb-2">Name of equipment</label>
                  <select
                    class="form-select"
                    v-model="formData.equipment1.name"
                    required
                  >
                    <option value="" disabled selected>Select Category</option>
                    <option value="equipment1">Equipment 1</option>
                    <option value="equipment2">Equipment 2</option>
                    <option value="equipment3">Equipment 3</option>
                  </select>
                  <span v-if="errors.equipment1Name" class="error">{{
                    errors.equipment1Name
                  }}</span>
                </div>

                <div class="form-group mb-2">
                  <label for="quantity1">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.equipment1.quantity"
                    placeholder="Enter quantity"
                    required
                    min="1"
                  />
                  <span v-if="errors.equipment1Quantity" class="error">{{
                    errors.equipment1Quantity
                  }}</span>
                </div>

                <div class="form-group mb-2">
                  <label for="available1">Available equipment</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="formData.equipment1.available"
                    placeholder="Enter available quantity"
                    required
                    min="0"
                  />
                  <span v-if="errors.equipment1Available" class="error">{{
                    errors.equipment1Available
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
                >
                  <h6 class="equipment-title m-0">
                    Additional Equipment {{ index + 2 }}
                  </h6>
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
                </div>
                <div class="form-group mb-2">
                  <label :for="'equipment' + (index + 2)"
                    >Name of equipment</label
                  >
                  <select
                    class="form-select select2"
                    v-model="equipment.name"
                    required
                  >
                    <option value="" disabled selected>Select Category</option>
                    <option value="equipment1">Equipment 1</option>
                    <option value="equipment2">Equipment 2</option>
                    <option value="equipment3">Equipment 3</option>
                  </select>
                  <span
                    v-if="errors['equipment' + (index + 2) + 'Name']"
                    class="error"
                  >
                    {{ errors["equipment" + (index + 2) + "Name"] }}
                  </span>
                </div>

                <div class="form-group select2 mb-2">
                  <label :for="'quantity' + (index + 2)">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="equipment.quantity"
                    placeholder="Enter quantity"
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
                  <label :for="'available' + (index + 2)"
                    >Available equipment </label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model.number="equipment.available"
                    placeholder="Enter available quantity"
                    required
                    min="0"
                  />
                  <span
                    v-if="errors['equipment' + (index + 2) + 'Available']"
                    class="error"
                  >
                    {{ errors["equipment" + (index + 2) + "Available"] }}
                  </span>
                </div>
              </div>
            </form>
          </div>
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
          available: "",
        },
      },
      errors: {},
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
    "formData.equipment1.available"(newVal) {
      if (newVal !== "") {
        this.clearError("equipment1Available");
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
          if (equipment.available !== "") {
            this.clearError(`${prefix}Available`);
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

      // Validate available
      if (equipment.available === "") {
        this.errors[`${prefix}Available`] = "Available equipment is required";
        isValid = false;
      } else if (equipment.available < 0) {
        this.errors[`${prefix}Available`] =
          "Available equipment cannot be negative";
        isValid = false;
      } else if (equipment.available > equipment.quantity) {
        this.errors[`${prefix}Available`] =
          "Available equipment cannot exceed total quantity";
        isValid = false;
      }

      return isValid;
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
        available: "",
      });
    },

    removeEquipment(index) {
      this.additionalEquipment.splice(index, 1);

      // Clear errors for removed equipment
      const prefix = `equipment${index + 2}`;
      this.clearError(`${prefix}Name`);
      this.clearError(`${prefix}Quantity`);
      this.clearError(`${prefix}Available`);
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
  height: calc(100vh - 60px); /* Adjust based on your ProgressBar height */
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

.form-select {
  background-color: #edf0f9;
}
.select2 {
  background: #d4ff7f1f;
}

.form-shadow {
  background-color: #fff;
  padding: 0;
  width: 84%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: auto;
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
  border-top: 1px solid #eee;
  margin-top: auto;
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
  width: 90%;
  margin: 0 auto;
  padding: 0.6rem;
  transition: all 0.3s ease;
}

.equipment-forms-container {
  max-height: calc(100vh - 250px); /* Adjust for header and navigation */
  overflow-y: auto;
  padding: 0 1rem;
  margin-bottom: 1rem;
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
    padding-left: 1.5rem;
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

/* Update scrollbar styles */
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
  color: #dc3545; /* Red color for delete icon */
}

.btn-remove:hover {
  transform: scale(1.1);
  color: #c82333; /* Darker red on hover */
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.equipment-section.second {
  position: relative;
}

/* Update responsive styles */
@media (max-width: 576px) {
  .equipment-title {
    font-size: 0.9rem;
  }

  .delete-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
