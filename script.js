const introTitle = document.getElementById("introTitle");
const introSub = document.getElementById("introSub");
const enterBtn = document.getElementById("enterBtn");

function typeText(element, text, speed, callback){
  let i=0;
  const timer=setInterval(()=>{
    element.textContent=text.slice(0,++i);
    if(i>=text.length){clearInterval(timer); if(callback) callback();}
  },speed);
}

window.addEventListener("load",()=>{
  setTimeout(()=>{
    typeText(introTitle,"Hey, Mama...",90,()=>{
      setTimeout(()=>{
        typeText(introSub,"Dobby made something for you.",65,()=>{
          setTimeout(()=>{
            enterBtn.disabled=false;
            enterBtn.classList.add("ready");
          },450);
        });
      },500);
    });
  },500);
});

function enterLoveStory(){
  burst(10);
  document.getElementById("introScreen").classList.add("leaving");
  setTimeout(()=>document.getElementById("home").scrollIntoView({behavior:"smooth"}),450);
}

function begin(){
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("content").scrollIntoView({behavior:"smooth"});
  burst(18);
}
function flip(card){card.classList.toggle("open");}
function burst(amount=20){
  for(let i=0;i<amount;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="heart";
      h.textContent=["♥","♡","❤","✦"][Math.floor(Math.random()*4)];
      h.style.left=Math.random()*100+"vw";
      h.style.bottom="-25px";
      h.style.fontSize=(14+Math.random()*22)+"px";
      h.style.animationDuration=(3+Math.random()*3)+"s";
      document.getElementById("hearts").appendChild(h);
      setTimeout(()=>h.remove(),6500);
    },i*80);
  }
}
function celebrate(){
  burst(60);
  const s=document.getElementById("secret");
  s.textContent="I love you, Mama. More than this little website could ever explain. — Dobby ❤️";
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
