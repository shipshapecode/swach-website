<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="flex flex-wrap justify-center max-w-6xl w-full">
      <h1 class="font-hairline text-5xl" data-aos="fade-up">
        Pricing
      </h1>
    </div>
    <div class="flex flex-wrap items-center max-w-6xl w-full lg:flex-no-wrap">
      <div
        class="bg-white m-4 p-8 rounded shadow w-full lg:w-1/3"
        data-aos="fade-up"
      >
        <h2 class="font-bold text-center text-2xl w-full">
          Free Trial
        </h2>

        <ul class="p-4">
          <li class="list-disc mb-2">
            Free 15 day trial
          </li>

          <li class="list-disc mb-2">
            No credit card required
          </li>
        </ul>

        <a
          class="border border-color1 btn bg-transparent mt-4 text-center text-color1 w-full hover:bg-color1 hover:text-white"
          href="https://hazel-kohl-kappa.now.sh/download"
        >
          Try Swach for free
        </a>
      </div>
      <div
        class="bg-white m-4 p-8 rounded shadow w-full lg:w-1/3"
        data-aos="fade-up"
      >
        <h2 class="font-bold text-center text-2xl w-full">
          License
        </h2>

        <h3 class="text-center w-full">
          <span class="font-bold text-color1 text-5xl">$2</span>
        </h3>

        <p class="font-hairline text-center text-lg w-full">per month</p>

        <ul class="p-4">
          <li class="list-disc mb-2">
            Month-to-month subscription.
          </li>

          <li class="list-disc mb-2">
            Cancel anytime and keep your current version.
          </li>
        </ul>

        <button @click="openCheckout()" class="btn bg-color2 mt-4 w-full">
          Buy Swach now
        </button>
      </div>
      <div
        class="bg-white m-4 p-8 rounded shadow w-full lg:w-1/3"
        data-aos="fade-up"
      >
        <h2 class="font-bold text-center text-2xl w-full">
          Discounts
        </h2>

        <ul class="p-4">
          <li class="list-disc mb-2">
            Education discount
          </li>

          <li class="list-disc mb-2">
            Open source discount
          </li>
        </ul>

        <a
          class="border border-color1 btn bg-transparent mt-4 text-center text-color1 w-full hover:bg-color1 hover:text-white"
          href="mailto:ahoy@shipshape.io?subject=Swach%20Discount"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openCheckout() {
      return Paddle.Checkout.open({
        product: 578690
      });
    }
  },
  head() {
    return {
      script: [
        {
          hid: 'paddle',
          src: 'https://cdn.paddle.com/paddle/paddle.js',
          defer: false,
          callback: () => {
            Paddle.Setup({ vendor: 106082 });
          }
        }
      ]
    };
  }
};
</script>
