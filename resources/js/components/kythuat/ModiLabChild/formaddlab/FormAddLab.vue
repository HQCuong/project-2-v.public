<template>
    <div>
        <div class="form-group">
            <label for="inputCPU">CPU</label>
            <input type="text" class="form-control" id="inputCPU" aria-describedby="emailHelp" placeholder="Nhập CPU">
        </div>
        <br>
        <div class="form-group">
            <label for="insertRam">Ram</label>
            <input type="text" class="form-control" id="insertRam" aria-describedby="emailHelp" placeholder="Nhập Ram">
        </div>
        <br>
        <div class="form-group">
            <label for="insertHarddrive">Ổ cứng</label>
            <input type="text" class="form-control" id="insertHarddrive" aria-describedby="emailHelp" placeholder="Nhập ổ cứng">
        </div>
        <br>
        <div class="insertSeats">
            <label for="exampleInputEmail1">Số chỗ ngồi</label>
            <input type="number" class="form-control" id="insertSeats" aria-describedby="emailHelp" placeholder="Nhập số chõ ngồi">
        </div>
        <br>
        <div class="insertCpts">
            <label for="exampleInputEmail1">Số máy</label>
            <input type="number" class="form-control" id="insertCpts" aria-describedby="emailHelp" placeholder="Nhập số máy">
        </div>
		<br>
        <button type="submit" class="btn btn-info">Submit</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="css" scoped>
</style>
