<template>
    <div :class="showAccordian ? 'pb-0' : ''" class="accordian-section">
        <div :class="showAccordian ? '' : 'justify-content-between'" class="header px-3 mb-3">
            <h1 class="fw-bolder">Quality Check</h1>
            <div :class="showAccordian ? '' : 'd-none'" class="collapse-data d-flex">
                <div class="first-margin">
                    <span>Platform:</span>
                    <span class="fw-bolder ms-4">GPL 95</span>
                </div>
                <div class="second-margin">
                    <span>Dataset ID:</span>
                    <span class="fw-bolder ms-4">GSE 2345884</span>
                </div>
                <div class="d-flex align-items-center second-margin">
                    <span>Cohorts:</span>
                    <div class="box-sections d-flex">
                        <span class="blue-dot"></span>
                        <span>Tumor</span>
                    </div>
                    <div class="box-sections ms-2">
                        <span class="red-dot"></span>
                        <span>Normal</span>
                    </div>
                </div>
            </div>
            <span class="cursor-pointer ms-auto" @click="toggleAccordian"><img
                    :class="showAccordian ? '' : 'rotate-img'" :src="arrow" alt="" /></span>
        </div>
        <div :class="showAccordian ? 'showAccrodian' : ''" class="content-section">
            <div class="row mx-0">
                <div class="col-9 left-section">
                    <div class="row">
                        <div class="col-5">
                            <div>
                                <span>Data Type</span>
                                <span class="fw-bolder">Microarray </span>
                            </div>
                            <div>
                                <span>Platform:</span>
                                <span class="fw-bolder">GPL 95</span>
                            </div>
                            <div>
                                <span>Matched probs:</span>
                                <span class="fw-bolder">63745</span>
                            </div>
                        </div>
                        <div class="col-5 ps-8">
                            <div>
                                <span>Samples Size: </span>
                                <span class="fw-bolder">36 </span>
                            </div>
                            <div>
                                <span>Batch effect removal::</span>
                                <span>(Comming Soon)</span>
                            </div>
                            <div>
                                <span>Dataset ID:</span>
                                <span class="fw-bolder">GSE 2345884</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 ps-4">
                    <div class="right-section">
                        <span>Cohorts:</span>
                        <div class="d-flex flex-res mt-2">
                            <div class="box-sections">
                                <span class="blue-dot"></span>
                                <span>Tumor</span>
                            </div>
                            <div class="box-sections ms-4">
                                <span class="red-dot"></span>
                                <span>Normal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import arrow from "@/assets/arrow.svg";

export default {
    data() {
        return {
            arrow,
            showAccordian: false
        }
    },
    methods: {
        toggleAccordian() {
            this.showAccordian = !this.showAccordian;
        },
    }
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;

  .logo-section {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 41px;
  }
}
.accordian-section {
    padding: 1.5rem;
    border-radius: 15px;
    border: 3px solid #dbdbdb;

    .content-section {
        font-size: 28px;

        .left-section {
            padding: 30px 40px 20px 60px;
            background-color: #f7f7f7;
            border-radius: 20px;
            border: 2px solid #dbdbdb;

            .col-5 {
                div {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 8px;
                }
            }
        }

        .right-section {
            padding: 15px 30px 90px 30px;
            background-color: #f7f7f7;
            border-radius: 20px;
            border: 2px solid #dbdbdb;

            .box-sections {
                padding: 2px 22px;
                background-color: white;
                border-radius: 30px;
                display: flex;
                align-items: center;

                .blue-dot {
                    width: 18px;
                    height: 18px;
                    background-color: #00bfc4;
                    border-radius: 100%;
                    margin-right: 15px;
                }

                .red-dot {
                    width: 18px;
                    height: 18px;
                    background-color: #f8766d;
                    border-radius: 100%;
                    margin-right: 15px;
                }
            }

            @media (max-width: 1560px) {
                .flex-res {
                    flex-wrap: wrap;

                    .ms-4 {
                        margin-top: 20px;
                        margin-left: 0 !important;
                    }
                }
            }
        }
    }

    .ps-8 {
        margin-left: 9rem;

        @media (max-width: 1600px) {
            margin-left: 6rem;
        }
    }
}
.showAccrodian {
  display: none;
}
.collapse-data {
  span {
    font-size: 30px;
  }

  .first-margin {
    margin-left: 125px;
  }

  .second-margin {
    margin-left: 155px;
  }

  .box-sections {
    padding: 2px 22px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;

    .blue-dot {
      width: 18px;
      height: 18px;
      background-color: #00bfc4;
      border-radius: 100%;
      margin-right: 15px;
    }

    .red-dot {
      width: 18px;
      height: 18px;
      background-color: #f8766d;
      border-radius: 100%;
      margin-right: 15px;
    }
  }
}
.rotate-img {
  transform: rotate(180deg);
}

</style>