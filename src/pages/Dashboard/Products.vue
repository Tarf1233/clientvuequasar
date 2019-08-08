<template>
  <q-page class="flex flex-center">
    <h1></h1>
  </q-page>
</template>

<style>
</style>

<script>
// import { mapActions, mapState } from 'vuex'
// import { LocalStorage } from 'quasar'
export default {
  data () {
    return {
      pagename: 'pageproducts'
    }
  },
  computed: {
    // ...mapState('auth', ['login_state'])
  },
  async beforeMount () {
    // await this.SetAuth({ url: process.env.API + 'products/list' })
  },
  mounted () {
    // this.CheckAuth()
  },
  beforeUpdate () {
    // this.CheckAuth()
  },
  methods: {
    // ...mapActions('auth', ['SetAuth']),
    // async CheckAuth () {
    // if (!LocalStorage.getItem('session')) {
    // this.$router.push('/auth/login')
    // }
    // }
  }
}
</script>
