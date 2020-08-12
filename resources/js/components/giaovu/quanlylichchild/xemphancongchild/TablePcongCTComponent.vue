<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="arr_phan_cong_chi_tiet"
            :search-options="{enabled: true}"
        >
            <div slot="emptystate">Giáo viên và lớp chưa được xếp lịch đối với phân công đã chọn</div>
        </vue-good-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    label: "Thứ",
                    field: "thu",
                },
                {
                    label: "Tên phòng",
                    field: "ten_phong",
                },
                {
                    label: "Giờ bắt đầu",
                    field: "gio_bat_dau",
                },
                {
                    label: "Giờ kết thúc",
                    field: "gio_ket_thuc",
                },
            ],
        };
    },
    computed: {
        arr_phan_cong_chi_tiet() {
            return this.$store.state.phan_cong.arr_phan_cong_chi_tiet;
        },
    },
};
</script>

<style>
</style>