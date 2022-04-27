let sozler=["fikirlerimi calmaları mühimdeyil mühim olan kendi fikirleri olamaması.","futbolcular gider adamlar kalır","az şeye sahip olanın köleliği de az olur,yaşasın asil yoksulugum"];

const buton=document.getElementById("btnDegistir");
const sonuc=document.getElementById("soz");
const kapsayici=document.getElementById("kapsayici");
const yazar=document.createElement("h5");

kapsayici.appendChild(yazar);

const resim=document.createElement("img");
document.getElementById("kapsayici").appendChild(resim);
resim.setAttribute("src","images/tesla.jpeg");


sonuc.innerHTML=sozler[0];
yazar.innerHTML="TESLA";

buton.addEventListener("click",()=>{
  
  let sayi=Math.floor(Math.random() * 3);
  console.log(sayi);
  sonuc.innerHTML=sozler[sayi];

  let renk1=Math.round(Math.random()*255);
  let renk2=Math.round(Math.random()*255);
  let renk3=Math.round(Math.random()*255);

  document.body.style.background="rgb("+renk1+","+renk2+","+renk3+")";

  if(sayi==0){
    yazar.innerHTML="TESLA";
    resim.setAttribute("src","images/tesla.jpeg");
    kapsayici.style.background="white";
   
  }
  else if(sayi==1){
    yazar.innerHTML="NEDVEND";
    resim.setAttribute("src","images/pavel-nedved.jpg");
    kapsayici.style.background="rgb(252, 249, 251)";
    
  }
  else if(sayi==2){
    yazar.innerHTML="Friedrich Nietzsche";
    kapsayici.setAttribute("src","images/Friedrich Nietzsche.jpg");
    kapsayici.style.background="rgb(196, 174, 189)";
    
  }
})

