<template>
    <div>
        <formUpdateProfile></formUpdateProfile>
        <notifications group="modi_success" />
    </div>
</template>

<script>
import formUpdateProfile from "./form/FormUpdateProfile";

export default {
    components: {
        formUpdateProfile,
    },
};
</script>

<style>
</style>