(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{1077:function(e,t,n){Promise.resolve().then(n.bind(n,5765))},5765:function(e,t,n){"use strict";n.d(t,{DetailPage:function(){return C}});var i=n(7437),s=n(2265),r=n(7999),l=n(3719),o=n(9702);let a=async(e,t)=>{try{return(await fetch("http://localhost:3001/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:t})).json()}catch(e){throw console.log(e),Error("failed.")}},d=async e=>{let t=JSON.stringify({uid:e});return await a("property/getpropertybyuid",t)};var c=n(3267);n(8142),n(3034),n(3435),n(4885),n(4384);var p=n(6341),x=n(9609);let m=s.memo(()=>{let[e,t]=(0,s.useState)(null),[n,o]=(0,s.useState)(""),[a,d]=(0,s.useState)(1),m=(0,s.useCallback)((e,t)=>{o(e),d(t+1)},[]);return(0,i.jsxs)(r.Z,{sx:u.container,children:[(0,i.jsx)(c.tq,{spaceBetween:10,navigation:!0,thumbs:{swiper:e},modules:[p.Rv,p.W_,p.o3],className:"mySwiper_top",children:x.v.propatyImages2.map((e,t)=>(0,i.jsx)(c.o5,{onClick:()=>m(e.title,t),children:(0,i.jsx)("img",{src:e.url,className:"top_image"})},e.url))}),(0,i.jsxs)(r.Z,{sx:u.middleBox,children:[(0,i.jsx)(l.Z,{sx:u.middleBoxText,children:n}),(0,i.jsxs)(l.Z,{sx:u.middleBoxText,children:[a,"/",x.v.propatyImages2.length]})]}),(0,i.jsx)(c.tq,{onSwiper:t,spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,modules:[p.Rv,p.W_,p.o3],className:"mySwiper_under",children:x.v.propatyImages2.map((e,t)=>(0,i.jsx)(c.o5,{onClick:()=>m(e.title,t),className:"swipers_slide",children:(0,i.jsx)("img",{src:e.url,className:"under_image"})},e.url))})]})});m.displayName="ImageBlock";let u={container:{width:"50%"},middleBox:{backgroundColor:"gray",padding:1.5,display:"flex",flexDirection:"row",justifyContent:"space-between"},middleBoxText:{color:"white"}};var j=n(7818);let h=s.memo(e=>{let{name:t,latitude:l,longitude:o}=e,a=s.useMemo(()=>(0,j.default)(()=>Promise.all([n.e(690),n.e(212),n.e(994)]).then(n.bind(n,4994)),{loadableGenerated:{webpack:()=>[4994]},loading:()=>(0,i.jsx)("p",{children:"A map is loading"}),ssr:!1}),[]);return(0,i.jsx)(r.Z,{sx:g.container,children:(0,i.jsx)(a,{name:t,latitude:l,longitude:o})})});h.displayName="MapBlock";let g={container:{width:"50%",border:"2px solid gray",padding:1}},f=s.memo(e=>{let{property:t}=e,n=s.memo(e=>{let{label:t,content:n,fullwidth:s}=e;return(0,i.jsxs)(r.Z,{width:s?"100%":"50%",sx:w.itemBox,children:[(0,i.jsx)(l.Z,{sx:w.label,children:t}),(0,i.jsx)(l.Z,{sx:w.content,children:n})]})});return n.displayName="ItemBox",(0,i.jsxs)(r.Z,{sx:w.container,children:[(0,i.jsx)(n,{label:"所在地",content:t.prefecture+t.city+t.town+t.address+t.building,fullwidth:!0}),(0,i.jsxs)(r.Z,{sx:w.unitItemBox,children:[(0,i.jsx)(n,{label:"家賃",content:t.rent+"万円"}),(0,i.jsx)(n,{label:"築年数",content:t.age+"年"})]}),(0,i.jsxs)(r.Z,{sx:w.unitItemBox,children:[(0,i.jsx)(n,{label:"礼金",content:t.keyMoney+"万円"}),(0,i.jsx)(n,{label:"敷金",content:t.deposit+"万円"})]}),(0,i.jsxs)(r.Z,{sx:w.unitItemBox,children:[(0,i.jsx)(n,{label:"向き",content:t.direction+"向き"}),(0,i.jsx)(n,{label:"駅から",content:t.distanceMinutes+"分"})]}),(0,i.jsxs)(r.Z,{sx:w.unitItemBox,children:[(0,i.jsx)(n,{label:"間取り",content:t.floorPlan}),(0,i.jsx)(n,{label:"専有面積",content:t.occupancyArea+"㎠"})]})]})});f.displayName="DetailItemBlock";let w={container:{display:"flex",flexDirection:"column",width:"50%",gap:2},itemBox:{display:"flex",flexDirection:"row",border:"2px solid gray",gap:2},unitItemBox:{display:"flex",flexDirection:"row"},label:{backgroundColor:"gray",paddingY:2,width:"20%",textAlign:"center"},content:{padding:2}};var y=n(8247),b=n(9806),Z=n(4614),B=n(9504),k=n(7138);let I=s.memo(e=>{let{isBack:t}=e;return(0,i.jsx)(y.Z,{sx:v.appBar,children:(0,i.jsxs)(b.default,{sx:v.toolbar,children:[(0,i.jsx)(l.Z,{sx:v.title,children:"クレイドル"}),(0,i.jsx)(Z.Z,{children:t?(0,i.jsx)(k.default,{href:"/",children:"HOME"}):(0,i.jsx)(B.default,{})})]})})});I.displayName="Header";let v={appBar:{backgroundColor:"white",height:"6%"},toolbar:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},title:{color:"black",fontSize:"22px",fontWeight:"500"}};var S=n(8501);let C=s.memo(e=>{let{uid:t}=e,[n,a]=(0,s.useState)((0,o.F)().propertyState[t]);return(0,s.useEffect)(()=>{n||d(t).then(e=>a(e))},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(I,{isBack:!0}),n&&(0,i.jsxs)(r.Z,{sx:D.container,children:[(0,i.jsxs)(r.Z,{sx:D.titleBox,children:[(0,i.jsx)(l.Z,{sx:D.title,children:n.name}),(0,i.jsxs)(l.Z,{sx:D.title,children:["家賃・",n.rent,"万円"]})]}),(0,i.jsx)(m,{}),(0,i.jsx)(f,{property:n}),(0,i.jsx)(h,{name:n.name,latitude:n.latitude?n.latitude:34.70250197358303,longitude:n.longitude?n.longitude:135.49595618224777})]}),(0,i.jsx)(S.InquiryBlock,{})]})});C.displayName="DetailPage";let D={container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:3,marginY:3},titleBox:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50%",boxShadow:"2px 2px 4px gray",borderTop:"solid green",padding:1},title:{fontSize:"22px",fontWeight:"bold"}}},8501:function(e,t,n){"use strict";n.d(t,{InquiryBlock:function(){return x}});var i=n(7437),s=n(7999),r=n(3719),l=n(3054),o=n(2030),a=n(6548),d=n(2265),c=n(7709),p=n(559);let x=d.memo(()=>(0,i.jsxs)(s.Z,{sx:m.container,children:[(0,i.jsxs)(s.Z,{sx:m.titleBox,children:[(0,i.jsx)(r.Z,{sx:m.title,children:"CONTACT"}),(0,i.jsx)(c.Z,{})]}),(0,i.jsxs)(s.Z,{sx:m.itemContainer,children:[(0,i.jsxs)(s.Z,{sx:m.itemBox,children:[(0,i.jsx)(r.Z,{sx:m.required,children:"お名前"}),(0,i.jsx)(l.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,i.jsx)(o.Z,{variant:"middle"}),(0,i.jsxs)(s.Z,{sx:m.itemBox,children:[(0,i.jsx)(r.Z,{width:"10%",children:"電話番号"}),(0,i.jsx)(l.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,i.jsx)(o.Z,{variant:"middle"}),(0,i.jsxs)(s.Z,{sx:m.itemBox,children:[(0,i.jsx)(r.Z,{sx:m.required,children:"email"}),(0,i.jsx)(l.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,i.jsx)(o.Z,{variant:"middle"}),(0,i.jsxs)(s.Z,{sx:m.itemBox,children:[(0,i.jsx)(r.Z,{sx:m.required,children:"件名"}),(0,i.jsx)(l.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0}})]}),(0,i.jsx)(o.Z,{variant:"middle"}),(0,i.jsxs)(s.Z,{sx:m.itemBox,children:[(0,i.jsx)(r.Z,{sx:m.required,children:"内容"}),(0,i.jsx)(l.Z,{required:!0,fullWidth:!0,InputLabelProps:{shrink:!0},multiline:!0,rows:10})]})]}),(0,i.jsx)(a.Z,{variant:"contained",endIcon:(0,i.jsx)(p.Z,{}),sx:m.button,children:"送信"})]}));x.displayName="InquiryBlock";let m={container:{display:"flex",flexDirection:"column",alignItems:"center"},titleBox:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:3,borderBottom:"solid",borderWidth:"4px",width:"10%",marginY:6},title:{fontSize:"24px",fontWeight:"bold"},itemContainer:{display:"flex",flexDirection:"column",width:"50%",gap:2},itemBox:{display:"flex",flexDirection:"row",alignItems:"center",gap:5,margin:2},required:{width:"10%",position:"relative","&:after":{content:'"必須"',backgroundColor:"red",color:"#fff",fontSize:"12px",fontWeight:"bold",minWidth:"10px",padding:"3px 7px",margin:"0px 5px",lineHeight:1,whiteSpace:"nowrap",textAlign:"center",borderRadius:"10px",display:"inline-block",position:"absolute",top:"50%",transform:"translateY(-50%)",left:"80%"}},button:{width:"20%",paddingY:1,fontSize:"18px",marginTop:2}}},9702:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});let i=(0,n(9099).Ue)(e=>({propertyState:{},setPropertyState:t=>e(e=>(t.forEach(t=>{e.propertyState[t.uid]=t}),{propertyState:e.propertyState}))}))},9609:function(e,t,n){"use strict";var i,s;n.d(t,{v:function(){return i}}),(s=i||(i={})).imageUrl="http://fs561381.xsrv.jp/img/test.png",s.blogData=[{uid:"news123456789",title:"title1",content:"content1content1content1content1content1content1content1content1content1",imageUrls:[s.imageUrl],updatedAt:new Date},{uid:"news223456789",title:"title1",content:"content1",imageUrls:[s.imageUrl],updatedAt:new Date}],s.propatyImages=["https://swiperjs.com/demos/images/nature-1.jpg","https://swiperjs.com/demos/images/nature-2.jpg","https://swiperjs.com/demos/images/nature-3.jpg","https://swiperjs.com/demos/images/nature-4.jpg","https://swiperjs.com/demos/images/nature-5.jpg","https://swiperjs.com/demos/images/nature-6.jpg","https://swiperjs.com/demos/images/nature-7.jpg","https://swiperjs.com/demos/images/nature-8.jpg","https://swiperjs.com/demos/images/nature-9.jpg","https://swiperjs.com/demos/images/nature-10.jpg"],s.propatyImages2=[{url:"https://swiperjs.com/demos/images/nature-1.jpg",title:"title1",content:"content1"},{url:"https://swiperjs.com/demos/images/nature-2.jpg",title:"title2",content:"content2"},{url:"https://swiperjs.com/demos/images/nature-3.jpg",title:"title3",content:"content3"},{url:"https://swiperjs.com/demos/images/nature-4.jpg",title:"title4",content:"content4"},{url:"https://swiperjs.com/demos/images/nature-5.jpg",title:"title5",content:"content5"},{url:"https://swiperjs.com/demos/images/nature-6.jpg",title:"title6",content:"content6"},{url:"https://swiperjs.com/demos/images/nature-7.jpg",title:"title7",content:"content7"},{url:"https://swiperjs.com/demos/images/nature-8.jpg",title:"title8",content:"content8"},{url:"https://swiperjs.com/demos/images/nature-9.jpg",title:"title9",content:"content9"},{url:"https://swiperjs.com/demos/images/nature-10.jpg",title:"title10",content:"content10"}]},8142:function(){}},function(e){e.O(0,[384,234,942,229,971,23,744],function(){return e(e.s=1077)}),_N_E=e.O()}]);