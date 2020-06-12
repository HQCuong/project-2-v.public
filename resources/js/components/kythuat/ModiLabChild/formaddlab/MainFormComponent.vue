<template>
    <div>
        <form>
            <div class="form-group">
                <label for="insertSeats">Số chỗ ngồi</label>    
                <input type="number" class="form-control" id="insertSeats" aria-describedby="emailHelp" placeholder="Nhập số chõ ngồi">
            </div>
            <br>
            <div class="form-group">
                <label for="insertCpts">Số máy</label>
                <input type="number" class="form-control" id="insertCpts" aria-describedby="emailHelp" placeholder="Nhập số máy">
            </div>
            <br>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
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
