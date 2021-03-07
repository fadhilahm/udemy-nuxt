<template>
  <section class="post-list">
    <post-preview
      id="1"
      thumbnail="https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg"
      title="Hello there! I'm the first post"
      preview-text="Hello there! I'm the first preview text"
    />
    <post-preview
      id="2"
      thumbnail="https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg"
      title="Title me2"
      preview-text="Preview me2"
    />
    <post-preview
      id="3"
      thumbnail="https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg"
      title="Third spot babyyyyyy"
      preview-text="For the last hurrah..."
    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";

export default {
  components: {
    PostPreview
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
