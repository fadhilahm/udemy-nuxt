<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  // asyncData() {
  //   console.log('asyncData is executed!');
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
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
  //             id: "3",
  //             thumbnail:
  //               "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
  //             title: "The Third Post",
  //             previewText: "Hello, this the preview text for the Third post!"
  //           }
  //         ]
  //       });
  //     }, 1500);
  //   });
  // }
  // async asyncData() {
  //   const dummy = new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
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
  //             id: "3",
  //             thumbnail:
  //               "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
  //             title: "The Third Post",
  //             previewText: "Hello, this the preview text for the Third post!"
  //           }
  //         ]
  //       });
  //     }, 1500);
  //   });
  //   const { loadedPosts } = await dummy;
  //   return { loadedPosts };
  // }
  // asyncData: async function() {
  //   return new Promise(resolve =>
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
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
  //             id: "3",
  //             thumbnail:
  //               "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
  //             title: "The Third Post",
  //             previewText: "Hello, this the preview text for the Third post!"
  //           }
  //         ]
  //       });
  //     }, 1500)
  //   ).then(result => {
  //     console.log(result);
  //     return result
  //   })
  // },
  computed: {
    loadedPosts: function() {
      return this.$store.getters.getLoadedPosts;
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/img/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
