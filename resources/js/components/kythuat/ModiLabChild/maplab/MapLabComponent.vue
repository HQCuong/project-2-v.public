<template>
    <div>
        <hardware></hardware>
        <center>
 			<table width="100%" border="1">
 				<tr>
 					<th>a</th>
 					<th>b</th>
 					<th>c</th>
 				</tr>
 				<tr>
 					<td>1</td>
 					<td>2</td>
 					<td>3</td>
 				</tr>
 			</table>
        </center>
    </div>
</template>
<script>
import hardware from './hardwareinfo/HardWareInfoComponent.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        hardware
    }
}

</script>
<style lang="css" scoped>
</style>
