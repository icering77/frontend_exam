<template>
    <div class="my-200px gap-20px flex flex-col items-center justify-center">
        <h1
            class="text-30px font-bold"
        >
            前端工程師考試題目
        </h1>
        <div
            class="gap-10px flex flex-col items-start"
        >
            <div
                class="text-20px font-bold"
            >
                請使用axios或是fetch串接文章列表api
            </div>
            <div
                class="text-20px font-bold"
            >
                api位置：/api/articles
            </div>
            <div
                class="text-16px p-10px mt-5px rounded-sm border border-slate-200 bg-slate-50 text-slate-600"
            >
                <strong>Query 參數說明：</strong>
                <ul class="pl-20px mt-5px list-disc">
                    <li><code>type</code>: 0 = 全部, 1 = 最新消息, 2 = 熱門消息, 3 = 體育相關, 4 = 娛樂相關 (預設為 0)</li>
                    <li><code>page</code>: 目前頁碼 (預設為 1)</li>
                    <li><code>per_page</code>: 每頁顯示幾筆，僅支援 10, 20, 30, 50 (預設為 10)</li>
                </ul>
            </div>
            <pre class="text-14px p-10px mt-5px max-w-600px rounded-sm bg-gray-100 font-mono text-gray-800">
回傳格式：
{
"data": {
    "count": "200",
    "data": [
        {
            "createdAt": "2026-07-01T14:30:00.000Z",
            "description": "這是第 1 篇測試文章的詳細內文...",
            "id": 1,
            "title": "【最新消息】這是第 1 篇測試文章",
            "type": 1
        }
    ]
}
}
            </pre>
            <div
                class="text-20px font-bold"
            >
                需求內容:
            </div>
            <div
                class="text-20px font-bold"
            >
                以卡片列出文章 包含標題 描述 分類 與 建立時間
            </div>
            <div
                class="text-20px font-bold"
            >
                可透過分頁跟左右按鈕切換頁數
            </div>
            <br>
            <div
                class="text-20px font-bold"
            >
                加分內容:
            </div>
            <div
                class="text-20px font-bold"
            >
                可透過選單切換分類 預設為全部
            </div>
            <div
                class="text-20px font-bold"
            >
                (0=全部, 1=最新消息, 2=熱門消息, 3=體育相關, 4=娛樂相關)
            </div>
            <div
                class="text-20px font-bold"
            >
                可選擇每頁顯示幾筆文章(10, 20, 30, 50)
            </div>
            <div
                class="text-20px font-bold"
            >
                使用組件封裝文章卡片，並透過prop傳入文章資料
            </div>
            <div
                class="text-20px font-bold"
            >
                使用組件封裝頁碼選擇器並透過v-model或是props emit進行頁碼切換
            </div>
            <div
                class="text-20px font-bold"
            >
                文章資料seo相關設定
            </div>
            <div
                class="text-20px font-bold"
            >
                ux體驗
            </div>
            <br>
            <div
                class="text-20px font-bold"
            >
                點擊卡片跳轉文章詳細頁面或是彈窗（API：/api/articles/{id}）
            </div>
            <div
                class="text-16px p-10px mt-5px rounded-sm border border-slate-200 bg-slate-50 text-slate-600"
            >
                <strong>Path 參數說明：</strong>
                <ul class="pl-20px mt-5px list-disc">
                    <li><code>id</code> (路徑參數): 欲查詢的文章 ID 數字</li>
                </ul>
            </div>
            <pre class="text-14px p-10px mt-5px max-w-600px rounded-sm bg-gray-100 font-mono text-gray-800">
回傳格式：
{
"data": {
    "content1": "這是第 1 篇測試文章的額外內容一。",
    "content2": "這是第 1 篇測試文章的額外內容二。",
    "content3": "這是第 1 篇測試文章的額外內容三。",
    "createdAt": "2026-07-01T14:30:00.000Z",
    "description": "這是第 1 篇測試文章的詳細內文...",
    "id": 1,
    "title": "【最新消息】這是第 1 篇測試文章",
    "type": 1
}
}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
// api示範: 請使用seo良好方式取得資料

// $fetch('/api/articles', {
//             query: {
//                 page: 1,
//                 per_page: 10,
//                 type: 0,
//             },
//         });
</script>
