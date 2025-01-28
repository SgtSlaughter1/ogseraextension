<template>
  <div class="tsp-registration">
    <div class="registration-container">
      <router-view @next="nextStep" @back="prevStep" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TSPRegistration',
  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      formData: {}
    }
  },
  methods: {
    nextStep(stepData) {
      // Store the form data
      this.formData = { ...this.formData, ...stepData }
      
      // Navigate to next step
      const nextStep = this.currentStep + 1
      if (nextStep <= this.totalSteps) {
        this.currentStep = nextStep
        this.$router.push({ name: `registration-step-${nextStep}` })
      }
    },
    prevStep() {
      const prevStep = this.currentStep - 1
      if (prevStep >= 1) {
        this.currentStep = prevStep
        this.$router.push({ name: `registration-step-${prevStep}` })
      } else {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style scoped>
.tsp-registration {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

.registration-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

@media (max-width: 1200px) {
  .registration-container {
    padding: 0;
  }
}
</style>