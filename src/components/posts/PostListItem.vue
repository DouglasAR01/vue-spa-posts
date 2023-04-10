<template>
  <li class="list-group-item">
    <div class="row">
      <div class="col-8">
        <div class="row">
          <span><i class="bi bi-newspaper"></i> <router-link :to="`/post/${post.id}`">{{ post.title
          }}</router-link></span>
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