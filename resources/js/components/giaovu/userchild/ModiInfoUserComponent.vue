<template>
    <div>
    	<p v-if="show_select">day la select</p>
    	<div>
    		day la form
    	</div>
    </div>
</template>
<script>
export default {
    created() {
    	if (this.$route.params.ma_nguoi_dung) {
    		this.$store.dispatch('user/get_user_info', this.$route.params.ma_nguoi_dung);
    		this.show_select = false;
    	} else {
    		this.$store.dispatch('user/get_user');
    		this.show_select = true;
    	}
    },
    mounted() {
    	this.$store.commit('content/page_title', 'Tùy chỉnh thông tin người dùng');
    },
    data() {
        return {
        	show_select: true
        }
    },
    computed: {
    	user_info() {
    		return this.$store.state.user.user_info;
    	}
    }
}

</script>
<style lang="css" scoped>
</style>
