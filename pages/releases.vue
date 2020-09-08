<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="max-w-6xl w-full" data-aos="fade-up">
      <h1 class="pb-4 pt-4 text-4xl md:text-5.5xl">Releases</h1>
      <!-- eslint-disable-next-line -->
      <div class="content pb-4 pt-4" v-html="doc.html" />
    </div>
  </div>
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
import { generateMeta } from '~/utils/meta';

export default {
  async asyncData() {
    try {
      const doc = await import('~/content/releases.md');
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  },
  head() {
    const title = 'Releases';
    const description = 'Version history and release notes for Swach.';
    const url = 'https://swach.io/releases/';
    return generateMeta(title, description, url);
  }
};
</script>
