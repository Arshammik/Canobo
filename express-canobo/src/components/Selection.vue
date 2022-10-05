<template>
    <div class="step-sections my-5">
        <span :class="{ active: selected.principal, 'green-section': greened.principal }">Principal component analysis</span>
        <span :class="{ active: selected.dotPlot, 'green-section': greened.dotPlot }">Density Plot</span>
        <span :class="{ active: selected.heatmap, 'green-section': greened.heatmap }">Heatmap</span>
        <span :class="{ active: selected.barplot, 'green-section': greened.barplot }">Bar Plot</span>
        <span :class="{ active: selected.density, 'green-section': greened.density }">MA Plot</span>
    </div>
</template>

<script>
export default {
props:['selected','greened']
}
</script>

<style scoped lang="scss">
.step-sections {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  span {
    padding: 10px 93px;
    font-size: 28px;
    border-radius: 20px;
    background-color: #f5f5f5;
    color: #919191;

    &.active {
      background-color: white;
      border: 3px solid #e52620;
      color: black;
    }
    &.green-section{
      background-color: #ECF8EA;
      border: 3px solid #79BC88;
      color: #137129;
    }
  }

  @media(max-width:1550px) {
    span {
      padding: 10px 45px;
    }
  }
}
</style>