<template>
  <article class="container p-4" v-if="!loading">
    <h1>Latest posts</h1>
    <label for="ppp">Post per page</label>
    <input type="number" name="ppp" class="form-control mb-2" v-model.number="postPerPage">
    <ThePaginator :current-page="page" :page-limit="postPerPage" :arrayLen="allPosts.length"
      @page-update="(newPage) => page = newPage" />
    <PostList :posts="posts" />
  </article>
  <article v-else>
    Loading...
  </article>
</template>

<script>
import PostList from '../components/posts/PostList.vue';
import ThePaginator from '../components/ThePaginator.vue';
export default {
  components: {
    PostList,
    ThePaginator
  },
  data() {
    return {
      loading: false,
      postPerPage: 20,
      page: 1,
      allPosts: null
    }
  },
  async created() {
    this.loading = true;
    try {
      const r = await fetch("https://jsonplaceholder.typicode.com/posts?_expand=user");
      this.allPosts = await r.json();
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  },
  computed: {
    posts() {
      if (!this.allPosts) {
        return [];
      }
      return this.allPosts.slice((this.page - 1) * this.postPerPage, this.page * this.postPerPage);
    }
  }
}
</script>