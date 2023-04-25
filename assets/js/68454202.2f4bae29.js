"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,title:"\ud83d\udce6 Install",description:"Learn how to install Shorebird command line interface on your machine."},a="Installing Shorebird",l={unversionedId:"getting_started/install",id:"getting_started/install",title:"\ud83d\udce6 Install",description:"Learn how to install Shorebird command line interface on your machine.",source:"@site/docs/getting_started/install.md",sourceDirName:"getting_started",slug:"/getting_started/install",permalink:"/getting_started/install",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/getting_started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\udce6 Install",description:"Learn how to install Shorebird command line interface on your machine."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Getting Started",permalink:"/getting-started"},next:{title:"\u270d\ufe0f Sign Up",permalink:"/getting_started/sign_up"}},s={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-shorebird"},"Installing Shorebird"),(0,o.kt)("p",null,"To install the Shorebird command line interface (CLI):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | sh\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Installing Shorebird CLI requires ",(0,o.kt)("inlineCode",{parentName:"p"},"git"),". We currently support only Mac and\nLinux. Windows is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/37"},"coming\nsoon"),".")),(0,o.kt)("p",null,"This installs ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin")," and adds it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". It\nalso installs a copy of Flutter and Dart inside\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin/cache/flutter"),". The copy of Flutter is slightly modified to\nadd Shorebird code push and is not intended to be added to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". You can\ncontinue to use the versions of Flutter and Dart you already have installed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The total installation is about 300mb.")),(0,o.kt)("p",null,"Once the installation has completed, ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird")," should be available in your\nterminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ shorebird\nThe shorebird command-line tool\n\nUsage: shorebird <command> [arguments]\n\nGlobal options:\n-h, --help            Print this usage information.\n-v, --version         Print the current version.\n    --[no-]verbose    Noisy logging, including all shell commands executed.\n\nAvailable commands:\n  account        Manage your Shorebird account.\n  apps           Manage your Shorebird apps.\n  build          Build a new release of your application.\n  cache          Manage the Shorebird cache.\n  channels       Manage the channels for your Shorebird app.\n  doctor         Show information about the installed tooling.\n  init           Initialize Shorebird.\n  login          Login as a new Shorebird user.\n  logout         Logout of the current Shorebird user\n  patch          Publish new patches for a specific release to Shorebird.\n  release        Builds and submits your app to Shorebird.\n  run            Run the Flutter application.\n  subscription   Manage your Shorebird subscription.\n  upgrade        Upgrade your copy of Shorebird.\n\nRun "shorebird help <command>" for more information about a command.\n')),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird doctor")," to ensure things are set-up correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird doctor\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ shorebird doctor\n\nShorebird v0.0.8\nShorebird Engine \u2022 revision d470ae25d21f583abe128f7b838476afd5e45bde\n\n\u2713 Shorebird is up-to-date (0.7s)\n\u2713 Flutter install is correct (0.1s)\n\u2713 AndroidManifest.xml files contain INTERNET permission (26ms)\n\nNo issues detected!\n")))}u.isMDXComponent=!0}}]);