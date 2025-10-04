import"./dist-gE_XXzPp.min.js";import"./runtime-core.esm-bundler-DRZAYnQ2.min.js";import"./vue.runtime.esm-bundler-BlWQ9Hv9.min.js";import"./core-8AzxaLAT.min.js";import"./isObject-DkMBgCmn.min.js";import"./_toKey-lf-76zFF.min.js";import"./set-D10waSiW.min.js";import"./get-CMyps7rf.min.js";import{t as o}from"./virtualRef-CZBazqxr.js";import{t as r}from"./logger-B3j_KY2M.js";import{t as n}from"./windpress-LY8K66Rq.min.js";var s=document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${n}
        </span>
    </button>
`),{getVirtualRef:i}=o({},{persist:"windpress.ui.state"});document.querySelector(".uniTopPanel__rightCol").prepend(s);var e=document.querySelector("#windpressbuilderius-settings-navbar");function a(){let t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{a()}),r("Module loaded!",{module:"settings"});
