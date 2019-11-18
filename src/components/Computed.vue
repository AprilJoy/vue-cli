<template>
  <div class="container">
    <button v-on:click="counter++" class="btn btn-success">Increment</button>
    <button v-on:click="counter--" class="btn btn-danger">Decrement</button>
    <hr />
    <p>{{ view }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    view: function() {
      return this.counter < 0 ? 0 : this.counter;
    }
  }
};
</script>
