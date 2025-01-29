<template>
  <div class="registration-step-four row m-0">
    <!-- Left side - Image -->
    <div class="image-section p-0 m-0 col-5">
      <img src="@/assets/TSP Registration/image 04.png" alt="Registration Image" class="registration-image" width="100%" height="100%">
    </div>

    <!-- Right side - Form -->
    <div class="form-section col-7 p-0 m-0">
      <ProgressBar :current-step="4" :total-steps="4" />
      <div class="form-content p-0">
        <div class="d-flex justify-content-between align-items-center px-4 mt-4">
          <h2 class="info-title">Staffing</h2>
          <button class="btn btn-add-new ms-0" @click="addNewStaff">+ Add New One</button>
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
                  <button class="btn btn-action">⋮</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="navigation-buttons">
          <button type="button" class="btn back-btn" @click="goBack">
            <img src="@/assets/TSP Registration/icon/arrowleft.png" alt="Back" class="arrow-icon me-2">Back
          </button>
          <button type="submit" class="btn submit-btn" @click="submitForm">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'

export default {
  name: 'RegistrationStepFour',
  components: {
    ProgressBar
  },
  data() {
    return {
      staffList: [
        {
          name: 'Oloyede Michael',
          rank: 'B',
          experience: '2 Year',
          position: 'Manager'
        },
        {
          name: 'Oloyede Michael',
          rank: 'B',
          experience: '2 Year',
          position: 'Manager'
        },
        {
          name: 'Oloyede Michael',
          rank: 'B',
          experience: '2 Year',
          position: 'Manager'
        }
      ]
    }
  },
  methods: {
    addNewStaff() {
      // Handle adding new staff
    },
    goBack() {
      this.$router.push('/registration-step-three')
    },
    submitForm() {
      // Handle form submission
      this.$router.push('/registration-complete')
    }
  }
}
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
}

.info-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.btn-add-new {
  background: #118E34;
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
  background: #E5FFD9;
  color: #118E34;
  padding: 4px 16px;
  border-radius: 4px;
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
  margin-top: 2rem;
}

.back-btn {
  border: 1px solid #118E34;
  color: #118E34;
  padding: 8px 24px;
  display: flex;
  align-items: center;
}

.submit-btn {
  background: #118E34;
  border: none;
  color: white;
  padding: 8px 24px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

@media (max-width: 768px) {
  .image-section {
    height: 300px;
  }
  
  .table-container {
    overflow-x: auto;
    width: 100%;
  }

  .navigation-buttons {
    padding: 1rem;
  }
}
</style>
