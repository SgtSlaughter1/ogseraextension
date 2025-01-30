<template>
  <!-- Hero Section -->
  <section class="qualifications-hero py-5 d-flex align-items-center justify-content-center">
    <div class="container text-center">
      <!-- Title Section -->
      <div class="hero-title mb-4">
        <h1 class="fw-bold">Qualifications Available</h1>
      </div>

      <!-- Stats Section -->
      <div class="stats-wrapper d-flex justify-content-center align-items-center gap-3">
        <!-- Stats Container -->
        <div class="stats-container rounded-1 ">
          <div class="d-flex align-items-center justify-content-center w-100">
            <!-- Statistics Label -->
            <div class="stat-label me-3">
              <span class="btn py-2 px-3 fs-4">Statistics</span>
            </div>

            <!-- Total Applications -->
            <div class="stat-item d-flex p-1 px-3 align-items-center">
              <div class="text me-2">Total Applications</div>
              <div class="divider fw-bold fs-6 me-2"> | </div>
              <div class="text-secondary fs-4 fw-bold">2500</div>
            </div>

            <!-- Approved -->
            <div class="stat-item d-flex p-1 px-3 align-items-center">
              <div class="text me-2">Approved</div>
              <div class="divider fw-bold fs-6 me-2"> | </div>
              <div class="text-dark fs-4 fw-bold">2000</div>
            </div>
          </div>
        </div>

        <!-- Apply Button -->
        <div class="stat-cta">
          <CustomButton 
            variant="custom" 
            size="md" 
            label="Apply here" 
            to="/apply"
            customClass="custom-apply-btn"
          />
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
            <td class="p-3">2</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">3</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">4</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Plumbing</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">5</td>
            <td class="p-3">Building Construction</td>
            <td class="p-3">Masonry</td>
            <td class="p-3">1, 2 & 3</td>
            <td class="p-3 text-success fw-semibold">Validated</td>
          </tr>
          <tr>
            <td class="p-3">6</td>
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
  height: 300px;
}

.hero-title h1 {
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.stats-wrapper {
  width: 80%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  gap: 16px;
}

.text {
  color: #118E34;
}

.stats-container {
  border-radius: 4px;
  background-color: #e0ecfc;
  flex-grow: 0.5;
  height: 70px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-container > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-label {
  display: flex;
  align-items: center;
}

.stat-label > span {
  color: #118E34;
}

.stat-item {
  display: flex;
  align-items: center;
  margin: 0 10px;
  background-color: #CCF1CF;
}

.divider {
  color: #fff;
  margin: 0 8px;
}

.total{
  background-color: #AAFB82F5;
  justify-content: space-between;
}

.table-container {
  width: 90%;
  margin: 0 auto;
}

.table-scroll {
  max-height: 300px; 
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
  padding: 6px 30px;
  border-radius: 4px;
  height: 70px;
  display: flex;
  font-size: 20px;
  align-items: center;
  font-weight: bold;
}
.stat-cta {
  display: flex;
  align-items: center;
}

/* Mobile Styles */
@media (max-width: 760px) {
    /* Hero Section */
    .qualifications-hero {
        height: auto;
        padding: 20px 0;
    }

    .hero-title h1 {
        font-size: 1.5rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }

    /* Stats Section */
    .stats-wrapper {
        flex-direction: column;
        width: 95%;
        margin: 0 auto;
        gap: 10px;
    }

    .stats-container {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .stats-container > div {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .stat-label {
        margin-bottom: 10px;
    }

    .stat-label > span {
        font-size: 0.875rem;
    }

    .stat-item {
        width: 100%;
        margin: 5px 0;
        align-items: center;
        text-align: center;
        font-size: 0.75rem;
        justify-content: center;
    }

    .stat-item .text,
    .stat-item .divider,
    .stat-item .text-secondary,
    .stat-item .text-dark {
        margin: 2px 0;
    }

    .stat-cta {
        width: 100%;
    }

    .custom-apply-btn {
        width: 50%;
        justify-content: center;
        font-size: 5px;
        padding: 8px 12px !important;
        margin: 0 auto;
        height: 40px;
    }

    /* Table Responsiveness */
    .table-container {
        width: 100%;
        padding: 0 10px;
    }

    .table-responsive {
        width: 90% !important;
    }

    .table {
        font-size: 0.675rem;
    }

    .table th, 
    .table td {
        padding: 0.25rem !important;
    }
}
</style>
