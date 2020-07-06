<template>
	<div>
		<mainselect @show_main_view="show_main_view"></mainselect>
    <br>
		<mainform v-if="show_form_add_device"></mainform>
	</div>
</template>

<script>
import mainselect from './selectlab/SelectLabComponent.vue';
import mainform from './formaddthietbi/FormAddThietBiComponent.vue';

export default {
  mounted() {
    this.$store.commit('content/page_title', 'Thêm thiết bị');
  },
  data () {
    return {
      show_form_add_device: false
    }
  },
  methods: {
    show_main_view(show) {
      if (show == 0) {
        this.show_form_add_device = false;
      } else {
        this.show_form_add_device = true;
      }
    }
  },
  components: {
  	mainselect,
    mainform
  }
}
</script>

<style lang="css" scoped>
</style>