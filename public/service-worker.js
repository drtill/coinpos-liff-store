if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-_MGIIoEcYQvyt4FpIu2Gf.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/_MGIIoEcYQvyt4FpIu2Gf/_buildManifest.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/_MGIIoEcYQvyt4FpIu2Gf/_middlewareManifest.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/_MGIIoEcYQvyt4FpIu2Gf/_ssgManifest.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/229-d8cbbb85c2ecb77d.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/275-f9c3bd433e1b0339.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/31664189-d94a2c24de5bc000.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/373-261a407a76b01e12.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/388-d402c63b25d30130.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/415-f05489f6fa811434.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/465-ef0b60352fb4b107.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/604-02ab03a0e89900e9.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/61-a6b5aa27e1b6a9ea.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/682-1eaaf0eb6dc7463e.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/737-aea65a2717c861f7.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/742-48424769622fab7f.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/74fdba35-f95b7c776d85bf8f.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/779-aee0fb9e803bdefc.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/920-493a9fbde7ab359c.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/946-2dd78aa78988ce4b.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/963-41c06a4ebe6bd7e3.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/a908dc70-720813364b185e08.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/ae51ba48-595e0edb1a6cd1b5.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/c9184924-19d2d09804c3d601.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/d64684d8-0d85c9e788b1a288.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/main-645083ac0d247430.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/404-b7c2e1f8337fd4b8.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/_app-ab02c7bb8bb4e187.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/_offline-26efb82c3c74ac8a.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/about-us-e37bc0416b8d71f6.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/checkout-7a428288770f3aeb.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/contact-us-b52823fc734fdddd.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/faq-be4daab86a0d35a8.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/index-6f10faa209be419e.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/offer-0260fa2ee1da3908.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-c1b631a3845fc99e.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/privacy-policy-ac8028eb330a034e.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-620add913ec7a251.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/search-3c2cfe28b10d9121.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/terms-and-conditions-b98b12e6044fdda3.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/change-password-cdb0be8eb7298b38.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/dashboard-1291cc0d6a7bed6e.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-9b72aea651acd37f.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-d8fc468f488b186d.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/my-orders-472d94195e4af89c.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/recent-order-ea864ae93b2524b6.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/pages/user/update-profile-d5c51ee44d445448.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/chunks/webpack-df4cf1c8d23aa877.js",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/css/bf0fd529c36bb636.css",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/css/ea577e0e5a20667a.css",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_next/static/css/fe7e18592e6ee0cf.css",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/_offline",revision:"_MGIIoEcYQvyt4FpIu2Gf"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"5935965ef93ee2a9eab4a1240699bc5f"},{url:"/logo/logo-color.svg",revision:"9cdfd2a1723ebe5d6fbfeb2a3a07765d"},{url:"/logo/logo-dark-2.svg",revision:"990e13afb1b79734e26b71f2fcc062d9"},{url:"/logo/logo-dark.svg",revision:"3d5619a9dd2312d20ee908259e95a635"},{url:"/logo/logo-light-2.svg",revision:"8e9e97fd3acd9a7aa3525e2c5eb93811"},{url:"/logo/logo-light.svg",revision:"a295f016c697789c084b023006b33ac5"},{url:"/manifest.json",revision:"9512d191857c92d5bc66f9c1d17065c0"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
