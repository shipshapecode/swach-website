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
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.25rem 0.5rem;
  vertical-align: middle;
  white-space: pre-wrap;
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
      const doc = await import('~/content/docs/getting-started.md');
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  }
};
</script>
