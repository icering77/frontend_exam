export default defineEventHandler((event) => {
    const query = getQuery(event);

    return {
        message: '這是從 Nuxt 伺服器 API 回傳的資料！',
        receivedQuery: query,
        success: true,
        timestamp: new Date().toISOString(),
    };
});
