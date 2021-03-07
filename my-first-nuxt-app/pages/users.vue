<template>
  <div>
    <h1>This is the users page.</h1>
    <form @submit.prevent="onUserLoad">
      <input type="text" placeholder="Type ID here..." v-model="enteredId"/>
      <button>Submit</button>
    </form>
    <nuxt-child />
  </div>
</template>

<script>
export default {
    data() {
        return {
            enteredId: ''
        };
    },
    methods: {
        onUserLoad: function() {
            this.$router.push(`/users/${this.enteredId}`);
        }
    },
    layout: 'users'
}
</script>
