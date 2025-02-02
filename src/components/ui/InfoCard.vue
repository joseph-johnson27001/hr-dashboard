<template>
  <div class="info-card">
    <slot></slot>
    <!-- Slot to add custom content dynamically -->
  </div>
</template>

<script>
export default {
  name: "InfoCard",
};
</script>

<style scoped>
.info-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
}
</style>
