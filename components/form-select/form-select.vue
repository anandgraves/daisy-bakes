<template>
  <div class="select">
    <select class="select__input form-control" name="selectThis">
      <option value="0">Selecteer aantal</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
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

<style lang="scss">
@import 'form-select';
</style>
