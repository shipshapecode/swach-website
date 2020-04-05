<template>
  <nav
    :class="{
      'bg-white': this.scrolledDown
    }"
    class="top-nav flex h-20 items-center justify-center p-6 pb-12 pt-12 sticky top-0 w-full z-50"
  >
    <div class="flex font-medium items-center justify-between max-w-6xl w-full">
      <nuxt-link
        to="/"
        class="font-bold font-gt-walsheim inline-flex items-center text-gray-800 text-2xl"
      >
        <SwachLogo class="inline h-10 mr-4 w-10" /> Swach
      </nuxt-link>

      <div class="block lg:hidden">
        <button
          @click="toggleNavMenu(true)"
          aria-label="Open navigation menu"
          class="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          <Menu class="hamburger-menu" />
        </button>
      </div>

      <div class="nav-links hidden z-50 lg:flex">
        <div class="lg:flex lg:flex-grow lg:justify-end">
          <div class="flex lg:hidden justify-end m-4">
            <button
              @click="toggleNavMenu(false)"
              aria-label="Close navigation menu"
              class="cursor-pointer"
            >
              <Close class="h-10 m-2 p-2 w-10" />
            </button>
          </div>

          <nuxt-link
            @click.native="toggleNavMenu(false)"
            :class="{
              'nav-link-alt': this.scrolledDown || this.$route.name !== 'index'
            }"
            class="nav-link"
            to="/docs/"
          >
            Docs
          </nuxt-link>

          <nuxt-link
            :class="{
              'text-color1 hover:text-white lg:bg-white lg:hover:bg-color1':
                !this.scrolledDown && this.$route.name === 'index',
              'text-white lg:bg-color1 lg:hover:bg-alt':
                this.scrolledDown || this.$route.name !== 'index'
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
import Close from '~/assets/svgs/close.svg?inline';
import Menu from '~/assets/svgs/menu.svg?inline';
import SwachLogo from '~/assets/svgs/swach-dock-icon.svg?inline';

export default {
  components: {
    Close,
    Menu,
    SwachLogo
  },
  data() {
    return {
      scrolledDown: false
    };
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
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
  transition: all 0.25s linear;
}
</style>
