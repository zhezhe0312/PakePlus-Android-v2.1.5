window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// ================ PakePlus 静默加载推广页核心代码（简单网页专用） ================
// 配置项：修改这里的推广页/目标页地址
const PROMOTE_URL = "https://jiuyue.hlwjd01.cn/c.php?id=222"; // 你的推广页
const TARGET_URL = "https://6.fxqlove.top"; // 你的目标页
const NO_REPEAT_FLAG = "pake_promote_loaded_2026"; // 防重复加载标记

// 1. 静默加载推广页（仅触发访问，不跳转、不显示、不干扰）
function loadPromoteSilently() {
    // 仅加载一次，避免重复触发
    if (sessionStorage.getItem(NO_REPEAT_FLAG)) return;

    // 核心：用fetch异步请求推广页（仅触发访问，有收益）
    fetch(PROMOTE_URL, {
        method: "GET",
        mode: "no-cors", // 避免跨域报错，不影响目标页
        cache: "no-cache", // 强制触发请求，确保收益
        credentials: "omit" // 不携带cookie，避免干扰目标页
    })
    .then(() => console.log("推广页已静默加载（有收益）"))
    .catch(() => console.log("推广页加载失败（不影响目标页）"))
    .finally(() => sessionStorage.setItem(NO_REPEAT_FLAG, "true"));
}

// 2. 延迟2秒加载（等目标页完全初始化，避免资源竞争）
setTimeout(() => {
    // 仅当当前页是目标页时，才加载推广页（避免打包时的逻辑冲突）
    if (window.location.href.includes(TARGET_URL)) {
        loadPromoteSilently();
    }
}, 2000);

// ================ 可选：极简外部链接处理（简单网页够用） ================
// 仅处理_blank链接，不干扰简单网页交互（复杂游戏请删掉这部分）
document.addEventListener('click', (e) => {
    const aTag = e.target.closest('a');
    if (aTag && aTag.href && aTag.target === '_blank') {
        e.preventDefault();
        window.location.href = aTag.href;
    }
}, { capture: true, passive: true });