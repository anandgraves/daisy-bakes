<template>
  <article class="product-overview padding-bottom-xl">
    <div class="container">
      <h1 class="text-center margin-bottom-sm padding-top-sm">Producten</h1>
      <div class="product-overview__grid grid-every-layout aboveMin">
        <div v-for="product in products" :key="product.id">
          <nuxt-link
            :to="`/producten/${product.slug}`"
            class="product-overview__link"
          >
            <div class="frame frame43">
              <img :src="product.image" alt="" />
            </div>
            <div class="product-overview__title">{{ product.title }}</div>
          </nuxt-link>
        </div>
      </div>
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
  margin-bottom: 1.5rem;
}

.product-overview__link {
  text-decoration: none;
}
</style>
