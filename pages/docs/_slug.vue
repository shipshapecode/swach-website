<template>
  <!-- eslint-disable-next-line -->
  <div class="content" v-html="doc.html" />
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
      const doc = await import(`~/content/docs/${params.slug}.md`);
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  }
};
</script>
