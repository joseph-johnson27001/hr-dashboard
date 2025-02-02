<template>
  <div class="main-content">
    <InfoCard> </InfoCard>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";

export default {
  components: {
    InfoCard,
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
