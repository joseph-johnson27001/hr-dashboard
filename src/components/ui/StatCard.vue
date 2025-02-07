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
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
  display: flex;
  flex-direction: column;
}

.stat-card-title {
  font-size: 14px;
  font-weight: 400;
  color: #0f3659;
}

.stat-card-value {
  padding-top: 10px;
  font-size: 16px;
  color: #0288d1;
}
</style>
