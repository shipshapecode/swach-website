<template>
  <nav
    :class="{
      'bg-white': scrolledDown,
      'bg-peach': this.$route.name === 'about'
    }"
    class="top-nav flex h-20 items-center justify-center p-6 pb-12 pt-12 sticky top-0 w-full z-50"
  >
    <div class="flex font-medium items-center justify-between max-w-6xl w-full">
      <nuxt-link
        to="/"
        class="font-gt-walsheim inline-flex items-center text-gray-800 text-2xl"
      >
        <img
          class="inline h-10 mr-4 w-10"
          :src="require('~/assets/svgs/swach-dock-icon.svg?inline')"
        />
        Swach
      </nuxt-link>

      <div class="block lg:hidden">
        <button
          aria-label="Open navigation menu"
          class="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 text-xl"
          @click="toggleNavMenu(true)"
        >
          <img
            class="hamburger-menu"
            :src="require('~/assets/svgs/menu.svg?inline')"
          />
        </button>
      </div>

      <div class="nav-links hidden z-50 lg:flex">
        <div class="lg:flex lg:flex-grow lg:justify-end">
          <div class="flex lg:hidden justify-end m-4">
            <button
              aria-label="Close navigation menu"
              class="cursor-pointer"
              @click="toggleNavMenu(false)"
            >
              <img
                class="h-10 m-2 p-2 w-10"
                :src="require('~/assets/svgs/close.svg?inline')"
              />
            </button>
          </div>

          <nuxt-link
            :class="{
              'nav-link': !scrolledDown && this.$route.name === 'index',
              'nav-link-alt':
                scrolledDown || (!scrolledDown && this.$route.name !== 'index')
            }"
            to="/about/"
            @click.native="toggleNavMenu(false)"
          >
            About
          </nuxt-link>

          <nuxt-link
            :class="{
              'nav-link': !scrolledDown && this.$route.name === 'index',
              'nav-link-alt':
                scrolledDown || (!scrolledDown && this.$route.name !== 'index')
            }"
            to="/docs/"
            @click.native="toggleNavMenu(false)"
          >
            Docs
          </nuxt-link>

          <nuxt-link
            :class="{
              'text-color1 hover:text-white lg:bg-white lg:hover:bg-color1':
                !scrolledDown && this.$route.name === 'index',
              'text-white lg:bg-color1 lg:hover:bg-alt':
                scrolledDown || this.$route.name !== 'index'
            }"
            class="download btn hidden lg:block"
            to="/download/"
          >
            Download
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolledDown: false
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 80) {
        this.scrolledDown = true;
      } else {
        this.scrolledDown = false;
      }
    },
    toggleNavMenu(open) {
      const mobileNavShown = window.innerWidth < 1024;
      if (mobileNavShown) {
        const navLinks = this.$el.querySelector('.nav-links');

        if (open) {
          navLinks.classList.remove('hidden');
          document.body.style.position = 'fixed';
        } else {
          navLinks.classList.add('hidden');
          document.body.style.position = '';
        }
      }
    }
  }
};
</script>

<style>
.hamburger-menu {
  height: 36px;
  width: 36px;
}

.download,
.top-nav {
  @apply duration-150 transition;
}
</style>
