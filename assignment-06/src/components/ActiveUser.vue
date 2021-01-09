<template>
  <div class="box">
    <h2>User: {{ userName }}</h2>
    <h3>Age: {{ userAge }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ActiveUser',
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
