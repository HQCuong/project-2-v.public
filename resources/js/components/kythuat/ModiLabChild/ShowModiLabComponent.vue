<template>
    <div>
        <selectlab @show_map_lab="show_map_lab"></selectlab>
        <maplab v-if="map_lab"></maplab>
    </div>
</template>
<script>
import selectlab from './selectmodilab/SelectLabComponent.vue';
import maplab from './maplab/MapLabComponent.vue';

export default {
    data() {
        return {
            map_lab: false
        }
    },
    methods: {
        show_map_lab(map_lab) {
            if(map_lab == 0) {
                this.map_lab = false;
            } else {
                this.map_lab = true;
            }
        }
    },
    components: {
        selectlab,
        maplab
    }
}

</script>
<style lang="css" scoped>
</style>
