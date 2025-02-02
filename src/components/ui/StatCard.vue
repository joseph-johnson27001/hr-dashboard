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
  margin: 10px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.stat-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #0f3659;
}

.stat-card-value {
  font-size: 24px;
  font-weight: 700;
  color: #0288d1; /* This color can be adjusted */
}
</style>
