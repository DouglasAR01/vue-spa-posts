<template>
  <div>
    <h1>Posts</h1>
    <PostList :posts="posts" v-if="!loading"/>
  </div>
</template>

<script>
import PostList from '../components/posts/PostList.vue';
export default {
  components: {
    PostList
  },
  data() {
    return {
      loading: false,
      posts: null
    }
  },
  async created() {
    this.loading = true;
    try {
      const r = await fetch("https://jsonplaceholder.typicode.com/posts");
      this.posts = await r.json();
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  }
}
</script>