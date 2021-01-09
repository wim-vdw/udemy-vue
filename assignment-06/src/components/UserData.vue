<template>
  <div class="box">
    <form v-on:submit.prevent="submitData">
      <label for="userName">Username:</label>
      <input type="text" id="userName" v-model="inputName" />
      <br />
      <label for="age">Age:</label>
      <input type="text" id="age" v-model="inputAge" />
      <br />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserData',
  data() {
    return {
      inputName: '',
      inputAge: '',
    };
  },
  emits: ['send-user-data'],
  methods: {
    submitData() {
      this.$emit('send-user-data', this.inputName, this.inputAge);
    },
  },
};
</script>
