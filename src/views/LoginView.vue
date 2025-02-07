<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login</h2>
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
      // Redirect to home page
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
/* Full-screen background */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f8ff;
}

/* Login Card */
.login-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
  border: 1px solid #bbb;
}

/* Input fields */
.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  font-weight: bold;
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

/* Login button */
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
