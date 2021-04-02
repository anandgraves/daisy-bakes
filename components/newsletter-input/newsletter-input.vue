<template>
  <div>
    <div class="newsletter-input margin-top-sm">
      <form
        action="https://daisybakes.us1.list-manage.com/subscribe/post?u=f63ade5da54fc2b9bef4cc9e1&amp;id=4b5137fe3f"
        method="post"
      >
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_f63ade5da54fc2b9bef4cc9e1_4b5137fe3f"
            tabindex="-1"
            value=""
          />
        </div>
        <input
          class="newsletter-input__input"
          type="email"
          name="EMAIL"
          placeholder="Jouw e-mailadres"
        />
        <button class="newsletter-input__btn btn btn--accent">
          Schrijf Je In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isPending: false,
      errorMessage: null,
    }
  },
}
</script>

<style lang="scss">
@import 'newsletter-input';
</style>
