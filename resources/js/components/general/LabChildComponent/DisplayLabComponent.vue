<template>
    <center>
        <div class="lab-container">
            <div class="top-class">
                <p class="table left-table">Bảng viết</p>
                <p class="screen">Màn hình</p>
                <p class="table left-table">Bảng viết</p>
            </div>
            <br>
            <div class="teacher-area">
                <p class="teacher-seat">Bàn giáo viên</p>
            </div>
            <div class="student-area">
                <div class="student-row" v-for="item in may">
                    <div class="each-student-seat" v-for="each in item">
                        <div v-if="each != ''" class="able">
                            <cptinfo></cptinfo>
                        </div>
                        <div v-if="each == ''" class="disable"></div>
                    </div>
                </div>
            </div>
        </div>
    </center>
</template>
<script>
import cptinfo from './Computer/ComputerInfoComponent.vue';

export default {
    props: ['arr_may'],
    data() {
        return {
            may: [
                ['may1', 'may2', 'may3', '', 'may4', 'may5', 'may6'],
                ['may7', 'may8', 'may9', '', 'may10', 'may11', 'may12'],
            ]
        }
    },
    components: {
        cptinfo
    }
}

</script>
<style lang="css" scoped>
.lab-container {
    padding-top: 10px;
    width: 95%;
}

.top-class {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.screen {
    width: 25%;
    border: 1px solid black;
}

.table {
    width: 25%;
    border: 1px solid black;
}

.teacher-area {
    text-align: left;
}

.teacher-seat {
    width: 15%;
    text-align: center;
    border: 1px solid black;
}

.student-row {
    display: block;
    display: flex;
    flex-direction: row;
}

.each-student-seat {
    width: 15%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
}

@media (max-width: 520px) {
    .teacher-seat {
        width: 35%;
    }
}

</style>
