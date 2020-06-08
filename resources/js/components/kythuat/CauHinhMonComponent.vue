<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Component Cau hinh mon</div>
                    <div class="card-body">
                        I'm an component.
                    </div>
                    <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                    </multiselect>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: { name: 'Vue.js', language: 'JavaScript' },
            options: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ]
        }
    },
    methods: {
        nameWithLang({ name, language }) {
            return `${name} — [${language}]`
        }
    }
}

</script>
