<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách các phòng</h4>
        </div>
        <div class="card-body table-responsive">
            <table class="table table-hover">
                <thead class="text-info">
                    <th>Tên phòng</th>
                    <th>Số Chỗ ngồi</th>
                    <th>Số máy</th>
                    <th>Cấu hình</th>
                    <th>Tình trạng</th>
                    <th>Tùy chỉnh</th>
                </thead>
                <tbody>
                    <tr>
                        <td>lab201</td>
                        <td>20</td>
                        <td>20/25</td>
                        <td>
                            <small>CPU: i9-900x, VGA: GTX 1080</small>
                            <br>
                            <small>Ổ cứng: 1TB SSD, Ram: 256GB DDR4</small>
                            <br>
                            <small>Màn hình: APPLE Pro Display XDR</small>
                        </td>
                        <td>Hoạt động</td>
                        <td>
                            <button class="btn btn-info" data-toggle="tooltip" data-placement="top" title="Thay đổi tình trạng">
                                <i class="material-icons">
                                    power_settings_new
                                </i>
                            </button>
                            <button class="btn btn-info" data-toggle="tooltip" data-placement="top" title="Tùy chỉnh thông tin">
                                <i class="material-icons">
                                    settings
                                </i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>lab202</td>
                        <td>20</td>
                        <td>20/25</td>
                        <td>
                            <small>CPU: i9-900x, VGA: GTX 1080</small>
                            <br>
                            <small>Ổ cứng: 1TB SSD, Ram: 256GB DDR4</small>
                            <br>    
                            <small>Màn hình: APPLE Pro Display XDR</small>
                        </td>
                        <td>Hoạt động</td>
                        <td>
                            <button class="btn btn-info" title="Thay đổi tình trạng">
                                <i class="material-icons">
                                    power_settings_new
                                </i>
                            </button>
                            <button class="btn btn-info" title="tùy chỉnh thông tin">
                                <i class="material-icons">
                                    settings
                                </i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
    },
    data() {
        return {

        }
    },
    computed: {
        arr_toa() {
            return this.$store.state.toa.arr_toa;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
