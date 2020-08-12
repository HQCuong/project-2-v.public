<template>
    <form>
        <div class="form-group">
            <label for="insert_cpu">CPU</label>
            <input
                type="text"
                class="form-control"
                id="insert_cpu"
                aria-describedby="emailHelp"
                placeholder="Nhập CPU"
                v-model="cpu"
            />
        </div>
        <br />
        <div class="form-group">
            <label for="insert_ram">Ram</label>
            <input
                type="text"
                class="form-control"
                id="insert_ram"
                aria-describedby="emailHelp"
                placeholder="Nhập Ram"
                v-model="ram"
            />
        </div>
        <br />
        <div class="form-group">
            <label for="insert_hardrive">Ổ cứng</label>
            <input
                type="text"
                class="form-control"
                id="insert_hardrive"
                aria-describedby="emailHelp"
                placeholder="Nhập ổ cứng"
                v-model="hard_drive"
            />
        </div>
        <br />
        <div class="form-group">
            <label for="insert_vga">Card đồ họa</label>
            <input
                type="text"
                class="form-control"
                id="insert_vga"
                aria-describedby="emailHelp"
                placeholder="Nhập card đồ họa"
                v-model="vga"
            />
        </div>
        <br />
        <label>Những môn có thể học</label>
        <multiselect
            v-model="mon"
            :options="arr_mon"
            :close-on-select="true"
            :show-labels="true"
            track-by="ma_mon_hoc"
            placeholder="Chọn môn phù hợp với cấu hình trên"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :multiple="true"
            :custom-label="labelMon"
        ></multiselect>
        <br />
        <br />
        <button type="submit" class="btn btn-info">Submit</button>
    </form>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("mon/get_mon");
    },
    mounted() {
        // change label color
        $(".form-group").addClass("bmd-form-group");
        $("label").addClass("bmd-label-static");
        $(".form-group").on("click", function () {
            $(".form-group").removeClass("is-focused");
            $(this).addClass("is-focused");
        });

        // remove color while move out input
        $("input").blur(function () {
            $(".form-group").removeClass("is-focused");
        });

        this.$store.commit("content/page_title", "Thêm cấu hình");
    },
    data() {
        return {
            cpu: "",
            ram: "",
            vga: "",
            hard_drive: "",
            mon: "",
        };
    },
    computed: {
        arr_mon() {
            return this.$store.state.mon.arr_mon;
        },
    },
    methods: {
        labelMon({ ma_mon_hoc, ten_mon_tieng_viet }) {
            return `${ma_mon_hoc} - ${ten_mon_tieng_viet}`;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
