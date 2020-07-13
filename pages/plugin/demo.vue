<template>
  <div>
    Plugin Demo
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    this.$myInjectedFunction('works in mounted');
  }
});
</script>
