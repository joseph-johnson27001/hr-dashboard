<template>
  <div class="login-container">
    <div class="login-card">
      <img src="/bird-icon.png" alt="Company Logo" class="logo" />
      <h3>Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" class="search-input" v-model="email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="search-input"
            v-model="password"
            required
          />
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background: #f0f8ff;
}

.login-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 95%;
  border: 1px solid #bbb;
}

.logo {
  width: 80px;
  height: auto;
}

h3 {
  font-weight: 400;
  color: #0a4d86;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  font-weight: 100;
  margin-bottom: 5px;
}

.input-group input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background: #0288d1;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background: #026aa7;
}
</style>
