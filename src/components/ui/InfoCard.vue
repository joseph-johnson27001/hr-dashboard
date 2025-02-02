<template>
  <div class="info-card">
    <h3 class="info-card-title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.info-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin: 5px;
  border: 1px solid #ddd;
}

.info-card-title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #0f3659;
}
</style>
