<template>
  <li>
    {{ post.title }}
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