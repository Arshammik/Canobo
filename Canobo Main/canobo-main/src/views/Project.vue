<template>
  <div class="project">
    <div>
      <div class="top-mobile pt-4 px-4 d-lg-none">
        <span class="small fst-italic">Project</span>
        <div class="title-project">
          Machine Learning Identifies Stemness Features Associated with Oncogenic Dedifferentiation
        </div>
        <div class="author">Arsham Mikaeili Namini</div>
      </div>
      <div class="d-flex flex-column position-relative tab-section flex-lg-row align-items-start">
      <div id="left-side">
        <div class="nav flex-row flex-lg-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <span class="title d-none d-lg-block">Sections</span>
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                  type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Study Design
          </button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                  type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">OCLR
          </button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                  type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Scripts
          </button>
          <button disabled class="nav-link disabled" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                  type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Additional Files
          </button>
          <button disabled class="nav-link disabled" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                  type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Lab Pages
          </button>
          <button disabled class="nav-link disabled" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                  type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">System Logs
          </button>
        </div>
      </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div class="content">
              <span class="small d-none d-lg-block fst-italic">Project</span>
              <div class="title-project d-none d-lg-block">
                Machine Learning Identifies Stemness Features Associated with Oncogenic Dedifferentiation
              </div>
              <div class="author d-none d-lg-block">Arsham Mikaeili Namini</div>
              <div class="description"><p>
                Cancer progression involves the gradual loss of a differentiated phenotype and acquisition of progenitor
                and stem-cell-like features. Here, we provide novel stemness indices for assessing the degree of
                oncogenic dedifferentiation. We used an innovative one-class logistic regression (OCLR) machine-learning
                algorithm to extract transcriptomic and epigenetic feature sets derived from non-transformed pluripotent
                stem cells and their differentiated progeny. Using OCLR, we were able to identify previously
                undiscovered biological mechanisms associated with the dedifferentiated oncogenic state. Analyses of the
                tumor microenvironment revealed unanticipated correlation of cancer stemness with immune checkpoint
                expression and infiltrating immune cells. We found that the dedifferentiated oncogenic phenotype was
                generally most prominent in metastatic tumors. Application of our stemness indices to single-cell data
                revealed patterns of intra-tumor molecular heterogeneity. Finally, the indices allowed for the
                identification of novel targets and possible targeted therapies aimed at tumor differentiation.
              </p></div>
              <div class="description"><p>
                Stemness, defined as the potential for self-renewal and differentiation from the cell of origin, was
                originally attributed to normal stem cells that possess the ability to give rise to all cell types in
                the adult organism. Cancer progression involves gradual loss of a differentiated phenotype and
                acquisition of progenitor-like, stem-cell-like features. Undifferentiated primary tumors are more likely
                to result in cancer cell spread to distant organs, causing disease progression and poor prognosis,
                particularly because metastases are usually resistant to available therapies (Friedmann-Morvinski and
                Verma, 2014, Ge et al., 2017, Shibue and Weinberg, 2017, Visvader and Lindeman, 2012).
                An increasing number of genomic, epigenomic, transcriptomic, and proteomic signatures have been
                associated with cancer stemness. Those molecular features are causally connected to particular oncogenic
                signaling pathways that regulate transcriptional networks that sustain the growth and proliferation of
                cancer cells (Ben-Porath et al., 2008, Eppert et al., 2011, Kim et al., 2010). Transcriptional and
                epigenetic dysregulation of cancer cells frequently leads to oncogenic dedifferentiation and acquisition
                of stemness features by altering core signaling pathways that regulate the phenotypes of normal stem
                cells (Bradner et al., 2017, Young, 2011). Cell-extrinsic mechanisms can also affect maintenance of the
                undifferentiated state, largely through epigenetic mechanisms. Tumors comprise a complex, diverse,
                integrated ecosystem of relatively differentiated cancer cells, cancer stem cells, endothelial cells,
                tumor-associated fibroblasts, and infiltrating immune cells, among other cell types. The
                microenvironment of a tumor, considered as a pathologically formed “organ,” is frequently characterized
                by hypoxia, as well as by abnormal levels of various cytokines, growth factors, and metabolites
                (Lyssiotis and Kimmelman, 2017). It provides numerous opportunities for cell-cell signals to modulate
                the epigenome and expression of stem-cell-like programs in cancer cells, frequently independent of their
                genetic backgrounds (Gingold et al., 2016).
                Over the last decade, The Cancer Genome Atlas (TCGA) has illuminated the landscapes of primary tumors by
                generating comprehensive molecular profiles composed of genomic, epigenomic, transcriptomic, and
                (post-translational) proteomic characteristics (Hoadley et al., 2014, Tomczak et al., 2015), along with
                histopathological and clinical annotations. The resulting resource enabled us to analyze cancer stemness
                quite extensively in almost 12,000 samples of 33 tumor types.
                First, we defined signatures to quantify stemness using publicly available molecular profiles from
                normal cell types that exhibit various degrees of stemness. By multi-platform analyses of their
                transcriptome, methylome, and transcription-factor binding sites using an innovative one-class logistic
                regression (OCLR) machine-learning algorithm (Sokolov et al., 2016), we obtained two independent
                stemness indices. One (mDNAsi) was reflective of epigenetic features; the other (mRNAsi) was reflective
                of gene expression. We then identified associations between the two stemness indices and novel oncogenic
                pathways, somatic alterations, and microRNA (miRNA) and transcriptional regulatory networks. Those
                features correlated with, and perhaps govern, cancer stemness in particular molecular subtypes of TCGA
                tumors. Importantly, higher values for stemness indices were associated with biological processes active
                in cancer stem cells and with greater tumor dedifferentiation, as reflected in histopathological grade.
                Metastatic tumor cells appeared more dedifferentiated phenotypically, probably contributing to their
                aggressiveness. We also found tumor heterogeneity at the single-cell level by measuring stemness in
                transcriptome profiles obtained from individual cancer cells. Using CIBERSORT to profile immune cell
                types in TCGA tumors, we obtained insight into the interface of the immune system with stemness.
                Finally, we identified compounds specific to selected molecular targets and mechanisms that may
                eventually lead to novel treatments that trigger differentiation and exhaust the stemness potential of
                highly aggressive neoplasms.
              </p></div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div class="content">
              <div class="title-project">
                One Clas Logestic regretion
              </div>
              <div class="author">Method Details</div>
              <div class="author">DNA Methylation Data</div>
              <div class="description"><p>
                A total of 9,627 PanCancer TCGA samples across 33 different tumor types were available for DNA
                methylation using the robust Illumina HumanMethylation 450 (HM450) platform. TCGA samples included
                primary (8,471), recurrent (41), and metastatic tumor (394) tissues and a set of 721 non-tumor tissues.
                Level 3 data were downloaded from TCGA Data Portal using TCGAbiolinks functions GDCquery, GDCdownload
                and GDCprepare importing into R (http://www.r-project.org) for further analysis (Colaprico et al.,
                2016).
                DNA methylation level 3 data are beta-values that were calculated from pre-processed raw data using the
                methylumi Bioconductor package (Davis et al., 2015). Pre-processing steps included background
                correction, dye-bias normalization, and calculation of beta-valuesvalues and detection p values.
                beta-values range from zero to one, with zero indicating no DNA methylation and one indicating complete
                DNA methylation. A detection p value compares the signal intensity difference between the analytical
                probes and a set of negative control probes on the array. Any data point with a corresponding p value
                greater than 0.01 is deemed not statistically significantly different from background and is thus masked
                as “NA” in TCGA level 3 data. The data levels and the files contained in each data level package are on
                the NIH Genomic Data Commons (GDC).
                In addition to TCGA data, we used a dataset of 99 human stem/progenitor cells from the Progenitor Cell
                Biology Consortium (PCBC) (https://www.synapse.org/#!Synapse:syn1773109) to define stem cell signatures
                (Daily et al., 2017, Salomonis et al., 2016). PCBC samples were profiled using the Illumina
                HumanMethylation 450 (HM450) platform and consisted of 4 embryonic stem cells (ESC), 40 induced
                pluripotent stem cells (iPSC), 22 stem cell (SC)-derived embryoid bodies (EB), 11 SC-derived mesoderm
                day 5 (MESO, mesothelioma), 11 SC-derived ectoderm (ECTO), and 11 SC-derived definitive endoderm (DE).
                We downloaded raw IDAT files from PCBC Genomic Data Commons and processed the data according to the TCGA
                standard level 3 protocol described above.
                RNA Expression Data

              </p></div>
              <div class="description"><p>
                PanCancer TCGA RNA sequence level 3 normalized data were downloaded from the GDC Data Portal using
                TCGAbiolinks functions GDCquery, GDCdownload and GDCprepare importing into R (http://www.r-project.org)
                for further analysis (Colaprico et al., 2016). A total of 10,852 samples across 33 tumor types were
                available, including primary (9,702), recurrent (45) and metastatic tumor (395) tissues and a set of 710
                non-tumor tissues.
                We also downloaded PCBC RNA sequence data from the PCBC Synapse Portal
                (https://www.synapse.org/#!Synapse:syn1773109), consisting 16 ESC, 77 iPSC, 66 SC-derived EB, 29
                SC-derived MESO, 29 SC-derived ECTO, and 36 SC-derived DE (Daily et al., 2017, Salomonis et al., 2016).
                Stemness Index Derived Using OCLR

              </p></div>
              <div class="description"><p>
                To calculate a stemness index (si) based on mRNA expression or DNA methylation, we built a predictive
                model using one-class logistic regression (OCLR) (Sokolov et al., 2016) on the pluripotent stem cell
                samples (ESC and iPSC) from the PCBC dataset (Daily et al., 2017, Salomonis et al., 2016).
                For mRNA expression-based signatures, to ensure compatibility with the TCGA PanCancer cohort, we first
                mapped the gene names from Ensembl IDs to Human Genome Organization (HUGO), dropping any genes that had
                no such mapping. The resulting training matrix contained 12,945 mRNA expression values measured across
                all available PCBC samples. For DNA methylation-based signatures, we used each of the signatures (probe
                set) described below.
                We mean-centered the data, then applied OCLR to just the samples labeled SC (which included both ESC and
                iPSC). We chose to use the one-class framework because of its robustness in the absence of the a
                “negative” class. The PCBC data does not have data for fully differentiated cells, and progenitor cell
                types might exhibit some of the stemness signals.
                Once the signature is obtained, it can be applied to score new samples. For RNA expression data, we
                computed Spearman correlations between the model’s weight vector and the new sample’s expression
                profile. We advocate for the use of Spearman correlation over the more traditional dot product operation
                because it is more robust with respect to potential cross-dataset batch effects that may arise. For DNA
                methylation data, which follow the beta distribution, the samples were scored using the standard
                application of a linear model: f(x) = w∧T x + b.
                We validated our approach using leave-one-out cross-validation by withholding each SC sample in turn. A
                separate signature was then trained on all other SC samples and used to score the withheld sample as
                well as all the non-SC samples. The performance was measured using the area under the curve (AUC)
                metric, which can be interpreted as the probability that the model correctly ranks a positive sample
                above a negative (Agarwal et al., 2005). In our cross-validation experiment, every withheld SC sample
                was scored higher than all the non-SC samples, yielding an overall AUC of 1.0.
                We performed additional validation of the stemness signature by applying it to an external dataset
                composed of pluripotent stem cells (ESC and iPSC), somatic cells (17 distinct tissue types and several
                primary cell lines of diverse origin), and hydatidiform mole samples (Nazor et al., 2012). The mRNA
                expression data for the study were downloaded from GEO (GEO: GSE30652) as were DNA methylation data
                (GEO: GSE30654). We observed that all of the SC samples were correctly scored above all of the somatic
                samples by both platforms (Figure 1B). This is particularly striking for mRNA expression, because mRNA
                expression in study by the Nazor et al. was measured using microarrays, whereas the signature was
                trained using RNA-seq data.
              </p></div>
              <pre>
              <code class="code-section">
                #!/bin/bash

                FASTQ=$2
                SAMPLE=$1
                DIR=$(pwd)

                cat &lt&ltEOF
                  #BSUB -W 24:00
                  #BSUB -n 4
                  #BSUB -R “span[ptile=4]”
                  #BSUB -M 4000
                  #BSUB -o $DIR/log/$SAMPLE.out
                #BSUB -e $DIR/log/$SAMPLE.err
                #BSUB -J $SAMPLE
                #BSUB -q nextgen

                cd $DIR
                module load miRExpress
                mkdir $SAMPLE
                gzip -dc $FASTQ > ${SAMPLE}/input.fq
                Raw_data_parse -i ${SAMPLE}/input.fq -o ${SAMPLE}/merge.txt
                rm ${SAMPLE}/input.fq
                Trim_adapter -i ${SAMPLE}/merge.txt -t /data/illumina_data2/WWW/miRExpress/
                3_adpater_TruSeq.txt -o ${SAMPLE}/trim.txt
                statistics_reads -i ${SAMPLE}/trim.txt -o ${SAMPLE}/len.txt
                alignmentSIMD -r /data/illumina_data2/WWW/miRExpress/miRBase20/
                hsa_precursor.txt -i ${SAMPLE}/trim.txt -o ${SAMPLE}/ -u4
                cd $SAMPLE
                analysis -r /data/illumina_data2/WWW/miRExpress/miRBase20/hsa_precursor.txt -m
                /data/illumina_data2/WWW/miRExpress/miRBase20/hsa_miRNA.txt -d ./ -o align.txt
                -t expr.txt
                EOF
              </code>
              </pre>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
            <pre>
            <div class="code-section">
              #!use/bin/r

              setwd(“~/Documents/Breast Cancer/Data”)



              #setRepositories()

              #install.packages(“sva”)

              library(data.table)
              library(limma)
              library(VennDiagram)
              library(ggplot2)
              library(parallel)
              library(sva)
              library(pheatmap)


              ds.id &lt;- c(“GSE14017”,”GSE14018”, “GSE46141”, “GSE125989”)
              data.files &lt;- paste0(ds.id , “_series_matrix.txt”)

              setwd(“../Data/Datasets/“)
              row &lt;- lapply(data.files, fread)

              ds.plat &lt;- c(“GPL96”, “GPL570”, “GPL10379”, “GPL571”)
              plat.file &lt;- paste0(ds.plat, “.annot”)
              setwd(“../annots/“)
              ann &lt;- lapply(plat.file, fread)

              for(i in 1:4){

              ann[[i]] &lt;- data.frame(ID = ann[[i]]$ID, symbol = sub(“///.*”, “”, ann[[i]]$`Gene symbol`))
              }


              annb &lt;- c(ann[1], ann[2], ann[3], ann[4])

              all &lt;- lapply(annb, function(x) as.character(x$symbol))

              library(VennDiagram)
              venn.diagram(all, “../../results/venn_diagram.tiff”, category.names = ds.plat, resolution = 600)

              #library(UpSetR)
              ###pdf(“../../results/upsetplot.pdf”)
              #upset(all, nsets = 4, nintersects = NA, sets = NULL, keep.order = F)
              ###dev.off()

              datab &lt;- c(row[1], row[2], row[3], row[4])

              datab &lt;- lapply(seq_along (datab), function(i) merge(annb[[i]], datab[[i]], by.x = “ID”, by.y = “ID_REF”))



              library(dplyr)

              for(b in 1:4){

              datab[[b]] &lt;- distinct(datab[[b]], symbol, .keep_all = TRUE)
              }


              rownames(datab[[1]]) &lt;- datab[[1]]$symbol
              rownames(datab[[2]]) &lt;- datab[[2]]$symbol
              rownames(datab[[3]]) &lt;- datab[[3]]$symbol
              rownames(datab[[4]]) &lt;- datab[[4]]$symbol

              datab &lt;- lapply(datab, function(x)  x &lt;- x[, -1])


              #datab &lt;- mclapply(datab, function(x) {aggregate(.~symbol,x,mean)})

              datab &lt;- lapply(seq_along(datab), function(i){x &lt;- datab[[i]];
              colnames(x)[-1] &lt;- paste0(“D”, i ,”.”,seq(ncol(x)-1)); x})

              mdatab &lt;- Reduce(function(…)merge(…,by = “symbol”), datab)
              rownames(mdatab) &lt;- mdatab$symbol
              mdatab  &lt;- mdatab[mdatab$symbol !=“” , -1]




              ################################################################################
              ### GSE125989 ###

              link &lt;- (“https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE125989”)
              page &lt;- read_html(link)

              CT  &lt;- page %>% html_nodes(“tr:nth-child(23) tr td+ td”) %>% html_text()
              GSE &lt;- page %>% html_nodes(“tr:nth-child(23) tr td:nth-child(1)”) %>% html_text()

              GSE125989 &lt;- data.frame(CT, GSE, stringsAsFactors = F)
              GSE125989 &lt;- data.frame(CT = sub(“.*: “, “”, GSE125989$CT), GSE, stringsAsFactors = F )
              GSE125989 &lt;- data.frame(CT = sub(“ metastases”, “”, GSE125989$CT), GSE, stringsAsFactors = F)
              GSE125989 &lt;- data.frame(CT = sub(“primary breast cancer”, “breast”, GSE125989$CT), GSE, stringsAsFactors = F)

              gr1 &lt;- rbind(GSE14017,GSE14018,GSE46141, GSE125989)




              ### editing and clustering each metastasis type ###

              mdata &lt;- mdatab.c
              colnames(mdata) &lt;- gr1$CT

              i1 &lt;- colnames(mdata) == “lung”
              mdata.lung &lt;- mdata[, i1, drop = F]

              i2 &lt;- colnames(mdata) == "brain"
              mdata.brain &lt;- mdata[, i2, drop = F]

              i3&lt;- colnames(mdata) == "bone"
              mdata.bone &lt;- mdata[, i3, drop = F]

              i4&lt;- colnames(mdata) == "liver"
              mdata.liver &lt;- mdata[, i4, drop = F]

              i5&lt;- colnames(mdata) == "breast"
              mdata.breast &lt;- mdata[, i5, drop = F]

              i6&lt;- colnames(mdata) == "lymph node"
              mdata.lymph_node &lt;- mdata[, i6, drop = F]

              i7&lt;- colnames(mdata) == "skin-local-regional"
              mdata.SLR &lt;- mdata[, i7, drop = F]

              i8&lt;- colnames(mdata) == "skin"
              mdata.skin &lt;- mdata[, i8, drop = F]

              i9&lt;- colnames(mdata) == "ascites"
              mdata.ascites &lt;- mdata[, i9, drop = F]

              dim(mdata.lung)
              dim(mdata.brain)
              dim(mdata.bone)
              dim(mdata.liver)
              dim(mdata.breast)
              dim(mdata.lymph_node)
              dim(mdata.SLR)
              dim(mdata.skin)
              dim(mdata.ascites)


              data.lung  &lt;- cbind(mdata.breast, mdata.lung)
              data.brain &lt;- cbind(mdata.breast, mdata.brain)
              data.bone  &lt;- cbind(mdata.breast, mdata.bone)
              data.liver &lt;- cbind(mdata.breast, mdata.liver)
              data.lymph &lt;- cbind(mdata.breast, mdata.lymph_node)
              data.SLR   &lt;- cbind(mdata.breast, mdata.SLR)
              data.skin  &lt;- cbind(mdata.breast, mdata.skin)

              dim(data.lung)
              dim(data.brain)
              dim(data.bone)
              dim(data.liver)
              dim(data.lymph)
              dim(data.SLR)
              dim(data.skin)

              ################################################################################
              ## Principal component analysis
              ################################################################################

              # reqirements
              install.packages("ggplot")
              install.packages("sure")
              library(ggplot2)
              library(sure)

              # analyzing each data.*
              ################################################################################

              # Lung
              setwd("~/Documents/Breast Cancer/results/Metastasis/Lung/")
              g   &lt;- data.lung
              gr  &lt;- c(rep("Breast", 27), rep("Lung", 22))
              grt &lt;- paste0(gr, seq(gr), collapse = NULL)
              colnames(g) &lt;- grt


              # trimming
              g &lt;- subset(g, select = -c(Lung30, Lung36, Lung47, Breast11, Breast17,
              Lung28, Lung48, Breast25, Breast6, Breast4, Lung35,
              Lung32, Lung33, Lung29, Lung49, Lung34
              , Breast1, Breast2, Breast3, Breast8, Breast7, Lung37, Lung46, Lung40, Lung44))

              grt &lt;- grt[-c(30,36,47,11,17,28,48,25,6,4,35,32,33,29,49,34,1,2,3,8,7,37,46,40,44)]
              gr &lt;- gr[-c(30,36,47,11,17,28,48,25,6,4,35,32,33,29,49,34,1,2,3,8,7,37,46,40,44)]

              dim(g)
              length(gr)
              length(grt)

              pc &lt;- prcomp(g)
              ex.scale &lt;- t(scale(t(g), scale = F))
              pc1  &lt;- prcomp(ex.scale)
              PCR  &lt;- data.frame(pc1$r[,1:3], group = gr)
              PCRT &lt;- data.frame(pc1$r[,1:3], group = grt)
              pdf("8.pdf", width = 15, height = 15)
              p1 &lt;- ggplot(PCR, aes(PC1,PC2, color = group)) + geom_point(size = 5) + theme_bw(base_size = 15)
              p2 &lt;- ggplot(PCRT, aes(PC1,PC2, label = group)) + geom_text(size = 3) + theme_bw(base_size = 10)
              grid.arrange(p1,p2, nrow = 2)
              dev.off()

              # DEGs #
              setwd("~/Documents/Breast Cancer/results/Metastasis/Lung/DEG/")
              ex &lt;- g
              gr &lt;- factor(gr)
              mat = data.frame(G = gr)
              rownames(mat) = colnames(gr)
              design = model.matrix(~G+0, mat)
              colnames(design) &lt;- levels(gr)
              fit &lt;- lmFit(ex, design)
              cont.matrix &lt;- makeContrasts(contrasts = "Lung-Breast", levels = design)
              fit2 &lt;- contrasts.fit(fit, cont.matrix)
              fit2 &lt;- eBayes (fit2, 0.01)
              tT=topTable(fit2, adjust="fdr", sort.by="B", number=Inf)

              X  &lt;- subset(tT, logFC > 1  & P.Value &lt;0.05)
              Y  &lt;- subset(tT, logFC &lt; -1 & P.Value &lt;0.05)


              write.table(tT, "DEG.csv", quote = F, col.names = T, row.names = T, sep = "\t" )
              write.table(subset(tT, logFC > 1  & P.Value &lt;0.05), "Up-Lung-Braest.csv",  quote = F, col.names = T, row.names = T, sep = "\t")
              write.table(subset(tT, logFC &lt; -1 & P.Value &lt;0.05), "Down-Lung-Braest.csv",  quote = F, col.names = T, row.names = T, sep = "\t")

              ################################################################################
              ################################################################################
            </div>
            </pre>
          </div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  name: "Project",
  created() {
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let tab = document.querySelector(".nav-pills");
      let windowSize = window.innerWidth;
      if (window.scrollY > 200 && windowSize > 1000) {
        tab.classList.add('position-fix');
      }else {
        tab.classList.remove('position-fix');

      }
      if (window.scrollY > 1700 ) {
        tab.classList.add('position-change');

      }else{
        tab.classList.remove('position-change');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
pre{
  background: #F7F6F3;
  font-size: .975em;
}
.position-fix{
  position: fixed;
}
@media (max-width: 1000px) {
  .top-mobile{
    .small {
      font-size: 28px;
      line-height: 31px;
      color: #BEBEBE;
      margin-top: 10px;
    }

    .title-project {
      font-size: 32px;
      line-height: 35px;
      font-weight: 700;
    }
    .author{
      font-size: 23px;
      line-height: 25px;
      padding-top: 15px;
      padding-bottom: 30px;
    }
  }
}
.project {
  @media (min-width: 1000px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  .tab-section{
    padding-top: 70px;
    padding-bottom: 70px;
    @media (max-width: 1000px) {
      padding-top: 12px;
    }
  }
  .tab-content{
    width: 75%;
    margin-left: auto;
    @media   (max-width: 1290px) and (min-width: 1000px)  {
      width: 67%;
    }

  }
  .nav-pills {
    bottom: auto;
    transition: all .4s;
    top: 5%;
    background-color: #EFEFEF;
    width: 350px;
    padding: 20px;
    .title {
      font-size: 39px;
      line-height: 42px;
      font-weight: 700;
      padding-top: 18px;
      padding-bottom: 50px;
    }

    .nav-link {
      color: black;
      font-size: 35px;
      line-height: 42px;
      padding-left: 30px;
      text-align: left;
      margin-bottom: 20px;

      &.active {
        background-color: white;
        border-radius: 20px;
      }
      &.disabled{
        color: #BFBFBF;
      }
    }
  }

  .content {
    padding-top: 10px;
    padding-left: 70px;
    padding-bottom: 100px;
    margin-left: auto;
    @media(max-width: 1000px){
        padding-top: 30px;
     }
    .small {
      font-size: 28px;
      line-height: 31px;
      color: #BEBEBE;
      margin-top: 10px;
    }

    .title-project {
      font-size: 46px;
      line-height: 50px;
    }

    .author {
      font-size: 34px;
      line-height: 37px;
      padding-bottom: 30px;
    }

    .description {
      font-size: 30px;
      line-height: 36px;
      padding-bottom: 45px;
    }
  }
  @media (max-width: 1000px) {
    &.container{
      padding: 0;
    }
    .tab-content{
      width: 100%;
    }
    .tab-section{
      .nav-pills {
        background-color: #ffffff;
        width: 100%;
        padding: 15px 20px 15px 20px;
        border: 1px solid #D5D5D5;
        flex-wrap: nowrap;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 0;
        }
        .nav-link{
          font-size: 23px;
          line-height: 25px;
          padding-left: 0;
          text-align: left;
          margin-bottom: 0;
          margin-right: 40px;
          padding-right: 0;
          padding-bottom: 3px;
          &.active {
            font-weight: 700;
            border-bottom: 2px solid;
            border-radius: 0;
          }
        }
      }
    }
    .content{
      padding-left: 35px;
      padding-right: 30px;
      .description{
        font-size: 25px;
        line-height: 32px;
      }
    }
  }
    @media (max-width: 728px) {
      .tab-section{
      .nav-pills {
        padding: 15px 20px 0px 20px;
        white-space: nowrap;

      }
    }
    }
}
#left-side{
  width: 405px;
  display: flex;
  @media (max-width: 1000px){
    width: 100%;
  }
}
.position-change{
  position: absolute;
  bottom: 250px !important;
  top: unset !important;
  transition: all .4s;
}
</style>