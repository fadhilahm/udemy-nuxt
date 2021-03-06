import { Store } from 'vuex';
import Cookie from 'js-cookie';

export default function createStore() {
    return new Store({
        state: {
            loadedPosts: [],
            token: null
        },
        getters: {
            getLoadedPosts({ loadedPosts }) {
                return loadedPosts;
            },
            getToken: ({ token }) => token,
            isAuthenticated: ({ token }) => !!token
        },
        mutations: {
            SET_LOADED_POSTS(state, posts) {
                state.loadedPosts = posts;
            },
            ADD_POST: (state, post) => state.loadedPosts.push(post),
            EDIT_POST: function(state, { id, post }) {
                state.loadedPosts[id] = post;
            },
            SET_TOKEN: (state, token) => state.token = token
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
                  const  data  = await context.app.$axios
                              .$get(`${process.env.baseUrl}/posts.json`)
                              .catch(e => context.error(e));
                  const postsArr = [];
                  for (const key in data) {
                    postsArr.push({...data[key], id: key });
                  }
                  vuexContext.dispatch('setPosts', postsArr);
            },
            setPosts({ commit }, posts) {
                commit('SET_LOADED_POSTS', posts);
            },
            addPost({ commit, getters: { getToken } }, post) {
                const addedPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return this.$axios
                .$post(
                  `${process.env.baseUrl}/posts.json?auth=${getToken}`, addedPost
                )
                .then(({ name }) => {
                    commit('ADD_POST', {
                        ...addedPost,
                        id: name
                    })
                })
                .catch(e => console.log(e))
            },
            editPost({ getters: { getLoadedPosts, getToken }, commit }, { post, id }) {
                return this.$axios
                .$put(
                    `${process.env.baseUrl}/posts/${id}.json?auth=${getToken}`,
                  post
                )
                .then(() => {
                    const editedIndex = getLoadedPosts.findIndex(e => id === e.id);
                    commit('EDIT_POST', { id: editedIndex, post: { ...post, id } });
                })
                .catch(e => console.error(e));
            },
            authenticateUser({ commit, dispatch }, { isLogin, email, password }) {
                const authUrl = `${
                    isLogin
                      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`
                      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`
                  }${process.env.fbAPIKey}`;
                  return this.$axios
                    .$post(authUrl, {
                      email,
                      password,
                      returnSecureToken: true
                    })
                    .then(({ idToken, expiresIn }) => {
                        commit('SET_TOKEN', idToken);
                        const expiryDate = new Date().getTime() + +expiresIn * 1000;
                        localStorage.setItem('token', idToken);
                        localStorage.setItem('expiryDate', expiryDate);
                        Cookie.set('token', idToken);
                        Cookie.set('expiryDate', expiryDate);
                        return this.$axios.$post(`${process.env.serverMiddlewareBaseUrl}/api/track-data`, {
                            data: "Authenticated user!"
                        })
                    })
                    .catch(e => console.log(e));
            },
            initAuth(ctx, req) {
                let token;
                let expiryDate;

                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const cookie = req.headers.cookie
                                .split(';')
                                .find(c => c.trim().startsWith('token='));
                    if (!cookie) {
                        return;
                    }
                    token = cookie.split('=')[1];
                    expiryDate = req.headers.cookie
                                .split(';')
                                .find(c => c.trim().startsWith('expiryDate='))
                                .split('=')[1];
                } else if (process.client) {
                    token = localStorage.getItem('token');
                    expiryDate = localStorage.getItem('expiryDate');
                }

                if (!token || new Date().getTime() > +expiryDate) {
                    ctx.dispatch('logout');
                    return;
                }

                ctx.commit('SET_TOKEN', token);
            },
            logout(ctx) {
                ctx.commit('SET_TOKEN', null);
                Cookie.remove('token');
                Cookie.remove('expiryDate');
                if (process.client) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('expiryDate');
                }
            }
        }
    });
};
