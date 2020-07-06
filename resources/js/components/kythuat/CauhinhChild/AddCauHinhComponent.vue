<template>
    <div>
        <form>
            <div class="form-group">
                <label for="insert_cpu">CPU</label>
                <input type="text" class="form-control" id="insert_cpu" aria-describedby="emailHelp" placeholder="Nhập CPU">
            </div>
            <br>
            <div class="form-group">
                <label for="insert_ram">Ram</label>
                <input type="text" class="form-control" id="insert_ram" aria-describedby="emailHelp" placeholder="Nhập Ram">
            </div>
            <br>
            <div class="form-group">
                <label for="insert_hardrive">Ổ cứng</label>
                <input type="text" class="form-control" id="insert_hardrive" aria-describedby="emailHelp" placeholder="Nhập ổ cứng">
            </div>
            <br>
            <div class="form-group">
                <label for="insert_vga">Card đồ họa</label>
                <input type="text" class="form-control" id="insert_vga" aria-describedby="emailHelp" placeholder="Nhập card đồ họa">
            </div>
            <br>
            <label>Những môn có thể học</label>
            <multiselect v-model="ma_mon" :options="arr_mon" :close-on-select="true" :show-labels="true" placeholder="Chọn môn phù hợp với cấu hình trên" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true" :multiple="true"></multiselect>
            <br>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    mounted() {
        // change label color
        $(".form-group").addClass("bmd-form-group");
        $("label").addClass("bmd-label-static");
        $(".form-group").on("click", function() {
            $(".form-group").removeClass("is-focused");
            $(this).addClass("is-focused");
        })

        // remove color while move out input
        $("input").blur(function() {
            $(".form-group").removeClass("is-focused");
        });

        this.$store.commit('content/page_title', 'Thêm cấu hình');
    },
    data() {
        return {
            ma_mon: [],
            arr_mon: [
                'mon 1',
                'mon 2',
                'mon 3'
            ]
        }
    }
}

</script>
<style lang="css" scoped>
</style>
