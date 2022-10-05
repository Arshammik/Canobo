<template>
  <div class="borderTopBottom">
    <div class="container">
      <div class="header">
        <div class="d-flex align-items-center">
          <img :src="simpleMicrogenetics2" alt="" />
          <span class="ms-3">Express-A</span>
        </div>
        <div class="input-section py-5">
          <div class="position-relative">
            <input placeholder="Search Results" class="runName runNameSearch" type="text">
            <span class="runInputIcon"><img :src="search" alt=""></span>
          </div>
        </div>
      </div>
      <div class="addCohort">
        <div class="input-section py-5">
          <div class="selectedItems">
            <div>
              <span v-for="(item, index) in cohortItems" :key="index" class="ms-3" :class="`itemSelected${index}`">
                {{ item }}
              </span>
            </div>
            <div class="position-relative">
              <input v-if="!showCohortButton && cohortItems.length < 4" @input="inputVal($event)" placeholder="Enter Your Cohort’s Name"
                class="runName md ms-4" type="text">
            </div>
          </div>
        </div>
        <div>
          <button @click="addSelected" v-if="showAddButton" class="submit">Submit</button>
          <img @click="addInput" v-if="showAddIcon" :src="add" alt="">
          <button @click="addCohort" v-if="showCohortButton" class="submit cohort">Add selected samples to this
            cohort</button>
        </div>
      </div>
      <table @click="addClassStriped" class="table table-borderless">
        <thead>
          <tr>
            <th v-for="col in columns" scope="col" :key="col.key">{{ col.key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in data" :key="el.Title">
            <td>{{ el.Accession }}</td>
            <td>{{ el.Title }}</td>
            <td>{{ el.SourceName }}</td>
            <td>{{ el.cellType }}</td>
            <td>{{ el.Gender }}</td>
            <td>{{ el.Age }}</td>
            <td>{{ el.CellLine }}</td>
          </tr>

        </tbody>
      </table>
      <router-link to="loading">
        <div :class="cohortItems.length ? '' : 'disable'" class="analyse my-5">
          <button>Analyse</button>
        </div>
      </router-link>
      <div class="logo">
        <img :src="logo" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/assets/search.svg';
import logo from '@/assets/group55.png';
import add from '@/assets/add.svg';
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";

export default {
  data() {
    return {
      search,
      logo,
      simpleMicrogenetics2,
      add,
      data: [
        { Accession: "GSM052234", Title: 'A519', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A599', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A539', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A529', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A559', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A569', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A579', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A589', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A279', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A541', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A542', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A543', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A544', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A545', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A546', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A547', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A548', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A549', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },

      ],
      columns: [
        { key: "Accession" },
        { key: "Title" },
        { key: "Source name" },
        { key: "Cell type" },
        { key: "Gender" },
        { key: "Age" },
        { key: "Cell line" },
      ],
      showAddButton: false,
      showAddIcon: true,
      showCohortButton: false,
      cohortItem: null,
      cohortItems: []
    }
  },
  methods: {
    inputVal(e) {
      let inputLength = e.target.value.length
      this.cohortItem = e.target.value
      this.showCohortButton = false;
      this.showAddIcon = false;
      this.showAddButton = inputLength > 0 ? true : false
    },
    addSelected() {
      this.cohortItems.push(this.cohortItem);
      this.showCohortButton = true;
      this.showAddButton = false
    },
    addCohort() {

      if (this.cohortItems.length === 1) {
        this.data = [
          { Accession: "GSM052234", Title: 'A519', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A599', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A539', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A529', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A559', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A569', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A579', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A589', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A279', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A541', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A542', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A543', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A544', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A545', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A546', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A547', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
          { Accession: "GSM052234", Title: 'A548', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A549', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        ];
        let table = document.querySelector('.table');
        table.classList.add('stripedOddAdd');
      }
      if (this.cohortItems.length === 2) {
        this.data = [
          { Accession: "GSM052234", Title: 'A519', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A599', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A539', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A529', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A559', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A569', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A579', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A589', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A279', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A541', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A542', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A543', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A544', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A545', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A546', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A547', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
          { Accession: "GSM052234", Title: 'A548', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[0] },
          { Accession: "GSM052234", Title: 'A549', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: this.cohortItems[1] },
        ];
        let table = document.querySelector('.table');
        table.classList.add('stripedEvenAdd');
      }

      this.showCohortButton = false
    },
    addInput() {

    },
    addClassStriped() {
      if (this.cohortItems.length) {
        let table = document.querySelector('.table');
        table.classList.add('stripedOdd')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.data-table-sorting-icons {
  display: none !important;
}

.table {
  --bs-table-striped-bg: rgb(255 255 255) !important;
  cursor: pointer;
}

.stripedOdd {
  tr:nth-child(odd) {
    background-color: #FCF8E5;
  }
}

.stripedOddAdd {
  tr:nth-child(odd) {
    background-color: #E5FCF7;
  }
}

.stripedEvenAdd {
  tr:nth-child(even) {
    background-color: #E5E9FC;
  }
}

.stripedEven {
  tr:nth-child(even) {
    background-color: #FCF8E5;
  }
}



.header {
  justify-content: space-between;
  align-items: center;
  display: flex;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 41px;
  }
}

.addCohort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #D4D4D4;
  border-radius: 15px;
  padding-left: 40px;
  padding-right: 60px;
  margin-bottom: 80px;

  .selectedItems {
    display: flex;
    align-items: center;

    .itemSelected0 {
      padding: 13px 58px;
      border: 3px solid #349681;
      background-color: #E5FCF7;
      border-radius: 10px;
      font-size: 30px;
    }

    .itemSelected1 {
      padding: 13px 58px;
      border: 3px solid #5E6896;
      background-color: #E5E9FC;
      border-radius: 10px;
      font-size: 30px;
    }
    .itemSelected2 {
      padding: 13px 58px;
      border: 3px solid #BE6820;
      background-color: #FCEEE5;
      border-radius: 10px;
      font-size: 30px;
    }
    .itemSelected3 {
      padding: 13px 58px;
      border: 3px solid #347096;
      background-color: #D6F2FF;
      border-radius: 10px;
      font-size: 30px;
    }
  }
}

.table {
  font-size: 28px;

  td {
    border-top: 1px solid #A5A5A5;
    text-align: center;
    border-bottom: 1px solid #A5A5A5;
  }

  thead {
    background-color: #FAFAFA !important;



    tr th {
      background-color: #FAFAFA !important;
      border: unset;
      font-weight: 100;
      padding: 0.89rem;
      font-size: 32px;
      text-align: center;
    }
  }

  tr {

    td {
      &:first-child {
        border-left: 1px solid #A5A5A5 !important;

      }

      &:last-child {
        border-right: 1px solid #A5A5A5 !important;

      }
    }
  }

  tbody {
    &::before {
      content: "@";
      display: block;
      line-height: 35px;
      text-indent: -99999px;
    }
  }
}

.submit {
  border: 3px solid #E52620;
  border-radius: 10px;
  font-size: 30px;
  background-color: #ffffff;
  color: #E52620;
  padding: 3px 60px;

  &.cohort {
    background-color: #FCF8E5;
  }
}
</style>
<style lang="scss">
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

.borderTopBottom {
  border-top: 14px solid #E52620;
  border-bottom: 14px solid #E52620;
}

.analyse {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.analyse button {
  padding: 7px 120px;
  border-radius: 10px;
  color: white;
  background-color: #E52620;
  border: 1px solid #E52620;
  margin-top: 50px;
  margin-bottom: 60px;
  font-size: 33px;

}

.analyse.disable button {
  padding: 7px 120px;
  border-radius: 10px;
  color: #000000;
  background-color: #E0E0E0;
  border: 1px solid #E0E0E0;
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

a {
  text-decoration: unset !important;
}
</style>