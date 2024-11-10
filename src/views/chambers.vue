<script setup>
import { ref, onMounted } from 'vue'
import chembers from "../API/chembers.json";

const _visible = ref(false);

onMounted(() => {
    setTimeout(() => _visible.value = true, 300);
})
</script>


<template>
    <div class="my_container">
        <div class="chambers">
            <div v-if="_visible" class="star-inserted">

                <div v-for="item in chembers" class="innserted_item">
                    <b>{{ item.name }}</b> <br>
                    {{ item.strasse }} <br> {{ item.plz }} {{ item.ort }} <br>
                    <a target="_blank" class="underline" :href="item.website">Website</a> <hr>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.chambers {
    color: #036;
    padding: 20px 0 0;
    border-top: 2px solid #d0dce6;
}

.star-inserted {
    max-width: 530px;
}

.innserted_item {
    font-family: 'Korb';
}

.star-inserted b {
    font-weight: 450;
}

.star-inserted a {
    color: #00e;
}

.innserted_item hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    unicode-bidi: isolate;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
}
</style>