<template>
  <article class="newsletter-page padding-top-lg padding-bottom-xxl">
    <div class="container max-width-xs">
      <h1 class="text-center">Nieuwsbrief</h1>
      <form class="margin-top-xl">
        <div class="text-component text-center">
          <p class="margin-bottom-xs">
            Ik houd je op de hoogte van seasonal goodies, nieuws en acties.
            Schrijf je nu in en ontvang <strong>15% korting</strong> op je
            eerste aankoop!
          </p>
        </div>

        <newsletter-input class="margin-top-md" />
        <testimonial-single
          body="Ik heb het geluk gehad bijna al Daisy’s lekkernijen te kunnen proeven. Alles is zo lekker dat ik mezelf moet inhouden om er niet teveel van te eten! In een woord dus; VERRUKKELIJK! Daisy Bakes is een echte aanrader en wij gaan zeker vaker bij haar bestellen!"
          name="Es"
          class="padding-top-lg"
        />
      </form>
    </div>
  </article>
</template>

<script>
export default {
  head: {
    title: 'Nieuwsbrief | Daisy Bakes',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Schrijf je in en ontvang kortingen, tips en recepten.',
      },
    ],
  },
}
</script>

<style lang="scss">
.newsletter-page {
  background-color: var(--color-accent);
}
</style>
