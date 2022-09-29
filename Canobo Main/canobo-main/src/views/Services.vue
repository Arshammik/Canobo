<template>
  <div class="services">
    <div v-if="isMobile">
      <NotFound :isAccessDenied="true" />
    </div>
    <div v-else class="items">
      <div class="d-flex">
        <div class="row-section item">
          <div class="header">
            <img :src="simpleMicrogenetics" alt=""/>
            <span>DNA Read Mapping</span>
          </div>
          <div class="description">
            <span
            >Utilizing Burrows–Wheeler transform algorithm to construct suffix
              tree</span
            >
          </div>
          <div class="status-section">
            <span class="title"> Status </span>
            <span class="status"> Coming soon </span>
          </div>
        </div>
        <div class="row-section item">
          <div class="header">
            <img :src="simpleMicrogenetics1" alt=""/>
            <span>Protein Assembly</span>
          </div>
          <div class="description">
            <span
            >Using mass spectrometers raw data to construct the polypeptide sequence</span
            >
          </div>
          <div class="status-section">
            <span class="title"> Status </span>
            <span class="status-red"> Coming soon </span>
          </div>
        </div>
        <div class="row-section item">
          <div class="header">
            <img :src="simpleMicrogenetics" alt=""/>
            <span>DNA and RNA Translator</span>
          </div>
          <div class="description">
            <span
            >A simple algorithm to transcript DNA to RNA and translate it into Protein</span
            >
          </div>
          <div class="status-section">
            <span class="title"> Status </span>
            <span class="status"> Coming soon </span>
          </div>
        </div>

      </div>
      <div class="col-section">
        <a href="https://express-a.canobo.org/">
          <div class="header">
          <img :src="simpleMicrogenetics2" alt=""/>
          <span>GEO-A</span>
        </div>
        <div class="description">
            <span>A modified platform to analyze the microarray expression data from GEO database in a
              modern and smart approach which can trim the principal component analysis results as well as custom volcano plots
              and lastly Enrich analyzes based on DEGs results. This package will be online in mid 2023.</span
            >
        </div>
        </a>
        <div class="status-section">
          <span class="title"> Status </span>
          <span class="status-available"> Available </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import simpleMicrogenetics from "@/assets/simpleMicrogenetics.svg";
import simpleMicrogenetics1 from "@/assets/simpleMicrogenetics1.svg";
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import NotFound from "./NotFound.vue"

export default {
  components: {NotFound},

  data() {
    return {
      simpleMicrogenetics,
      simpleMicrogenetics1,
      simpleMicrogenetics2,
      isMobile:false,
    };

  },
  mounted() {
  this.mobileUser()
    },
  methods :{
    mobileUser() {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
}
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1645px;
}

.services {
  @media (min-width: 1000px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  padding-top: 80px;
  .items {
    .d-flex {
      gap: 16px;
    }

    .item {
      .header {
        display: flex;
        align-items: center;

        span {
          margin-left: 25px;
        }
      }

      background-color: #FAFAFA;
      padding: 30px 45px;
      width: 536px;

      span {
        font-size: 35px;
        line-height: 45px;
      }
      img{
        width: 60px;
      }

      .description {
        padding-top: 20px;

        span {
          font-size: 30px;
          line-height: 36px;
          color: #696969;
          margin-top: 20px;
        }
      }

      .status-section {
        padding-top: 40px;

        .title {
          color: #696969;
          font-size: 33px;
        }

        .status {
          color: #0DA8A8;
          font-size: 33px;
        }
        .status-available {
          color: #13A80D;
          font-size: 33px;
        }

        .status-red {
          color: #0DA8A8;
          font-size: 33px;
        }
      }
    }

    .col-section {
      margin-top: 21px;
      background-color: #FAFAFA;
      padding: 30px 45px;
      margin-bottom: 170px;
      .header{
        display: flex;
        align-items: center;

        img{
          width: 60px;
          height: 60px;
        }
        span{
          font-size: 35px;
          line-height: 45px;
          margin-left: 25px;
          color: black;
        }
      }
      .description {
        padding-top: 20px;
        span {
          font-size: 30px;
          line-height: 36px;
          color: #696969;
          margin-top: 20px;
        }
      }
      .status-section {
        padding-top: 40px;

        .title {
          color: #696969;
          font-size: 33px;
        }

        .status {
          color: #0DA8A8;
          font-size: 33px;
        }
        .status-available {
          color: #13A80D;
          font-size: 33px;
        }
        .status-red {
          color: #A80D0D;
          font-size: 33px;
        }
      }
    }
  }
  a{
    text-decoration: unset ;
  }
}
</style>