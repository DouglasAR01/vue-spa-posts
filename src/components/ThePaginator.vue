<template>
  <section>
    <div class="mb-2 text-center">
      Results per page:
      <button class="pg-btn btn text-danger" @click="() => $emit('limitUpdate', -1)"><i class="bi bi-dash"></i></button>
      {{ pageLimit }}
      <button class="pg-btn btn text-success" @click="() => $emit('limitUpdate', 1)"><i class="bi bi-plus"></i></button>
    </div>
    <div class="row">
      <div class="col-3 text-end">
        <button class="btn btn-primary" :disabled="currentPage - 1 < 1" @click="() => updatePage(currentPage - 1)">
          <i class="bi bi-arrow-left"></i>
        </button>
      </div>
      <div class="col-6 text-center">
        <button class="btn btn-primary me-1 mb-2" v-for="i in nPages" :key="'bp' + i" :disabled="i == currentPage"
          @click="() => updatePage(i)">
          {{ i }}
        </button>
      </div>
      <div class="col-3 text-start">
        <button class="btn btn-primary" :disabled="currentPage + 1 > nPages" @click="() => updatePage(currentPage + 1)">
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    pageLimit: Number,
    arrayLen: Number
  },
  computed: {
    nPages() {
      let currentLimit = Math.floor(this.arrayLen / this.pageLimit);
      return this.arrayLen % this.pageLimit != 0 ? currentLimit + 1 : currentLimit;
    }
  },
  methods: {
    updatePage(newPage) {
      if (newPage < 1 || newPage > this.nPages) return;
      return this.$emit("pageUpdate", newPage);
    }
  }
}
</script>
<style scoped>
.pg-btn {
  max-width: 20px;
  padding-left: 0;
}
</style>