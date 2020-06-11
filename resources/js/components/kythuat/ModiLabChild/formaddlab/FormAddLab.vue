<template>
    <div>
        <div class="form-group">
            <label for="inputCPU">CPU</label>
            <input type="text" class="form-control" id="inputCPU" aria-describedby="emailHelp" placeholder="Nhập CPU">
        </div>
        <br>
        <div class="form-group">
            <label for="insertRam">Ram</label>
            <input type="text" class="form-control" id="insertRam" aria-describedby="emailHelp" placeholder="Nhập Ram">
        </div>
        <br>
        <div class="form-group">
            <label for="insertHarddrive">Ổ cứng</label>
            <input type="text" class="form-control" id="insertHarddrive" aria-describedby="emailHelp" placeholder="Nhập ổ cứng">
        </div>
        <br>
        <div class="insertSeats">
            <label for="exampleInputEmail1">Số chỗ ngồi</label>
            <input type="number" class="form-control" id="insertSeats" aria-describedby="emailHelp" placeholder="Nhập số chõ ngồi">
        </div>
        <br>
        <div class="insertCpts">
            <label for="exampleInputEmail1">Số máy</label>
            <input type="number" class="form-control" id="insertCpts" aria-describedby="emailHelp" placeholder="Nhập số máy">
        </div>
        <br>
        <div>
            <label class="typo__label">Simple select / dropdown</label>
            <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>
            <pre class="language-json"><code>{{ value  }}</code></pre>
        </div>
        <br>
        <button type="submit" class="btn btn-info">Submit</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="css" scoped>
</style>
