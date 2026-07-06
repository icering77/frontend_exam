// 定義文章類別名稱映射
const ALL_TYPES = [
    {
        id: 1,
        name: '最新消息',
    },
    {
        id: 2,
        name: '熱門消息',
    },
    {
        id: 3,
        name: '體育相關',
    },
    {
        id: 4,
        name: '娛樂相關',
    },
];

// 產生 200 筆模擬文章資料，並匯出以供多個 API 路由共享
export const mockArticles = Array.from({ length: 200 }, (_, index) => {
    const id = index + 1;
    // 平均分配類別 1 到 4
    const typeId = (index % 4) + 1;
    const typeName = ALL_TYPES.find((t) => {
        return t.id === typeId;
    })?.name || '';

    return {
        content1: `這是第 ${id} 篇測試文章的額外內容一。`,
        content2: `這是第 ${id} 篇測試文章的額外內容二。`,
        content3: `這是第 ${id} 篇測試文章的額外內容三。`,
        createdAt: new Date(Date.now() - index * 3600000).toISOString(),
        description: `這是第 ${id} 篇測試文章的詳細內文。此文章歸類於「${typeName}」分區。`,
        id,
        title: `【${typeName}】這是第 ${id} 篇測試文章`,
        type: typeId,
    };
});
