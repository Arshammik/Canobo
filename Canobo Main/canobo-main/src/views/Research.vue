<template>
  <div class="research pt-0 pt-lg-5 container">
    <router-link to="researches/comparative-genome-wide-analysis">
      <div class="item">
        <div class="header flex-column flex-lg-row">
          <div class="image">
            <img :src="article" alt="">
          </div>
          <div class="description">
            <div class="tag">
              <span>Article</span>
            </div>
            <div class="title">
              Comparative genome-wide analysis of hub lncRNAs and mRNAs in brain metastatic small cell lung cancer – An
              in-Silico Approach
            </div>
          </div>
        </div>
        <div class="body">
          <span class="tag">Abstract</span>
          <p class="description">Lung cancer is one of the most commonly prevalent globally. Metastatic lung tumours
            lead
            to most deaths in
            lung cancer. Predicting and preventing
            tumour metastasis is crucially Important for patient survivability. Hence, in the current study, we focused
            on
            a comprehensive analysis of lung
            cancer patients’ differentially expressed genes (DEGs) on brain metastasis cell lines. DEGs are analysed
            through KEGG and GO databases for the
            most critical biological processes and pathways for enriched DEGs. Additionally, we performed PPI, GeneMANIA
            and Kaplan-Meier survival
            analyses on our DEGs. This article focused on mRNA and lncRNA DEGs for LC patients with brain metastasis and
            underlying molecular
            mechanisms. The expression data was gathered from the Gene Expression Omnibus database (GSE161968). We
            demonstrate that 30 distinct genes
            are up expressed in brain metastasis SCLC patients, and 31 genes are down-expressed. All the analyses we
            performed show these genes are Involve
            In metastatic SCLC. PPI analysis revealed two hub genes (CAT and APP). The results of this article present
            three lncRNAs, Including
            XLOC_l2_000941, LOC100507481, and XLOC_l2_007062, also notable mRNAs, have a close relation with brain
            metastasis in lung cancer and may
            have a role in the epithelial-mesenchymal transition (EMT) in tumour cells.</p>
        </div>
      </div>
    </router-link>
    <div class="item">
      <div class="header flex-column flex-lg-row">
        <div class="image">
          <img :src="article2" alt="">
        </div>
        <div class="description">
          <div class="tag">
            <span>Article</span>
          </div>
          <div class="title">
            Comparative analysis of protein-protein interaction networks in metastatic breast cancer
          </div>
        </div>
      </div>
      <div class="body">
        <span class="tag">Abstract</span>
        <p class="description">Metastatic lesions leading causes of the majority of deaths in patients with the breast
          can- cer. The present study aimed to provide a comprehensive analysis of the differentially expressed genes
          (DEGs) in the brain (MDA-MB-231 BrM2) and lung (MDA-MB-231 LM2) metastatic cell lines obtained from breast
          cancer patients compared with those who have primary breast cancer. We identified 981 and 662 DEGs for brain
          and lung metastasis, respectively. Protein-protein interaction (PPI) analysis revealed seven shared (PLCB1,
          FPR1, FPR2, CX3CL1, GABBR2, GPR37, and CXCR4) hub genes between brain and lung metastasis in breast cancer.
          Moreover, GNG2 and CXCL8, C3, and PTPN6 in the brain and SAA1 and CCR5 in lung metastasis were found as unique
          hub genes. Besides, five co-regu- lation of clusters via seven important co-expression genes (COL1A2, LUM,
          SPARC, THBS2, IL1B, CXCL8, THY1) were identified in the brain PPI network. Clusters screening followed by
          biological process (BP) function and pathway enrichment analysis for both met- astatic cell lines showed that
          complement receptor signalling, acetylcholine receptor signalling, and gastric acid secretion pathways were
          common between these metastases, whereas other pathways were site-specific. According to our findings, there
          are a set of genes and functional pathways that mark and mediate breast cancer metastasis to the brain and
          lungs, which may enable us understand the molecular basis of breast cancer development in a deeper levele to
          the brain and lungs, which may help us gain a more com- plete understanding of the molecular underpinnings of
          breast cancer development.</p>
      </div>
    </div>
    <router-link to="researches/machine-learning-identifies">
      <div class="item">
        <div class="header flex-column flex-lg-row">
          <div class="image">
            <img :src="article2" alt="">
          </div>
          <div class="description">
            <div class="tag">
              <span>Project</span>
            </div>
            <div class="title">
              Machine Learning Identifies Stemness Features Associated with Oncogenic Dedifferentiation
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import article from "@/assets/article.png";
import article2 from "@/assets/article2.png";

export default {
  name: "Research",
  data() {
    return {
      article,
      article2
    }
  }
}
</script>


<style lang="scss" scoped>
.research {
  a {
    text-decoration: unset;
    color: unset;
  }

  .item {
    margin-bottom: 50px;
    background-color: #F8F8F8;
    padding: 30px 28px 40px 30px;
    border: 1px solid #DDDDDD;

    .header {
      .image {
        img {
          max-width: 100%;
          height: auto;
          @media (max-width: 1000px) {
            width: 100%;
          }
        }
      }

      @media (min-width: 1000px) {
        .image {
          img {
            max-width: 259px;
            height: 209px;
          }
        }
      }
      display: flex;

      .description {
        padding-right: 175px;
        padding-left: 50px;

        .tag {
          color: #BEBEBE;
          font-size: 28px;
          line-height: 31px;
        }

        .title {
          font-size: 46px;
          line-height: 50px;
        }

        @media (max-width: 1000px) {
          padding: 20px 0;
          .tag {
            font-size: 28px;
            line-height: 31px;
          }

          .title {
            font-size: 30px;
            line-height: 32px;
          }
        }
      }
    }

    .body {
      padding-top: 36px;
      padding-left: 36px;

      .tag {
        color: #BEBEBE;
        font-size: 32px;
        line-height: 35px;
      }

      .description {
        font-size: 28px;
        line-height: 36px;
      }

      @media (max-width: 1000px) {
        padding: 30px 0;
        .description {
          font-size: 25px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>