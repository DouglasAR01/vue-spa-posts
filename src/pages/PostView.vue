<template>
  <article class="container p-4" v-if="!loading">
    <div class="row">
      <div class="col-md-8">
        <input id="title" type="text" name="title" class="form-control" v-model="post.title" :readonly="!editing">
        <div>
          <strong>By:</strong> {{ post.user.name }}
        </div>
      </div>
      <div class="col-md-4">
        <button class="btn btn-primary" @click="editing = !editing">{{ editing ? "Save" : "Edit" }}</button>
      </div>
    </div>
    <hr>
    <div class="row mt-2">
      <div class="col-md-8">
        <textarea name="content" class="form-control" rows="20" :readonly="!editing" v-model="post.body"></textarea>
      </div>
      <div class="col-md-4">
        <h5>Related posts</h5>
        <PostRelated :user-id="post.user.id" :current-post="post.id" class="related-posts"></PostRelated>
      </div>
    </div>
  </article>
  <article v-else>
    Loading...
  </article>
</template>
<script>
import PostRelated from '../components/posts/PostRelated.vue';
export default {
  components: { PostRelated },
  data() {
    return {
      editing: false,
      loading: false,
      post: null,
    }
  },
  async created() {
    this.loading = true;
    const id = this.$route.params.id;
    try {
      const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?_expand=user`);
      this.post = await r.json();
    } catch (e) {
      console.log(e);
    }
    this.loading = false;
  }
}
</script>
<style scoped>
#title:read-only {
  font-size: large;
  font-weight: bold;
}

.form-control:read-only {
  background-color: #fff;
  border-color: #fff;
  padding-left: 0;
}

.related-posts {
  max-height: 70vh;
  overflow-y: scroll;
}
</style>