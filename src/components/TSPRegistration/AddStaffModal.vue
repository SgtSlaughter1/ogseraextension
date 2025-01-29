<!-- AddStaffModal.vue -->
<template>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Add Staff details here</h3>
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.name" 
                placeholder="Name" 
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.rank" 
                placeholder="Rank" 
                class="form-input"
                required
              >
            </div>
            <div class="form-group">
              <select 
                v-model="formData.experience" 
                class="form-input"
                required
              >
                <option value="" disabled selected>Experience</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4+ Year">4+ Years</option>
              </select>
            </div>
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.position" 
                placeholder="Position" 
                class="form-input"
                required
              >
            </div>
            <div class="modal-footer">
              <button type="button" class="btn cancel-btn" @click="closeModal">Cancel</button>
              <button type="submit" class="btn update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddStaffModal',
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        formData: {
          name: '',
          rank: '',
          experience: '',
          position: ''
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
        this.resetForm()
      },
      handleSubmit() {
        this.$emit('submit', { ...this.formData })
        this.resetForm()
        this.closeModal()
      },
      resetForm() {
        this.formData = {
          name: '',
          rank: '',
          experience: '',
          position: ''
        }
      }
    }
  }
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
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .modal-header h3 {
    margin: 0;
    color: #333;
    font-size: 1.25rem;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    font-size: 0.95rem;
    outline: none;
  }
  
  .form-input:focus {
    border-color: #118E34;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .cancel-btn {
    background: none;
    border: 1px solid #118E34;
    color: #118E34;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }
  
  .update-btn {
    background: #118E34;
    border: none;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
  }
  
  .update-btn:hover {
    background: #06eb47;
  }
  
  .cancel-btn:hover {
    border-color: #06eb47;
  }
  </style>