!function(){var e={"44nl":function(){document.getElementById("bs-example-navbar-collapse-1");document.getElementById("image_size"),document.getElementById("image_remove"),document.getElementById("image_list"),document.getElementById("video_list");document.getElementById("files_upload")&&document.getElementById("files_upload").addEventListener("change",(function(e){e.target.files&&(null.insertImage(e.target.files),e.target.value="")}))}},o={};function t(n){var i=o[n];if(void 0!==i)return i.exports;var l=o[n]={exports:{}};return e[n](l,l.exports,t),l.exports}t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){"use strict";t("44nl");const{ExploreEditor:e,katex:o,CodeMirror:n}=window;e.create("exampleOptions",{font:["Arial","tahoma","Courier New,Courier"],fontSize:[8,10,14,18,24,36],colorList:[["#ccc","#dedede","OrangeRed","Orange","RoyalBlue","SaddleBrown"],["SlateGray","BurlyWood","DeepPink","FireBrick","Gold","SeaGreen"]],paragraphStyles:["spaced","neon",{name:"Custom",class:"__meta__customClass"}],textStyles:["translucent",{name:"Emphasis",style:"-webkit-text-emphasis: filled;",tag:"span"}],width:"100%",maxWidth:"100%",minWidth:400,height:"auto",videoWidth:"80%",youtubeQuery:"autoplay=1&mute=1&enablejsapi=1",imageWidth:150,popupDisplay:"local",resizingBar:!1,toolbarItem:[["font","fontSize","fontColor","hiliteColor","video","paragraphStyle","textStyle","fullScreen","codeView"]],callBackSave:function(e){alert(e)}}),e.create("lineBreak",{toolbarContainer:"#toolbar_container",showPathLabel:!1,charCounter:!0,maxCharCount:720,maxWidth:"1920px",width:"auto",height:"auto",minHeight:"100px",maxHeight:"270px",toolbarItem:[["undo","redo","font","fontSize","formatBlock"],["bold","underline","italic","strike","subscript","superscript","removeFormat"],"/",["fontColor","hiliteColor","outdent","indent","align","horizontalRule","list","table"],["link","image","video","fullScreen","showBlocks","codeView","preview","print","save"]],callBackSave:function(e){console.log(e)}}),e.create("useCodeMirror",{codeMirror:n,toolbarItem:[["codeView"]],height:330,width:"auto"}),e.create("responsive_Toolbar",{templates:[{name:"Template-1",html:"<p>HTML source1</p>"},{name:"Template-2",html:"<p>HTML source2</p>"}],codeMirror:n,katex:o,toolbarItem:[["undo","redo"],["font","fontSize","formatBlock","paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor","textStyle"],["removeFormat"],["outdent","indent"],["align","horizontalRule","list","lineHeight"]]});var i=document.querySelector("#responsive_Toolbar_size");window.addEventListener("resize",(function(e){i.innerText=(window.innerWidth>1200?1200:window.innerWidth)+"px"})),e.create("imageResize",{toolbarItem:[["undo","redo"],["image"]]}).onImageUploadBefore=function(e,o,t,n){try{ResizeImage(e,n)}catch(i){n(i.toString())}};var l=e.create("imageManagement",{toolbarItem:[["undo","redo"],["formatBlock"],["horizontalRule","list","table"],["image","video"],["showBlocks","fullScreen","preview","print"]]});l.onImageUpload=function(e,o,t,n,i){console.log("imageInfo",n),"delete"===t?imageList.splice(findIndex(imageList,o),1):"create"===t&&imageList.push(n),0===i&&(console.log("imageList",imageList),setImageList(imageList))},l.onVideoUpload=function(e,o,t,n,i){console.log("videoInfo",n),"delete"===t?videoList.splice(findIndex(videoList,o),1):"create"===t&&videoList.push(n),0===i&&(console.log("videoList",videoList),setVideoList(videoList))};document.getElementById("opt1"),document.getElementById("opt2"),document.getElementById("ds1"),document.getElementById("ds2");e.create("exampleFunction",{toolbarItem:[["undo","redo"],["bold","underline","italic","strike","subscript","superscript"],["removeFormat"],["outdent","indent"],["fullScreen","showBlocks","codeView"],["preview","print"],["image","video"]],width:"100%"}),e.onload=function(e,o){console.log("onload-core",e),console.log("onload-reload",o)},e.onScroll=function(e){console.log("onScroll",e)},e.onMouseDown=function(e){console.log("onMouseDown",e)},e.onClick=function(e){console.log("onClick",e)},e.onInput=function(e){console.log("onInput",e)},e.onKeyDown=function(e){console.log("onKeyDown",e)},e.onKeyUp=function(e){console.log("onKeyUp",e)},e.onDrop=function(e){console.log("onDrop",e)},e.onChange=function(e){console.log("onChange",e)},e.onPaste=function(e,o,t,n){console.log("onPaste",e,o,t)},e.onCopy=function(e,o,t){console.log("onCopy",e,o)},e.onCut=function(e,o,t){console.log("onCut",e,o)},e.onFocus=function(e){console.log("onFocus",e)},e.onBlur=function(e){console.log("onBlur",e)},e.onImageUpload=function(e,o,t,n,i){console.log("targetElement:"+e+", index:"+o+', state("create","update","delete"):'+t+", imageInfo:"+n+", remainingFilesCount:"+i)},e.onVideoUpload=function(e,o,t,n,i){console.log("targetElement:"+e+", index:"+o+', state("create","update","delete"):'+t+", videoInfo:"+n+", remainingFilesCount:"+i)},e.showInline=function(e,o){console.log("toolbar",e),console.log("context",o)},e.showController=function(e,o,t){console.log("plugin name",e),console.log("controller elements",o)}}()}();