<template>
  <div>
    <!-- '@submit.prevent' works like e.prevent.default() in React.js to avoid the page being refreshed (HTML default behaviour) -->
    <form @submit.prevent="handleSubmit">
      <label>E-mail</label>
      <!-- v-model is for data-binding -->
      <input type="email" required v-model="email">

      <label>Password</label>
      <input type="password" required v-model="password">
      <!-- Show password error if minimum length (6) is not fulfilled -->
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
    
      <label>Role:</label>
      <select v-model="role">
        <option value="" selected>-- Select Role --</option>
        <option value="developer">developer</option>
        <option value="designer">designer</option>
      </select>

      <label>Skill</label>
      <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill">
      <!-- :key as a unique identifier for each looping (each skill is assumed unique here) -->
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="removeSkill(skill)">{{ skill }}</span>
      </div>

      <div class="terms">
        <input type="checkbox" required v-model="agreeToTerms">
        <label>Accept terms and conditions</label>
      </div>

      <!-- Multiple checkboxes using one v-model (gotta use array for this) -->
      <label>What brought you to us?</label>
      <div>
        <input type="checkbox" value="linkedin" v-model="knownFrom">
        <label>LinkedIn post</label>
      </div>
      <div>
        <input type="checkbox" value="instagram" v-model="knownFrom">
        <label>Instagram</label>
      </div>
      <div>
        <input type="checkbox" value="friends" v-model="knownFrom">
        <label>Friends</label>
      </div>

      <div class="submit-btn-area">
        <button>Create an account</button>
      </div>
    </form>
    
    <p>Email : {{ email }}</p>
    <p>Password : {{ password }}</p>
    <p>Role : {{ role }}</p>
    <p>tempSkill : {{ tempSkill }}</p>
    <p>Skills : {{ skills }}</p>
    <p>Terms accepted : {{ agreeToTerms }}</p>
    <p>Known from : {{ knownFrom }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
      tempSkill: '',
      skills: [],
      agreeToTerms: false,
      knownFrom: [],
      passwordError: '',
    }
  },
  methods: {
    addSkill(e) {
      // Only fired when tempSkill value exists and comma is pressed
      if (e.key === ',' && this.tempSkill) {
        // If skill is not duplicate, then add it
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }

        // Clear tempSkill after adding it to skills
        this.tempSkill = '';
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item
      });
    },
    handleSubmit() {
      // Validate password length
      this.passwordError = this.password.length > 5 
        ? '' 
        : 'Password must be at least 6 chars long';
    
      if (!this.passwordError) {
        console.log('email : ', this.email);
        console.log('password : ', this.password);
        console.log('role : ', this.role);
        console.log('tempSkill : ', this.tempSkill);
        console.log('skills : ', this.skills);
        console.log('agreeToTerms : ', this.agreeToTerms);
        console.log('knownFrom : ', this.knownFrom);
        console.log('passwordError : ', this.passwordError);
      }
    },
  },
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  /* 'display: inline-block;' makes checkbox positioned beside the text */
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
/* Skills section styling */
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
/* Submit button */
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
}
.submit-btn-area {
  text-align: center;
}
/* Error elements styling */
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
