<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="flex flex-wrap justify-center max-w-6xl w-full">
      <h1 class="font-hairline text-5xl" data-aos="fade-up">
        Pricing
      </h1>
    </div>
    <div class="flex flex-wrap items-center max-w-6xl w-full lg:flex-no-wrap">
      <div class="m-4 p-8 rounded shadow w-full lg:w-1/3">
        <h2 class="text-lg">
          Free Trial
        </h2>

        <a
          class="border border-gray-600 btn bg-transparent mt-4 text-center text-gray-600 w-full hover:bg-gray-600 hover:text-white"
          href="https://hazel-kohl-kappa.now.sh/download"
        >
          Try Swach for free
        </a>
      </div>
      <div class="m-4 p-8 rounded shadow w-full lg:w-1/3">
        <h2 class="text-lg">
          License
        </h2>

        <button
          class="paddle_button btn bg-gray-600 mt-4 w-full"
          data-product="578690"
          data-theme="none"
        >
          Buy Swach now
        </button>
      </div>
      <div class="m-4 p-8 rounded shadow w-full lg:w-1/3">
        <h2 class="text-lg">
          Education discount
        </h2>

        <a
          class="border border-gray-600 btn bg-transparent mt-4 text-center text-gray-600 w-full hover:bg-gray-600 hover:text-white"
          href="mailto:ahoy@shipshape.io?subject=Swach%20Education%20Discount"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPaddleLoaded: false
    };
  },
  head() {
    return {
      script: [
        {
          hid: 'paddle',
          src: 'https://cdn.paddle.com/paddle/paddle.js',
          defer: true,
          callback: () => {
            Paddle.Setup({ vendor: 106082 });
            this.isPaddleLoaded = true;
          }
        }
      ]
    };
  }
};
</script>
