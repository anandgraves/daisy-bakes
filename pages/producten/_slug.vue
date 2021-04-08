<template>
  <article>
    <section class="product padding-top-lg padding-bottom-xxl">
      <div class="container">
        <div class="grid gap-md">
          <div class="col-6@md col-7@lg">
            <nuxt-link to="/producten">
              <figure class="frame frame43">
                <client-only>
                  <cld-image
                    :cloud-name="cloudName"
                    :public-id="product.id"
                    aspectRatio="1.333"
                    crop="fill"
                    :gravity="product.imageGravity"
                    fetchFormat="auto"
                    responsive
                    quality="65"
                    loading="lazy"
                    secure="true"
                    alt="Preview image description"
                  />
                </client-only>
                <figcaption class="sr-only">Image Caption</figcaption>
              </figure>
            </nuxt-link>
          </div>
          <div class="col-6@md col-5@lg">
            <div class="margin-bottom-xs">
              <h1>{{ productTitle }}</h1>
            </div>
            <div class="text-component v-space-md margin-y-md">
              <nuxt-content :document="product" />
              <p class="text-xl font-bold">{{ moneyFormat(price) }}</p>
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
                    type="radio"
                    :name="product.slug"
                    :checked="item.checked"
                    :value="item.price"
                    @change="changeOption"
                  />
                  <label class="btns__btn" :for="`${product.slug}-${index}`">{{
                    item.title
                  }}</label>
                </div>
              </button-group>
            </div>
            <div class="flex gap-xs">
              <label class="form-label sr-only" for="qtyInput">Quantity:</label>
              <form-select @change="getNumberOfProducts($event)" />
              <a :href="orderByEmail()" class="btn btn--primary flex-grow">
                Bestel via e-mail
              </a>
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
      numberOfProducts: null,
      productOptionTitle: null,
    }
  },
  computed: {
    cloudName() {
      return process.env.cloudinaryCloudName
    },
    productTitle() {
      return this.product.title
    },
  },
  mounted() {
    this.product.productOptions.forEach((item) => {
      if (item.checked) {
        this.price = item.price
        this.productOptionTitle = item.title
      }
    })
  },
  methods: {
    changeOption(event) {
      this.price = event.target.value
    },
    getNumberOfProducts(payload) {
      this.numberOfProducts = payload
    },
    moneyFormat(amount) {
      const price = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
      })
      return price.format(amount)
    },
    orderByEmail() {
      const email = 'info@daisybakes.nl'
      const subject = encodeURIComponent(`Bestelling voor ${this.productTitle}`)
      const body = encodeURIComponent(
        `Ik wil graag het volgende bestellen:
${this.numberOfProducts}X ${this.productTitle}, ${this.productOptionTitle}
Prijs is ${this.numberOfProducts} x ${this.moneyFormat(
          this.price
        )} = ${this.moneyFormat(
          Number(this.numberOfProducts) * Number(this.price)
        )}
      `
      )

      return `mailto:${email}?subject=${subject}&body=${body}`
    },
  },
}
</script>

<style lang="scss">
.product {
  background-color: var(--color-accent);
}
</style>
