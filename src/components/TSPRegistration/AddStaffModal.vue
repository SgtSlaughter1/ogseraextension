<!-- AddStaffModal.vue -->
<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ isEditing ? "Edit Staff" : "Add New Staff" }}
        </h5>
        <button type="button" class="btn-close" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              v-model="formData.name"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Rank</label>
            <select v-model="formData.rank" class="form-control" required>
              <option value="" disabled selected>Select Rank</option>
              <option v-for="rank in ranks" :key="rank" :value="rank">
                {{ rank }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Years of Experience</label>
            <input
              type="number"
              v-model.number="formData.experience"
              class="form-control"
              min="0"
              max="50"
              placeholder="Enter years of experience"
              required
            />
          </div>
          <div class="form-group">
            <label>Position</label>
            <input
              type="text"
              v-model="formData.position"
              class="form-control"
              required
            />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              {{ isEditing ? "Update Staff" : "Add Staff" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
        rank: "",
        experience: "",
        position: "",
      },
      ranks: ["1", "2", "3", "4"],
      isSubmitting: false,
    };
  },
  methods: {
    closeModal() {
      this.resetForm();
      this.$emit("close");
    },
    submitForm() {
      if (!this.validateForm() || this.isSubmitting) {
        return;
      }

      this.isSubmitting = true;

      const newStaff = {
        name: this.formData.name.trim(),
        rank: this.formData.rank,
        experience: this.formData.experience,
        position: this.formData.position.trim(),
      };

      if (this.isValidStaff(newStaff)) {
        this.$emit("submit", newStaff);
        this.$emit("close");
        this.resetForm();
      }

      setTimeout(() => {
        this.isSubmitting = false;
      }, 300);
    },
    isValidStaff(staff) {
      return (
        staff.name &&
        staff.name.length > 0 &&
        staff.rank &&
        staff.experience >= 0 &&
        staff.position &&
        staff.position.length > 0
      );
    },
    validateForm() {
      return this.isValidStaff(this.formData);
    },
    resetForm() {
      this.formData = {
        name: "",
        rank: "",
        experience: "",
        position: "",
      };
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.form-control:focus {
  border-color: #118e34;
  outline: none;
  box-shadow: 0 0 0 2px rgba(17, 142, 52, 0.1);
}

select.form-control {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  padding-right: 2.5rem;
}

select.form-control:invalid {
  color: #6c757d;
}

select.form-control option {
  color: #333;
}

.btn-primary {
  background: #118e34;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #28a745;
}

.btn-secondary {
  background: #6c757d;
  color: white;
  border: none;
}

.btn-secondary:hover {
  background: #5a6268;
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
</style>
