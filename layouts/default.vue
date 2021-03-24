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
    script.onload = this.onScriptLoaded
    script.src = '/util.js'
    document.body.appendChild(script)
  },
  methods: {
    onScriptLoaded(event = null) {
      if (event) {
        console.log('Was added', typeof event, event)
        animMenuButton()
        flexiAppHeader()
      } else {
        console.log('Already existed')
      }
    },
  },
}
</script>
