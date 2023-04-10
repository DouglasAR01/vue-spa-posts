<template>
  <div class="loading-container" v-if="isLoading">
    <div class="loading-spinner"></div>
    <p class="loading-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Loading...',
    },
  },
};
</script>

<style>
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.loading-spinner {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
