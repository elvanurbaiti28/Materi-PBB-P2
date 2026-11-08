const $=id=>document.getElementById(id);
const num=s=>parseFloat(String(s).replace(/\./g,"").replace(",","."))||0;
const rp=n=>"Rp"+Math.round(n).toLocaleString("id-ID");
function fmt(e){const d=e.target.value.replace(/\D/g,"");e.target.value=d?Number(d).toLocaleString("id-ID"):"";calc()}
function calc(){
 const njop=num($("njop").value),tkp=num($("tkp").value),njkp=num($("njkp").value),tarif=num($("tarif").value);
 const net=Math.max(njop-tkp,0),dasar=net*njkp/100,pbb=dasar*tarif/100;
 $("o1").textContent=rp(net);$("o2").textContent=rp(dasar);$("o3").textContent=rp(pbb);
 const w=[];if(njkp<20||njkp>100)w.push("NJKP di luar rentang 20%–100%.");if(tarif>0.5)w.push("Tarif melebihi batas maksimal 0,5%.");
 $("o4").textContent=w.join(" ");
}
["njop","tkp"].forEach(i=>$(i).addEventListener("input",fmt));
["njkp","tarif"].forEach(i=>$(i).addEventListener("input",calc));
calc();
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{
 document.querySelectorAll(".tabs button").forEach(x=>x.setAttribute("aria-selected",x===b));
 ["c1","c2"].forEach(id=>$(id).hidden=id!==b.dataset.t)});
const links=[...document.querySelectorAll("#nv a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-30% 0px -60% 0px"});
document.querySelectorAll("main section").forEach(s=>io.observe(s));
