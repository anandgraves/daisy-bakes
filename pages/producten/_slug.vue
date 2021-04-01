<template>
  <article class="margin-top-lg">
    <section class="product">
      <div class="container">
        <div class="grid gap-md">
          <div class="col-6@md col-7@lg">
            <figure class="image-zoom js-image-zoom">
              <img
                class="image-zoom__preview js-image-zoom__preview"
                :src="product.image"
                alt="Preview image description"
              />
              <figcaption class="sr-only">Image Caption</figcaption>
            </figure>
          </div>
          <div class="col-6@md col-5@lg">
            <div class="margin-bottom-xs">
              <h1>{{ product.title }}</h1>
            </div>
            <div class="text-component v-space-md margin-y-md">
              <nuxt-content :document="product" />
              <p class="text-md">€{{ price }}</p>
            </div>

            <div class="margin-bottom-md">
              <p class="sr-only">Select size:</p>
              <button-group class="gap-xs btns--radio">
                <div
                  v-for="(item, index) in product.productOptions"
                  :key="item.id"
                >
                  <input
                    :id="`${product.slug}-${index}`"
                    :ref="`${product.slug}-${index}`"
                    type="radio"
                    :name="product.slug"
                    :checked="index === 0"
                    :value="item.price"
                    @change="changeOption($event)"
                  />
                  <label class="btns__btn" :for="`${product.slug}-${index}`">{{
                    item.title
                  }}</label>
                </div>
              </button-group>
            </div>
            <div class="flex gap-xs">
              <label class="form-label sr-only" for="qtyInput">Quantity:</label>
              <number-input />
              <button class="btn btn--primary flex-grow">
                Bestel via E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const [product] = await $content('products')
        .where({ slug: params.slug })
        .fetch()

      return {
        product,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  data() {
    return {
      price: null,
    }
  },
  mounted() {
    this.product.productOptions.forEach((item) => {
      if (item.checked) {
        this.price = item.price
      }
    })
  },
  methods: {
    changeOption(event) {
      this.price = event.target.value
    },
  },
}
</script>
