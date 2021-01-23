import Vue from 'vue';

Vue.filter('titleize', (value) => {
  if (typeof value === 'string') {
    return value.replace(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
  }

  return '';
});
