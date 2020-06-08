<template>
    <div>
        <p>may</p>
        <div class="form-check">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" value="">
                Chọn nhanh
                <span class="form-check-sign">
                    <span class="check"></span>
                </span>
            </label>
        </div>
        <br>
        <!-- <input type="checkbox"> -->
        <div class="togglebutton">
            <label class="label-sw-btn">
                <input type="checkbox" :checked="checked" @click="test">
                <span class="toggle"></span>
                <span class="status-title">{{show(check)}}</span>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    props: ['checked'],
    data() {
        return {
            check: true,
        }
    },
    methods: {
        test() {
            this.check = !this.check;
        },
        show(x) {
            if (x == true) {
                return "Hoạt động";
            } else {
                return "Bảo trì";
            }
        }
    }
}

</script>
<style lang="css" scoped>
.label-sw-btn {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
}
</style>
