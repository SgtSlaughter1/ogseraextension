<template>
  <component 
    :is="linkOrButton" 
    :to="to" 
    :href="href"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
    <i v-if="icon" :class="icon" class="ms-2"></i>
  </component>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    // Button type and styling
    variant: {
      type: String,
      default: 'primary', // primary, success, warning, etc.
      validator: (value) => ['primary', 'success', 'warning', 'light', 'dark'].includes(value)
    },
    
    // Button size
    size: {
      type: String,
      default: 'md', // sm, md, lg
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    
    // Optional label if not using slot
    label: {
      type: String,
      default: ''
    },
    
    // Optional icon
    icon: {
      type: String,
      default: ''
    },
    
    // Routing or link props
    to: {
      type: [String, Object],
      default: null
    },
    
    href: {
      type: String,
      default: null
    },
    
    // Additional custom classes
    customClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    // Determine if it's a router-link or a button/anchor
    linkOrButton() {
      if (this.to) return 'router-link'
      if (this.href) return 'a'
      return 'button'
    },
    
    // Dynamic button classes based on props
    buttonClasses() {
      const baseClasses = [
        'btn',
        `btn-${this.variant}`,
        this.customClass
      ]
      
      // Size classes
      const sizeClasses = {
        'sm': 'btn-sm',
        'md': '',
        'lg': 'btn-lg'
      }
      
      // Add size class
      baseClasses.push(sizeClasses[this.size])
      
      // Additional classes for specific variants
      if (this.variant === 'light') {
        baseClasses.push('text-success')
      }
      
      return baseClasses.filter(cls => cls).join(' ')
    }
  },
  methods: {
    // Click handler for additional actions if needed
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
.btn-custom {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
