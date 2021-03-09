<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '@/components/admin/AdminPostForm';

export default {
    layout: 'admin',
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
    async asyncData({ error, params: { postId } }) {
        const { data: loadedPost} = await axios
                                  .get(`https://nuxt-blog-8d745-default-rtdb.firebaseio.com/posts/${postId}.json`)
                                  .catch(e => error(e));
        return {
            loadedPost
        }
    }
}
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