<template>
  <div>
    <feature-v12 />
    <testimonial-single
      body="Ik wil een klein beetje geluk en vrolijkheid meegeven aan jouw dag.
          Jouw eigen genietmomentje."
      name="Daisy"
      photo-url="/images/daisy.jpg"
      class="padding-y-xxl"
    />

    <div class="container max-width-adaptive-md">
      <div class="margin-bottom-lg">
        <div class="flex justify-center">
          <h2>Verse Toetjes Voor Jou</h2>
        </div>
      </div>
    </div>
    <nuxt-link to="/producten">
      <div class="switcher">
        <div>
          <div>
            <div class="frame frame-square">
              <client-only>
                <cld-image
                  :cloud-name="cloudName"
                  public-id="chocoladetaart_ykngat"
                  fetchFormat="auto"
                  crop="fill"
                  aspectRatio="1.0"
                  responsive
                  quality="65"
                  loading="lazy"
                  secure="true"
                />
              </client-only>
            </div>
          </div>
          <div>
            <div class="frame frame-square">
              <client-only>
                <cld-image
                  :cloud-name="cloudName"
                  public-id="friandise-single_qgng10"
                  fetchFormat="auto"
                  crop="fill"
                  aspectRatio="1.0"
                  responsive
                  quality="65"
                  loading="lazy"
                  secure="true"
                />
              </client-only>
            </div>
          </div>
          <div>
            <div class="frame frame-square">
              <client-only>
                <cld-image
                  :cloud-name="cloudName"
                  public-id="pruimencake_zl1xax"
                  fetchFormat="auto"
                  crop="fill"
                  aspectRatio="1.0"
                  gravity="south"
                  responsive
                  quality="65"
                  loading="lazy"
                  secure="true"
                />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
    <div>
      <div class="container text-center margin-top-md">
        <nuxt-link to="/producten" class="btn btn--accent"
          >Bekijk Mijn Assortiment :-)</nuxt-link
        >
      </div>
    </div>
    <section class="position-relative z-index-1 margin-y-xxl">
      <div class="container max-width-adaptive-xl">
        <div class="grid">
          <div class="bg-contrast-lower flex items-center col-6@md order-2@md">
            <div class="padding-md padding-x-lg@lg padding-y-lg@lg">
              <div class="text-component">
                <h1>Hoe het is begonnen...</h1>
                <p>
                  Daisy Bakes is ontstaan toen ik in Parijs met mijn lief bij
                  een klein bakkertje om de hoek heerlijke mini cakejes had
                  geproefd. De smaak en gevoel daarvan heeft mij zo verrukt en
                  is daarna bijgebleven.
                </p>
                <p>
                  Terug in Nederland was ik benieuwd of ik ze hier kon vinden.
                  Maar helaas (of toch niet?) was dat niet het geval en besloot
                  ze toen maar zelf te maken.
                </p>
              </div>
            </div>
          </div>
          <figure class="col-6@md">
            <div class="frame frame-square">
              <client-only>
                <cld-image
                  :cloud-name="cloudName"
                  public-id="simona-sergi-RfUr5P6eVuY-unsplash_kclmzs"
                  aspect
                  fetchFormat="auto"
                  aspectRatio="1.0"
                  crop="lfill"
                  responsive
                  quality="65"
                  loading="lazy"
                  secure="true"
                  class="block width-100% height-100% object-cover order-1@md"
                  alt="Photo by Simona Sergi on https://unsplash.com/@i_am_simoesse"
                />
              </client-only>
            </div>
          </figure>
        </div>
      </div>
    </section>

    <testimonial-single
      body="Wat uit de keuken van DaisyBakes komt, zijn kort gezegd ontdekkingsreizen met smaken die perfect in balans zijn. Hier moet je echt even voor gaan zitten, enorm van genieten en rustig op je laten inwerken."
      name="Léon van Schie"
      class="margin-bottom-xxl"
    />

    <section class="padding-y-xxl bg-accent-dark text-center">
      <div class="container max-width-xs">
        <h2 class="margin-bottom-md">Verbeter jouw Kookvaardigheden</h2>
        <p class="margin-bottom-md">
          Ik houd je op de hoogte van kortingen, tips en recepten. <br />
          Schrijf je in en ontvang <strong>nu 10% korting</strong> op je eerste
          aankoop.
        </p>
        <newsletter-input />
      </div>
    </section>
  </div>
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
