<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="flex max-w-6xl w-full">
      <aside class="hidden mr-10 w-64 lg:block">
        <ul>
          <li class="mb-2">
            <nuxt-link to="/docs/"> Getting Started </nuxt-link>
          </li>

          <li class="mb-2">
            <nuxt-link to="/docs/picker/"> Picker </nuxt-link>
          </li>

          <li class="mb-2">
            <nuxt-link to="/docs/contrast-checker/">
              Contrast Checker
            </nuxt-link>
          </li>

          <li class="mb-2">
            <nuxt-link to="/docs/shortcuts/"> Shortcuts </nuxt-link>
          </li>
        </ul>
      </aside>
      <article>
        <nuxt-child />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Docs'
    };
  }
};
</script>
