<template>
  <div class="container">
    <div class="article">
      <div class="img">
        <img class="img-fluid" :src="page" alt="">
      </div>
      <div class="small">
        Article
      </div>
      <div class="title">Comparative genome-wide analysis of hub lncRNAs and mRNAs in brain metastatic small cell lung
        cancer – An in-Silico Approach
      </div>
      <div class="download">
        <div class="d-flex flex-column flex-xl-row justify-content-between">
          <div>
            <span class="names">Arsham Mikaeili Namini, Motahareh Jahangir</span>
            <span class="d-flex flex-column flex-lg-row link">DOI:
              <a
                  target="_blank"
                  href="https://doi.org/10.21203/rs.3.rs-1636020/v1">https://doi.org/10.21203/rs.3.rs-1636020/v1</a>
            </span>
          </div>
          <div class="button mt-3 mt-xl-0">
            <button>Download PDF</button>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="title">Abstract</div>
        <div class="description">
          Lung cancer is one of the most commonly prevalent globally. Metastatic lung tumours lead to most deaths in
          lung cancer. Predicting and preventing tumour metastasis is crucially Important for patient survivability.
          Hence, in the current study, we focused on a comprehensive analysis of lung cancer patients’ differentially
          expressed genes (DEGs) on brain metastasis cell lines. DEGs are analysed through KEGG and GO databases for the
          most critical biological processes and pathways for enriched DEGs. Additionally, we performed PPI, GeneMANIA
          and Kaplan-Meier survival analyses on our DEGs. This article focused on mRNA and lncRNA DEGs for LC patients
          with brain metastasis and underlying molecular mechanisms. The expression data was gathered from the Gene
          Expression Omnibus database (GSE161968). We demonstrate that 30 distinct genes are up expressed in brain
          metastasis SCLC patients, and 31 genes are down-expressed. All the analyses we performed show these genes are
          Involve In metastatic SCLC. PPI analysis revealed two hub genes (CAT and APP). The results of this article
          present three lncRNAs, Including XLOC_l2_000941, LOC100507481, and XLOC_l2_007062, also notable mRNAs, have a
          close relation with brain metastasis in lung cancer and may have a role in the epithelial-mesenchymal
          transition (EMT) in tumour cells.
        </div>
        <div class="title">Study Design</div>
        <div class="d-flex flex-column flex-xxl-row">
          <div class="description col">
            In this study we utlized Data for lncRNA and mRNA microchip array extracted from peripheral blood
            mononuclear cells of SCLC patients were downloaded through Gene Expression Omnibus (GEO) 59. The data was
            designed as brain metastasis (BM) patients compared to non-BM patients for lncRNAs in relation to BM in LC
            samples 2 (accession: GSE161968, Platform: GPL20115).
            All six replicates of the samples were used for multiple analyses. Statistical analyses were performed in R
            3.5.1. All the scripts and algorithms were uploaded to the GitHub webserver. Data validation for genes was
            performed and each gene expression aligned with its corresponding samples. Alternatively, genes with higher
            expression in BM compared with non-BM samples were categorised as up-regulated and down-regulated genes. We
            calculated the threshold of logFC to benefit the highest number of expression data well; hence fold change ≥
            1.75 and fold change ≤ -1.75 were applied to our DEG results as up and down-regulated genes, respectively.
            Genes with a p-value ≤ 0.05 were considered significant. Principal component analysis was implemented using
            the devtools package on our data set. Clusters were trimmed by ignoring six samples from both BM and non-BM
            groups. Subsequently, we manipulate the K-mean algorithm for re-clustering the data set for a strong
            validation. A workflow of our approaches in this study is provided
          </div>
          <div class="ps-xl-3 ps-0">
            <img class="img-fluid" :src="big" alt="">
          </div>
        </div>
        <div class="title">PPI and Survival Analysis</div>
        <div class="description">
          Gene network analysis co-expression and co-localisation between up and down-regulated genes were performed.
          For protein-protein interactions, we used the STRING plugin in Cytoscape (version:3.9.1) to construct a
          network between up and down-regulated genes according to our DEGs results. For complete results, we filter our
          DEGs to |log2FC| > 1. Hence, the resulted graph showed us 169 nodes and 300 edges. Additionally, the node’s
          colour is illustrated by log2fold change. Utilising the CentiScaPe plugin, every node’s degree greater than 15
          is considered hub genes, which were two genes (CAT:24 and APP:16)23. We managed to study our hub geans
          survival analysis . We discovered that 20% of BM patients have mutations in 28 up-regulated genes in 47
          individuals in 249 samples. Figure S1 depicts this. MYOM2 contains the most modifications (6%). This gene has
          mutations in I-set: Immunoglobulin I-set domains and Ig_2: Immunoglobulin domain. In 77 cases, 32% of those
          queried had mutations in 27 down-regulated genes. Further analysis showed MPO had the most significant
          mutations (2.5%) in SCLC patient samples.
        </div>
        <div class="title">Hub genes survival analysis:</div>
        <div class="description">
          As we mentioned before, CAT and ACC are considered hub genes. Initial analysis of KP-Plotter analysis showed
          that the results were meaningful due to top values. CAT and ACC’s hazard ratio (HR) were 0.6 and 0.81,
          respectively. 'HR 1 means that up-regulation of genes drives high survival probability in LC patients'. Our
          hub
          genes have a negative log2fold change in Brain metastasis SCLC patients making these two potential biomarker
          genes. Fortunately, there is a meaningful relationship between DEGs and KP-Plots, validating our prediction.
          The hub genes CAT (HR 0.6, p = 2.6e−15, log2FC = -1.3802) and APP (HR 0.81, p = 0.0012, log2FC = -1.1716) were
          significantly associated with an unfavorable overall survival in lung cancer patients.
        </div>
        <div class="align-items-center d-flex flex-column flex-xxl-row pt-5">
          <div class="pe-0 pb-4 pb-xxl-0 pe-xxl-4">
            <img class="img-fluid" :src="side2" alt="">
          </div>
          <div>
            <img class="img-fluid" :src="side" alt="">
          </div>
        </div>
        <div class="connect">
          <button>Connect with authors</button>
          <div class="d-flex emails">
            <div class="d-flex flex-column">
              <div class="username">Arsham Mikaeili Namini</div>
              <div class="email-title">Email:</div>
              <span class="pb-1">arshammikaeili@gmail.com</span>
              <span>Std_arshammikaeili@khu.ac.ir</span>
            </div>
            <div class="section-two">
              <div class="username">Motahareh Jahangir</div>
              <div class="email-title">Email:</div>
              <div>
                <span>motahareh.jh79@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import page from "@/assets/page.png";
import big from "@/assets/1.png";
import side from "@/assets/4.png";
import side2 from "@/assets/5.png";

export default {
  name: "Article1",
  data() {
    return {
      page,
      big,
      side,
      side2
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  padding-top: 115px;

  .small {
    font-style: italic;
    font-size: 28px;
    line-height: 31px;
    padding-bottom: 30px;
    color: #BEBEBE;
    padding-left: 10px;
    padding-top: 20px;
  }

  .title {
    font-size: 46px;
    line-height: 50px;
  }

  .download {
    button {
      background-color: #E52620;
      padding: 8px 23px;
      color: white;
      font-size: 30px;
      max-width: 195px;
      border: unset;
      line-height: 32px;
      @media (max-width: 600px) {
        max-width: unset;
        width: 100%;
      }
    }

    .names {
      font-size: 34px;
      line-height: 37px;
    }

    .link {
      font-size: 28px;
      line-height: 31px;
      padding-top: 10px;

      a {
        padding-left: 15px;
        text-decoration: none;
      }
    }
  }

  .body {
    .title {
      color: #E52620;
      padding-top: 39px;
      padding-bottom: 31px;
    }

    .description {
      font-size: 30px;
      line-height: 36px;
    }
  }

  .connect {
    padding-top: 100px;
    padding-bottom: 80px;
    font-size: 37px;
    line-height: 41px;

    button {
      background-color: #E52620;
      padding: 8px 23px;
      color: white;
      font-size: 30px;
      max-width: 322px;
      border: unset;
      line-height: 32px;
    }

    .emails {
      padding-top: 47px;

      .email-title {
        font-size: 33px;
        line-height: 36px;
        color: #A7A7A7;
        padding-top: 30px;
      }

      .section-two {
        padding-left: 180px;
      }
    }

    @media (max-width: 1000px) {
      .emails {
        flex-direction: column;
        .section-two {
          padding-left: 0 !important
        }
      }
    }

  }
  @media (max-width: 600px) {
    padding: 20px;
    .small {
        padding-left: 0;
        padding-bottom: 10px;
    }
    .title {
      font-size: 25px;
      line-height: 28px;
    }
    .download {
      .link{
        a{
          padding-left: 0;
        }
      }
      span{
        font-size: 25px !important;
        line-height: 28px !important;
      }
    }
    .names {}
    .body{
      .description{
        font-size: 24px !important;
        line-height: 36px !important;
      }
    }
    .connect{
      padding-top: 70px;
      padding-bottom: 50px;
      button{
        max-width: unset;
        width: 100%;
      }
      .emails{
        font-size: 24px !important;
        line-height: 26px !important;
        .username{
          font-size: 28px !important;
          line-height: 32px !important;
        }
        .section-two{
          padding-top:50px;
        }
        .email-title{
          padding-top:15px
        }
      }
    }
  }
}
</style>