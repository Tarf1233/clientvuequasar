<template>
  <q-page class="flex flex-center">
    <template>
      {{post_state}}
      <div class="q-pa-md" style="max-width: 400px">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="email"
            label="your email"
            hint="type your email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type some email']"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="password"
            hint="type your password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type some password']"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>

      </div>
    </template>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      pagename: 'pagelogin',
      email: null,
      password: null,
      accept: false
    }
  },
  mounted () {
    // this.ClearAuth()
  },
  computed: {
    ...mapState('auth', ['post_state'])
  },
  methods: {
    ...mapActions('auth', ['SetLogin']),
    ...mapActions('auth', ['ClearAuth']),
    async onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        await this.SetLogin({ email: this.email, password: this.password })
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
        this.$router.push('/dashboard/products')
      }
    },

    onReset () {
      this.email = null
      this.password = null
      this.accept = false
    }
  }
}
</script>
