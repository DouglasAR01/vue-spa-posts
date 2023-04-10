<template>
  <li class="list-group-item">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-8">
        <div class="row">
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </div>
        <div class="row">
          <span><strong>Author: </strong>{{ post.user.name }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>