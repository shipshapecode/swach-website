<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="flex max-w-6xl w-full">
      <aside class="mr-10 w-64">
        <ul>
          <li class="mb-2">
            <nuxt-link to="/docs/">
              Getting Started
            </nuxt-link>
          </li>

          <li class="mb-2">
            <nuxt-link to="/docs/picker/">
              Picker
            </nuxt-link>
          </li>

          <li class="mb-2">
            <nuxt-link to="/docs/contrast-checker/">
              Contrast Checker
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <article>
        <nuxt-child />
      </article>
    </div>
  </div>
</template>
