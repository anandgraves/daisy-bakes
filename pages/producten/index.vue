<template>
  <article class="product-overview padding-bottom-xl">
    <div class="container">
      <h1 class="text-center margin-bottom-sm padding-top-sm">Producten</h1>
      <div class="product-overview__grid grid-every-layout aboveMin">
        <div
          v-for="product in products"
          :key="product.id"
          class="margin-bottom-xl"
        >
          <nuxt-link
            :to="`/producten/${product.slug}`"
            class="product-overview__link"
          >
            <div class="frame frame43">
              <client-only>
                <cld-image
                  :cloud-name="cloudName"
                  :public-id="product.id"
                  aspectRatio="1.333"
                  crop="fill"
                  fetchFormat="auto"
                  :gravity="product.imageGravity"
                  responsive
                  quality="65"
                  loading="lazy"
                  secure="true"
                  class="block"
                />
              </client-only>
            </div>
            <div class="product-overview__title">{{ product.title }}</div>
          </nuxt-link>
        </div>
      </div>

      <testimonial-single
        body="Ik heb alles van jou website mogen proeven en alles is perfect lekker."
        name="Oosie"
        class="padding-y-lg"
      />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const products = await $content('products', params.slug).fetch()

    return {
      products,
    }
  },
  computed: {
    cloudName() {
      return process.env.cloudinaryCloudName
    },
  },
}
</script>

<style lang="scss">
.product-overview {
  background-color: var(--color-accent);
}

.product-overview__grid {
  --min: 22rem;
  --space: 2rem;
}

.product-overview__title {
  margin-top: 0.5rem;
  text-align: center;
}

.product-overview__link {
  text-decoration: none;
}
</style>
