(()=>{window.addComment=function(m){var u,p,f,c=m.document,o={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},k=m.MutationObserver||m.WebKitMutationObserver||m.MozMutationObserver,N="querySelector"in c&&"addEventListener"in m,D=!!c.documentElement.dataset;function x(){F(),k&&new k(O).observe(c.body,{childList:!0,subtree:!0})}function F(r){if(N&&(u=i(o.cancelReplyId),p=i(o.commentFormId),u)){let d=function(n){if((n.metaKey||n.ctrlKey)&&n.keyCode===13)return p.removeEventListener("keydown",d),n.preventDefault(),p.submit.click(),!1};var l=d;u.addEventListener("touchstart",L),u.addEventListener("click",L),p&&p.addEventListener("keydown",d);for(var t,a=function(n){var I=o.commentReplyClass;return n&&n.childNodes||(n=c),n=c.getElementsByClassName?n.getElementsByClassName(I):n.querySelectorAll("."+I),n}(r),e=0,y=a.length;e<y;e++)(t=a[e]).addEventListener("touchstart",S),t.addEventListener("click",S)}}function L(r){var t,a,e=i(o.temporaryFormId);e&&f&&(i(o.parentIdFieldId).value="0",t=e.textContent,e.parentNode.replaceChild(f,e),this.style.display="none",a=(e=(e=i(o.commentReplyTitleId))&&e.firstChild)&&e.nextSibling,e&&e.nodeType===Node.TEXT_NODE&&t&&(a&&a.nodeName==="A"&&a.id!==o.cancelReplyId&&(a.style.display=""),e.textContent=t),r.preventDefault())}function S(r){var t=i(o.commentReplyTitleId),t=t&&t.firstChild.textContent,d=this,a=C(d,"belowelement"),e=C(d,"commentid"),y=C(d,"respondelement"),l=C(d,"postid"),d=C(d,"replyto")||t;a&&e&&y&&l&&m.addComment.moveForm(a,e,y,l,d)===!1&&r.preventDefault()}function O(r){for(var t=r.length;t--;)if(r[t].addedNodes.length)return void F()}function C(r,t){return D?r.dataset[t]:r.getAttribute("data-"+t)}function i(r){return c.getElementById(r)}return N&&c.readyState!=="loading"?x():N&&m.addEventListener("DOMContentLoaded",x,!1),{init:F,moveForm:function(h,t,b,e,y){var l,d,n,I,R,v,E,h=i(h),b=(f=i(b),i(o.parentIdFieldId)),w=i(o.postIdFieldId),s=i(o.commentReplyTitleId),g=(s=s&&s.firstChild)&&s.nextSibling;if(h&&f&&b){y===void 0&&(y=s&&s.textContent),I=f,R=o.temporaryFormId,v=i(R),E=(E=i(o.commentReplyTitleId))?E.firstChild.textContent:"",v||((v=c.createElement("div")).id=R,v.style.display="none",v.textContent=E,I.parentNode.insertBefore(v,I)),e&&w&&(w.value=e),b.value=t,u.style.display="",h.parentNode.insertBefore(f,h.nextSibling),s&&s.nodeType===Node.TEXT_NODE&&(g&&g.nodeName==="A"&&g.id!==o.cancelReplyId&&(g.style.display="none"),s.textContent=y),u.onclick=function(){return!1};try{for(var T=0;T<p.elements.length;T++)if(l=p.elements[T],d=!1,"getComputedStyle"in m?n=m.getComputedStyle(l):c.documentElement.currentStyle&&(n=l.currentStyle),(l.offsetWidth<=0&&l.offsetHeight<=0||n.visibility==="hidden")&&(d=!0),l.type!=="hidden"&&!l.disabled&&!d){l.focus();break}}catch{}return!1}}}}(window);})();
/*! This file is auto-generated */

;
(()=>{var l=class{getCookie(e){if(0<document.cookie.length){var t=document.cookie.indexOf(e+"=");if(t!=-1){t=t+e.length+1;var s=document.cookie.indexOf(";",t);return s==-1&&(s=document.cookie.length),document.cookie.substring(t,s)}}return""}setCookie(e,t,s){var i=new Date;i.setTime(i.getTime()+24*s*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}showNotice(e,t="success"){let s=`<div class="notice--wrapper">${e}</div>`;document.querySelector("body").insertAdjacentHTML("beforeend",s),document.querySelector(".notice--wrapper").classList.add("is-active"),setTimeout(()=>{document.querySelector(".notice--wrapper").remove()},3e3)}};var u=class{selector;timeFormat={second:"second ago",seconds:"seconds ago",minute:"minute ago",minutes:"minutes ago",hour:"hour ago",hours:"hours ago",day:"day ago",days:"days ago",week:"week ago",weeks:"weeks ago",month:"month ago",months:"months ago",year:"year ago",years:"years ago"};doms=[];constructor(e){this.selector=e.selector,e.timeFormat&&(this.timeFormat=e.timeFormat),this.init(),setTimeout(()=>{this.refresh()},1e3*5)}updateSelectors(){this.doms=Array.from(document.querySelectorAll(this.selector)),this.refresh()}init(){this.doms=Array.from(document.querySelectorAll(this.selector)),this.doms.forEach(e=>{e.innerText=this.humanize_time_ago(e.attributes.datetime.value)})}humanize_time_ago(e){let t=new Date(e),s=Date.now()/1e3-Number(t.getTime()/1e3);return s<3600?`${Math.ceil(s/60)} ${Math.ceil(s/60)==1?this.timeFormat.second:this.timeFormat.seconds}`:s<86400?`${Math.ceil(s/3600)} ${Math.ceil(s/3660)==1?this.timeFormat.hour:this.timeFormat.hours}`:s<86400*30?`${Math.ceil(s/86400)} ${Math.ceil(s/86400)==1?this.timeFormat.day:this.timeFormat.days}`:s<86400*30*12?`${Math.ceil(s/(86400*30))} ${Math.ceil(s/(86400*30))==1?this.timeFormat.month:this.timeFormat.months}`:t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}refresh(){this.doms.forEach(e=>{e.innerText=this.humanize_time_ago(e.attributes.datetime.value)}),console.log(this.selector)}},_=u;var p=class extends l{singleSelector=".post--single";likeButtonSelctor=".like-btn";articleSelector=".post--item";viewSelector=".article--views";actionDomain;text="";likeButton=null;post_id;is_single=!1;constructor(e){if(super(),this.singleSelector=e.singleSelector??this.singleSelector,this.likeButtonSelctor=e.likeButtonSelctor??this.likeButtonSelctor,this.articleSelector=e.articleSelector??this.articleSelector,this.viewSelector=e.viewSelector??this.viewSelector,this.actionDomain=e.actionDomain,this.text=e.text??this.text,this.is_single=!!document.querySelector(this.singleSelector),this.is_single){let t=document.querySelector(this.singleSelector);this.post_id=t.dataset.id??"",this.initArticleLike(),this.initArticleView()}else this.initArticlesView()}initArticleView(){fetch(this.actionDomain+"post/"+this.post_id+"/view",{method:"post"}).then(e=>{e.json().then(t=>{document.querySelector(this.viewSelector).innerText=t.views+this.text})})}initArticlesView(){let e=Array.from(document.querySelectorAll(this.articleSelector));if(e.length===0)return;let t=[];e.forEach(i=>t.push(i.dataset.id));let s=t.join(",");fetch(this.actionDomain+"post/views?post_ids="+s).then(i=>{i.json().then(n=>{let o=n.results;e.forEach(r=>{r.querySelector(this.viewSelector)&&(r.querySelector(this.viewSelector).innerText=(o.find(a=>a.post_id==r.dataset.id)?o.find(a=>a.post_id==r.dataset.id).views:0)+this.text)})})})}initArticleLike(){this.likeButton=document.querySelector(this.likeButtonSelctor),this.likeButton&&(fetch(this.actionDomain+"post/"+this.post_id+"/like").then(e=>{e.json().then(t=>{this.likeButton.querySelector(".count").innerText=t.likes})}),this.likeButton.addEventListener("click",()=>{this.handleLike()}),this.getCookie("like_"+this.post_id)&&this.likeButton.classList.add("is-active"))}handleLike(){if(this.getCookie("like_"+this.post_id))return this.showNotice("You have already liked this post");if(this.likeButton){let e=this.actionDomain+"post/"+this.post_id+"/like";fetch(e,{method:"post"}).then(t=>t.json()).then(t=>{this.showNotice("Thanks for your like");let s=this.likeButton?.querySelector(".count");s&&(s.innerText=t.likes),this.setCookie("like_"+this.post_id,"1",1)}),this.likeButton?.classList.add("is-active")}}},S=p;var m=class extends l{loading=!1;post_id;total=0;total_paged=1;paged=1;actionDomain;dateFormater;constructor(e){super(),document.querySelector(".post--ingle__comments")&&(this.actionDomain=e.actionDomain,this.post_id=document.querySelector(".post--ingle__comments").dataset.id,this.fetchComments(),this.init())}renderComment(e,t="",s=!0){let i=s?`<span class="comment-reply-link u-cursorPointer" onclick="return addComment.moveForm('comment-${e.comment_id}', '${e.comment_id}', 'respond', '${document.querySelector(".post--ingle__comments").dataset.id}')"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" class=""><g><path d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path></g></svg></span>                            `:"";return`<li class="comment parent" itemtype="http://schema.org/Comment" data-id="${e.comment_id}" itemscope="" itemprop="comment" id="comment-${e.comment_id}">
                            <div class="comment-body">
                                <div class="comment-meta">
                                    <div class="comment--avatar">
                                        <img src="${e.avatar}" class="avatar"  width=42 height=42 />
                                    </div>
                                    <div class="comment--meta">
                                        <div class="comment--author" itemprop="author">${e.comment_author_name}<span class="dot"></span>
                                            <div class="comment--time" itemprop="datePublished" datetime="${e.comment_date}">${e.comment_date}</div>
                                            </div>
                                            ${i}
                                    </div>
                                </div>
                                <div class="comment-content" itemprop="description">
                                    ${e.comment_content}
                                </div>
                            </div>
                            ${t}
                </li>`}async fetchComments(){fetch(this.actionDomain+"comment/list?paged="+this.paged+"&post_id="+this.post_id).then(e=>{e.json().then(t=>{let s=t.results;this.total=t.total,this.total_paged=t.total_paged,this.total_paged>1&&this.randerNav(),document.querySelector(".comments--title .count").innerHTML=this.total;let i=s.map(n=>{let o="";return n.children&&(o=`<ol class="children">${n.children.map(r=>this.renderComment(r)).join("")}</ol>`),this.renderComment(n,o)}).join("");document.querySelector(".commentlist").innerHTML=i})})}randerNav(){let e=this.paged==1?"disabled":"",s=`<span class="cnav-item ${this.paged==this.total_paged?"disabled":""}" data-action="pre">
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd">
        </path></svg> Older Comments</span><span class="chartPage-verticalDivider"></span><span class="cnav-item ${e}" data-action="next">Newer Comments
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd">
        </path></svg>
        </span>`;document.querySelector(".commentnav").innerHTML=s,document.querySelectorAll(".cnav-item").forEach(i=>{i.addEventListener("click",n=>{if(i.classList.contains("disabled"))return;console.log(i);let o=i.attributes["data-action"].value;console.log(o),o=="pre"?this.paged+=1:this.paged-=1,this.fetchComments()})})}init(){document.querySelector(".comment-form")&&(this.getCookie("comment_author")!=""&&(document.querySelector("#author").value=this.getCookie("comment_author")),this.getCookie("comment_author_email")!=""&&(document.querySelector("#email").value=this.getCookie("comment_author_email")),this.getCookie("comment_author_url")!=""&&(document.querySelector("#url").value=this.getCookie("comment_author_url")),document.querySelector(".comment-form")?.addEventListener("submit",e=>{if(e.preventDefault(),this.loading)return;let t=document.querySelector(".comment-form"),s=new FormData(t),i={};s.forEach((n,o)=>i[o]=n),i.post_id=this.post_id,this.loading=!0,fetch(this.actionDomain+"comment/insert",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{if(this.loading=!1,n.status!=200)return this.showNotice(n.err,"error");let o=document.getElementById("cancel-comment-reply-link"),r=document.getElementById("respond"),a=document.getElementById("wp-temp-form-div"),c=n.data,f=this.renderComment(c,"",!1),h=document.querySelector("#comment_parent")?.value;o.style.display="none",o.onclick=null,document.getElementById("comment_parent").value="0",a&&r&&a.parentNode&&a.parentNode.removeChild(a),document.querySelector(".comment-body__fresh")&&document.querySelector(".comment-body__fresh")?.classList.remove("comment-body__fresh"),document.getElementById("comment").value="",h!=""?(document.querySelector("#comment-"+h)?.insertAdjacentHTML("beforeend",'<ol class="children">'+f+"</ol>"),console.log(h)):(document.querySelector(".no--comment")&&document.querySelector(".no--comment")?.remove(),document.querySelector(".commentlist")?.insertAdjacentHTML("beforeend",f));let b=document.querySelector(`#comment-${c.comment_id}`);b&&b.scrollIntoView({behavior:"smooth"}),this.setCookie("comment_author",document.querySelector("#author").value,1),this.setCookie("comment_author_email",document.querySelector("#email").value,1),this.setCookie("comment_author_url",document.querySelector("#url").value,1),this.showNotice("\u8BC4\u8BBA\u6210\u529F")})}))}};var g=class{ver;type;finished;paged;genre_list;subjects;status;baseAPI;types;container;constructor(e){this.container=e.container,this.types=e.types??["movie","book","music","game","drama"],this.baseAPI=e.baseAPI,this.ver="1.0.6",this.type="movie",this.status="done",this.finished=!1,this.paged=1,this.genre_list=[{name:"\u5DF2\u770B",value:"done"},{name:"\u5728\u770B",value:"doing"},{name:"\u60F3\u770B",value:"mark"}],this.subjects=[],this._create()}on(e,t,s){document.querySelectorAll(t).forEach(n=>{n.addEventListener(e,s)})}_handleGenreClick(){this.on("click",".db--genreItem",e=>{let t=e.currentTarget;t.classList.contains("is-active")||(document.querySelector(".db--list").innerHTML="",document.querySelector(".lds-ripple").classList.remove("u-hide"),this.status=t.dataset.status||"",this._renderGenre(),this.paged=1,this.finished=!1,this.subjects=[],this._fetchData())})}_reanderTypes(){document.querySelector(".db--nav").innerHTML=this.types.map(e=>`<span class="db--navItem JiEun${this.type==e?" current":""}" data-type="${e}">${e}</span>`).join(""),this._handleNavClick()}_renderGenre(){document.querySelector(".db--genres").innerHTML=this.genre_list.map(e=>`<span class="db--genreItem${this.status==e.value?" is-active":""}" data-status="${e.value}">${e.name}</span>`).join(""),this._handleGenreClick()}_fetchData(){let e=new URLSearchParams({paged:this.paged.toString(),type:this.type,status:this.status});fetch(this.baseAPI+"list?"+e.toString()).then(t=>t.json()).then(t=>{console.log(t.results),t.results.length?(document.querySelector(".db--list").classList.contains("db--list__card")?(this.subjects=[...this.subjects,...t.results],this._randerDateTemplate()):(this.subjects=[...this.subjects,...t.results],this._randerListTemplate()),document.querySelector(".lds-ripple").classList.add("u-hide")):(this.finished=!0,document.querySelector(".lds-ripple").classList.add("u-hide"))})}_randerDateTemplate(){let e=this.subjects.reduce((s,i)=>{let n=new Date(i.create_time),o=n.getFullYear(),r=n.getMonth()+1,a=`${o}-${r.toString().padStart(2,"0")}`;return Object.prototype.hasOwnProperty.call(s,a)?s[a].push(i):s[a]=[i],s},{}),t="";for(let s in e){let i=s.split("-");t+=`<div class="db--listBydate"><div class="db--titleDate"><div class="db--titleDate__day">${i[1]}</div><div class="db--titleDate__month">${i[0]}</div></div><div class="db--dateList__card">`,t+=e[s].map(n=>`<div class="db--item${this.type=="music"?" db--item__music":""}"><img src="${n.poster}" referrerpolicy="no-referrer" class="db--image"><div class="db--score ">${n.douban_score>0?'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'+n.douban_score:""}${n.year>0?" \xB7 "+n.year:""}</div><div class="db--title"><a href="${n.link}" target="_blank">${n.name}</a></div></div>`).join(""),t+="</div></div>"}document.querySelector(".db--list").innerHTML=t}_randerListTemplate(){document.querySelector(".db--list").innerHTML=this.subjects.map(e=>`<div class="db--item"><img src="${e.poster}" referrerpolicy="no-referrer" class="db--image"><div class="ipc-signpost ">${e.create_time}</div><div class="db--score ">${e.douban_score?'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'+e.douban_score:""}${e.year?" \xB7 "+e.year:""}</div><div class="db--title"><a href="${e.link}" target="_blank">${e.name}</a></div>
                </div>
                </div>`).join("")}_handleScroll(){window.addEventListener("scroll",()=>{var e=window.scrollY||window.pageYOffset;document.querySelector(".block-more").offsetTop+-window.innerHeight<e&&document.querySelector(".lds-ripple").classList.contains("u-hide")&&!this.finished&&(document.querySelector(".lds-ripple").classList.remove("u-hide"),this.paged++,this._fetchData())})}_handleNavClick(){this.on("click",".db--navItem",e=>{let t=e.currentTarget;t.classList.contains("current")||(this.status="done",this.type=t.dataset.type,this._renderGenre(),document.querySelector(".db--list").innerHTML="",document.querySelector(".lds-ripple").classList.remove("u-hide"),document.querySelector(".db--navItem.current").classList.remove("current"),t.classList.add("current"),this.paged=1,this.finished=!1,this.subjects=[],this._fetchData())})}_create(){if(document.querySelector(".db--container")){let e=document.querySelector(this.container);if(!e)return;e.innerHTML=`<nav class="db--nav">
            </nav>
            <div class="db--genres">
            </div>
            <div class="db--list db--list__card">
            </div>
            <div class="block-more block-more__centered">
                <div class="lds-ripple">
                </div>
            </div>`,this._renderGenre(),this._reanderTypes(),this._fetchData(),this._handleScroll()}document.querySelector(".js-db")&&document.querySelectorAll(".js-db").forEach(e=>{let t=e,s=t.dataset.id,i=t.dataset.type,n=t.parentNode;fetch(this.baseAPI+`${i}/${s}`).then(o=>{o.json().then(r=>{if(r.data){let a=r.data,c=document.createElement("div");c.classList.add("doulist-item"),c.innerHTML=`<div class="doulist-subject">
                            <div class="doulist-post"><img decoding="async" referrerpolicy="no-referrer" src="${a.poster}"></div>
                            <div class="doulist-content">
                            <div class="doulist-title"><a href="${a.link}" class="cute" target="_blank" rel="external nofollow">${a.name}</a></div>
                            <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:55%"></span></span><span class="rating_nums"> ${a.douban_score} </span></div>
                            <div class="abstract">${a.card_subtitle}</div>
                            </div>
                            </div>`,n.replaceWith(c)}})})}),document.querySelector(".db--collection")&&document.querySelectorAll(".db--collection").forEach(e=>{this._fetchCollection(e)})}_fetchCollection(e){let t=e.dataset.style?e.dataset.style:"card";fetch(this.baseAPI+"/list?type="+e.dataset.type+"&paged=1&start_time="+e.dataset.start+"&end_time="+e.dataset.end).then(s=>s.json()).then(s=>{if(s.length)if(t=="card")e.innerHTML+=s.map(i=>`<div class="doulist-item">
                            <div class="doulist-subject">
                            <div class="db--viewTime ">Marked ${i.create_time}</div>
                            <div class="doulist-post"><img referrerpolicy="no-referrer" src="${i.poster}"></div><div class="doulist-content"><div class="doulist-title"><a href="${i.link}" class="cute" target="_blank" rel="external nofollow">${i.name}</a></div><div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${i.douban_score}</span></div><div class="abstract">${i.card_subtitle}</div></div></div></div>`).join("");else{let i=s.reduce((o,r)=>(Object.prototype.hasOwnProperty.call(o,r.create_time)?o[r.create_time].push(r):o[r.create_time]=[r],o),{}),n="";for(let o in i)n+=`<div class="db--date">${o}</div><div class="db--dateList">`,n+=i[o].map(r=>`<div class="db--card__list"">
                                    <img referrerpolicy="no-referrer" src="${r.poster}">
                                    <div>
                                    <div class="title"><a href="${r.link}" class="cute" target="_blank" rel="external nofollow">${r.name}</a></div>
                                    <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${r.douban_score}</span></div>
                                    ${r.remark||r.card_subtitle}
                                    </div>
                                    </div>`).join(""),n+="</div>";e.innerHTML=n}})}},w=g;var v=class{selector;selectorAttr;currentIndex;images;constructor(){this.selector=".grap--figure",this.selectorAttr="src",this.currentIndex=0,this.images=[],this.getZoomImages(),window.addEventListener("resize",()=>{document.querySelector(".overlay")&&this.loadImage(this.images[this.currentIndex])})}getZoomImages(){let e=Array.from(document.querySelectorAll(this.selector));this.images=[...e].map(t=>t.querySelector("img")?.getAttribute(this.selectorAttr)).filter(t=>t!==null),e.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();let i=t.querySelector("img")?.getAttribute(this.selectorAttr);this.showOverlay(i)})})}renderNav(){let e=`${this.currentIndex+1}/${this.images.length}`,t=document.querySelector(".image--nav");t&&(t.innerHTML=e)}prevImage(){this.currentIndex!==0&&(this.currentIndex=this.currentIndex-1,this.loadImage(this.images[this.currentIndex]),this.renderNav())}nextImage(){this.currentIndex!==this.images.length-1&&(this.currentIndex=this.currentIndex+1,this.loadImage(this.images[this.currentIndex]),this.renderNav())}showOverlay(e){let t=this,s=this.images.indexOf(e);this.currentIndex=s;let n=`<div class="overlay"><button class="zoomImgClose"><svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" class="q"><path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"/></svg></button><div class="overlay-img-wrap"><img class="overlay-image"><div class="lds-ripple"></div></div>${this.images.length>1?`<div class="image--nav">${s+1}/${this.images.length}</div><button title="Prev" type="button" class="mfp-arrow mfp-arrow-left mfp-prevent-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M14.4998 7.80903C14.4742 7.74825 14.4372 7.69292 14.3908 7.64603L8.68084 1.93803C8.58696 1.84427 8.45967 1.79165 8.32699 1.79175C8.19431 1.79184 8.0671 1.84464 7.97334 1.93853C7.87959 2.03241 7.82697 2.1597 7.82707 2.29238C7.82716 2.42506 7.87996 2.55227 7.97384 2.64603L12.8278 7.50003H1.96484C1.83224 7.50003 1.70506 7.5527 1.61129 7.64647C1.51752 7.74024 1.46484 7.86742 1.46484 8.00003C1.46484 8.13263 1.51752 8.25981 1.61129 8.35358C1.70506 8.44735 1.83224 8.50003 1.96484 8.50003H12.8278L7.97384 13.354C7.87996 13.4478 7.82716 13.575 7.82707 13.7077C7.82697 13.8404 7.87959 13.9676 7.97334 14.0615C8.0671 14.1554 8.19431 14.2082 8.32699 14.2083C8.45967 14.2084 8.58696 14.1558 8.68084 14.062L14.3878 8.35403C14.4342 8.30713 14.4712 8.2518 14.4968 8.19103C14.5478 8.069 14.5489 7.93184 14.4998 7.80903Z"></path>
        </svg></button><button title="Next (Right arrow key)" type="button" class="mfp-arrow mfp-arrow-right mfp-prevent-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M14.4998 7.80903C14.4742 7.74825 14.4372 7.69292 14.3908 7.64603L8.68084 1.93803C8.58696 1.84427 8.45967 1.79165 8.32699 1.79175C8.19431 1.79184 8.0671 1.84464 7.97334 1.93853C7.87959 2.03241 7.82697 2.1597 7.82707 2.29238C7.82716 2.42506 7.87996 2.55227 7.97384 2.64603L12.8278 7.50003H1.96484C1.83224 7.50003 1.70506 7.5527 1.61129 7.64647C1.51752 7.74024 1.46484 7.86742 1.46484 8.00003C1.46484 8.13263 1.51752 8.25981 1.61129 8.35358C1.70506 8.44735 1.83224 8.50003 1.96484 8.50003H12.8278L7.97384 13.354C7.87996 13.4478 7.82716 13.575 7.82707 13.7077C7.82697 13.8404 7.87959 13.9676 7.97334 14.0615C8.0671 14.1554 8.19431 14.2082 8.32699 14.2083C8.45967 14.2084 8.58696 14.1558 8.68084 14.062L14.3878 8.35403C14.4342 8.30713 14.4712 8.2518 14.4968 8.19103C14.5478 8.069 14.5489 7.93184 14.4998 7.80903Z"></path>
        </svg></button>`:""}</div>`,o=document.querySelector("body");o&&(o.insertAdjacentHTML("beforeend",n),o.classList.add("u-overflowYHidden")),this.loadImage(e),document.querySelector(".zoomImgClose")?.addEventListener("click",()=>{t.overlayRemove()}),document.querySelector(".mfp-arrow-right")?.addEventListener("click",()=>{t.nextImage()}),document.querySelector(".mfp-arrow-left")?.addEventListener("click",()=>{t.prevImage()})}loadImage(e){let t=new Image,s=document.querySelector(".lds-ripple");s&&(s.style.display="inline-block");let i=document.querySelector(".overlay-image"),n=document.querySelector(".image--nav");n?.classList.add("u-hide"),i.style.display="none",t.onload=()=>{var o=t.width,r=t.height,a=window.innerHeight-140,c=window.innerWidth-80;c<o?(r*=c/o,o=c,a<r&&(o*=a/r,r=a)):a<r&&(o*=a/r,r=a,c<o&&(r*=c/o,o=c)),i.setAttribute("src",e),i.style.width=o+"px",i.style.height=r+"px",i.style.display="block",n?.classList.remove("u-hide"),document.querySelector(".overlay-img-wrap")?.classList.add("is-finieshed"),s.style.display="none"},t.src=e}overlayRemove(){this._remove(document.querySelector(".overlay"));let e=document.querySelector("body");e&&e.classList.remove("u-overflowYHidden")}_remove(e){var t=e.parentNode;t&&t.removeChild(e)}},k=v;var y=class extends l{is_single=!1;post_id=0;is_archive=!1;VERSION="0.4.5";like_btn;selctor=".like-btn";actionDomain=window.actionDomain;constructor(){super(),this.initCopyright(),this.initThemeSwitch(),this.initBack2Top(),this.initSearch()}initSearch(){document.querySelector('[data-action="show-search"]').addEventListener("click",()=>{document.querySelector(".site--header__center .inner").classList.toggle("search--active")})}initBack2Top(){if(document.querySelector(".backToTop")){let e=document.querySelector(".backToTop");window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>200?e.classList.add("is-active"):e.classList.remove("is-active")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}}initCopyright(){let e=`<div class="site--footer__info">
        Theme <a href="https://fatesinger.com/101971" target="_blank">farallon</a> by bigfa / version ${this.VERSION}
    </div>`;document.querySelector(".site--footer__content").insertAdjacentHTML("afterend",e),document.querySelector(".icon--copryrights").addEventListener("click",()=>{document.querySelector(".site--footer__info").classList.toggle("active")})}initThemeSwitch(){let e=localStorage.getItem("theme")?localStorage.getItem("theme"):"auto",t=`<div class="fixed--theme">
        <span class="${e=="dark"?"is-active":""}" data-action-value="dark">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </span>
        <span class="${e=="light"?"is-active":""}" data-action-value="light">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="M4.22 4.22l1.42 1.42"></path>
                <path d="M18.36 18.36l1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="M4.22 19.78l1.42-1.42"></path>
                <path d="M18.36 5.64l1.42-1.42"></path>
            </svg>
        </span>
        <span class="${e=="auto"?"is-active":""}"  data-action-value="auto">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
            </svg>
        </span>
    </div>`;document.querySelector("body").insertAdjacentHTML("beforeend",t),document.querySelectorAll(".fixed--theme span").forEach(s=>{s.addEventListener("click",()=>{s.classList.contains("is-active")||(document.querySelectorAll(".fixed--theme span").forEach(i=>{i.classList.remove("is-active")}),s.dataset.actionValue=="dark"?(localStorage.setItem("theme","dark"),document.querySelector("body").classList.remove("auto"),document.querySelector("body").classList.add("dark"),s.classList.add("is-active")):s.dataset.actionValue=="light"?(localStorage.setItem("theme","light"),document.querySelector("body").classList.remove("auto"),document.querySelector("body").classList.remove("dark"),s.classList.add("is-active")):s.dataset.actionValue=="auto"&&(localStorage.setItem("theme","auto"),document.querySelector("body").classList.remove("dark"),document.querySelector("body").classList.add("auto"),s.classList.add("is-active")))})})}};new S({singleSelector:".post--single",articleSelector:".post--item",likeButtonSelctor:".like-btn",actionDomain:window.actionDomain});new y;new _({selector:".humane--time",timeFormat:window.timeFormat});new m({actionDomain:window.actionDomain});new w({baseAPI:window.dbAPIBase,container:".db--container"});new k;})();
