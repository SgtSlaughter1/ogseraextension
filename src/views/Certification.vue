<template>
  <!-- Hero Section -->
  <section class="qualifications-hero bg-light py-5">
    <div class="container text-center text-white">
      <!-- Title Section -->
      <div class="hero-title">
        <h1 class="display-4 fw-bold mb-3">Qualifications Available</h1>
      </div>

      <!-- Stats Section -->
      <div class="stats-container p-2 rounded-3  shadow">
        <div class="d-flex flex-wrap align-items-center justify-content-center gap-4">
          <!-- Statistics Label -->
          <div class="stat-label me-4">
            <span class="btn text-primary py-2 px-3 fs-4">Statistics</span>
          </div>

          <!-- Total Applications -->
          <div class="stat-item">
            <div class="total px-3 d-flex align-items-center justify-content-center">
              <div class="text-dark small me-4 mb-1">Total Applications</div>
              <div class="text-dark fs-3 fw-bold">2500</div>
            </div>
          </div>

          <!-- Approved -->
          <div class="stat-item">
            <div class="total px-3 d-flex align-items-center justify-content-center">
              <div class="text-dark small me-4 mb-1">Approved</div>
              <div class="text-dark small fs-3 fw-bold">2000</div>
            </div>
          </div>

          <!-- Apply Button -->
          <div class="stat-cta">
            <CustomButton 
              variant="custom" 
              size="lg" 
              label="Apply Now" 
              icon="bi bi-arrow-right"
              to="/apply"
              customClass="custom-apply-btn"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Qualifications Table -->
  <div class="table-container mt-5 d-flex justify-content-center">
    <div class="table-responsive table-scroll" style="width: 80%; overflow-y: auto;">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="p-3">#</th>
            <th class="p-3">Sector</th>
            <th class="p-3">Occupation</th>
            <th class="p-3">NSO Levels</th>
            <th class="p-3">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3">1</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">1</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">1</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">1</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">2</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Masonry</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">3</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Painting and Decoration</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'Certification',
  components: {
    CustomButton
  }
}
</script>

<style scoped>
.qualifications-hero {
  background: url(../assets/Certificate/Certificate.png) no-repeat center center;
  background-size: cover;
  position: relative;
  color: white;
}

.stats-container {
  border-radius: 4px;
  background-color: #E0ECFC;
  width: 80%;
  margin: 0 auto;
}

.total{
  background-color: #AAFB82F5;
}

.btn-warning {
  background-color: #f59e0b;
  border: none;
  color: #fff;
  transition: all 0.3s ease;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .hero-title h1 {
    font-size: 2rem;
  }

  .stats-container {
    flex-direction: column;
  }
}

.table-container {
  width: 90%;
  margin: 0 auto;
}

.table-scroll {
  max-height: 400px; 
  overflow-y: auto;
}

.table-scroll::-webkit-scrollbar {
  width: 10px;
}

.table-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.table-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.table-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.custom-apply-btn {
  background-color: #AAFB82F5 !important;
  color: #118E34 !important;
}
</style>
