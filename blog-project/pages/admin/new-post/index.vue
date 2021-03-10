<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit-post="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted: async function(post) {
      await this.$store.dispatch('addPost', post);
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
