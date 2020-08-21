<template>
    <div>table</div>
    <!-- <vue-good-table
        :columns="columns"
        :rows="arr_phan_cong_ct"
        :search-options="{enabled: true}"
        styleClass="vgt-table"
    >
        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'ma_ca'">
                <button
                    class="btn btn-info"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa phân công"
                    @click="test(props.row)"
                >
                    <i class="material-icons">delete</i>
                </button>
            </span>
        </template>
        <div slot="emptystate">
            <span class="font-weight-bold">Giáo viên chưa có lịch nghỉ</span>
        </div>
    </vue-good-table>-->
</template>

<script>
export default {
    props: [""],
    data() {
        return {};
    },
};
</script>

<style>
</style>