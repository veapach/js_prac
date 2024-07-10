const e=document.querySelector("#site");[{type:"title",value:"Hello World from JS!"},{type:"text",value:"Here we go with some text from js"},{type:"columns",value:["111111","2222222222","3333333333333"]},{type:"image",value:"./assets/cinema.jpg"}].forEach(t=>{let l="";"title"===t.type?l=`
        <div class="row">
            <div class="col-sm">
                <h1>${t.value}</h1>
            </div>
        </div>
    `:"text"===t.type?l=`
        <div class="row">
            <div class="col-sm">
                <p>${t.value}</p>
            </div>
        </div>
    `:"columns"===t.type?l=function(e){let t=e.value.map(e=>`<div class="col-sm">${e}</div>`);return`
        <div class="row">
            ${t.join("")}
        </div>

    `}(t):"image"===t.type&&(l=`
        <div class="row">
            <img src="${t.value}" />
        </div>
    `),e.insertAdjacentHTML("beforeend",l)});