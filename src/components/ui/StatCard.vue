<template>
  <div class="stat-card">
    <div class="stat-content">
      <h3 class="stat-card-title">{{ title }}</h3>
      <p class="stat-card-value">{{ value }}</p>
    </div>
    <div class="stat-icon">
      <i :class="icon"></i>
    </div>
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
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.stat-card {
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
  display: flex;
  justify-content: space-between;
}

.stat-content {
  flex: 1;
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

.stat-icon {
  font-size: 0.8rem;
  color: #006ba6;
  margin-left: 20px;
}

@media (max-width: 300px) {
  .stat-card {
    padding: 10px;
  }
}
</style>
