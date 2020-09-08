<template>
  <div class="flex flex-wrap justify-center w-full">
    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <div class="max-w-6xl w-full z-10">
        <div class="flex flex-col flex-wrap items-center w-full lg:flex-row">
          <div class="w-full" data-aos="fade-up">
            <h1 class="pb-4 pt-4 text-4xl md:text-5.5xl">Download Swach</h1>

            <ul class="ml-6 pb-2 pt-2">
              <li class="list-disc pb-2 pt-2">
                <a
                  class="text-alt hover:text-color1"
                  href="https://download.swach.io/download/dmg/"
                >
                  macOS
                </a>
              </li>

              <li class="list-disc pb-2 pt-2">
                <a
                  class="text-alt hover:text-color1"
                  href="https://download.swach.io/download/exe/"
                >
                  Windows
                </a>
              </li>

              <li class="list-disc pb-2 pt-2">
                <nuxt-link
                  class="text-alt hover:text-color1"
                  to="/download/linux/"
                >
                  Linux
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  head() {
    const title = 'Download';
    const description =
      'Download Swach for free for macOS, Windows, and Linux.';
    const url = 'https://swach.io/download/';
    return generateMeta(title, description, url);
  }
};
</script>
