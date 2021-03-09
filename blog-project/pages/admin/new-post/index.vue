<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit-post="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted: async function(post) {
      const result = await axios
        .post(
          "https://nuxt-blog-8d745-default-rtdb.firebaseio.com/posts.json",
          {
            ...post,
            updatedDate: new Date()
          }
        )
        .catch(e => console.log(e));
      console.log(result);
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
