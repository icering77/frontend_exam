export default defineEventHandler((event) => {
    const query = getQuery(event);

    // 解析並驗證參數
    const type = parseInt(query.type as string ?? '0', 10);
    const page = parseInt(query.page as string ?? '1', 10);
    const perPage = parseInt(query.per_page as string ?? '10', 10);

    // 驗證 type
    if (isNaN(type) || ![0, 1, 2, 3, 4].includes(type)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'type 參數必須是 0 到 4 之間的整數 (0=全部, 1=最新消息, 2=熱門消息, 3=體育相關, 4=娛樂相關)',
        });
    }

    // 驗證 page
    if (isNaN(page) || page < 1) {
        throw createError({
            statusCode: 400,
            statusMessage: 'page 參數必須是自 1 開始的整數',
        });
    }

    // 驗證 per_page
    const allowedPerPages = [10, 20, 30, 50];
    if (isNaN(perPage) || !allowedPerPages.includes(perPage)) {
        throw createError({
            statusCode: 400,
            statusMessage: 'per_page 參數只允許帶入 10, 20, 30, 50',
        });
    }

    // 根據 type 過濾文章 (0 代表全部，其餘過濾對應的 type)
    const filtered = type === 0
        ? mockArticles
        : mockArticles.filter((article) => {
            return article.type === type;
        });

    // 計算分頁範圍
    const totalCount = filtered.length;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedData = filtered.slice(startIndex, endIndex).map((article) => {
        return {
            createdAt: article.createdAt,
            description: article.description,
            id: article.id,
            title: article.title,
            type: article.type,
        };
    });

    return {
        data: {
            count: String(totalCount),
            data: paginatedData,
        },
    };
});
