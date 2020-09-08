<template>
  <div class="flex flex-wrap justify-center w-full">
    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <div class="max-w-6xl w-full z-10">
        <div class="flex flex-col flex-wrap items-center w-full lg:flex-row">
          <div class="w-full" data-aos="fade-up">
            <h1 class="pb-4 pt-4 text-4xl md:text-5.5xl">About Swach</h1>

            <h2 class="pb-4 pt-4 text-2xl">What is Swach?</h2>

            <p class="max-w-4xl pb-4 pt-4">
              Swach is a robust color management tool for the modern age. It
              encompasses many features from several design apps we loved into a
              one stop shop color app.
            </p>

            <h2 class="pb-4 pt-4 text-2xl">Why did you build Swach?</h2>

            <p class="max-w-4xl pb-4 pt-4">
              We wanted to make the features of many popular macOS only design
              apps available to all designers and developers on all platforms.
              It was also a great learning experience in releasing cross
              platform software. You can read more about what we learned in our
              <a
                class="text-alt hover:text-color1"
                href="https://shipshape.io/work/swach/"
                >case study</a
              >.
            </p>

            <h2 class="pb-4 pt-4 text-2xl">Why should I use Swach?</h2>

            <p class="max-w-4xl pb-4 pt-4">
              We believe Swach is everything you could need combined into one
              color app. It offers color palettes, a color combination generator
              (color harmonies), a contrast checker, and a color picker tool in
              one cross platform app you can use on macOS, Windows, and Linux.
              We are constantly working to improve Swach and we love to hear
              from our users and incorporate their valuable feedback into the
              core features of the app.
            </p>
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
    const title = 'About';
    const description =
      'Learn about why we built Swach and why you should use it.';
    const url = 'https://swach.io/about/';
    return generateMeta(title, description, url);
  }
};
</script>
