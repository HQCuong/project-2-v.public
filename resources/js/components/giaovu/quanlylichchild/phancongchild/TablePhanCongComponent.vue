<template>
    <form @submit="add_phan_cong">
        <vue-good-table
            :columns="columns"
            :rows="de_xuat_phan_cong"
            :search-options="{enabled: true}"
            :pagination-options="{enabled: true}"
            :select-options="{ enabled: true, selectionText: 'đã chọn',   clearSelectionText: 'xóa'}"
            @on-selected-rows-change="selectionChanged"
        >
            <div slot="selected-row-actions">
                <button type="submit" class="btn btn-info">Phân công</button>
            </div>
        </vue-good-table>
        <br />
    </form>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    label: "Thứ",
                    field: "thu",
                    type: "number",
                },
                {
                    label: "Giờ bắt đầu",
                    field: "gio_bat_dau",
                },
                {
                    label: "Giờ kết thức",
                    field: "gio_ket_thuc",
                },
                {
                    label: "Tên phòng",
                    field: "ten_phong",
                },
            ],
            arr_phan_cong_ct: [],
        };
    },
    computed: {
        de_xuat_phan_cong() {
            return this.$store.state.phan_cong.de_xuat_phan_cong;
        },
    },
    methods: {
        add_phan_cong(e) {
            e.preventDefault();
        },
        selectionChanged(row) {
            this.arr_phan_cong_ct = row.selectedRows;
        },
    },
};
</script>

<style>
</style>