<template>
  <aside v-if="!loading">
    <PostList :posts="posts" v-if="posts.length > 1" />
    <span v-else>
      This author has no more posts
    </span>
  </aside>
  <aside v-else>
    Loading...
  </aside>
</template>
<script>
import PostList from './PostList.vue';
export default {
  components: { PostList },
  props: ['userId', 'currentPost'],
  data() {
    return {
      loading: false,
      posts: null
    }
  },
  async created() {
    this.loading = true;
    try {
      const r = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}/posts?_expand=user`);
      let json = await r.json();
      this.posts = json.filter(post => post.id !== this.currentPost);
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  }
}
</script>