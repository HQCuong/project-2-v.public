<template>
    <div>
        <!-- <mainselect></mainselect> -->
        <label>Chọn tòa</label>
        <multiselect v-model="toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="labelToa"></multiselect>
        <br>
        <label>Chọn tầng</label>
        <multiselect v-model="tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="labelTang">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <label>Chọn lab</label>
        <multiselect v-model="lab" :options="arr_lab" :close-on-select="true" :show-labels="true" placeholder="Phòng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tầng</template>
        </multiselect>
        <br>
        <form>
            <div class="form-group">
                <label for="insertDevice">Thiết bị</label>
                <input type="text" class="form-control" id="insertDevice" placeholder="Nhập tên thiết bị">
            </div>
            <br>
            <div class="form-group">
                <label for="insertNumber">Số lượng</label>
                <input type="number" class="form-control" id="insertNumber" placeholder="Nhập số lượng">
            </div>
            <br>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
    </div>
</template>
<script>
import mainselect from './selectlab/SelectLabComponent.vue';
import mainform from './formaddthietbi/FormAddThietBiComponent.vue';

export default {
    created() {
      this.$store.dispatch('toa/get_toa');
    },
    mounted() {
        this.$store.commit('content/page_title', 'Thêm thiết bị');

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
    },
    data() {
        return {
          toa: '',
          tang: '',
          lab: '',
          arr_lab: []
        }
    },
    computed: {
      arr_toa() {
        return this.$store.state.toa.arr_toa;
      },
      arr_tang() {
        return this.$store.state.tang.arr_tang;
      }
    },
    methods: {
      labelToa({ten_toa, dia_chi}) {
        return `${ten_toa} - ${dia_chi}`;
      },
      labelTang({ten_tang}) {
        return `${ten_tang}`;
      }
    },
    watch: {
      toa() {
        this.tang = '';
        this.lab = '';
        if (!this.toa) {
          this.$store.commit('tang/reset_arr_tang');
          this.arr_toa = [];
          return false;
        }
        this.$store.dispatch('tang/get_tang', this.toa.ma_toa);
      },
      tang() {
        this.lab = '';
        if (!this.tang) {
          this.arr_toa = [];
          return false;
        }
        this.arr_lab = ['LAB 1', 'LAB 2'];
      }
    },
    components: {
        mainselect,
        mainform
    }
}

</script>
<style lang="css" scoped>
</style>
