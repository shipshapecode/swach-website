<template>
  <nav class="flex h-20 items-center justify-center p-6 w-full">
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
            class="nav-link"
            to="/docs/"
          >
            Docs
          </nuxt-link>

          <a
            class="btn hidden nav-link pl-4 pr-4 text-color1 hover:text-white lg:bg-white lg:block lg:hover:bg-color1 lg:rounded-full"
            href="https://hazel-kohl-kappa.now.sh/download"
          >
            Download
          </a>
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
  methods: {
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
</style>
