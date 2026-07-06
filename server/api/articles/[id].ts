export default defineEventHandler((event) => {
    // 獲取動態路由參數中的 id (例如 /api/articles/45)
    const idParam = getRouterParam(event, 'id');
    const id = Number.parseInt(idParam || '', 10);

    // 驗證 ID 是否為數字
    if (Number.isNaN(id)) {
        throw createError({
            statusCode: 400,
            statusMessage: '文章 ID 必須是有效的數字。',
        });
    }

    // 從共享的模擬資料庫尋找文章
    const article = mockArticles.find((item) => {
        return item.id === id;
    });

    // 找不到文章時回傳 404
    if (!article) {
        throw createError({
            statusCode: 404,
            statusMessage: `找不到 ID 為 ${id} 的文章。`,
        });
    }

    return { data: article };
});
