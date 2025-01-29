<template>
  <div class="progress-container">
    <!-- Navigation Steps -->
    <div class="nav-items">
      <router-link 
        :to="{ name: 'registration-step-1' }" 
        class="nav-item" 
        :class="{ active: currentStep >= 1, clickable: true }"
        @click="navigateToStep(1)"
      >
        <span class="nav-content">
          <div class="icon-container" :class="{ active: currentStep >= 1 }">
            <img v-if="currentStep === 1" src="@/assets/TSP Registration/icon/Frame 427319221.png" alt="Basic Details" 
                :class="{ 'active-icon': currentStep === 1 }">
            <img v-else src="@/assets/TSP Registration/icon/Frame 427319219.png" alt="Basic Details" 
                :class="{ 'active-icon': currentStep === 1 }">
          </div>
          <span>Basic Details</span>
          <img src="@/assets/TSP Registration/icon/next.png" alt="Next" class="next-icon">
        </span>
      </router-link>

      <router-link 
        :to="{ name: 'registration-step-2' }" 
        class="nav-item" 
        :class="{ active: currentStep >= 2, clickable: currentStep >= 2 }"
        @click="navigateToStep(2)"
      >
        <span class="nav-content">
          <div class="icon-container" :class="{ active: currentStep >= 2 }">
            <img v-if="currentStep === 2" src="@/assets/TSP Registration/icon/Frame 427319222.png" alt="Organization"
                :class="{ 'active-icon': currentStep === 2 }">
            <img v-else src="@/assets/TSP Registration/icon/Frame 427319221-1.png" alt="Organization"
                :class="{ 'active-icon': currentStep === 2 }">
          </div>
          <span>Organisation detail</span>
          <img src="@/assets/TSP Registration/icon/next.png" alt="Next" class="next-icon">
        </span>
      </router-link>

      <router-link 
        :to="{ name: 'registration-step-3' }" 
        class="nav-item" 
        :class="{ active: currentStep >= 3, clickable: currentStep >= 3 }"
        @click="navigateToStep(3)"
      >
        <span class="nav-content">
          <div class="icon-container" :class="{ active: currentStep >= 3 }">
            <img v-if="currentStep === 3" src="@/assets/TSP Registration/icon/Group 1261156940.png" alt="Requirements"
                :class="{ 'active-icon': currentStep === 3 }">
            <img v-else src="@/assets/TSP Registration/icon/Frame 2147226384.png" alt="Requirements"
                :class="{ 'active-icon': currentStep === 3 }">
          </div>
          <span>Requirements</span>
          <img src="@/assets/TSP Registration/icon/next.png" alt="Next" class="next-icon">
        </span>
      </router-link>

      <router-link 
        :to="{ name: 'registration-step-4' }" 
        class="nav-item" 
        :class="{ active: currentStep >= 4, clickable: currentStep >= 4 }"
        @click="navigateToStep(4)"
      >
        <span class="nav-content">
          <div class="icon-container" :class="{ active: currentStep >= 4 }">
            <img v-if="currentStep === 4" src="@/assets/TSP Registration/icon/Frame 427319223.png" alt="Staffing"
                :class="{ 'active-icon': currentStep === 4 }">
            <img v-else src="@/assets/TSP Registration/icon/Group 19.png" alt="Staffing"
                :class="{ 'active-icon': currentStep === 4 }">
          </div>
          <span>Staffing</span>
          <img src="@/assets/TSP Registration/icon/next.png" alt="Next" class="next-icon">
        </span>
      </router-link>
    </div>

    <!-- Progress Bar -->
    <div class="progress">
      <div
        class="progress-bar "
        role="progressbar"
        :style="{ width: progressPercentage + '%' }"
        :aria-valuenow="progressPercentage"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  methods: {
    navigateToStep(step) {
      if (this.currentStep >= step) {
        this.$router.push({ name: `registration-step-${step}` })
      }
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentStep / this.totalSteps) * 100
    }
  }
}
</script>

<style scoped>
.progress-container {
  background-color: #edf0f9;
  border-bottom: 1px solid #eee;
}

.nav-items {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.2rem 2rem; 
  margin-top: 3.5rem;
  flex-wrap: nowrap;
  overflow-x: auto; 
  max-width: 100%; 
}

.progress {
  width: 100%; 
  background-color: #f3f3f3;
  height: 8px;
  border-radius: 4px;
}

.progress-bar {
  height: 100%;
  background-color: #28a745;
  border-radius: 4px;
  transition: width 0.3s;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  position: relative;
  padding-bottom: 0.1rem;
  text-decoration: none;
  cursor: pointer;
  flex-grow: 1; 
  font-size: 0.9rem; 
}

.nav-item.clickable {
  cursor: pointer;
}

.nav-item:not(.clickable) {
  cursor: not-allowed;
  opacity: 0.7;
}

.nav-item.active {
  pointer-events: none;
  font-weight: bold;
}

.nav-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-container {
  width: 24px; 
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.icon-container img {
  width: 24px;
  height: 24px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.icon-container img.active-icon {
  opacity: 1;
}

.next-icon {
  width: 16px;
  height: 16px;
  opacity: 0.8;
  
}

span {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .nav-item {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .nav-items {
    flex-direction: column; 
    align-items: flex-start;
  }
}
</style>