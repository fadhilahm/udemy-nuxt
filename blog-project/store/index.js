import { Store } from 'vuex';
import axios from 'axios';

export default function createStore() {
    return new Store({
        state: {
            loadedPosts: []
        },
        getters: {
            getLoadedPosts({ loadedPosts }) {
                return loadedPosts;
            }
        },
        mutations: {
            SET_LOADED_POSTS(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            async nuxtServerInit(vuexContext, context) {
                  // const loadedPosts  = await new Promise(resolve => {
                  //   setTimeout(() => {
                  //     resolve([
                  //       {
                  //         id: "1",
                  //         thumbnail:
                  //           "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
                  //         title: "The First Post",
                  //         previewText: "Hello, this the preview text for the first post!"
                  //       },
                  //       {
                  //         id: "2",
                  //         thumbnail:
                  //           "https://cache.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg",
                  //         title: "The Second Post",
                  //         previewText: "Hello, this the preview text for the Second post!"
                  //       },
                  //       {
                  //         id: "4",
                  //         thumbnail: "https://media.mehrnews.com/d/2018/10/28/4/2940617.jpg",
                  //         title: "The Fourth Post",
                  //         previewText: "Hello, this the preview text for the Fourth post!"
                  //       }
                  //     ]);
                  //   }, 3000);
                  // });
                  // vuexContext.dispatch('setPosts', loadedPosts);
                  const { data } = await axios
                              .get('https://nuxt-blog-8d745-default-rtdb.firebaseio.com/posts.json')
                              .catch(e => context.error(e));
                  const postsArr = [];
                  for (const key in data) {
                    postsArr.push({...data[key], id: key });
                  }
                  vuexContext.dispatch('setPosts', postsArr);
            },
            setPosts({ commit }, posts) {
                commit('SET_LOADED_POSTS', posts);
            }
        }
    });
};
