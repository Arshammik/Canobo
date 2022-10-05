<template>
    <div class="container message-error">
        <div class="d-flex  align-items-center mb-1">
            <img :src="error" alt="">
            <h5 class="mb-0 ms-3">Error message </h5>
        </div>
        <span class="mt-3">Unfortunately this feature is not available now.</span>
    </div>
</template>

<script>
import error from "@/assets/error.svg";

export default {
    data() {
        return {
            error
        }
    }
}
</script>

<style lang="scss">
.Vue-Toastification__toast{
    padding-top: 15px;
}
.Vue-Toastification__toast--default {
    font-family: adobe-arabic !important;
    background-color: white !important;

    .container {
        color: black;
    }
}

.Vue-Toastification__close-button {
    display: flex;
    align-items: flex-start !important;
    color: black !important;
}

.message-error {
    h5 {
        font-size: 28px;
    }
    span{
        font-size: 24px;
    }

}
</style>