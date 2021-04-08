<template>
  <section class="testimonial position-relative z-index-1">
    <div class="container max-width-adaptive-sm">
      <figure
        class="flex justify-center margin-bottom-md reveal-fx reveal-fx--scale"
      >
        <img
          v-if="photoUrl"
          class="block width-xxl height-xxl radius-50% border border-bg border-2 shadow-sm"
          :src="photoUrl"
          alt="Testimonial picture"
        />
      </figure>
      <div class="testimonial__block-wrapper">
        <blockquote
          class="text-lg text-center line-height-md margin-bottom-md"
          v-html="body"
        ></blockquote>
        <svg
          class="icon icon--xxl color-contrast-higher opacity-10%"
          aria-hidden="true"
          viewBox="0 0 64 64"
        >
          <polygon
            fill="currentColor"
            points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36"
          />
          <polygon
            fill="currentColor"
            points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36"
          />
        </svg>
      </div>
      <div class="text-center">
        <p class="text-uppercase letter-spacing-md">
          <strong>{{ name }}</strong>
        </p>
        <p v-if="occupation" class="color-contrast-medium margin-top-xxxxs">
          {{ occupation }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: false,
      default: '',
    },
    photoUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import 'testimonial-single';
</style>
