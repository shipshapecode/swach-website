<template>
  <!-- eslint-disable-next-line -->
  <div class="content max-w-2xl" v-html="doc.html" />
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  async asyncData({ params }) {
    try {
      const doc = await import(
        `~/content/docs/${params.slug || 'getting-started'}.md`
      );
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  },

  head() {
    const title = `${this.$data.doc.attributes.title || ''} - Docs`;
    const description = `${this.$data.doc.attributes.description || ''}`;
    const url = `https://swach.io${this.$route.path}`;
    return generateMeta(title, description, url);
  }
};
</script>
