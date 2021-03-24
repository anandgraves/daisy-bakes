<template>
  <div>
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
let animMenuButton, flexiAppHeader
if (process.client) {
  animMenuButton = () =>
    import('../components/anim-menu-button/anim-menu-button')
  flexiAppHeader = () => import('../components/app-header/flexi-header')
}

export default {
  name: 'DefaultLayout',
  mounted() {
    // https://codyhouse.co/ds/docs/framework#progressive-enhancement
    document.getElementsByTagName('html')[0].classList.add('js')

    // https://codyhouse.co/ds/docs/framework#content
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'js-app-header'
    script.onload = this.onScriptLoaded
    script.src = '/util.js'

    document.body.appendChild(script)
  },
  destroyed() {
    document.getElementById('js-app-header').remove()
  },
  methods: {
    onScriptLoaded(event = null) {
      animMenuButton()
      flexiAppHeader()
    },
  },
}
</script>
