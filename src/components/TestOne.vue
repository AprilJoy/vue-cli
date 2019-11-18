<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ price }}</h1>
    <button @click="clicking()">Change Value</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 200
    };
  },
  methods: {
    clicking() {
      this.price += 100;
    }
  }
};
</script>
