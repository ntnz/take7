import{s as l}from"./chunk-BP1tGd43.min.js";import{t as c}from"./logger-B3j_KY2M.js";import{t as d}from"./tribute.min-CuxQbPzU.min.js";import{t as p}from"./constant-CagHbslK.js";var u=l(d()),h=[];async function m(t){let n=t.querySelector('input[type="text"]');if(!n)return;let s=document.createRange().createContextualFragment(`
        <button id="windpressetch-sort-css-attr-action" title="[WindPress] Sort Class" type="button" class="etch-builder-button etch-builder-button--icon-placement-before etch-builder-button--variant-icon" style="--button-font-size: 13px; --e-icon-padding: 0; margin-left: auto;">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="etch-icon iconify iconify--hugeicons-stroke" width="12px" height="12px" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                    <path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" />
                    <path d="M16.5 8.5l2.5 2.5l2.5 -2.5" />
                </svg>
            </div>
        </button>
    `).querySelector("#windpressetch-sort-css-attr-action");wp.hooks.addAction("windpressetch-autocomplete-items-refresh","windpressetch",()=>{}),wp.hooks.doAction("windpressetch-autocomplete-items-refresh");let o=new u.default({containerClass:"windpressetch-tribute-container",autocompleteMode:!0,menuItemLimit:50,noMatchTemplate:"",values:async function(e,a){let r=await wp.hooks.applyFilters("windpressetch-autocomplete-items-query",h,e);a(r)},lookup:"value",itemClass:"class-item",menuItemTemplate:function(e){let a="";return e.original.color!==void 0&&(a+=`background-color: ${e.original.color};`),e.original.fontWeight!==void 0&&(a+=`font-weight: ${e.original.fontWeight};`),`
                <span class="class-name" data-tribute-class-name="${e.original.value}">${e.string}</span>
                <span class="class-hint" style="${a}"></span>
            `}});o.setMenuContainer=function(e){this.menuContainer=e},o.events.callbacks,o.attach(n);let i=t.querySelector(":scope > span");i instanceof HTMLElement&&s&&(i.style.display="flex",i.appendChild(s),s.querySelector("div.icon-wrapper").addEventListener("click",async()=>{n.value=await p().contentWindow.windpress.module.classSorter.sort(n.value),n.dispatchEvent(new Event("input",{bubbles:!0}))})),t.dataset.windpressInjected="true"}new MutationObserver(()=>{var n;let t=(n=document.evaluate("//div[contains(@class, 'etch-html-block-properties-wrapper')]//label[contains(@class, 'etch-label')]/span[text()='class']",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue)==null?void 0:n.parentElement;t&&!t.dataset.windpressInjected&&setTimeout(()=>{t.dataset.windpressInjected||m(t)},100)}).observe(document,{subtree:!0,childList:!0}),c("Intellisense: element-attribute-panel.ts module loaded");
