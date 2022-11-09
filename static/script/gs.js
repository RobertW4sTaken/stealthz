async function gs(e){e.search.input.placeholder="Search library",e.search.back.style.display="inline",e.search.back.href="#",e.main.library=e.createElement("div",await compileGs(e),{style:{"margin-bottom":"40px"}}),e.main.emptySearch=e.createElement("div",[e.createElement("p","No results found."),e.createElement("p",'<p>Want to suggest a game to be added? Reach out to any staff in our <a href="https://discord.gg/unblock">community</a>.</p>')],{class:"gs-empty",style:{display:"none"}}),e.main.player=e.createElement("div",[e.createElement("iframe",[],{class:"gs-frame",events:{focus(e){e.target.contentWindow.focus()}},attrs:{tabindex:1,src:"about:blank"}}),e.createElement("p",[],{class:"author"}),e.createElement("div",[],{class:"description"})],{class:"gs-player",style:{display:"none"}}),e.search.input.setAttribute("oninput","("+function(){let t=0;e.main.library.querySelectorAll(".gs-entry").forEach((a=>{a.getAttribute("data-title").toLowerCase().includes(e.search.input.value.toLowerCase())?(a.setAttribute("data-active","1"),t++):a.removeAttribute("data-active")})),e.main.library.querySelectorAll(".category").forEach((e=>{e.querySelectorAll(".gs-library .gs-entry[data-active]").length?e.style.removeProperty("display"):e.style.display="none"})),t?(e.main.library.style.removeProperty("display"),e.main.emptySearch.style.display="none"):(e.main.library.style.display="none",e.main.emptySearch.style.display="block")}.toString()+")()")}async function compileGs(e){const t=await fetch("./gs.json"),a=await t.json(),n={multi:[],featured:[],web:[],indie:[],nes:[],snes:[],gba:[],sega:[],gfn:[],n64:[]};for(const t of a){const a=e.createElement("div",[],{class:"gs-entry",style:{background:`url(${t.img})`,"background-size":"cover"},attrs:{"data-title":t.title,"data-active":"1"},events:{click(a){e.main.library.style.display="none",e.main.player.style.display="block",e.search.input.style.display="none",e.search.title.style.display="block",e.search.title.textContent=t.title,window.addEventListener("click",(function t(){if("#gs"!==window.location.hash||!e.main.player)return window.removeEventListener("click",t);e.main.player.querySelector("iframe").contentWindow.focus()})),e.nav.fullscreen=e.createElement("button","fullscreen",{class:"submit",style:{"font-family":"Material Icons","font-size":"30px",color:"var(--accent)",background:"none",border:"none",cursor:"pointer"},events:{click(){e.main.player.querySelector("iframe").requestFullscreen(),e.main.player.querySelector("iframe").contentWindow.focus()}}}),e.main.player.querySelector("iframe").src=t.location,e.main.player.querySelector(".author").textContent=t.author||"",e.main.player.querySelector(".description").textContent=t.description||"",window.scrollTo({top:0}),e.search.back.setAttribute("onclick","("+(()=>{if("#gs"!==window.location.hash)return this.removeAttribute("onclick");a.preventDefault(),e.main.library.style.removeProperty("display"),e.search.input.style.removeProperty("display"),e.search.title.style.display="none",e.search.title.textContent="",e.main.player.style.display="none",e.main.player.querySelector("iframe").src="about:blank",delete e.nav.fullscreen,this.removeAttribute("onclick")}).toString()+")()")}}});t.featured?n.featured.push(a):(n[t.category]||n.indie).push(a)}return[e.createElement("section",[e.createElement("span","Featured",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",n.featured,{class:"gs-library"})],{class:"data-section featured category",attrs:{"data-category":"featured"}}),e.createElement("section",[e.createElement("span","Multiplayer",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",n.multi,{class:"gs-library"})],{class:"data-section multi category",attrs:{"data-category":"multi"}}),e.createElement("section",[e.createElement("span","Mobile & Web",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",n.web,{class:"gs-library"})],{class:"data-section web category",attrs:{"data-category":"web"}}),e.createElement("section",[e.createElement("span","Indie",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",n.indie,{class:"gs-library"})],{class:"data-section indie category",attrs:{"data-category":"indie"}}),e.createElement("section",[e.createElement("span","Nintendo",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",[...n.gba,...n.snes,...n.nes,...n.n64],{class:"gs-library"})],{class:"data-section nintendo category",attrs:{"data-category":"nintendo"}}),e.createElement("section",[e.createElement("span","GeForce Now",{style:{display:"block","margin-bottom":"30px","font-size":"18px","font-weight":"500"}}),e.createElement("div",n.gfn,{class:"gs-library"})],{class:"data-section gfn category",attrs:{"data-category":"gfn"}})]}export{gs};