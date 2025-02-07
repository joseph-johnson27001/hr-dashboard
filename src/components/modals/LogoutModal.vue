<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <h3>Confirm Logout</h3>
      <p>Are you sure you want to log out?</p>
      <div class="modal-buttons">
        <button class="confirm-btn" @click="$emit('confirm')">Log Out</button>
        <button class="cancel-btn" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  border: 1px solid #bbb;
}

h3 {
  margin-bottom: 10px;
  font-weight: 100;
  font-family: "Poppins", sans-serif;
  color: #0a4d86;
}

p {
  margin-bottom: 20px;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}

.confirm-btn {
  background: #0a4d86;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
}

.cancel-btn {
  background: #d9534f;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
}
</style>
