<template>
  <div class="number-input number-input--v1 js-number-input">
    <input
      id="qtyInput"
      class="form-control js-number-input__value"
      type="number"
      name="qtyInput"
      min="0"
      max="10"
      step="1"
      value="1"
    />

    <div class="number-input__btns">
      <button
        class="reset number-input__btn number-input__btn--plus js-number-input__btn"
        aria-label="Increase Number"
        type="button"
      >
        <svg class="icon" viewBox="0 0 16 16" aria-hidden="true">
          <g><polygon points="13,11 8,5 3,11 "></polygon></g>
        </svg>
      </button>

      <button
        class="reset number-input__btn number-input__btn--minus js-number-input__btn"
        aria-label="Decrease Number"
        type="button"
      >
        <svg class="icon" viewBox="0 0 16 16" aria-hidden="true">
          <g><polygon points="3,5 8,11 13,5 "></polygon></g>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import 'number-input';
</style>
