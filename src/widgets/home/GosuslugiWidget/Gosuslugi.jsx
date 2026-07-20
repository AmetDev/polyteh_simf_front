"use client";

function Gosuslugi() {

  return (
    <>
        <div>
            <script src="https://pos.gosuslugi.ru/bin/script.min.js" />{" "}
            <style
                dangerouslySetInnerHTML={{
                __html:
                    '#js-show-iframe-wrapper{position:relative;display:flex;align-items:center;justify-content:center;width:100%;min-width:293px;max-width:100%;background:linear-gradient(138.4deg,#38bafe 26.49%,#2d73bc 79.45%);color:#fff;cursor:pointer}#js-show-iframe-wrapper .pos-banner-fluid *{box-sizing:border-box}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2{display:block;width:240px;min-height:56px;font-size:18px;line-height:24px;cursor:pointer;background:#0d4cd3;color:#fff;border:none;border-radius:8px;outline:0}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover{background:#1d5deb}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus{background:#2a63ad}#js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active{background:#2a63ad}@-webkit-keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadeInFromNone{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@font-face{font-family:LatoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWeb;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:LatoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebLight;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebRegular;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:RobotoWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:ScadaWebRegular;src:url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:ScadaWebBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff2) format("woff2"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.ttf) format("truetype");font-style:normal;font-weight:400}@font-face{font-family:Geometria;src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot);src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot?#iefix) format("embedded-opentype"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Geometria-ExtraBold;src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot);src:url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot?#iefix) format("embedded-opentype"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.woff) format("woff"),url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.ttf) format("truetype");font-weight:900;font-style:normal}',
                }}
            />
            <style
                dangerouslySetInnerHTML={{
                __html:
                    "body{margin:0}#js-show-iframe-wrapper{display:block;background:#fff;min-width:294px}#js-show-iframe-wrapper .bf-137__container{display:flex;width:100%;height:100%;max-width:1440px;padding:var(--pos-banner-fluid-137__container-padding);flex-direction:var(--pos-banner-fluid-137__container-flex-direction);justify-content:space-between;align-items:var(--pos-banner-fluid-137__container-align-items);margin:0 auto}#js-show-iframe-wrapper .bf-137__content{flex:0 0 var(--pos-banner-fluid-137__flex);order:var(--pos-banner-fluid-137__content-order);background:linear-gradient(315deg,#50b3ff 0,#3a9dea 100%);margin:var(--pos-banner-fluid-137__content-margin);padding:var(--pos-banner-fluid-137__content-padding)}#js-show-iframe-wrapper .bf-137__img{max-width:100%;height:auto;width:95px}#js-show-iframe-wrapper .bf-137__decor{position:relative;order:var(--pos-banner-fluid-137__decor-order);flex:0 0 var(--pos-banner-fluid-137__flex);width:var(--pos-banner-fluid-137__decor-width);height:var(--pos-banner-fluid-137__decor-height);background-image:var(--pos-banner-fluid-137__bg-url);background-repeat:no-repeat;background-size:var(--pos-banner-fluid-137__decor-size);background-position:var(--pos-banner-fluid-137__decor-position)}#js-show-iframe-wrapper .bf-137__logo-wrap{position:absolute;top:0;right:0;background-color:#fff;padding:14px;border-bottom-left-radius:10px}#js-show-iframe-wrapper .bf-137__text{margin-bottom:var(--pos-banner-fluid-137__text-margin);font-size:var(--pos-banner-fluid-137__textFS);line-height:var(--pos-banner-fluid-137__textLH);font-family:LatoWeb,sans-serif;font-weight:700;color:#000}#js-show-iframe-wrapper .bf-137 .pos-banner-btn_2{font-size:16px;line-height:24px;display:inline-flex;padding:14px 41px;font-family:LatoWeb,sans-serif;font-weight:500;width:auto;min-height:auto;color:#000;background-color:#fff}#js-show-iframe-wrapper .bf-137 .pos-banner-btn_2:active,#js-show-iframe-wrapper .bf-137 .pos-banner-btn_2:focus,#js-show-iframe-wrapper .bf-137 .pos-banner-btn_2:hover,#js-show-iframe-wrapper .bf-137 .pos-banner-btn_2:visited{background-color:#fff}",
                }}
            />
            <div id="js-show-iframe-wrapper">
                <div className="pos-banner-fluid bf-137">
                <div className="bf-137__container">
                    <div className="bf-137__decor">
                    <div className="bf-137__logo-wrap">
                        <img
                        alt="Госуслуги"
                        className="bf-137__img"
                        src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-with-slogan-blue.svg"
                        />
                    </div>
                    </div>
                    <div className="bf-137__content">
                    <div className="bf-137__text">
                        Проблемы со сдачей экзаменов, поступлением или получением
                        документов?
                    </div>
                    <button className="pos-banner-btn_2" type="button">
                        Написать о проблеме
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <script
                dangerouslySetInnerHTML={{
                __html:
                    '(function(){"use strict";function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach((function(n){_defineProperty(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var POS_PREFIX_137="--pos-banner-fluid-137__",posOptionsInitialBanner137={"container-padding":"0px","container-flex-direction":"column","container-align-items":"auto","decor-width":"100%","decor-height":"264px","decor-size":"cover","decor-position":"60% 0","decor-order":1,"bg-url":"url(\'https://pos.gosuslugi.ru/bin/banner-fluid/133/banner-fluid-bg-133-1.svg\')","content-margin":"0","content-padding":"25px","content-order":2,"text-margin":"24px",flex:"auto",textFS:"20px",textLH:"24px"},setStyles=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:POS_PREFIX_137;Object.keys(e).forEach((function(r){n.style.setProperty(t+r,e[r])}))},removeStyles=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:POS_PREFIX_137;Object.keys(e).forEach((function(e){n.style.removeProperty(t+e)}))};function changePosBannerOnResize(){var e=document.documentElement,n=_objectSpread({},posOptionsInitialBanner137),t=document.getElementById("js-show-iframe-wrapper"),r=t?t.offsetWidth:document.body.offsetWidth;r>=405&&(n["decor-height"]="236px",n["bg-url"]="url(\'https://pos.gosuslugi.ru/bin/banner-fluid/133/banner-fluid-bg-133-2.svg\')"),r>=585&&(n["decor-height"]="auto",n["container-flex-direction"]="row",n.flex="50%",n["content-order"]=0,n["content-padding"]="32px 25px"),r>=840&&(n["content-padding"]="32px",n.textFS="24px",n.textLH="28px"),r>=1125&&(n.textFS="32px",n.textLH="38px"),r>=1440&&(n["content-padding"]="32px 114px 32px 130px"),setStyles(n,e)}changePosBannerOnResize(),window.addEventListener("resize",changePosBannerOnResize),window.onunload=function(){var e=document.documentElement,n=_objectSpread({},posOptionsInitialBanner137);window.removeEventListener("resize",changePosBannerOnResize),removeStyles(n,e)};})()',
                }}
            />{" "}
            <script
                dangerouslySetInnerHTML={{
                __html: 'Widget("https://pos.gosuslugi.ru/form", 369185)',
                }}
            />
        </div>
    </>
  );
}

export default Gosuslugi;