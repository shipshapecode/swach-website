<template>
  <div class="flex flex-wrap justify-center w-full">
    <div class="flex flex-wrap justify-center px-8 py-16 w-full">
      <div class="max-w-6xl w-full z-10">
        <div class="flex justify-between mb-4 w-full">
          <h1 class="text-4xl">
            {{ name | titleize }}
          </h1>

          <a :href="swachLink" class="bg-gray-500 h-4 w-4"></a>
        </div>

        <div class="flex h-48 overflow-hidden rounded-lg w-full">
          <div
            v-for="(color, index) in colors"
            :key="`color-${index}`"
            :style="{ backgroundColor: color }"
            class="flex-1"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ query }) {
    let { colors, name } = query;
    colors = colors ? decodeURIComponent(colors).split(',') : [];
    name = name ?? 'Palette';
    return {
      colors,
      name,
      swachLink: `swach://?name=${name}&colors=${encodeURIComponent(
        colors.join(',')
      )}`
    };
  },
  watchQuery: ['colors', 'name']
};
</script>
