<template>
  <!-- eslint-disable-next-line -->
  <div class="content" v-html="doc.html" />
</template>

<style>
.content h1 {
  font-size: 2.5em;
  line-height: 1.2;
  margin-bottom: 0.6em;
}

.content h2 {
  font-size: 2em;
  line-height: 1.125;
  margin-bottom: 0.75em;
}

.content h3 {
  font-size: 1.75em;
  line-height: 1.28571;
  margin-bottom: 0.85714em;
}

.content h4 {
  font-size: 1.5em;
  line-height: 1.5em;
  margin-bottom: 1em;
}

.content h5 {
  font-size: 1.25em;
  line-height: 1.5em;
  margin-bottom: 1.2em;
}

.content h6 {
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 1.5em;
}

.content li,
.content ol,
.content p,
.content ul {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 1.5em;
}

.content b,
.content strong {
  font-weight: 700;
}

.content code[class*='language-'] {
  font-size: 14px;
}

.content code:not([class*='language-']) {
  background-color: #ecf3f6;
  border: none;
  border-radius: 2px;
  font-size: 0.8rem;
  line-height: 1rem;
  padding: 0.1rem 0.2rem;
  vertical-align: middle;
  white-space: pre-wrap;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  font-weight: 700;
}

.content img {
  height: auto;
  max-width: 100%;
}

.content li {
  display: list-item;
}

.content ol {
  list-style-type: decimal;
  padding-left: 40px;
}

.content ul {
  list-style-type: disc;
  margin-left: 4rem;
}
</style>
<script>
export default {
  async asyncData({ params }) {
    try {
      const doc = await import(`~/content/docs/${params.slug || 'index'}.md`);
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  }
};
</script>
