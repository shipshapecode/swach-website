<template>
  <div class="bg-color1 text-white">
    <nav class="flex flex-col items-center justify-center w-full">
      <div class="flex flex-wrap h-56 justify-end max-w-6xl p-6 w-full">
        <div class="flex flex-wrap items-center w-full">
          <div class="pt-6">
            <nuxt-link
              to="/about/"
              class="inline-block mb-6 mr-12 hover:text-alt"
            >
              About
            </nuxt-link>
            <nuxt-link
              to="/docs/"
              class="inline-block mb-6 mr-12 hover:text-alt"
            >
              Docs
            </nuxt-link>
            <nuxt-link
              to="/releases/"
              class="inline-block mb-6 mr-12 hover:text-alt"
            >
              Releases
            </nuxt-link>
            <nuxt-link
              to="/download/"
              class="inline-block mb-6 mr-12 hover:text-alt"
            >
              Download
            </nuxt-link>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between w-full">
          <nuxt-link
            to="/"
            class="font-bold font-gt-walsheim inline-flex items-center text-white text-2xl"
          >
            <img
              class="inline h-10 mr-4 w-10"
              :src="require('~/assets/svgs/swach-logo-line.svg?inline')"
            />
            Swach
          </nuxt-link>

          <p class="text-color2 text-sm">
            Copyright © 2020
            <a class="underline hover:text-white" href="https://shipshape.io">
              Ship Shape Consulting LLC.
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>
