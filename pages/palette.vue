<template>
  <div class="flex flex-wrap justify-center w-full">
    <div class="flex flex-wrap justify-center mt-10 pb-20 pt-10 px-8 w-full">
      <div class="max-w-6xl w-full z-10">
        <div class="flex items-center justify-between mb-4 w-full">
          <h1 class="text-4xl">
            {{ name | titleize }}
          </h1>

          <a
            :href="swachLink"
            class="bg-gray-200 h-12 p-4 rounded-full w-12"
            title="Export to Swach"
          >
            <img
              class="h-full w-full"
              :src="require('~/assets/svgs/share.svg?inline')"
            />
          </a>
        </div>

        <div class="flex h-24 overflow-hidden rounded-2xl w-full lg:h-72">
          <div
            v-for="(color, index) in colors"
            :key="`color-${index}`"
            :style="{ backgroundColor: color.hex }"
            class="flex-1"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="border-t border-gray-200 divide-y divide-gray-200 flex flex-wrap justify-center w-full"
    >
      <div
        v-for="(color, index) in colors"
        :key="`color-${index}`"
        class="flex justify-center px-8 w-full"
      >
        <div class="max-w-6xl pb-20 pt-10 w-full z-10">
          <h3 class="mb-4 text-lg">
            <span class="inline-block mr-4">{{ color.name }}</span>
            <span class="text-gray-500 uppercase">{{ color.hex }}</span>
          </h3>
          <div
            :style="{ backgroundColor: color.hex }"
            class="h-12 rounded-xl w-full lg:h-24 lg:rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: null,
      name: null,
      swachLink: null
    };
  },
  watchQuery: ['colors', 'name'],
  mounted() {
    let { data } = this.$route.query;
    if (data) {
      data = JSON.parse(decodeURIComponent(data));
      this.colors = data.colors ?? [];
      this.name = data.name ?? 'Palette';
      this.swachLink = `swach://?data=${encodeURIComponent(
        JSON.stringify(data)
      )}`;
    }
  }
};
</script>
