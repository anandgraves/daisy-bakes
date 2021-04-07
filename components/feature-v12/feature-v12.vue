<template>
  <section
    class="feature-v12 feature-v12--top feature-v12--left@md feature-v12--offset-sm feature-v12--offset-xl@md padding-top-lg padding-bottom-xxl"
  >
    <div class="container max-width-adaptive-lg">
      <div class="grid flex-center">
        <div class="col-10 col-5@md">
          <div class="feature-v12__offset-item text-center text-left@md">
            <h1 class="text-xxxl@sm">
              Daisy Bakes maakt voor jou Homemade Feel-Good Lekkernijen.
            </h1>
            <div class="margin-top-sm">
              <div class="flex flex-wrap gap-sm items-center margin-x-auto">
                <nuxt-link to="/producten" class="btn btn--primary"
                  >Neem Een Kijkje</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-7@md">
          <figure class="feature-v12__bg-item">
            <div class="frame frame43">
              <nuxt-link to="/producten">
                <client-only>
                  <cld-image
                    :cloud-name="cloudName"
                    public-id="friandises-set2_k0nj07"
                    fetchFormat="auto"
                    aspectRatio="1.333"
                    crop="fill"
                    responsive
                    quality="65"
                    loading="lazy"
                    secure="true"
                    class="block width-100%"
                  />
                </client-only>
              </nuxt-link>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cloudName() {
      return process.env.cloudinaryCloudName
    },
  },
}
</script>

<style lang="scss">
@import 'feature-v12';
</style>
