<template>
  <div>
    <h3>{{ randomNumber }}</h3>
    <button @click="genRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
export default {
  name: 'GenRandomNumber',
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    genRandomNumber() {
      const num =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      this.randomNumber = num
    }
  }
}
</script>
