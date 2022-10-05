<template>
  <div>
    <div class="borderTopBottom">
      <div class="container">
        <Header2 />
        <Accordian />
        <Selection :selected="selected" :greened="greened" />
        <div class="chart-section p-4">
          <highcharts :options="chartOptions"></highcharts>
        </div>
        <div class="alert-message">
          <img class="me-2" :src="attention" alt="" />
          <p>
            You can use your mouse to interact with plot, every sample could be
            either track, monotor or even trimmed
          </p>
        </div>
        <div class="row mt-5">
          <div class="col-7">
            <div class="export-section">
              <p class="section-title mb-1 fw-bolder">Export the Plot</p>
              <div class="d-flex justify-content-between left-side">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-3 justify-content-between">
                    <p class="mb-0 select-title fw-bolder">Filename:</p>
                    <img class="pen-icon" :src="pen" alt="" />
                  </div>
                  <input class="" type="text" />
                </div>
                <div class="export-input">
                  <p class="mb-0 select-title mb-3 fw-bolder">Export as:</p>
                  <select-box title="" value="select the format" :list="listDataValueType" />
                  <button class="download">Download</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="right-side">
              <p class="section-title fw-bolder mb-1">System Logs</p>
              <div class="system-log"></div>
            </div>
          </div>
        </div>
        <div class="bottom-buttons">
          <button class="Back"> Back </button>
          <router-link to="dot-plot">
            <button class="Next"> Next </button>
          </router-link>
        </div>
        <div class="logo">
          <img :src="logo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import attention from "@/assets/attention.svg";
import pen from "@/assets/pen.svg";
import logo from '@/assets/group55.png';
import SelectBox from "@/components/SelectBox.vue";
import Header2 from "@/components/Header2.vue";
import Accordian from '@/components/Accordian.vue';
import Selection from '@/components/Selection.vue';

export default {
  components: { SelectBox, Header2, Accordian, Selection },
  data() {
    return {
      selected: {
        principal: true,
        dotPlot: false,
        heatmap: false,
        barplot: false,
        density: false,
      },
      greened: {
        principal: false,
        dotPlot: false,
        heatmap: false,
        barplot: false,
        density: false,
      },
      simpleMicrogenetics2,
      logo,
      pen,
      attention,
      highcharts: Chart,
      value: "",
      listDataValueType: ["PNG", "JPG", "TIFF", "SVG", "PDF"],
      chartOptions: {
        chart: {
          type: "scatter",
          zoomType: "xy",
        },

        subtitle: {
          HTML: true,
        },

        xAxis: {
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
        },
        yAxis: {},
        tooltip: {
          useHTML: true,
          formatter: function () {
            return `<div class='chart-box '>
            <div class='d-flex justify-content-between'>
              <div><span>Brain metastasis 45</span></div>
              <div><span>GSE126649</span></div>
            </div>
            <span>CD34 Cohort</span>
            <span>PC1 : -0.0987</span>
            <div class='d-flex justify-content-between'>
            <div><span>PC2 : -0.9984</span></div>
            <button class="remove-button" onclick="myFunction()">Remove</button>
            </div>
            </div>
            </div>`;
          },
          style: {
            pointerEvents: "auto",
          },
          hideDelay: 3000,
        },
        plotOptions: {
          series: {
            stickyTracking: false,
          },
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)",
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
          },
        },
        series: [
          {
            name: "normal",
            data: [
              [-0.1, 0.4],
              [0, 0.3],
              [0.2, 0.3],
              [0.9, 0.4],
              [0.6, 0.9],
              [0.1, 0.2],
              [0.2, 0.1],
              [0.2, 0.2],
              [0.7, 0.3],
              [0.2, 0.3],
            ],
          },
          {
            name: "tumor",
            data: [
              [-0.2, 0.23],
              [0, 0.27],
              [0.1, 0.15],
              [0.4, 0.23],
              [0.33, 0.1],
              [0.52, 0.11],
              [0.12, 0.14],
              [0.16, 0.16],
              [0.13, 0.13],
              [0.19, 0.19],
            ],
          },
        ],
      },
    };
  },

  methods: {
    myFunction() {
      this.chartOptions.series = [{ data: [2, 3, 5] }];
    },

  },
  created() {
    window.myFunction = this.myFunction;
  },
};
</script>

<style scoped lang="scss">
.col-7 {
  width: 54%;
}
</style>
<style lang="scss">
.highcharts-tooltip {
  width: 460px;
}

.highcharts-tooltip span {
  height: auto;
  width: 460px;
  white-space: normal !important;
}

.highcharts-tooltip-box {
  fill: rgb(255, 255, 255);
  stroke: #b7b7b7;
}

.chart-box {
  font-size: 25px;
  font-family: adobe-arabic !important;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.remove-button {
  background-color: #e52620;
  color: white;
  border: 0;
  border-radius: 10px;
  padding: 5px 20px;
}

.chart-section {
  margin-top: 20px;
  border: 4px solid #d4d4d4;
  border-radius: 15px;
}

.alert-message {
  margin-top: 30px;
  display: flex;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  border: 3px solid #d4d4d4;
  border-radius: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  p {
    margin: 0;
    font-size: 32px;
    color: #656565;
  }
}

.export-section,
.right-side {
  .pen-icon {
    width: 42px;
    height: 42px;
  }

  .left-side {
    padding: 30px 0px 30px 40px;
    border: 3px #D4D4D4 solid;
    border-radius: 10px;

    @media (max-width : 1550px) {
      flex-direction: column;
      padding: 30px 40px 30px 40px;

      input {
        width: auto;
      }

      .aselect {
        margin-left: 0;
        margin-right: 0;
        width: 100%;

        .selector {
          width: 100%;
        }
      }

      .export-input {
        margin-top: 15px;
      }
    }
  }

  input {
    height: 60px;
    font-size: 25px;
    border-radius: 8px;
    border: 2px solid #BABABA;
    width: 350px;
  }

  .select-title {
    font-size: 30px;
  }

  .aselect {
    margin-top: 0;

    .selector {
      width: 311px;
    }
  }

  .download {
    background-color: black;
    border: 0;
    border-radius: 11px;
    color: white;
    padding-left: 110px;
    padding-right: 110px;
    padding: 10px 110px;
    font-size: 30px;
  }

  .section-title {
    font-size: 40px;
  }

  .system-log {
    width: 100%;
    background-color: #F8F8F8;
    border: 3px solid #D4D4D4;
    height: 270px;
    border-radius: 10px;

    @media (max-width:1550px) {
      height: 405px;
    }
  }
}

.bottom-buttons {
  margin-top: 120px;
  display: flex;
  justify-content: center;

  .Back {
    background-color: white;
    border: 3px solid #E52620;
    color: #E52620;
    border-radius: 15px;
    font-size: 34px;
    padding: 7px 120px;
    margin-right: 30px;
  }

  .Next {
    background-color: #E52620;
    border: 0;
    color: white;
    border-radius: 15px;
    padding: 7px 120px;
    font-size: 34px;
    font-weight: bolder;
    border: 3px solid #E52620;

  }

}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 100px;
}
</style>