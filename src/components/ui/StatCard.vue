<template>
  <div class="stat-card">
    <h3 class="stat-card-title">{{ title }}</h3>
    <p class="stat-card-value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.stat-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
}

.stat-card-title {
  font-size: 14px;
  font-weight: 400;
  color: #0f3659;
}

.stat-card-value {
  padding-top: 5px;
  font-size: 18px;
  color: #0288d1;
}
</style>
