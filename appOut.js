(()=>{localStorage.authToken?(F(),console.log("logged in!")):(alert("You must be logged in to access this page"),window.location.href="/");var c=document.getElementById("entryNameSelect"),s,g,b,d,E,i;async function F(){fetch("https://x8ki-letl-twmt.n7.xano.io/api:BEPCmi3D/getUserEntries",{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.authToken}}).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{let e=t[0].id;entries=t,entries.length?D(c,entries):c.innerHTML='<option value="">Select one...</option>',k(e)}).catch(t=>{console.error("There was a problem with the fetch operation:",t)})}function D(t,e){if(t.innerHTML='<option value="">Select one...</option>',e&&e.length){e.sort((n,r)=>n.entryName.localeCompare(r.entryName)),e.forEach(n=>{let r=document.createElement("option");r.value=n.id,r.textContent=`${n.entryName} (${n._organization.OrgName})`,t.appendChild(r)});let o=e[0].id;t.value=o,x(o),I(o)}}async function k(t){fetch(`https://x8ki-letl-twmt.n7.xano.io/api:BEPCmi3D/organization?entryID=${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.authToken}}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{s=e,g=e.orgLat,b=e.orgLng,d=e.OrgName,document.getElementById("orgTitle").innerText=d}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})}c.addEventListener("change",async()=>{await k(c.value),await I(c.value),await x(c.value)});async function x(t){fetch(`https://x8ki-letl-twmt.n7.xano.io/api:BEPCmi3D/getDirectoryEntries?entryID=${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.authToken}}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{E=e,_(e)}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})}async function I(t){fetch(`https://x8ki-letl-twmt.n7.xano.io/api:BEPCmi3D/getMapEntries?entryID=${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:localStorage.authToken}}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{O(e)}).catch(e=>{console.error("There was a problem with your fetch operation:",e)})}function _(t){let e=document.getElementById("table_wrap");e.innerHTML="",document.getElementById("countInitial").textContent=t.length,t.sort((l,a)=>l.entryName.toLowerCase().localeCompare(a.entryName.toLowerCase()));let o=s.orgFilterOne?`
        <div role="columnheader" class="table4_column is-header-column">
            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                <div id="filterOneLabel" class="text-weight-semibold">${s.orgFilterOne}</div>
            </a>
        </div>`:"",n=s.orgFilterTwo?`
        <div role="columnheader" class="table4_column is-header-column">
            <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                <div id="filterTwoLabel" class="text-weight-semibold">${s.orgFilterTwo}</div>
            </a>
        </div>`:"",r=`
        <div class="table4_header-row">
            <div role="columnheader" class="table4_column is-header-column">
                <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                    <div class="text-weight-semibold">Community Member</div>
                </a>
            </div>
            <div role="columnheader" class="table4_column is-header-column">
                <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                    <div class="text-weight-semibold">Contact Name</div>
                </a>
            </div>
            <div role="columnheader" class="table4_column is-header-column">
                <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                    <div class="text-weight-semibold">Email</div>
                </a>
            </div>
            <div role="columnheader" class="table4_column is-header-column">
                <a fs-cmssort-desc="is-desc" fs-cmssort-element="trigger" fs-cmssort-field="IDENTIFIER" fs-cmssort-asc="is-asc" href="#" class="table4_header-link w-inline-block">
                    <div class="text-weight-semibold">Phone</div>
                </a>
            </div>
            ${o}
            ${n}
        </div>`;e.insertAdjacentHTML("beforeend",r),t.forEach(l=>{let a=l._user.name,m=l._user.email,{entryPhone:v,entryFilterOne:y,entryFilterTwo:h,entryName:u}=l,f=s.orgFilterOne?`
            <div role="cell" class="table4_column">
                <div id="filterOneText" fs-cmsfilter-field="filterOne">
                    ${y||"Not Listed"}
                </div>
            </div>`:"",w=s.orgFilterTwo?`
            <div role="cell" class="table4_column">
                <div id="filterTwoText" fs-cmsfilter-field="filterTwo">
                    ${h||"Not Listed"}
                </div>
            </div>`:"",p=`
            <div role="row" class="table4_item">
                <div role="cell" class="table4_column">
                    <div id="entryNameText" fs-cmsfilter-field="entryName">
                        ${u||"Not Listed"}
                    </div>
                </div>
                <div role="cell" class="table4_column">
                    <div id="nameText" fs-cmsfilter-field="name" class="text-weight-medium">
                        ${a}
                    </div>
                </div>
                <div role="cell" class="table4_column">
                    <div id="emailText">
                        ${m||"Not Listed"}
                    </div>
                </div>
                <div role="cell" class="table4_column">
                    <div id="phoneText">
                        ${v||"Not Listed"}
                    </div>
                </div>
                ${f}
                ${w}
            </div>`;e.insertAdjacentHTML("beforeend",p)})}function O(t){i?i.eachLayer(function(n){n!==i&&i.removeLayer(n)}):i=L.map("map"),i.setView([g,b],13),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(i);let e=L.icon({iconUrl:"https://img.icons8.com/fluency-systems-filled/512/school-building.png",iconSize:[30,30],iconAnchor:[15,15]});L.marker([g,b],{icon:e}).addTo(i).bindPopup(`This is ${d}!`).openPopup(),t.forEach(n=>{let r=n._user.name,l=n._user.email,{entryPhone:a,entryPreference:m,entryFilterOne:v,entryFilterTwo:y,lat:h,lng:u,entryName:f}=n,w=L.marker([h,u],{title:r,riseOnHover:!0}),p=a?`<b>Phone:</b> ${a}<br>`:"",N=l?`<b>Email:</b> ${l}<br>`:"",C=s.includeChild&&childName?`<b>Student:</b> ${f}<br>`:"",$=`
            <div><b>Family:</b> ${r}<div>
            <div>${C}</div>
            <div class="spacer-xxsmall"></div>
            <div>${N}</div>
            <div>${p}</div>
            
            <div class="spacer-xxsmall"></div>
            <div><b>Preference:</b><br> ${m}</div>`;w.addTo(i).bindPopup($)})}var B=document.getElementById("search-form"),T=document.getElementById("searchBox");B.addEventListener("submit",function(t){t.preventDefault()});T.addEventListener("input",function(){let t=T.value.toLowerCase(),e=E.filter(o=>o._user.name.toLowerCase().includes(t)||o._user.email&&o._user.email.toLowerCase().includes(t)||o.entryFilterOne&&o.entryFilterOne.toLowerCase().includes(t)||o.entryFilterTwo&&o.entryFilterTwo.toLowerCase().includes(t)||o.entryName&&o.entryName.toLowerCase().includes(t));_(e)});document.getElementById("printButton").addEventListener("click",P);function P(){let t=document.getElementById("table_wrap").outerHTML,e=window.open("","","height=800,width=1200");e.document.write(`<html><head><title>${d}'s Directory, printed by Community Connector.  Connect with your community at: Connector.Community</title>`),e.document.write("<style>"),e.document.write(`
	.
    .table4_list-wrapper {color: black; font-family: Arial, sans-serif; width: 100%; }
    .table4_header-row { background-color: #f1f1f1; display: flex; }
    .table4_column { padding: 8px; border: 1px solid #ddd; flex: 1; }
    .text-weight-semibold { font-weight: bold; }
    .text-weight-medium { font-weight: 500; }
    .table4_item { border-bottom: 1px solid #ddd; display: flex; }
	 .table4_header-link { color: black; text-decoration: none; }
	 h1 { font-size: 18pt; font-weight: bold; }
	     .print-title { text-align: right; font-size: 12pt; font-weight: normal; }
  `),e.document.write("</style>"),e.document.write(`<h1>${d}'s Directory</h1>`),e.document.write("</head><body>"),e.document.write(t),e.document.write("</body></html>"),e.document.close(),e.onload=function(){e.print(),e.close()}}})();
//# sourceMappingURL=appOut.js.map
