<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last update on {{ loadedPost.updatedDate | date }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  // async asyncData({ params : { id }, error }) {
  //   return {
  //     loadedPost: await new Promise(resolve => {
  //       // error(new Error());
  //       setTimeout(() => {
  //         resolve({
  //           id: "1",
  //           thumbnail:
  //             "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
  //           title: `The First Post (ID:${id})`,
  //           previewText: "Hello, this the preview text for the first post!",
  //           lastUpdate: new Date(),
  //           author: "Fadhilah Metra",
  //           content: "Some dummy text which is definitely not the preview though!"
  //         });
  //       }, 1000);
  //     }).catch(e => {
  //       error(e);
  //     })
  //   };
  // }
  asyncData: function(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios
            .$get(`${process.env.baseUrl}/posts/${context.params.id}.json`)
            .then( data  => ({
              loadedPost: { ...data }
            }))
            .catch(e => context.error(e));
  },
  head: {
    title: 'A Single Blog Post'
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
