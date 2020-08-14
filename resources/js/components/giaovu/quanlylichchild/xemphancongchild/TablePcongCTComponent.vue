<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="arr_phan_cong_chi_tiet"
            :search-options="{enabled: true}"
            styleClass="vgt-table"
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
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tên phòng",
                    field: "ten_phong",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Giờ bắt đầu",
                    field: "gio_bat_dau",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Giờ kết thúc",
                    field: "gio_ket_thuc",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
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