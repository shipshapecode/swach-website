<template>
  <div class="flex flex-wrap justify-center w-full">
    <div class="flex flex-wrap justify-center pb-16 pl-8 pr-8 pt-16 w-full">
      <SwachDockIcon class="top-bg absolute hidden z-0 lg:block" />

      <div class="max-w-6xl w-full z-10">
        <div class="flex flex-col flex-wrap items-center w-full lg:flex-row">
          <div class="w-full" data-aos="fade-up">
            <h1 class="p-4 text-4xl md:text-5.5xl">
              Download Swach
            </h1>

            <ul class="ml-6 p-2">
              <li class="list-disc p-2">
                <a
                  class="text-alt hover:text-color1"
                  href="https://download.swach.io/download/dmg/"
                >
                  MacOS
                </a>
              </li>

              <li class="list-disc p-2">
                <a
                  class="text-alt hover:text-color1"
                  href="https://download.swach.io/download/exe/"
                >
                  Windows
                </a>
              </li>

              <li class="list-disc p-2">
                <a
                  class="text-alt hover:text-color1"
                  href="https://download.swach.io/download/deb/"
                >
                  Ubuntu/Debian
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Download'
    };
  }
};
</script>
