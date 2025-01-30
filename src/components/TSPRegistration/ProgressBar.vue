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
        :class="{ active: currentStep >= 2, clickable: currentStep > 1 }"
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
    <div class="progres">
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
    },
    // scrool for active state
    scrollToActiveStep() {
      this.$nextTick(() => {
        const activeItem = this.$el.querySelector('.nav-item.active')
        if (activeItem) {
          const container = this.$el.querySelector('.nav-items')
          const scrollOptions = {
            behavior: 'smooth',
            inline: 'center'
          }
          activeItem.scrollIntoView(scrollOptions)
        }
      })
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentStep / this.totalSteps) * 100
    }
  },
 
  watch: {
    currentStep: {
      handler() {
        this.scrollToActiveStep()
      },
      immediate: true
    }
  },
  mounted() {
    this.scrollToActiveStep()
  }
}
</script>

<style scoped>
.progress-container {
  background-color: #edf0f9;
  border-bottom: 2px solid #eee;
  padding-right: 2rem;
  width: 95%;
}

.nav-items {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.9rem 2rem; 
  margin-top: 3.5rem;
  flex-wrap: nowrap;
  overflow-x: auto; 
  max-width: 100%; 
  scroll-behavior: smooth; 
  -webkit-overflow-scrolling: touch; 
}

.progres {
  width: 97%;
  background-color: white;
  height: 15px;
  border-radius: none !important;
  margin-left: 0px;
}

.progress-bar {
  height: 100%;
  background: #118E34;
  border-radius: none;
  transition: width 0.3s;
  margin-left: 0;
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

/* scrollbar */
.nav-items::-webkit-scrollbar {
  height: 1px; 
}

.nav-items::-webkit-scrollbar-track {
  background: transparent;
  margin: 0 4px; 
}

.nav-items::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2); 
  backdrop-filter: blur(4px); 
  border-radius: 20px; 
  transition: background 0.2s ease; 
}

.nav-items:hover::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3); 
}

.nav-items::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4); 
}

.nav-items {
  scrollbar-width: none; 
}

.nav-items:hover {
  scrollbar-width: thin; 
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .nav-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    margin:0;
  }

  .nav-item {
    flex: 1 1 100%; 
    font-size: 0.8rem;
    padding: 0.5rem 1.3rem;
  }

  .nav-content {
    gap: 0.3rem;
  }

  .icon-container {
    width: 20px;
    height: 20px;
  }

  .icon-container img {
    width: 20px;
    height: 20px;
  }

  .next-icon {
    width: 12px;
    height: 12px;
  }

  .progres {
    width: 100%;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .nav-items {
    grid-template-columns: repeat(2, 1fr); 
    gap: 0.15rem;
    padding: 0.25rem 0rem;
    margin: 0;
  }

  .nav-item {
    font-size: 0.75rem;
  }

  .icon-container {
    width: 18px;
    height: 18px;
  }

  .icon-container img {
    width: 18px;
    height: 18px;
  }

  .next-icon {
    width: 10px;
    height: 10px;
  }
}
</style>