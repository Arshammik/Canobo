<template>
  <div class="container team-section">
    <span class="mobile-title d-none"> Canobo Team </span>
    <div class="team d-flex">
      <div class="image">
        <img :src="team" alt="" />
      </div>
      <div class="details">
        <span class="name"> Arsham Mikaeili Namini </span>
        <span class="desc"> Institute Director </span>
        <span class="fieldStudy">Research Areas:</span>
        <p class="skills">
          Biomedical informatics, Computational Biology, Biomedical Data
          Science, Machine Learning
        </p>
      </div>
      <div class="contact">
        <span class="email"> Emails: </span>
        <span> arshammikaeili@gmail.com </span>
        <span> Std_arshammikaeili@khu.ac.ir </span>
      </div>
      <div class="icons d-flex flex-lg-column">
        <a target="_blank" href="https://twitter.com/Arsham2000M">
          <img :src="awesomeTwitter" alt="" />
        </a>
        <a href="https://t.me/Arshammikaeili">
          <img :src="awesomeTelegram" />
        </a>
        <a href="https://github.com/Arshammik">
          <img :src="awesomeGithub" alt="" />
        </a>
      </div>
    </div>

    <div class="team d-flex">
      <div class="image"></div>
      <div class="details">
        <span class="name"> Motahareh Jahangir </span>
        <span class="desc"> Institute Coordinator </span>
        <span class="fieldStudy">Research Areas:</span>
        <p class="skills">
          C&M Biology, Bioinformatics, Neuroscience, Genomics and
          Transcriptomics, Biomarkers
        </p>
      </div>
      <div class="contact">
        <span class="email"> Emails: </span>
        <span> jahangir.motahareh@gmail.com </span>
        <span> m.jahangir@mail.sbu.ac.ir </span>
      </div>
      <div class="icons d-flex flex-lg-column">
        <img :src="awesomeTwitter" alt="" />
        <a href="https://t.me/MotaharehJahangir">
          <img :src="awesomeTelegram" />
        </a>
        <img :src="awesomeGithub" alt="" />
      </div>
    </div>

    <div class="team d-flex">
      <div class="image"></div>
      <div class="details">
        <span class="name"> Yasin Souezi </span>
        <span class="desc"> Institute Coordinator </span>
        <span class="fieldStudy">Research Areas:</span>
        <p class="skills">
          Computational Biology, Machine Learning
        </p>
      </div>
      <div class="contact">
        <span class="email"> Emails: </span>
        <span> yasinsouezi@gmail.com </span>
      </div>
      <div class="icons d-flex flex-lg-column">
        <img :src="awesomeTwitter" alt="" />
        <img :src="awesomeTelegram" />
        <img :src="awesomeGithub" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import awesomeGithub from "@/assets/awesomeGithub.svg";
import awesomeTwitter from "@/assets/awesomeTwitter.svg";
import awesomeTelegram from "@/assets/awesomeTelegram.svg";
import team from "@/assets/team.jpg";

export default {
  name: "Team",
  data() {
    return {
      awesomeGithub,
      awesomeTwitter,
      awesomeTelegram,
      team,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 120px;
  max-width: 1364px;
  padding: 0;
  @media (max-width: 600px) {
    margin-top: 0;
  }
}
.team-section {
  padding-bottom: 100px;
}
.mobile-title {
  @media (max-width: 950px) {
    display: block !important;
    padding: 37px 46px;
    font-size: 46px;
    &:after {
      content: "";
      border-bottom: 3px solid #e52620;
      display: flex;
      width: 25%;
      position: absolute;
      margin-top: -5px;
    }
  }
}

.team {
  padding: 38px 40px 35px 33px;
  margin-bottom: 32px;
  background-color: #f8f8f8;

  .image {
    width: 283px;
    height: 212px;
    img{
      width: 100%;
      height: 212px;
    }
    background-color: white;
    @media (min-width: 1024px) {
      margin-right: 42px;
    }
    @media screen and (min-width: 550px) and (max-width:946px) {
      height: 612px !important;
      img{
        height: 612px !important;

      }
    }

    }

  .details {
    margin-top: auto;
    display: flex;
    flex-direction: column;

    .name {
      font-size: 46px;
      line-height: 27px;
    }

    .desc {
      color: #e52620;
      font-size: 32px;
      margin-bottom: 25px;
    }

    .fieldStudy {
      color: #a7a7a7;
      font-size: 32px;
    }

    .skills {
      max-width: 503px;
      margin-bottom: 0;
    }

    p {
      font-size: 32px;
      line-height: 35px;
    }
  }

  .contact {
    span {
      line-height: 35px;
    }

    margin-top: auto;
    display: flex;
    flex-direction: column;
    font-size: 32px;
    @media (min-width: 1024px) {
      margin-left: 47px;
    }

    .email {
      color: #a7a7a7;
      font-size: 32px;
    }
  }

  .icons {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;

    img {
      margin-bottom: 19px;
      cursor: pointer;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    margin: 40px 20px;
    border: 1px solid #dddddd;
    padding: 20px 30px 0px 30px;
    .image {
      width: 100%;
      height: 208px;
    }
    .details {
      .name {
        font-size: 35px;
        line-height: 38px;
        margin-top: 10px;
      }

      .desc {
        font-size: 24px;
        line-height: 26px;
      }

      .fieldStudy {
        font-size: 27px;
      }

      .skills {
        font-size: 25px;
      }
    }
    .contact {
      .email {
        font-size: 27px;
        line-height: 29px;
        margin-top: 15px;
      }

      span {
        font-size: 25px;
        line-height: 28px;
      }
    }
    .icons {
      margin-top: auto;
      margin-bottom: auto;
      gap: 20px;
      padding-top: 30px;
      justify-content: center;
      margin-left: unset;

      img {
        width: 27px;
        height: 27px;
      }
    }
  }
}
</style>
