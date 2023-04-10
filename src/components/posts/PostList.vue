<template>
  <ul class="list-group">
    <PostListItem v-for="post in posts" :key="post.id" :post="post"></PostListItem>
  </ul>
</template>

<script>
import PostListItem from './PostListItem.vue';
export default {
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>