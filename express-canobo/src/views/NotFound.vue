<template>
  <div class="notFound container">
    <span v-if="isAccessDenied" class="header"> 403 </span>
    <span v-else class="header"> 404 </span>
    <span v-if="isAccessDenied" class="title"> Access denied </span>
    <span v-else class="title"> Page Not Found </span>
    <p v-if="isAccessDenied"> You need a desktop computer to use
      Tools and Services
      section  </p>
    <p v-else> We are sorry, something </p>
    <p v-if="!isAccessDenied">goes wrong :(</p>
    <a href="https://www.canobo.org/">
    <button>Back to homepage</button>
    </a>
  </div>
</template>
<script>
export default {
  props:['isAccessDenied'],
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.notFound {
  padding-top: 100px;
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;

  .header {
    font-size: 137px;
    line-height: 137px;
    color: #E52620
  }

  .title {
    font-size: 67px;
     @media (max-width:600px){
          font-size: 48px;
     }
  }

  p {
    font-size: 47px;
    color: #868686;
    line-height: 50px;
    @media (max-width:600px){
      font-size: 34px;
      color: #868686;
      line-height: 36px;
    }
  }

  button {
    background-color: #E52620;
    padding: 10px 10px;
    color: white;
    font-size: 38px;
    max-width: 500px;
    border: unset;
    margin-top: 52px;
    @media (max-width:600px){
      max-width: unset;
      width: 100%;
      font-size: 26px;
    }
  }
  @media (max-width:600px){
    padding: 30px 40px 120px 40px;
  }
}
</style>