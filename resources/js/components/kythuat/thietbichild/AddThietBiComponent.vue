<template>
	<div>
		<mainselect></mainselect>
    <br>
		<mainform></mainform>
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
    }
  },
  methods: {

  },
  components: {
  	mainselect,
    mainform
  }
}
</script>

<style lang="css" scoped>
</style>