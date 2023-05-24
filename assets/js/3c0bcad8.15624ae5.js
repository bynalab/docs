"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:3,title:"\ud83d\udce6 Release",description:"Learn how to publish a new app release to Shorebird."},o="Releases",s={unversionedId:"code_push/release",id:"code_push/release",title:"\ud83d\udce6 Release",description:"Learn how to publish a new app release to Shorebird.",source:"@site/docs/code_push/release.md",sourceDirName:"code_push",slug:"/code_push/release",permalink:"/code_push/release",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/code_push/release.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udce6 Release",description:"Learn how to publish a new app release to Shorebird."},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfc3 Run",permalink:"/code_push/run"},next:{title:"\u2601\ufe0f Patch",permalink:"/code_push/patch"}},i={},p=[{value:"Publish a Release",id:"publish-a-release",level:2},{value:"Manage Releases",id:"manage-releases",level:2},{value:"List Releases",id:"list-releases",level:3},{value:"Delete Releases",id:"delete-releases",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"releases"},"Releases"),(0,a.kt)("h2",{id:"publish-a-release"},"Publish a Release"),(0,a.kt)("p",null,"In order to start pushing updates, you will need to create a release using\n",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shorebird release\n")),(0,a.kt)("p",null,"Creating a release builds and submits your app to Shorebird. Shorebird saves the\ncompiled Dart code from your application in order to make updates smaller in\nsize."),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird release\n\u2713 Building release (5.1s)\n\u2713 Fetching apps (0.2s)\n\n\ud83d\ude80 Ready to create a new release!\n\n\ud83d\udcf1 App: My App (30370f27-dbf1-4673-8b20-fb096e38dffa)\n\ud83d\udce6 Release Version: 1.0.0+1\n\ud83d\udd79\ufe0f Platform: android (arm64, arm32, x86)\n\nWould you like to continue? (y/N) Yes\n\u2713 Fetching releases (55ms)\n\u2713 Creating release (45ms)\n\u2713 Creating artifacts (4.6s)\n\n\u2705 Published Release!\n\nYour next step is to upload the app bundle to the Play Store.\n./build/app/outputs/bundle/release/app-release.aab\n\nSee the following link for more information:\nhttps://support.google.com/googleplay/android-developer/answer/9859152?hl=en\n")),(0,a.kt)("p",null,"If your application supports flavors or multiple release targets, you can specify the flavor and target using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--flavor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--target")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shorebird release --target ./lib/main_development.dart --flavor development\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release")," wraps ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," and can take any argument\n",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," can. To pass arguments to the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," you\nneed to put ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," arguments after a ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," separator. For example:\n",(0,a.kt)("inlineCode",{parentName:"p"},'shorebird release -- --dart-define="foo=bar"')," will define the ",(0,a.kt)("inlineCode",{parentName:"p"},'"foo"')," environment\nvariable inside Dart as you might have done with ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," directly.")),(0,a.kt)("h2",{id:"manage-releases"},"Manage Releases"),(0,a.kt)("h3",{id:"list-releases"},"List Releases"),(0,a.kt)("p",null,"You can view all of your releases for your current app (as defined by\nyour shorebird.yaml) using ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird releases list"),"."),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird releases list\n\ud83d\ude80 Releases (675a3bf6-fdf9-4520-a5f5-f73493ef9034)\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Version   \u2502 Name \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1.0.2+1   \u2502 --   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1.0.3+1   \u2502 --   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"If your application supports flavors, you can specify the flavor using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--flavor")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shorebird releases list --flavor development\n")),(0,a.kt)("h3",{id:"delete-releases"},"Delete Releases"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Deleting a release will remove all associated patches and artifacts\nand is ",(0,a.kt)("strong",{parentName:"p"},"not reversible"),".")),(0,a.kt)("p",null,"You can delete a release for your current app (as defined by your\nshorebird.yaml) using ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird releases delete"),"."),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird releases delete --version 1.0.3+1\n\u2713 Fetched releases. (54ms)\nAre you sure you want to delete release 1.0.3+1? (y/N) Yes\n\u2713 Deleted release 1.0.3+1. (0.3s)\n")),(0,a.kt)("p",null,"If your application supports flavors, you can specify the flavor using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--flavor")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"shorebird releases delete --flavor development\n")))}c.isMDXComponent=!0}}]);