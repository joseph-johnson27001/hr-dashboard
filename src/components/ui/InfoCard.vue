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
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
}

.info-card-title {
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  color: #0f3659;
}
</style>
