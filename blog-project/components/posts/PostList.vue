<template>
  <section class="post-list">
    <post-preview
      v-for="{ id, thumbnail, title, previewText } in posts"
      :key="id"
      :id="id"
      :thumbnail="thumbnail"
      :title="title"
      :preview-text="previewText"
      :is-admin="isAdmin"

    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
