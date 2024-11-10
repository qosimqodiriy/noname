<script setup lang="ts">
import { ref } from 'vue'

const _visible = ref(false)

function open() {
  _visible.value = true
}

function close() {
  _visible.value = false
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="_visible" title="" style="width: 100%; max-width: 920px" @close="close">
    <div class="w-full h-auto flex flex-col gap-6">
      <p class="text-xl">Verification Code</p>
      <img class="w-full h-auto" src="../../assets/images/verification.png" alt="">

      <div class="flex items-center justify-center">
        <button class="btn">CLOSE</button>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.btn {
  color: white;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 5px;
  font-family: 'Source Sans 3';
  background-color: #036 !important;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
</style>
