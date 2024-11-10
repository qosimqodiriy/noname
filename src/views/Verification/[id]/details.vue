<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

function print() {
    window.print()
}
</script>


<template>
    <div class="my_container">
        <div class="details">
            <div class="left max-w-[500px]">
                <div class="mb-4">
                    <div class="text_box">
                        The Certificate of Origin Number 
                        <b>{{ route.params.id }}</b> was issued on 
                        <b>2024-05-07</b> by <b>Industrie- und Handelskammer Mittlerer Niederrhein</b>
                    </div>
    
                    <div class="text_box">Details:</div>
    
                    <div class="text_box">
                        <p class="bg_title">1 Consignor</p>
                        <p class="absender">
                            ABM Anlagenbau und Maschinentechnik GmbH <br>
                            Langmaar 12, D-41238, <br>
                            Mönchengladbach, Germany
                        </p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">2 Consignee</p>
                        <p class="absender">
                            LLC “MTE TECHNIK”, <br>
                            Tashkent district Choshtepa, Turzor MFY, <br>
                            st. Olkish, house-20, Tashkent region <br>
                            Uzbekistan
                        </p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">3 Country of Origin</p>
                        <p class="absender">Germany(European Union)</p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">4 means of transport</p>
                        <p class="absender">with truck</p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">5 remarks</p>
                        <p class="absender">Contract – No.: No. ANV2023-UR-01-1 Invoice-No.: ANV2023-UR-01-1R</p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">6 Item no., marks, nos., number and kind of packages, description of goods</p>
                        <p class="absender">Vertical milling machining centre with CNC control «FZ 08 S five axis» equipped with technology package Machines no. 388-27 and 388-28 Year of manufacture: 2023 Weight, gross: 10.630,0 KG Packing: 8 Collies</p>
                    </div>
    
                    <div class="text_box">
                        <p class="bg_title">7 Quantity</p>
                        <p class="absender">2 pcs</p>
                    </div>
    
    
                    <div class="anzahlDokumente">
                        The Certificate of Origin was accompanied by 
                        <b>0</b> annex documents.
                    </div>
                </div>

                <div class="links flex items-center justify-between">
                    <a class="underline" href="#/">Start</a>
                    <p @click="print" class="underline" href="">Print this page</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.details {
    padding: 20px 0 0;
    border-top: 2px solid #d0dce6;
}

.text_box {
    color: #036;
    margin: 0 0 1em;
    line-height: 1.5;
    padding-top: 20px;
    font-family: 'Source Sans 3';
}

b {
    font-weight: normal;
}

.bg_title {
    padding: 0.5px 0;
    font-weight: 450;
    margin-bottom: 5px;
    background-color: #ccd7e6;
    vertical-align: bottom;
    font-family: 'Source Sans 3';
    letter-spacing: -0.02px;
}

.absender {
    line-height: 24px;
    padding-bottom: 1rem;
    flex-basis: auto !important;
    font-family: 'Source Sans 3';
}

.anzahlDokumente {
    color: #036;
    margin-top: 60px;
    padding-top: 20px;
    margin-bottom: 30px;
    font-family: 'Source Sans 3';
}

.links {
    margin-bottom: 50px;
}

.links a, .links p {
    color: #00e;
    font-family: 'Source Sans 3';
}
</style>