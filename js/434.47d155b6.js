"use strict";(self["webpackChunkbrite"]=self["webpackChunkbrite"]||[]).push([[434],{6194:function(t,e,s){s.d(e,{Z:function(){return $}});var a=s(6252),r=s(9963),i=s(745);const l={class:"d-flex flex-column align-items-center py-3",style:{"background-color":"#343a40"}},n=(0,a._)("img",{src:i,alt:"BRITE",width:"200",height:"60"},null,-1),o={class:"list-group list-group-horizontal"},c={class:"list-group-item bg-transparent border-0"},d=(0,a._)("i",{class:"bi bi-youtube fs-5"},null,-1),u=[d],p={class:"list-group-item bg-transparent border-0"},b=(0,a._)("i",{class:"bi bi-twitter-x fs-5"},null,-1),h=[b],g={class:"list-group-item bg-transparent border-0"},_=(0,a._)("i",{class:"bi bi-facebook fs-5"},null,-1),f=[_],m={class:"list-group-item bg-transparent border-0"},v=(0,a._)("i",{class:"bi bi-instagram fs-5"},null,-1),y=[v],w=(0,a._)("p",{class:"text-primary text-center mb-0"},"Copyright © 此為專案練習，無商業用途。",-1),k=(0,a._)("p",{class:"text-primary text-center"},"by Fulton",-1);function x(t,e){return(0,a.wg)(),(0,a.iD)("footer",l,[n,(0,a._)("ul",o,[(0,a._)("li",c,[(0,a._)("a",{href:"#",onClick:e[0]||(e[0]=(0,r.iM)((()=>{}),["prevent"]))},u)]),(0,a._)("li",p,[(0,a._)("a",{href:"#",onClick:e[1]||(e[1]=(0,r.iM)((()=>{}),["prevent"]))},h)]),(0,a._)("li",g,[(0,a._)("a",{href:"#",onClick:e[2]||(e[2]=(0,r.iM)((()=>{}),["prevent"]))},f)]),(0,a._)("li",m,[(0,a._)("a",{href:"#",onClick:e[3]||(e[3]=(0,r.iM)((()=>{}),["prevent"]))},y)])]),w,k])}var S=s(3744);const C={},W=(0,S.Z)(C,[["render",x]]);var $=W},1829:function(t,e,s){s.d(e,{Z:function(){return O}});var a=s(6252),r=s(3577),i=s(745);const l={class:"navbar navbar-expand-lg sticky-top bg-white shadow"},n={class:"container"},o=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),c=(0,a._)("h1",{class:"visually-hidden"},"BRITE",-1),d=(0,a._)("img",{class:"logo",src:i,alt:"BRITE"},null,-1),u={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel","data-bs-dismiss":"offcanvas"},p=(0,a._)("div",{class:"offcanvas-header d-flex justify-content-end d-lg-none"},[(0,a._)("button",{class:"btn-close text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),b={class:"offcanvas-body"},h={class:"navbar-nav justify-content-center flex-grow-1 pe-3"},g={class:"nav-item px-2"},_={class:"nav-item px-2"},f={class:"nav-item px-2"},m={class:"nav-item px-2"},v={class:"d-flex"},y=(0,a._)("i",{class:"bi bi-person-fill text-secondary"},null,-1),w={class:"position-relative align-self-center"},k=(0,a._)("i",{class:"bi bi-bag-fill text-secondary"},null,-1),x={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},S=(0,a._)("span",{class:"visually-hidden"},"unread messages",-1);function C(t,e,s,i,C,W){const $=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a._)("div",n,[o,(0,a.Wm)($,{to:"/",class:"navbar-brand"},{default:(0,a.w5)((()=>[c,d])),_:1}),(0,a._)("div",u,[p,(0,a._)("div",b,[(0,a._)("ul",h,[(0,a._)("li",g,[(0,a.Wm)($,{to:"/about",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})]),(0,a._)("li",_,[(0,a.Wm)($,{to:"/products",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Products")])),_:1})]),(0,a._)("li",f,[(0,a.Wm)($,{to:"/faq",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("FAQ")])),_:1})]),(0,a._)("li",m,[(0,a.Wm)($,{to:"/contact",class:"nav-link link-secondary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact")])),_:1})])])])]),(0,a._)("div",v,[(0,a.Wm)($,{to:"/login",class:"fs-3 px-1"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a._)("div",w,[(0,a.Wm)($,{to:"/cart",class:"fs-5 px-1"},{default:(0,a.w5)((()=>[k])),_:1}),C.carts.length>0?((0,a.wg)(),(0,a.iD)("span",x,[(0,a.Uk)((0,r.zw)(W.cartNum)+" ",1),S])):(0,a.kq)("",!0)])])])])}var W={data(){return{carts:[],isSidebarOpen:!1}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/test666520/cart";this.$http.get(t).then((t=>{this.carts=t.data.data.carts})).catch((t=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},observeSidebar(){const t=new MutationObserver((t=>{t.forEach((t=>{"dialog"===t.target.getAttribute("role")?(this.isSidebarOpen=!0,this.$emit("sidebar-status",!0)):(this.isSidebarOpen=!1,this.$emit("sidebar-status",!1))}))}));t.observe(document.getElementById("offcanvasNavbar"),{attributes:!0,attributeFilter:["role"]})}},computed:{cartNum(){return this.carts.length}},mounted(){this.$emitter.on("update-cart",(t=>{this.carts=t})),this.observeSidebar()},created(){this.getCart()}},$=s(3744);const z=(0,$.Z)(W,[["render",C]]);var O=z},4831:function(t,e,s){s.d(e,{Z:function(){return w}});var a=s(6252),r=s(3577);const i={class:"container"},l={class:"row"},n={class:"col-lg-8 offset-lg-2 col-10 offset-1"},o={class:"position-relative"},c={class:"d-flex justify-content-between"},d={class:"d-flex flex-column w-25 align-items-center"},u=(0,a._)("span",null,"Cart",-1),p={class:"d-flex flex-column w-25 align-items-center"},b=(0,a._)("span",null,"Order",-1),h={class:"d-flex flex-column w-25 align-items-center"},g=(0,a._)("span",null,"Checkout",-1),_={class:"progress position-absolute translate-middle w-75",style:{"z-index":"-1",height:"0.125rem",top:"33%",left:"50%"}};function f(t,e,s,f,m,v){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",l,[(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("i",{class:(0,r.C_)(["fs-2 text-primary bg-white",`${m.steps.firstStep}`])},null,2),u]),(0,a._)("div",p,[(0,a._)("i",{class:(0,r.C_)(["fs-2 bg-white",`${m.steps.secondStep}`])},null,2),b]),(0,a._)("div",h,[(0,a._)("i",{class:(0,r.C_)(["fs-2 bg-white",`${m.steps.thirdStep}`])},null,2),g])]),(0,a._)("div",_,[(0,a._)("div",{class:"progress-bar",role:"progressbar",style:(0,r.j5)({width:t.progressWidth}),"aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},null,4)])])])])])}var m={props:["title"],data(){return{steps:{firstStep:"",secondStep:"",thirdStep:""}}},methods:{barStatus(){switch(this.title){case"Cart":this.steps.firstStep="bi bi-1-circle text-primary",this.steps.secondStep="bi bi-2-circle text-black-50",this.steps.thirdStep="bi bi-3-circle text-black-50",this.progressWidth="0%";break;case"Order":this.steps.firstStep="bi bi-check-circle-fill text-primary",this.steps.secondStep="bi bi-2-circle text-primary",this.steps.thirdStep="bi bi-3-circle text-black-50",this.progressWidth="50%";break;case"Checkout":this.steps.firstStep="bi bi-check-circle-fill text-primary",this.steps.secondStep="bi bi-check-circle-fill text-primary",this.steps.thirdStep="bi bi-3-circle text-primary",this.progressWidth="100%";break;default:break}}},created(){this.barStatus()}},v=s(3744);const y=(0,v.Z)(m,[["render",f]]);var w=y},8998:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var a=s(6252),r=s(9963),i=s(3577),l=s.p+"img/Thank You.9688774f.jpg";const n={class:"container"},o={class:"my-5 row justify-content-center",style:{"min-height":"75vh"}},c={class:"table align-middle text-center"},d=(0,a._)("thead",null,[(0,a._)("th",null,"Product"),(0,a._)("th",null,"Quantity"),(0,a._)("th",null,"Color"),(0,a._)("th",null,"Price")],-1),u=(0,a._)("td",{colspan:"2"},null,-1),p=(0,a._)("td",{class:"text-primary"},"Total",-1),b={class:"text-primary"},h={class:"table"},g=(0,a._)("th",{width:"100"},"Email",-1),_=(0,a._)("th",null,"Name",-1),f=(0,a._)("th",null,"Phone",-1),m=(0,a._)("th",null,"Address",-1),v=(0,a._)("th",null,"Note",-1),y=(0,a._)("th",null,"Statement",-1),w={key:0,class:"text-danger"},k={key:1,class:"text-primary"},x={key:0,class:"text-end"},S=(0,a._)("button",{class:"btn btn-danger",type:"sumit"},"Confirm",-1),C=[S],W={key:1,class:"col text-center"},$=(0,a._)("img",{class:"img-fluid mb-3",src:l,alt:"Thank You"},null,-1),z={class:"mb-0"},O={class:"text-primary"},D=(0,a._)("span",{class:"badge rounded-pill bg-primary px-3 py-2 mb-3"},"Paied",-1),N=(0,a._)("p",{class:"fs-5 mb-1"},"Thank you for your purchase",-1),I=(0,a._)("p",{class:"fs-5"},"There are more products are available for you",-1);function T(t,e,s,l,S,T){const Z=(0,a.up)("Loading"),F=(0,a.up)("FrontNavbar"),U=(0,a.up)("StepsBar"),j=(0,a.up)("router-link"),B=(0,a.up)("FrontFooter");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Z,{active:S.isLoading},null,8,["active"]),(0,a.Wm)(F),S.order.is_paid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(U,{key:0,class:"my-4",title:S.stepsTitle},null,8,["title"])),(0,a._)("div",n,[(0,a._)("div",o,[S.order.is_paid?((0,a.wg)(),(0,a.iD)("div",W,[$,(0,a._)("p",z,[(0,a.Uk)("Order Number: "),(0,a._)("span",O,(0,i.zw)(S.orderId),1)]),D,N,I,(0,a.Wm)(j,{to:"/products",role:"button",class:"btn btn-primary btn-lg text-white mb-5"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Let's find out ")])),_:1})])):((0,a.wg)(),(0,a.iD)("form",{key:0,class:"col-md-6",onSubmit:e[0]||(e[0]=(0,r.iM)(((...t)=>T.payOrder&&T.payOrder(...t)),["prevent"]))},[(0,a._)("table",c,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(S.order.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,i.zw)(t.product.title),1),(0,a._)("td",null,(0,i.zw)(t.qty),1),(0,a._)("td",null,(0,i.zw)(t.product.unit),1),(0,a._)("td",null,(0,i.zw)(t.final_total),1)])))),128))]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[u,p,(0,a._)("td",b,(0,i.zw)(S.order.total),1)])])]),(0,a._)("table",h,[(0,a._)("tbody",null,[(0,a._)("tr",null,[g,(0,a._)("td",null,(0,i.zw)(S.order.user.email),1)]),(0,a._)("tr",null,[_,(0,a._)("td",null,(0,i.zw)(S.order.user.name),1)]),(0,a._)("tr",null,[f,(0,a._)("td",null,(0,i.zw)(S.order.user.tel),1)]),(0,a._)("tr",null,[m,(0,a._)("td",null,(0,i.zw)(S.order.user.address),1)]),(0,a._)("tr",null,[v,(0,a._)("td",null,(0,i.zw)(S.order.message),1)]),(0,a._)("tr",null,[y,(0,a._)("td",null,[S.order.is_paid?((0,a.wg)(),(0,a.iD)("span",k,"Paied")):((0,a.wg)(),(0,a.iD)("span",w,"Unpay"))])])])]),!1===S.order.is_paid?((0,a.wg)(),(0,a.iD)("div",x,C)):(0,a.kq)("",!0)],32))])]),(0,a.Wm)(B)],64)}var Z=s(1829),F=s(6194),U=s(4831),j={components:{FrontNavbar:Z.Z,FrontFooter:F.Z,StepsBar:U.Z},data(){return{stepsTitle:"Checkout",order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/test666520/order/${this.orderId}`;this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order)})).catch((t=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/test666520/pay/${this.orderId}`;this.$http.post(t).then((t=>{t.data.success&&this.getOrder()})).catch((t=>{this.$emitter.emit("push-message",{style:"danger",title:"Something went wrong, please try again."})}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},B=s(3744);const E=(0,B.Z)(j,[["render",T]]);var L=E},745:function(t,e,s){t.exports=s.p+"img/BRITE Logo.ea464648.png"}}]);
//# sourceMappingURL=434.47d155b6.js.map