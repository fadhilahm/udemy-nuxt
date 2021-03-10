<template>
  <div class="post-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  middleware: 'log',
  // asyncData: async function() {
  //   return {
  //     loadedPosts: await new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve([
  //           {
  //             id: "1",
  //             thumbnail:
  //               "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
  //             title: "The First Post",
  //             previewText: "Hello, this the preview text for the first post!"
  //           },
  //           {
  //             id: "2",
  //             thumbnail:
  //               "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
  //             title: "The Second Post",
  //             previewText: "Hello, this the preview text for the Second post!"
  //           },
  //           {
  //             id: "4",
  //             thumbnail:
  //               "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
  //             title: "The Fourth Post",
  //             previewText: "Hello, this the preview text for the Fourth post!"
  //           }
  //         ]);
  //       }, 3000);
  //     })
  //   };
  // },
  // fetch: async function({ store }) {
  //   if (store.getters.getLoadedPosts.length > 0) {
  //     return
  //   }
  //   const loadedPosts  = await new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: "1",
  //           thumbnail:
  //             "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
  //           title: "The First Post",
  //           previewText: "Hello, this the preview text for the first post!"
  //         },
  //         {
  //           id: "2",
  //           thumbnail:
  //             "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
  //           title: "The Second Post",
  //           previewText: "Hello, this the preview text for the Second post!"
  //         },
  //         {
  //           id: "4",
  //           thumbnail: "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
  //           title: "The Fourth Post",
  //           previewText: "Hello, this the preview text for the Fourth post!"
  //         }
  //       ]);
  //     }, 3000);
  //   });
  //   store.dispatch('setPosts', loadedPosts);
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.getLoadedPosts;
    }
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
