(()=>{"use strict";const e=document.querySelector("#card").content.querySelector(".popup"),t=e=>{(e=>"Escape"===e.key||"Esc"===e.key)(e)&&(e.preventDefault(),document.body.removeChild(document.body.lastChild),e.target.removeEventListener("keydown",t))},r=e=>{e.preventDefault(),e.target.remove(),e.target.removeEventListener("click",r)},o=e=>{e.preventDefault(),e.target.closest("div").remove(),e.target.removeEventListener("click",o)},a=()=>{document.addEventListener("keydown",t),n.addEventListener("click",r),c.addEventListener("click",o)},n=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),c=n.querySelector(".error__button"),l=()=>{n.querySelector(".error__message").textContent="Ошибка размещения объявления",n.querySelector(".error__button").textContent="Попробовать снова",document.body.appendChild(n),a()},u=document.querySelector("#success").content.querySelector(".success").cloneNode(!0),s="https://22.javascript.pages.academy/keksobooking",i=["gif","jpg","jpeg","png","svg"],d=(e,t)=>{e.addEventListener("change",(()=>{const r=e.files[0],o=r.name.toLowerCase();if(i.some((e=>o.endsWith(e)))){const e=new FileReader;e.addEventListener("load",(()=>{t.src=e.result})),e.readAsDataURL(r)}}))},p="img/muffin-grey.svg",m=document.querySelector(".ad-form"),f=document.querySelector(".map__filters"),y=m.querySelectorAll("fieldset"),h=m.querySelector(".ad-form__reset"),v=m.querySelector("#type"),g=m.querySelector("#price"),_=m.querySelector("#timein"),S=m.querySelector("#timeout"),q=m.querySelector("#room_number"),b=m.querySelector("#capacity"),C=m.querySelector("#avatar"),E=m.querySelector("#images"),w=m.querySelector(".ad-form-header__preview img"),k=m.querySelector(".ad-form__photo img");m.classList.add("ad-form--disabled"),y.forEach((e=>{e.setAttribute("disabled","disabled")}));const x=e=>{_.value=e.target.value,S.value=e.target.value},A=()=>{"100"===q.value&&"0"!==b.value||"100"!==q.value&&"0"===b.value?(q.setCustomValidity('Значению "100 комнат" должно соответствовать "Не для гостей"'),b.setCustomValidity('Значению "100 комнат" должно соответствовать "Не для гостей"')):q.value<b.value?(q.setCustomValidity(""),b.setCustomValidity("Гостей не должно быть больше, чем комнат")):(q.value===b.value||"100"===q.value&&b.value,q.setCustomValidity(""),b.setCustomValidity(""))};d(C,w),d(E,k);const V=()=>{w.src=p,k.src=p},D=()=>{m.reset(),f.reset(),P(),V()},$=()=>{D(),document.body.appendChild(u),document.addEventListener("keydown",t),u.addEventListener("click",r)};m.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.target);var r,o;r=$,o=l,fetch(s,{method:"POST",body:t}).then((e=>{e.ok?r():o()})).catch((()=>{o()})),V()})),h.addEventListener("click",(e=>{e.preventDefault(),D()}));const T=35.65951,j=139.72165,F=L.map("map-canvas").on("load",(()=>{m.classList.remove("ad-form--disabled"),y.forEach((e=>{e.removeAttribute("disabled")}))})).setView({lat:T,lng:j},12);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(F);const z=L.icon({iconUrl:"./img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),N=L.marker({lat:T,lng:j},{draggable:!0,icon:z}),O=document.querySelector("#address");O.value="35.65951, 139.72165",N.addTo(F),N.on("drag",(e=>{(({lat:e,lng:t})=>{O.value=`${e.toFixed(5)}, ${t.toFixed(5)}`})(e.target.getLatLng())}));const P=()=>{N.setLatLng({lat:T,lng:j}),F.setView({lat:T,lng:j},12),O.value="35.65951, 139.72165"},U=L.layerGroup(),M=L.icon({iconUrl:"./img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),R=t=>{t.forEach((t=>{const r=L.marker({lat:t.location.lat,lng:t.location.lng},{icon:M});U.addLayer(r),r.bindPopup((t=>{const r=e.cloneNode(!0),o=document.createDocumentFragment();return r.querySelector(".popup__title").textContent=t.offer.title,r.querySelector(".popup__text--address").textContent=t.offer.address,r.querySelector(".popup__text--price").textContent=t.offer.price+"₽/ночь",r.querySelector(".popup__type").textContent=(e=>{switch(e){case"flat":return"Квартира";case"bungalow":return"Бунгало";case"house":return"Дом";case"palace":return"Дворец"}})(t.offer.type),r.querySelector(".popup__text--capacity").textContent=`${t.offer.rooms} комнаты для ${t.offer.guests} гостей`,r.querySelector(".popup__text--time").textContent=`Заезд после ${t.offer.checkin}, выезд до ${t.offer.checkout}`,(e=>{const t=r.querySelector(".popup__features");e.includes("wifi")||t.removeChild(t.querySelector(".popup__feature--wifi")),e.includes("dishwasher")||t.removeChild(t.querySelector(".popup__feature--dishwasher")),e.includes("parking")||t.removeChild(t.querySelector(".popup__feature--parking")),e.includes("washer")||t.removeChild(t.querySelector(".popup__feature--washer")),e.includes("elevator")||t.removeChild(t.querySelector(".popup__feature--elevator")),e.includes("conditioner")||t.removeChild(t.querySelector(".popup__feature--conditioner"))})(t.offer.features),r.querySelector(".popup__description").textContent=t.offer.description,t.offer.photos.length>1?(e=>{const t=r.querySelector(".popup__photos").querySelector(".popup__photo");r.querySelector(".popup__photos").removeChild(t),e.forEach(((t,o)=>{r.querySelector(".popup__photos").insertAdjacentHTML("beforeend",`<img src="${e[o]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`)}))})(t.offer.photos):r.querySelector(".popup__photos").querySelector(".popup__photo").src=t.offer.photos,r.querySelector(".popup__avatar").src=t.author.avatar,o.appendChild(r)})(t),{keepInView:!0})})),U.addTo(F)},G="any",H=document.querySelector(".map__filters"),I=document.querySelectorAll("fieldset, select"),K=document.querySelector("#housing-type"),W=document.querySelector("#housing-price"),B=document.querySelector("#housing-rooms"),J=document.querySelector("#housing-guests"),Q=document.querySelector("#housing-features");H.classList.add("map__filters--disabled"),I.forEach((e=>{e.setAttribute("disabled","disabled")}));const X=e=>!(e.offer.type!==K.value&&K.value!==G||e.offer.rooms!==+B.value&&B.value!==G||e.offer.guests!==+J.value&&J.value!==G||!(e=>{switch(W.value){case"low":return e.offer.price<1e4;case"middle":return e.offer.price>=1e4&&e.offer.price<5e4;case"high":return e.offer.price>=5e4;case"any":return!0}})(e)||!(e=>{const t=Q.querySelectorAll("input:checked");if(0===t.length)return!0;for(const r of t)if(!e.offer.features.includes(r.value))return!1;return!0})(e))&&e,Y=((e,t,r)=>{let o;return(...t)=>{const r=void 0;clearTimeout(o),o=setTimeout((()=>{o=null,e.apply(r,t)}),500)}})((e=>{F.closePopup(),U.clearLayers();const t=e.filter(X).slice(0,10);R(t)}));var Z,ee;Z=e=>{H.classList.remove("map__filters--disabled"),I.forEach((e=>{e.removeAttribute("disabled")})),R(e),H.addEventListener("change",(()=>{Y(e)})),H.addEventListener("reset",(()=>{Y(e)}))},ee=()=>{n.querySelector(".error__message").textContent="Ошибка загрузки данных похожих объявлений",n.querySelector(".error__button").textContent="OK",document.body.appendChild(n),a()},fetch(`${s}/data`).then((e=>e.json())).then((e=>{Z(e)})).catch((()=>{ee()})),v.addEventListener("change",(()=>{switch(g.value="",v.value){case"flat":return[g.placeholder=1e3][g.min=1e3];case"bungalow":return[g.placeholder=0][g.min=0];case"house":return[g.placeholder=5e3][g.min=5e3];case"palace":return[g.placeholder=1e4][g.min=1e4]}})),_.addEventListener("change",x),S.addEventListener("change",x),q.addEventListener("change",A),b.addEventListener("change",A)})();
//# sourceMappingURL=main.bundle.js.map