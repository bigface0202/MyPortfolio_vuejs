<template>
  <span class="badge" :class="'firstauthor'">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    text () {
      return this.title.toUpperCase()
    }
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #252525;
  background-color: #ccc;
  border-radius: 30px;
}

.firstauthor {
  color: white;
  background-color: hsl(133, 100%, 30%);
}

.backend {
  color: white;
  background-color: #71008d;
}

.career {
  color: white;
  background-color: #8d006e;
}
</style>
