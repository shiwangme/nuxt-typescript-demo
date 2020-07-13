<template>
  <div>
    <div>
      Demo
    </div>
    <div>
      <h2>Components</h2>
      <div>
        <h3>Options API</h3>
        <Options :user="{ firstName: 'Willin', lastName: 'Wang' }"></Options>
      </div>
      <div>
        <h3>Composition API</h3>
        <Composition :user="{ firstName: 'Willin', lastName: 'Wang' }"></Composition>
      </div>
      <div>
        <h3>Class API</h3>
        <ClassAPI :user="{ firstName: 'Willin', lastName: 'Wang' }"></ClassAPI>
      </div>
    </div>
    <div>
      <h2>Plugins</h2>
      <p><nuxt-link to="/plugin/demo">Demo</nuxt-link></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Options from '~/components/options.vue';
import Composition from '~/components/composition.vue';
import ClassAPI from '~/components/class.vue';

export default Vue.extend({
  components: {
    Options,
    Composition,
    ClassAPI
  },
  data() {
    return {};
  }
});
</script>
