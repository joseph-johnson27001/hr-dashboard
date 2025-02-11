<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal">
      <!-- Logo -->
      <img src="/bird-icon.png" alt="Company Logo" class="logo" />
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
  font-family: "Assistant", sans-serif;
}

/* Modal box */
.modal {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
  border: 1px solid #bbb;
}

/* Logo */
.logo {
  width: 99px;
  height: 100px;
  image-rendering: crisp-edges;
  margin-bottom: 15px;
}

/* Modal Heading */
h3 {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #0a4d86;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
  font-family: "Assistant", sans-serif;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
}

.confirm-btn {
  background: #0288d1;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
}

.confirm-btn:hover {
  background: #026aa7;
}

/* Cancel button */
.cancel-btn {
  background: #d9534f;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
}

.cancel-btn:hover {
  background: #c9302c;
}
</style>
