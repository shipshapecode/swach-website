<template>
  <div class="bg-color1 text-white">
    <nav class="flex h-56 items-end justify-center p-6 w-full">
      <div class="flex flex-wrap items-center justify-between max-w-6xl w-full">
        <nuxt-link
          to="/"
          class="font-bold font-gt-walsheim inline-flex items-center text-white text-2xl"
        >
          <SwachLogoLine class="inline h-10 mr-4 w-10" /> Swach
        </nuxt-link>

        <p class="text-color2 text-sm">
          Copyright © 2020
          <a class="underline hover:text-white" href="https://shipshape.io">
            Ship Shape Consulting LLC.
          </a>
          All rights reserved.
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
import SwachLogoLine from '~/assets/svgs/swach-logo-line.svg?inline';

export default {
  components: {
    SwachLogoLine
  }
};
</script>
