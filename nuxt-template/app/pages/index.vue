<template>
    <div class="container">
        <h1>Nuxt API 測試</h1>
        <p>從後端 <code>/api/name</code> 獲取到的名稱：<strong>{{ name || '載入中...' }}</strong></p>
        <button @click="fetchName">
            重新獲取
        </button>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
// 呼叫您剛剛建立的 API


const name = ref<string>('');

async function fetchName() {
    try {
        // 使用 Nuxt 原生內建的 $fetch 呼叫 API
        const res = await axios.get('/api/name');
        name.value = res.data.name;
    } catch (error) {
        console.error('獲取 API 失敗:', error);
    }
}

// 組件掛載後執行獲取
onMounted(() => {
    fetchName();
});
</script>

<style scoped>
</style>