<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách các phòng</h4>
            <!-- <p class="card-category">New employees on 15th September, 2016</p> -->
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
                            <p>CPU: i9-900x, VGA: GTX 1080</p>
                            <p>Ổ cứng: 1TB SSD, Ram: 256GB DDR4</p>
                            <p>Màn hình: APPLE Pro Display XDR</p>
                        </td>
                        <td>Hoạt động</td>
                        <td>
                            <button class="btn btn-info" data-toggle="tooltip" data-placement="top" title="Thay đổi tình trạng">
                                <i class="material-icons">
                                    power_settings_new
                                </i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>lab202</td>
                        <td>20</td>
                        <td>20/25</td>
                        <td>
                            <p>CPU: i9-900x, VGA: GTX 1080</p>
                            <p>Ổ cứng: 1TB SSD, Ram: 256GB DDR4</p>
                            <p>Màn hình: APPLE Pro Display XDR</p>
                        </td>
                        <td>Hoạt động</td>
                        <td>
                            <button class="btn btn-info" data-toggle="tooltip" data-placement="top" title="Thay đổi tình trạng">
                                <i class="material-icons">
                                    power_settings_new
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
        $('.btn').tooltip();
    },
    data() {
        return {

        }
    }
}

</script>
<style lang="css" scoped>
</style>
