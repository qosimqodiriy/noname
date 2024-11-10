<script setup>
import { ref } from 'vue'
import countries from '../API/countries.json'
import VerificationModal from '@/components/Main/Verifiication.vue'
import SertificationModal from '@/components/Main/Certification.vue'

const country = ref();
const verification = ref();
const certification = ref();

const _verificationRef = ref();
const _sertificationRef = ref();

function openVerification() {
    _verificationRef.value.open()
}

function openSertification() {
    _sertificationRef.value.open()
}

function submit() {
    setTimeout(() => {
        country.value = '';
        verification.value = '';
        certification.value = '';
    }, 500);
}

</script>



<template>
    <div class="my_container">
        <div class="main">
            <div class="flex flex-col md:flex-row">
                <div class="left_item">
                    <p class="caption font-korb">Welcome</p>

                    <p class="text">To verify the Certificate of Origin (CoO) you hold, please complete all the required
                        fields: Certificate Number, verification code and country of request.</p>
                    <p class="text italic">Please note: The period for verification of a CoO is two years, starting from
                        the end of the year in which the CoO was approved.</p>

                    <div class="form-container">
                        <div class="flex flex-col gap-5">
                            <div class="line">
                                <small>Certificate No. *</small>
                                <div class="flex items-center">
                                    <input type="number" v-model="certification" class="flex-auto" maxlength="8">
                                    <div class="p-1 w-10 h-10" @click="openSertification">
                                        <i class="ri-question-line text-4xl transition-all duration-300 cursor-pointer text-[#e0e0e0] hover:text-[#26527d]"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="line">
                                <small>Verification Code *</small>
                                <div class="flex items-center">
                                    <input type="text" v-model="verification" class="flex-auto" placeholder="XXXX-XXXX-XXXX">
                                    <div class="p-1 w-10 h-10" @click="openVerification">
                                        <i class="ri-question-line text-4xl transition-all duration-300 cursor-pointer text-[#e0e0e0] hover:text-[#26527d]"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="line">
                                <small>Please let us know the country you are requesting verification from *</small>
                                <div class="flex items-center">
                                    <div class="flex flex-col gap-10 flex-auto">
                                        <el-select v-model="country">
                                            <el-option v-for="item in countries" :key="item.isoCode" :label="item.name" :value="item.isoCode" />
                                        </el-select>

                                        <div class="flex justify-end">
                                            <button class="btn" @click="submit"> SUBMIT </button>
                                        </div>
                                    </div>

                                    <div class="p-1 w-10 h-10">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="right_item">
                    <p class="text">
                        This website aims to offer Chambers and Customs Authorities the possibility to verify the
                        authenticity of digitally signed German CoOs online.
                        <br> <br>
                        The 79 German Chambers of Commerce and Industry, CCI (IHK) representing 3.6 million companies
                        from industry, commerce and services, issue CoO.
                        <br> <br>
                        The German Chamber of Commerce and Industry (DIHK) is the central organisation of CCIs in
                        Germany. All German companies registered in Germany, with the exception of handicraft business,
                        the free professions and farms, are required by law to join a chamber.
                        <br> <br>
                        CoOs are in Germany digitally signed by the CCIs and printed out on offical forms.
                    </p>

                    <img class="specimen_img" src="../assets/images/specimen.png" alt="">
                </div>
            </div>
        </div>



        <verification-modal ref="_verificationRef" />
        <sertification-modal ref="_sertificationRef" />
    </div>
</template>


<style scoped>
.main {
    padding: 20px 0 0;
    transition: 0.3s;
    border-top: 2px solid #d0dce6;
}

.caption {
    color: #036;
    font-size: 28px;
    font-family: 'Korb';
    padding-bottom: 10px;
}

.left_item {
    display: flex;
    flex: 1 1 100%;
    max-width: 50%;
    flex-direction: column;
}

.text {
    color: #036;
    margin: 0 0 1em;
    line-height: 1.5;
    font-family: 'Source Sans 3';
}

.italic {
    font-style: italic;
    letter-spacing: 0.15px;
}

.form-container {
    padding-top: 20px;
    flex-flow: column wrap;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    max-width: 540px;
}

.line {
    flex: 1 1 0%;
}

.line small {
    font-size: 11px;
    line-height: 14px;
    margin-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    min-height: 1.2em;
    font-size: .75em;
    line-height: 1.2em;
    color: #036;
    font-family: 'Source Sans 3';
    margin: 0 calc(.5em + 1px) .25em calc(.5em + 1px);
}

.line input {
    box-sizing: border-box;
    padding: calc(.75em - 1px) .5em;
    font-size: 16px;
    color: rgba(0, 0, 0, .87);
    background-color: #fff;
    line-height: 1.5em;
    margin-top: 4px;
    outline: none;
    border: 2px solid rgba(0, 0, 0, .38);
    border-radius: 4px;
}

.line input:invalid {
    border: 2px solid #ec2125;
}

.line svg:hover {
    fill: red;
}

.btn {
    padding: 7px 16px;
    border-radius: 5px;
    color: rgba(0, 0, 0, .38);
    font-family: 'Source Sans 3';
    background-color: rgba(0, 0, 0, .38) !important;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}



.right_item {
    padding-top: 38px;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    place-content: stretch flex-end;
    align-items: stretch;
    margin-left: 10%;
    flex: 1 1 100%;
    max-width: 40%;
}

.specimen_img {
    margin-top: 1em;
    display: flex;
    flex: 1 1 auto;
    max-height: 100%;
    max-width: 100%;

    width: 100%;
    height: auto;
}




input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}


@media (max-width: 767px) {
    .left_item {
        max-width: 100%;
    }

    .right_item {
        max-width: 100%;
        margin-left: 0;
    }
}
</style>