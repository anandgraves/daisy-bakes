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
            <div class="v-space-md margin-y-md">
              <nuxt-content :document="product" class="text-component" />
              <p class="margin-y-md text-xl font-bold">
                {{ moneyFormat(price) }}
              </p>
            </div>

            <div v-if="showProductOptions" class="margin-bottom-md">
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

            <div class="bg-contrast-lower margin-top-xl">
              <ul
                class="padding-xl text-sm list-paragraphs list-paragraphs--lg"
              >
                <li>
                  Lekkers van Daisy Bakes is af te halen in Almere of kan tegen
                  een kleine vergoeding bezorgd worden in omgeving Almere /
                  Amsterdam.
                </li>
                <li>
                  Fijn weetje, al het lekkers is gemaakt met o.a. amandelmeel en
                  roomboter.
                </li>
                <li>
                  Op aanvraag kan Daisy Bakes haar lekkers glutenvrij en
                  suikervrij maken.
                </li>
                <li>
                  NB: DaisyBakes houdt rekening met de RIVM richtlijnen bij
                  leveren of afhalen van haar producten.
                </li>
              </ul>
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
      showProductOptions: true,
    }
  },
  head() {
    return {
      title: `${this.productTitle} | Producten | Daisy Bakes`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.shortDescription,
        },
      ],
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
      if (this.product.productOptions.length === 1) {
        this.price = item.price
        this.productOptionTitle = item.title
        this.showProductOptions = false
        return
      }

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
${this.numberOfProducts}X ${this.productTitle}${
          this.productOptionTitle ? ', ' + this.productOptionTitle : ''
        }
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
