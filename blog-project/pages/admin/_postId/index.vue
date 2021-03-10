<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit-post="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  // data() {
  //     return {
  //         loadedPost: {
  //             author: 'Fadhilah Metra',
  //             title: "My awesome post",
  //             content: 'Super amazing, thanks for that!',
  //             thumbnailLink: 'https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg'
  //         }
  //     };
  // }
  async asyncData({ error, params: { postId }, app }) {
    const loadedPost  = await app.$axios
      .$get(
        `${process.env.baseUrl}/posts/${postId}.json`
      )
      .catch(e => error(e));
    return {
      loadedPost
    };
  },
  methods: {
    async onSubmitted(editedPost) {
      await this.$store.dispatch('editPost', { post: editedPost, id: this.$route.params.postId})
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
