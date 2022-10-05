<template>
    <div class="borderTop">
        <div class="container px-0">
            <div class="header  justify-content-between">
                <div class="d-flex align-items-center">
                    <img class="logo-section" :src="simpleMicrogenetics2" alt="" />
                    <span class="ms-3">Express-A</span>
                </div>
                <div class="input-section">
                    <div class="position-relative">
                        <input placeholder="Search Results" class="runName runNameSearch" type="text" />
                        <span class="runInputIcon"><img :src="search" alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import search from "@/assets/search.svg";

export default {
    data() {
        return {
            simpleMicrogenetics2,
            search
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    align-items: center;
    display: flex;
    padding-bottom: 70px;
    padding-top: 50px;
    .logo-section {
        width: 50px;
        height: 50px;
    }

    span {
        font-size: 41px;
    }
}

.input-section {
    .runName {
        border: unset;
        background-color: #EFEFEF;
        padding: 10px 10px 10px 30px;
        width: 520px;
        border-radius: 10px;
        font-size: 30px;

        @media (max-width:1550px) {
            width: 380px;
        }

        &.md {
            width: 420px;
            padding-left: 40px;
        }

        &.runNameSearch {
            padding: 10px 10px 10px 60px;
        }
    }

    .runInputIcon {
        position: absolute;
        left: 19px;
        top: 1px;

        img {
            width: 25px;
        }

    }
}
</style>