<template>
  <div>
    <active-user
      v-bind:user-name="userName"
      v-bind:user-age="userAge"
    ></active-user>
    <user-data v-on:send-user-data="updateUser"></user-data>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userName: '',
      userAge: 0,
    };
  },
  methods: {
    updateUser(name, age) {
      this.userName = name;
      this.userAge = +age;
    },
  },
};
</script>

<style>
.box {
  border: 1px solid #00a876;
  border-radius: 12px;
  max-width: 40rem;
  padding: 10px;
  margin: 10px auto;
}
</style>
