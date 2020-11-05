<template>
  <div class="flex flex-wrap justify-center w-full">
    <div
      class="bg-lightest-blue flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full"
    >
      <inline-svg
        class="top-bg absolute hidden z-0 lg:block"
        src="/svgs/swach-dock-icon.svg"
      />

      <div class="max-w-6xl w-full z-10">
        <div class="flex flex-col flex-wrap items-center w-full lg:flex-row">
          <div class="w-full lg:w-1/2">
            <h1 class="p-4 text-4xl md:text-5.5xl" data-aos="fade-up">
              A robust color management tool for the
              <span class="modern-underline">modern age.</span>
            </h1>

            <div
              class="flex justify-center m-4 lg:justify-start"
              data-aos="fade-up"
            >
              <nuxt-link
                class="bg-color1 btn block font-gt-walsheim text-white hover:bg-white hover:text-color1"
                to="/download/"
              >
                Download free
              </nuxt-link>
            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <img
              alt="The Swach app showing colors and palettes."
              class="block h-auto max-w-md m-auto p-4 w-full lg:ml-auto lg:mr-0"
              src="/img/swach.png"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-white flex flex-wrap justify-center pb-32 pl-8 pr-8 pt-32 w-full"
    >
      <div class="max-w-6xl w-full" data-aos="fade-up">
        <div
          class="flex flex-col-reverse flex-wrap items-center mb-4 mt-4 w-full lg:flex-row"
        >
          <div class="w-full lg:w-1/2">
            <img
              alt="A Demo of the color picker choosing a color."
              class="block h-auto max-h-full max-w-md m-auto p-4 w-full lg:m-0"
              src="/img/color-picker.png"
            />
          </div>

          <div class="w-full lg:w-1/2">
            <inline-svg
              class="inline-block ml-4 h-16 w-16"
              src="/svgs/color-picker-icon.svg"
            />

            <h2 class="p-4 text-3xl md:text-5xl">Color Picker</h2>

            <p class="m-4 text-lg">
              Our color picker runs natively across macOS, Windows, and Linux,
              allowing you to have the same seamless workflow, regardless of
              what machine you might be on.
            </p>

            <p class="m-4 text-lg">
              Colors are automatically copied to the clipboard, so they can be
              easily pasted wherever they are needed.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light-blue flex flex-wrap justify-center pl-8 pr-8 w-full">
      <div class="max-w-6xl w-full" data-aos="fade-up">
        <div
          class="flex flex-col flex-wrap items-center mb-4 mt-4 w-full lg:flex-row"
        >
          <div class="w-full lg:w-1/2">
            <inline-svg
              class="inline-block ml-4 h-16 w-16"
              src="/svgs/palettes-icon.svg"
            />

            <h2 class="p-4 text-3xl md:text-5xl">Palettes</h2>

            <p class="m-4 text-lg">
              Palettes are the main color organization method in Swach. You
              might use them for separate projects, brands, inspiration, etc.
            </p>

            <p class="m-4 text-lg">
              They can store as few or as many colors as you would like. Colors
              can be moved from your color history into any palette, and between
              any unlocked palettes as well.
            </p>
          </div>

          <div class="w-full lg:w-1/2">
            <video
              autoplay
              muted
              loop
              playsinline
              class="h-auto max-w-sm m-auto p-4 w-full lg:ml-auto lg:mr-0"
            >
              <source src="~/assets/video/palettes.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-white flex flex-wrap justify-center pb-24 pl-8 pr-8 pt-24 w-full"
    >
      <div class="max-w-6xl relative w-full" data-aos="fade-up">
        <div class="circle lg:h-72 lg:w-72"></div>

        <div
          class="flex flex-col-reverse flex-wrap items-center mb-4 mt-4 w-full lg:flex-row z-10"
        >
          <div class="w-full lg:w-1/2 z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="h-auto m-auto max-h-full max-w-sm p-4 w-full lg:m-0"
            >
              <source
                src="~/assets/video/color-harmonies.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div class="w-full lg:w-1/2 z-10">
            <inline-svg
              class="inline-block ml-4 h-16 w-16"
              src="/svgs/color-harmonies-icon.svg"
            />

            <h2 class="p-4 text-3xl md:text-5xl">Color Harmonies</h2>

            <p class="m-4 text-lg">
              Sometimes you may have one base color you particularly love, but
              you are not sure what other colors might go with it. To remedy
              this problem we added the color harmonies palette generator.
            </p>

            <p class="m-4 text-lg">
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
      <div class="max-w-6xl relative w-full" data-aos="fade-up">
        <div class="square rotate-45 transform lg:h-72 lg:w-72"></div>

        <div
          class="flex flex-col flex-wrap items-center mb-4 mt-4 w-full lg:flex-row z-10"
        >
          <div class="w-full lg:w-1/2 z-10">
            <inline-svg
              class="inline-block ml-4 h-16 w-16"
              src="/svgs/contrast-checker-icon.svg"
            />

            <h2 class="p-4 text-3xl md:text-5xl">Contrast Checker</h2>

            <p class="m-4 text-lg">
              Ensure your color combinations are accessible and adhere to the
              WCAG standard.
            </p>

            <p class="m-4 text-lg">
              Colors with insufficient contrast can hurt accessibility and can
              be frustrating for users of your product. Use this tool to avoid
              those issues.
            </p>
          </div>

          <div class="w-full lg:w-1/2 z-10">
            <video
              autoplay
              muted
              loop
              playsinline
              class="h-auto max-w-sm m-auto p-4 w-full lg:ml-auto lg:mr-0"
            >
              <source
                src="~/assets/video/contrast-checker.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <div class="max-w-6xl relative w-full" data-aos="fade-up">
        <h2 class="p-4 text-4xl md:text-5.5xl text-center w-full">
          Why Swach?
        </h2>

        <div class="mb-4 text-center w-full">
          <p>
            We built Swach to be a complete color tool for
            <span class="font-bold">all</span> designers on
            <span class="font-bold">all</span> platforms. Not just macOS.
          </p>
        </div>

        <table
          class="bg-white max-w-3xl m-auto rounded-lg table-fixed text-xs w-full md:text-base"
        >
          <thead>
            <tr>
              <td class="p-2 w-1/4 md:p-4"></td>
              <th class="p-2 w-1/4 md:p-4">Swach</th>
              <th class="p-2 w-1/4 md:p-4">Sip</th>
              <th class="p-2 w-1/4 md:p-4">Contrast</th>
            </tr>
          </thead>
          <tbody class="rounded">
            <tr class="rounded-tl">
              <td class="font-black p-2 md:p-4">Contrast Checker</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center text-green-500 md:p-4">
                ✓
              </td>
              <td class="font-extrabold p-2 text-center text-green-500 md:p-4">
                ✓
              </td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">macOS</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center text-green-500 md:p-4">
                ✓
              </td>
              <td class="font-extrabold p-2 text-center text-green-500 md:p-4">
                ✓
              </td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">Color Palettes</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center text-green-500 md:p-4">
                ✓
              </td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">Windows</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">Linux</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">Color Harmonies</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                ✓
              </td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
              <td class="font-extrabold p-2 text-center md:p-4"></td>
            </tr>
            <tr>
              <td class="font-black p-2 md:p-4">Cost</td>
              <td
                class="bg-green-100 font-extrabold p-2 text-center text-green-500 md:p-4"
              >
                Free
              </td>
              <td class="font-extrabold p-2 text-center md:p-4">$10</td>
              <td class="font-extrabold p-2 text-center md:p-4">$6.99</td>
            </tr>
          </tbody>
        </table>
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

.top-bg {
  height: 1030px;
  right: -172px;
  top: -294px;
  width: 1030px;
}
</style>

<script>
export default {
  head() {
    return {
      title: 'A robust color management tool for the modern age.'
    };
  },

  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Swach',
      applicationCategory: 'https://schema.org/DesignApplication',
      operatingSystem: 'macOS 10.14+, Windows 10, Ubuntu 18.04+',
      featureList:
        'Color picker, contrast checker, color palettes, color harmonies',
      offers: {
        '@type': 'Offer',
        price: '0'
      },
      publisher: {
        '@type': 'Organization',
        legalName: 'Ship Shape Consulting LLC'
      }
    };
  }
};
</script>
