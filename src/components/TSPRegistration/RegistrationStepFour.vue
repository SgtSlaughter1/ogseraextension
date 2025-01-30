<template>
  <div class="registration-step-four row m-0">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-5">
      <img
        src="@/assets/TSP Registration/image 04.png"
        alt="Registration Image"
        class="registration-image d-none d-lg-block"
        width="100%"
        height="100%"
      />
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-7 p-0 m-0">
      <ProgressBar :current-step="4" :total-steps="4" />
      <div class="form-content p-0">
        <div
          class="d-flex justify-content-between align-items-center px-4 mt-4 header-container"
        >
          <h2 class="info-title">Staffing</h2>
          <button class="btn btn-add-new ms-0" @click="showModal">
            + Add New Role
          </button>
        </div>
        <div class="table-responsive px-3 mt-4">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rank</th>
                <th>Experience</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(staff, index) in staffList" :key="index">
                <td>{{ index + 1 }}</td>
                <td class="name-cell">{{ staff.name }}</td>
                <td>
                  <span class="rank-badge">{{ staff.rank }}</span>
                </td>
                <td>{{ staff.experience }}</td>
                <td>{{ staff.position }}</td>
                <td>
                  <div class="action-wrapper">
                    <button
                      class="btn btn-action"
                      @click="toggleActionMenu(index)"
                    >
                      ⋮
                    </button>
                    <div
                      v-if="activeActionIndex === index"
                      class="action-popup"
                    >
                      <span class="popup-item" @click="viewStaff(staff)"
                        >View</span
                      >
                      <span
                        class="popup-item delete"
                        @click="deleteStaff(index)"
                        >Delete</span
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="navigation-buttons">
          <button
            type="button"
            class="btn btn-outline-success back-btn"
            @click="goBack"
          >
            <img
              src="@/assets/TSP Registration/icon/arrowleft.png"
              alt="Back"
              class="arrow-icon me-2"
            />Back
          </button>
          <button type="submit" class="btn submit-btn" @click="submitForm">
            Submit
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <AddStaffModal
      :is-open="isModalOpen"
      @close="hideModal"
      @submit="handleAddStaff"
    />
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import AddStaffModal from "./AddStaffModal.vue";

export default {
  name: "RegistrationStepFour",
  components: {
    ProgressBar,
    AddStaffModal,
  },
  data() {
    return {
      isModalOpen: false,
      activeActionIndex: null,
      staffList: [
        {
          name: "Oloyede Michael",
          rank: "8",
          experience: "2 Year",
          position: "Manager",
        },
        {
          name: "Oloyede Michael",
          rank: "8",
          experience: "2 Year",
          position: "Manager",
        },
        {
          name: "Oloyede Michael",
          rank: "8",
          experience: "2 Year",
          position: "Manager",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.isModalOpen = true;
    },
    hideModal() {
      this.isModalOpen = false;
    },
    handleAddStaff(newStaff) {
      if (
        newStaff &&
        newStaff.name &&
        newStaff.rank &&
        newStaff.experience &&
        newStaff.position
      ) {
        this.staffList.push(newStaff);
        this.hideModal();
      }
    },
    goBack() {
      this.$router.push({ name: "registration-step-3" });
    },
    submitForm() {
      this.$router.push("/registration-complete");
    },
    //for the action button
    toggleActionMenu(index) {
      this.activeActionIndex = this.activeActionIndex === index ? null : index;
    },
    viewStaff(staff) {
      console.log("View staff:", staff);
      this.activeActionIndex = null;
    },
    deleteStaff(index) {
      this.staffList.splice(index, 1);
      this.activeActionIndex = null;
    },
  },
};
</script>

<style scoped>
.registration-step-four {
  display: flex;
  width: 100%;
  height: auto;
  background: #edf0f9;
  margin: 0;
  padding: 0;
}

.registration-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-section {
  background: #edf0f9;
  min-height: 100vh;
  padding: 0 1rem;
}

.form-content {
  width: 100%;
  padding: 1rem 2rem;
}

.info-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.btn-add-new {
  background: #118e34;
  color: white;
  border: none;
  padding: 6px 14px;
  font-size: 0.9rem;
  border-radius: 4px;
}

.btn-add-new:hover {
  background: #28a745;
  color: white;
  border: none;
  padding: 6px 14px;
  font-size: 0.9rem;
  border-radius: 4px;
}
.table-container {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 92%;
  margin-left: 1rem;
}

.table {
  width: 100%;
  margin: 0;
}

.table th {
  color: #333;
  background-color: #d9d9d9;
  font-weight: 500;
  padding: 1rem;
  border: none;
  font-size: 0.95rem;
}

.table td {
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  vertical-align: middle;
  color: #666;
  font-size: 0.95rem;
}

.name-cell {
  min-width: 180px;
  white-space: nowrap;
}

.rank-badge {
  background: #e6fb81;
  color: #118e34;
  padding: 2px 27px;
  border-radius: 10px;
  font-size: 0.9rem;
}

.btn-action {
  color: #666;
  font-size: 1.2rem;
  padding: 0;
  background: none;
  border: none;
  font-weight: bold;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  margin-top: 5rem;
}

.back-btn {
  border: 1px solid #118e34;
  color: #118e34;
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.back-btn:hover {
  color: #118e34;
  border: 1px solid #0ff851 ;
  background-color: #EDF0F9 ;
}

.submit-btn {
  background: #118E34;
  border: none;
  color: white;
  padding: 8px 24px;
}

.submit-btn:hover {
  background: #28a745;
  color: white;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.action-wrapper {
  position: relative;
  display: inline-block;
}

.action-popup {
  position: absolute;
  bottom: 100%;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  min-width: 80px;
  margin-bottom: 5px;
  z-index: 1000;
}

.action-popup::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.popup-item {
  display: block;
  padding: 4px 12px;
  font-size: 0.85rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
  white-space: nowrap;
}

.popup-item:hover {
  background-color: #f8f9fa;
}

.popup-item.delete {
  color: #dc3545;
}

.popup-item.delete:hover {
  background-color: #fff5f5;
}

@media (max-width: 1200px) {
  .form-section {
    padding: 0 0.5rem;
  }

  .navigation-buttons {
    padding: 1.5rem 2rem;
  }

  .info-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 992px) {
  .registration-step-four {
    flex-direction: column;
  }

  .image-section {
    display: none;
  }

  .form-section {
    width: 100%;
    min-height: auto;
    padding: 1rem;
  }

  .form-section.col-7,
  .image-section.col-5 {
    width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
  }

  .table-responsive {
    margin: 0;
    padding: 0.5rem;
  }

  .navigation-buttons {
    padding: 1.5rem;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .info-title {
    font-size: 1.2rem;
  }

  .btn-add-new {
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  .table th,
  .table td {
    padding: 0.75rem;
    font-size: 0.85rem;
  }

  .rank-badge {
    padding: 2px 15px;
    font-size: 0.8rem;
  }

  .navigation-buttons {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .back-btn,
  .submit-btn {
    width: 100%;
    justify-content: center;
  }

  .action-popup {
    right: -20px;
  }
}

@media (max-width: 576px) {
  .form-content {
    padding: 0;
  }

  .info-title {
    font-size: 1.1rem;
  }

  .table-responsive {
    margin: 0;
    padding: 0.25rem;
  }

  .table {
    font-size: 0.8rem;
  }

  .table th,
  .table td {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .name-cell {
    min-width: 120px;
  }

  .rank-badge {
    padding: 2px 10px;
    font-size: 0.75rem;
  }

  .d-flex.justify-content-between {
    padding: 0.5rem !important;
    flex-direction: column;
    gap: 1rem;
  }

  .btn-add-new {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .table-responsive {
    overflow-x: auto;
  }

  .table {
    min-width: 500px;
  }

  .navigation-buttons {
    margin-top: 1rem;
    padding: 0.5rem;
  }
}
</style>
