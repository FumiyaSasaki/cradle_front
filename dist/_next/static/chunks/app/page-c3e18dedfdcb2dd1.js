(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6163:function(e,t,i){Promise.resolve().then(i.bind(i,9504)),Promise.resolve().then(i.bind(i,3140)),Promise.resolve().then(i.bind(i,5218)),Promise.resolve().then(i.bind(i,8199)),Promise.resolve().then(i.bind(i,9806)),Promise.resolve().then(i.bind(i,2591)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,3043)),Promise.resolve().then(i.bind(i,4521)),Promise.resolve().then(i.bind(i,1645)),Promise.resolve().then(i.bind(i,8501))},8022:function(e,t,i){"use strict";var n=i(3963);t.Z=void 0;var r=n(i(9118)),s=i(7437);t.Z=(0,r.default)((0,s.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-10 1H8v-2h4V8l4 4-4 4z"}),"ArrowCircleRight")},7076:function(e,t,i){"use strict";var n=i(3963);t.Z=void 0;var r=n(i(9118)),s=i(7437);t.Z=(0,r.default)([(0,s.jsx)("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"},"0"),(0,s.jsx)("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"},"1")],"MenuBook")},3140:function(e,t,i){"use strict";i.r(t),i.d(t,{appBarClasses:function(){return r.Z},default:function(){return n.Z},getAppBarUtilityClass:function(){return r.I}});var n=i(8247),r=i(1086)},5218:function(e,t,i){"use strict";i.r(t),i.d(t,{boxClasses:function(){return r.Z},default:function(){return n.Z}});var n=i(7999),r=i(7126)},8199:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n.Z},getIconButtonUtilityClass:function(){return r.r},iconButtonClasses:function(){return r.Z}});var n=i(4614),r=i(415)},2591:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n.Z},getTypographyUtilityClass:function(){return r.f},typographyClasses:function(){return r.Z}});var n=i(3719),r=i(8958)},3043:function(e,t,i){"use strict";i.d(t,{BlogBlock:function(){return x}});var n=i(7437),r=i(7999),s=i(3719),o=i(2030),l=i(2265),a=i(7138),c=i(7076);let d=e=>e.toLocaleDateString("ja",{year:"numeric",month:"short",day:"numeric"});var p=i(9609);let x=l.memo(e=>{let{blogsData:t}=e;return(0,n.jsxs)(r.Z,{sx:u.container,children:[(0,n.jsxs)(r.Z,{sx:u.titleBox,children:[(0,n.jsx)(s.Z,{sx:u.title,children:"BLOG"}),(0,n.jsx)(c.Z,{})]}),(0,n.jsx)(r.Z,{sx:u.itemContainer,children:t.map(e=>(0,n.jsxs)(a.default,{href:"/",children:[(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)("img",{alt:"",src:p.v.imageUrl,width:"300px",height:"200px",style:{borderRadius:"4px"}}),(0,n.jsxs)(r.Z,{sx:u.explanationBox,children:[(0,n.jsxs)(r.Z,{sx:u.textBox,children:[(0,n.jsx)(s.Z,{sx:u.contentTitle,children:e.title}),(0,n.jsx)(s.Z,{sx:u.contentText,children:e.content})]}),(0,n.jsx)(s.Z,{sx:u.contentDate,children:d(e.updatedAt)})]})]}),(0,n.jsx)(o.Z,{variant:"middle",sx:{marginTop:2}})]},e.uid))})]})});x.displayName="BlogBlock";let u={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"whitesmoke",paddingBottom:10},titleBox:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:3,borderBottom:"solid",borderWidth:"4px",width:"8%",marginY:6},title:{fontSize:"24px",fontWeight:"bold"},itemContainer:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"80%",backgroundColor:"white"},itemBox:{display:"flex",flexDirection:"row",gap:5,margin:2},explanationBox:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"},textBox:{display:"flex",flexDirection:"column",gap:1},contentTitle:{fontSize:"20px",fontWeight:"bold"},contentText:{fontSize:"16px"},contentDate:{fontSize:"14px",backgroundColor:"lightsteelblue",borderRadius:"4px",padding:"4px",width:"10%",textAlign:"center"}}},4521:function(e,t,i){"use strict";i.d(t,{PropertyBlock:function(){return p}});var n=i(7437),r=i(7999),s=i(3719),o=i(8022),l=i(2265),a=i(7138),c=i(9702),d=i(9609);let p=l.memo(e=>{let{propertiesData:t}=e,i=(0,l.useCallback)((0,c.F)(e=>e.setPropertyState),[]);return(0,l.useEffect)(()=>{i(t)},[]),(0,n.jsxs)(r.Z,{sx:x.container,children:[(0,n.jsx)(s.Z,{sx:x.title,children:"物件一覧"}),(0,n.jsx)(r.Z,{sx:x.itemContainer,children:t.map(e=>(0,n.jsx)(r.Z,{sx:x.itemBox,children:(0,n.jsxs)(a.default,{href:"/detail/".concat(e.uid),children:[(0,n.jsx)(r.Z,{sx:x.icon,bgcolor:e.isVacancy?"yellow":"white",children:(0,n.jsx)("span",{children:e.isVacancy?"募集中":"満室"})}),(0,n.jsx)("img",{alt:"",src:d.v.imageUrl,width:"100%",height:"auto"}),(0,n.jsxs)(r.Z,{sx:x.explanationBox,children:[(0,n.jsxs)(r.Z,{sx:x.textBox,children:[(0,n.jsx)(s.Z,{sx:x.name,children:e.name}),(0,n.jsxs)(s.Z,{children:[e.prefecture," / ",e.city]})]}),(0,n.jsx)(o.Z,{sx:x.arrowIcon})]})]})},e.uid))})]})});p.displayName="PropertyBlock";let x={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{fontSize:"22px",color:"white",paddingY:2,backgroundColor:"gray",width:"100%",textAlign:"center"},itemContainer:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:8,width:"80%",gap:4},itemBox:{boxShadow:"2px 2px 4px gray",width:"30%",position:"relative"},icon:{height:"70px",width:"70px",borderRadius:"50%",lineHeight:"70px",textAlign:"center",boxShadow:"0 0 8px gray",position:"absolute",right:"-6%",top:"-6%"},explanationBox:{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingX:2,paddingY:1},textBox:{display:"flex",flexDirection:"column",gap:1},name:{fontSize:"18px",fontWeight:"bold"},arrowIcon:{alignSelf:"flex-end",fontSize:"28px"}}},1645:function(e,t,i){"use strict";i.d(t,{TopImageBlock:function(){return l}});var n=i(7437),r=i(7999),s=i(2265),o=i(3267);i(3034);let l=s.memo(()=>(0,n.jsx)(o.tq,{slidesPerView:1,loop:!0,autoplay:!0,className:"mySwiper",style:{width:"100%"},children:["/home/topImageDummy.png"].map(e=>(0,n.jsx)(o.o5,{children:(0,n.jsx)(r.Z,{sx:a.swiperItem,children:(0,n.jsx)("img",{alt:"",src:e,width:"100%",height:"500px"})})},e))}));l.displayName="TopImageBlock";let a={}},8501:function(e,t,i){"use strict";i.d(t,{InquiryBlock:function(){return x}});var n=i(7437),r=i(7999),s=i(3719),o=i(3054),l=i(2030),a=i(6548),c=i(2265),d=i(7709),p=i(559);let x=c.memo(()=>(0,n.jsxs)(r.Z,{sx:u.container,children:[(0,n.jsxs)(r.Z,{sx:u.titleBox,children:[(0,n.jsx)(s.Z,{sx:u.title,children:"CONTACT"}),(0,n.jsx)(d.Z,{})]}),(0,n.jsxs)(r.Z,{sx:u.itemContainer,children:[(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)(s.Z,{sx:u.required,children:"お名前"}),(0,n.jsx)(o.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,n.jsx)(l.Z,{variant:"middle"}),(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)(s.Z,{width:"10%",children:"電話番号"}),(0,n.jsx)(o.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,n.jsx)(l.Z,{variant:"middle"}),(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)(s.Z,{sx:u.required,children:"email"}),(0,n.jsx)(o.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,n.jsx)(l.Z,{variant:"middle"}),(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)(s.Z,{sx:u.required,children:"件名"}),(0,n.jsx)(o.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,n.jsx)(l.Z,{variant:"middle"}),(0,n.jsxs)(r.Z,{sx:u.itemBox,children:[(0,n.jsx)(s.Z,{sx:u.required,children:"内容"}),(0,n.jsx)(o.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0},multiline:!0,rows:10})]})]}),(0,n.jsx)(a.Z,{variant:"contained",endIcon:(0,n.jsx)(p.Z,{}),sx:u.button,children:"送信"})]}));x.displayName="InquiryBlock";let u={container:{display:"flex",flexDirection:"column",alignItems:"center"},titleBox:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:3,borderBottom:"solid",borderWidth:"4px",width:"10%",marginY:6},title:{fontSize:"24px",fontWeight:"bold"},itemContainer:{display:"flex",flexDirection:"column",width:"50%",gap:2},itemBox:{display:"flex",flexDirection:"row",alignItems:"center",gap:5,margin:2},required:{width:"10%",position:"relative","&:after":{content:'"必須"',backgroundColor:"red",color:"#fff",fontSize:"12px",fontWeight:"bold",minWidth:"10px",padding:"3px 7px",margin:"0px 5px",lineHeight:1,whiteSpace:"nowrap",textAlign:"center",borderRadius:"10px",display:"inline-block",position:"absolute",top:"50%",transform:"translateY(-50%)",left:"80%"}},button:{width:"20%",paddingY:1,fontSize:"18px",marginTop:2}}},9702:function(e,t,i){"use strict";i.d(t,{F:function(){return n}});let n=(0,i(9099).Ue)(e=>({propertyState:{},setPropertyState:t=>e(e=>(t.forEach(t=>{e.propertyState[t.uid]=t}),{propertyState:e.propertyState}))}))},9609:function(e,t,i){"use strict";var n,r;i.d(t,{v:function(){return n}}),(r=n||(n={})).imageUrl="http://fs561381.xsrv.jp/img/test.png",r.blogData=[{uid:"news123456789",title:"title1",content:"content1content1content1content1content1content1content1content1content1",imageUrls:[r.imageUrl],updatedAt:new Date},{uid:"news223456789",title:"title1",content:"content1",imageUrls:[r.imageUrl],updatedAt:new Date}],r.propatyImages=["https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg","https://swiperjs.com/demos/images/nature-3.jpg","https://swiperjs.com/demos/images/nature-4.jpg","https://swiperjs.com/demos/images/nature-5.jpg","https://swiperjs.com/demos/images/nature-6.jpg","https://swiperjs.com/demos/images/nature-7.jpg","https://swiperjs.com/demos/images/nature-8.jpg","https://swiperjs.com/demos/images/nature-9.jpg","https://swiperjs.com/demos/images/nature-10.jpg"],r.propatyImages2=[{url:"https://swiperjs.com/demos/images/nature-1.jpg",title:"title1",content:"content1"},{url:"https://swiperjs.com/demos/images/nature-2.jpg",title:"title2",content:"content2"},{url:"https://swiperjs.com/demos/images/nature-3.jpg",title:"title3",content:"content3"},{url:"https://swiperjs.com/demos/images/nature-4.jpg",title:"title4",content:"content4"},{url:"https://swiperjs.com/demos/images/nature-5.jpg",title:"title5",content:"content5"},{url:"https://swiperjs.com/demos/images/nature-6.jpg",title:"title6",content:"content6"},{url:"https://swiperjs.com/demos/images/nature-7.jpg",title:"title7",content:"content7"},{url:"https://swiperjs.com/demos/images/nature-8.jpg",title:"title8",content:"content8"},{url:"https://swiperjs.com/demos/images/nature-9.jpg",title:"title9",content:"content9"},{url:"https://swiperjs.com/demos/images/nature-10.jpg",title:"title10",content:"content10"}]}},function(e){e.O(0,[384,234,942,971,23,744],function(){return e(e.s=6163)}),_N_E=e.O()}]);