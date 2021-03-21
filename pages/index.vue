<template>
  <div class="container">
    <section class="position-relative z-index-1 margin-y-xxl">
      <div class="container max-width-adaptive-xl">
        <div class="grid">
          <div class="bg-contrast-lower flex items-center col-6@md order-2@md">
            <div class="padding-md padding-x-lg@lg padding-y-xxl@lg">
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
            <img
              class="block width-100% height-100% object-cover order-1@md"
              src="assets/images/simona-sergi-RfUr5P6eVuY-unsplash.jpg"
              alt="Image description"
            />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
