<template>
    <div class="borderTopBottom">
        <div class="container">
            <Header2 />
            <div class="top-title mt-3">
                <span>Final Results </span>
                <h2>DEGs Table</h2>
            </div>
            <div class="table-section">
                <div class="d-flex px-3 flex-sm-wrap flex-xxl-nowrap">
                    <div class="d-flex flex-column">
                        <div class="button-total top-width mb-4">
                            <span>LogFC</span>
                            <div class="increase-decrease d-flex align-items-center me-2 ">
                                <span class="cursor-pointer" @click="logFcDec"><img :src="leftArrow" alt=""></span>
                                <p class="mb-0 p-width pt-1 px-3">{{ logFc.toFixed(2) }}</p>
                                <span class="cursor-pointer" @click="logFcInc"> <img :src="rightArrow" alt=""></span>
                            </div>
                        </div>
                        <div class="button-total top-width">
                            <span>P-Value</span>
                            <div class="increase-decrease d-flex align-items-center me-2">
                                <span @click="PValueDec" class="cursor-pointer"><img :src="leftArrow" alt=""></span>
                                <p class="mb-0 pt-1 p-width px-3">{{ Pvalue.toFixed(2) }}</p>
                                <span @click="PValueInc" class="cursor-pointer"> <img :src="rightArrow" alt=""></span>
                            </div>
                        </div>
                    </div>
                    <div class="top-width filename-section">
                        <div class="header-section mb-2 d-flex justify-content-between">
                            <h2>Filename:</h2>
                            <span><img :src="pen" alt="" /></span>
                        </div>
                        <div class="fileName mb-4">
                            <span>DEGs Table</span>
                        </div>
                    </div>
                    <div class="ms-5">
                        <select-box title="Export the Plot" value="select the format" :list="listDataValueType" />
                    </div>
                    <div class="mt-4 ms-xxl-5">
                        <a download>
                            <button class="download-final  ">Download</button>
                        </a>
                    </div>
                </div>

                <div class="d-flex header-table justify-content-around">
                    <span>
                        Gene Symbol
                    </span>
                    <span>
                        LogFC
                    </span>
                    <span>
                        T
                    </span>
                    <span>
                        P. Value
                    </span>
                    <span>
                        Adj.P.Value
                    </span>
                    <span>
                        AveExpr
                    </span>
                </div>
                <div class="grid overflow-table">

                    <span class="raduis-top-left">IRS1</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span class="raduis-top-right">11.8178239734991</span>
                    <span>EEF1A2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>10.8178239734991</span>
                    <span>EEF1A2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.8178239734991</span>
                    <span>GPC1</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>HOMER2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>FAAP24</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>ACHE</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052241</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052242</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052243</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052244</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052245</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052246</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>9.107830214579005</span>
                    <span>GSM052247</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span>GSM052248</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span>GSM052249</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span>GSM052250</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span>GSM052251</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span>DACH1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>BEX1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>LRP2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>FMO5</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SERPINI1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>C8orf4</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>DIO1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>C3orf52</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TMEM176B</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CATSPERB</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>RNF128</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>LGALS4</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>APOH</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ELOVL2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ABCA8</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>7.9820833710119</span>
                    <span>NAT2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>DDC</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>7.9820833710119</span>
                    <span>PLA2G2A</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>7.9820833710119</span>
                    <span>CLSTN2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>7.9820833710119</span>
                    <span>CPB1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TFF3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CBS</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AGTR1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>HSD17B2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GALNT6</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>APOH</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>APOH</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>HLF</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CYP2C19</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TCL1B</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ERBB4</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>RHBG</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SLC47A1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>FOXA1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>HIST1H2AC</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>FAM169A</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SLC28A1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ECI2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ACADSB</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>KIF5C</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TSPAN1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SRD5A2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GBA3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SDS</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>BCHE</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AQP9</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>IQGAP2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GAS2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ALDH1A1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ANXA10</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ESR1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ARSE</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GHR</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SYBU</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CA12</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AR</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SNAP25</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>UGT2A3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>PEX5L</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TCL1B</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CXCL2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>

                    <span>NR1I3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GAMT</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ADH6</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>

                    <span>C8G</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>NME3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>PRODH2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CXCL2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AADAC</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>PRODH2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CYP2B6</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SLC19A2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ALDH6A1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SLC4A8</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>QDPR</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CYP3A43</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>C4BPB</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>ZNF91</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CHRD</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>NPC1L1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>FBP1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AKR1D1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CDH2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CXCL2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CYP4F11</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CXCL2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>NR1I2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>RET</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>PDZK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>GATA3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>TM4SF4</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SERPINA10</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AFM</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPINK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AGXT</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>F9</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>HPD</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPINK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>C8A</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPINK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>KNG1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CFHR2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>C4BPA</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPINK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>HPX</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPINK1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>UGT2B4</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CYP2C9</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AGXT</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SERPIND1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>AFM</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SERPINA10</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>FCN3</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SLC22A1</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>CPN2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>SPP2</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>
                    <span>F5</span>
                    <span>5.65320381767546</span>
                    <span>7.7949139938825,11</span>
                    <span>1.40911740066931E-15</span>
                    <span>1.19080123552441E-11</span>
                    <span>8.9820833710119</span>


                    <span class="raduis-bottom-left">HOMER2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>8.107830214579005</span>
                    <span class="raduis-bottom-right">8.107830214579005</span>
                </div>

            </div>

        </div>
        <div class="bottom-table-section">
            <router-link to="/">
                <button class="main-page">back to main page</button>
            </router-link>
            <div class="logo-table-section">
                <img :src="logo" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import leftArrow from "@/assets/leftArrow.svg";
import rightArrow from "@/assets/rightArrow.svg";
import pen from "@/assets/pen.svg";
import SelectBox from "@/components/SelectBox.vue";
import Header2 from "@/components/Header2.vue";
import logo from '@/assets/group55.png';


export default {
    components: { SelectBox, Header2 },

    data() {
        return {
            leftArrow,
            rightArrow,
            pen,
            logo,
            logFc: 1.25,
            Pvalue: .05,
            listDataValueType: ["CSV", "TXT", "XLSX", "XLS"],
            columns: [
                { key: "Gene Symbol " },
                { key: "LogFC" },
                { key: "T" },
                { key: "P. Value" },
                { key: "Adj.P.Value" },
                { key: "B" },
            ],
        }

    },
    methods: {
        logFcDec() {
            this.logFc = Number(this.logFc) - .25
        },
        logFcInc() {
            this.logFc = Number(this.logFc) + .25
        },
        PValueInc() {
            this.Pvalue = Number(this.Pvalue) + Number(.05)
        },
        PValueDec() {
            this.Pvalue = Number(this.Pvalue) - Number(.05)

        }
    }
}
</script>

<style lang="scss">
.top-title {
    span {
        font-size: 35px;
    }

    h2 {
        font-size: 45px;
        font-weight: 900;
    }

    margin-bottom: 70px;
}

.table-section {
    padding: 50px 60px;
    border: 4px solid #D4D4D4;
    border-radius: 14px;

    .top-width {
        width: 289px;

        @media (max-width:1500px) {
            width: 220px;
        }
    }

    .button-total {
        display: flex;
        justify-content: space-between;
        padding: 8px 10px;
        align-items: center;
        border: 3px solid #D4D4D4;
        border-radius: 13px;
        font-size: 27px;
    }

    .header-section {
        h2 {
            font-size: 33px;
            font-weight: 900;
        }
    }

    .filename-section {
        margin-left: 143px;
    }

    .fileName {
        font-size: 28px;
        padding: 8px;
        border: 2px solid #d4d4d4;
        border-radius: 11px;

        @media (max-width:1300px) {
            font-size: 22px;
        }
    }

    .aselect {
        width: 289px;
        margin-top: 0;

        .title {
            display: block;
            margin-bottom: 10px;
        }
    }


}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid #A5A5A5;
    border-right: 1px solid #A5A5A5;
    border-left: 1px solid #A5A5A5;
    border-radius: 10px;

}

.grid>span {
    padding: 8px 4px;
    border-bottom: 1px solid #A5A5A5;
    text-align: center;
    font-size: 27px;
    background-color: #F7F7F7;
    @media (max-width:1490px){
        font-size: 22px;
    }
}

.grid>span:nth-child(12n+1),
.grid>span:nth-child(12n+2),
.grid>span:nth-child(12n+3),
.grid>span:nth-child(12n+4),
.grid>span:nth-child(12n+5),
.grid>span:nth-child(12n+6) {
    background-color: rgb(255, 255, 255);
}

.header-table {
    margin-top: 80px;
    font-size: 27px;
    border: 3px solid #E52620;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 35px;

    span {
        width: 127px;
        text-align: center;
    }
}

.p-width {
    width: 69px;
    text-align: center;
}

.raduis-top-left {
    border-top-left-radius: 10px;
}

.raduis-top-right {
    border-top-right-radius: 10px;
}

.raduis-bottom-right {
    border-bottom-right-radius: 10px;
}

.raduis-bottom-left {
    border-bottom-left-radius: 10px;
}

.bottom-table-section {
    position: relative;
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 50px;
    border-top: 3px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-page {
        background-color: #E52620;
        color: white;
        padding: 10px 200px;
        border: unset;
        font-size: 33px;
    }
}

.logo-table-section {
    position: absolute;
    left: 80px;
    bottom: 50px;
}

.download-final {
    background-color: black;
    border: 1px solid black ;
    border-radius: 11px;
    color: white;
    padding-left: 110px;
    padding-right: 110px;
    padding: 10px 110px;
    font-size: 30px;
    margin-top: 2rem !important;
    padding: 5px 110px;
}
.overflow-table{
    height: 780px;
    overflow: auto;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.overflow-table::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(128, 128, 128, 0.603); 
  border-radius: 10px;
}
 
/* Handle */
.overflow-table::-webkit-scrollbar-thumb {
  background: #E52620; 
  border-radius: 10px;
}

/* Handle on hover */
.overflow-table::-webkit-scrollbar-thumb:hover {
  background: gray; 
}
</style>