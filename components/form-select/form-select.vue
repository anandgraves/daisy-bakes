<template>
  <div class="select">
    <select
      class="select__input form-control"
      name="selectThis"
      @change="changeOption($event)"
    >
      <option value="" selected disabled>Aantal</option>
      <option v-for="item in 10" :key="item" :value="item">{{ item }}</option>
    </select>
    <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16">
      <g stroke-width="1" stroke="currentColor">
        <polyline
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="15.5,4.5 8,12 0.5,4.5 "
        ></polyline>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  methods: {
    changeOption(event) {
      console.log(event.target.value)
    },
  },
}
</script>

<style lang="scss">
@import 'form-select';
</style>
