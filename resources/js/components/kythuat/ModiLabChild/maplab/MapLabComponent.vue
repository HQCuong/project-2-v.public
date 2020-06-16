<template>
    <div>
        <hardware></hardware>
        <center>
 			<table>
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
import hardware from './hardware/HardWareInfoComponent.vue';

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
