<template>
  <div class="flex flex-wrap justify-center w-full">
    <div
      class="bg-lightest-blue flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full"
    >
      <TopBg class="absolute hidden right-0 top-0 z-0 lg:block" />

      <div class="max-w-6xl w-full z-10">
        <div class="flex flex-wrap items-center w-full">
          <div class="w-full lg:w-1/2">
            <h1
              class="font-gt-walsheim p-4 text-4xl md:text-5.5xl"
              data-aos="fade-up"
            >
              A robust color management tool for the
              <span class="modern-underline">modern age.</span>
            </h1>

            <div
              class="flex justify-center m-4 lg:justify-start"
              data-aos="fade-up"
            >
              <a
                class="bg-color1 btn block font-gt-walsheim hover:bg-gray-800"
                href="https://hazel-kohl-kappa.now.sh/download"
              >
                Download free
              </a>
            </div>
          </div>

          <div class="flex justify-end w-full lg:w-1/2">
            <img
              class="block h-auto max-h-full max-w-md m-auto p-4 w-full lg:m-0"
              src="/img/swach.png"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <div class="max-w-6xl w-full">
        <div
          class="flex flex-col-reverse flex-wrap items-center mb-4 mt-4 w-full lg:flex-row"
        >
          <div class="w-full lg:w-1/2">
            <img
              class="block h-auto max-h-full max-w-md m-auto p-4 w-full lg:m-0"
              src="/img/color-picker.png"
              data-aos="fade-up"
            />
          </div>

          <div class="w-full lg:w-1/2">
            <h2
              class="font-gt-walsheim p-4 text-3xl md:text-5xl"
              data-aos="fade-up"
            >
              Color Picker
            </h2>

            <p class="m-4 text-lg" data-aos="fade-up">
              Our color picker runs natively across MacOS, Windows, and Linux,
              allowing you to have the same seamless workflow, regardless of
              what machine you might be on.
            </p>

            <p class="m-4 text-lg" data-aos="fade-up">
              Colors are automatically copied to the clipboard, so they can be
              easily pasted wherever they are needed.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-light-blue flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full"
    >
      <div class="max-w-6xl w-full">
        <div class="flex flex-wrap items-center mb-4 mt-4 w-full">
          <div class="w-full lg:w-1/2">
            <h2
              class="font-gt-walsheim p-4 text-3xl md:text-5xl"
              data-aos="fade-up"
            >
              Palettes
            </h2>

            <p class="m-4 text-lg" data-aos="fade-up">
              Palettes are the main color organization method in Swach. You
              might use them for separate projects, brands, inspiration, etc.
            </p>

            <p class="m-4 text-lg" data-aos="fade-up">
              They can store as few or as many colors as you would like. Colors
              can be moved from your color history into any palette, and between
              any unlocked palettes as well.
            </p>
          </div>

          <div class="flex justify-center w-full lg:justify-end lg:w-1/2">
            <video
              muted
              loop
              autoplay
              class="h-auto max-h-full max-w-sm p-4 w-full"
              data-aos="fade-up"
            >
              <source src="/video/palettes.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <div class="max-w-6xl w-full">
        <div
          class="flex flex-col-reverse flex-wrap items-center mb-4 mt-4 w-full lg:flex-row"
        >
          <div class="flex justify-center w-full lg:justify-start lg:w-1/2">
            <video
              muted
              loop
              autoplay
              class="h-auto max-h-full max-w-sm p-4 w-full"
              data-aos="fade-up"
            >
              <source src="/video/color-harmonies.mp4" type="video/mp4" />
            </video>
          </div>

          <div class="w-full lg:w-1/2">
            <h2
              class="font-gt-walsheim p-4 text-3xl md:text-5xl"
              data-aos="fade-up"
            >
              Color Harmonies
            </h2>

            <p class="m-4 text-lg" data-aos="fade-up">
              Sometimes you may have one base color you particularly love, but
              you are not sure what other colors might go with it. To remedy
              this problem we added the color harmonies palette generator.
            </p>

            <p class="m-4 text-lg" data-aos="fade-up">
              This feature can be accessed by hovering the menu options of a
              single color and clicking the slider. It supports generating
              complementary, monochromatic, triad, and more!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-peach flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full"
    >
      <div class="max-w-6xl w-full">
        <div class="flex flex-wrap items-center mb-4 mt-4 w-full">
          <div class="w-full lg:w-1/2">
            <h2
              class="font-gt-walsheim p-4 text-3xl md:text-5xl"
              data-aos="fade-up"
            >
              Contrast Checker
            </h2>

            <p class="m-4 text-lg" data-aos="fade-up">
              Ensure your color combinations are accessible and adhere to the
              WCAG standard.
            </p>

            <p class="m-4 text-lg" data-aos="fade-up">
              Colors with insufficient contrast can hurt accessibility and can
              be frustrating for users of your product. Use this tool to avoid
              those issues.
            </p>
          </div>

          <div class="flex justify-center w-full lg:justify-end lg:w-1/2">
            <video
              muted
              loop
              autoplay
              class="h-auto max-h-full max-w-sm p-4 w-full"
              data-aos="fade-up"
            >
              <source src="/video/contrast-checker.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.modern-underline {
  border-bottom: 5px solid #36cad2;
}
</style>

<script>
import TopBg from '~/assets/svgs/top-bg.svg?inline';

export default {
  components: {
    TopBg
  }
};
</script>
