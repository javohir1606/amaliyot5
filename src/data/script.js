import { hero, about, menu } from "./data.js";

const box = document.querySelector(".box");
const menuEl = document.querySelector(".menu")

const aboutEl = document.querySelector(".about");

box.innerHTML = hero.map(
  (item) => `
  <div>
     <p class="text-[red] font-bold text-base	mb-[12px]">${item.text}</p>
   <h1 class="font-bold text-[53px] w-[644px] mb-[12px]">${item.h1}</h1>
   <p class="font-bold text-base text-[#8a8fb9] w-[560px] mb-[27px]">${item.p}</p>
   <button class="text-base font-bold rounded-[2px] bg-pink-600 py-4 px-10 text-[#fff]">${item.button}</button>
  </div>
  <div>
    <img src="${item.img}"/>
  </div>
  `
)



aboutEl.innerHTML = about.map(
  (item) => `
    <div class="bg-[#fff] shadow-xl p-10 w-[270px] h-[370px]">
    <img src="${item.img}"/>
    <p class="text-base font-semibold text-[red] text-center mt-[27px]">${item.text}</p>
     <img class="mt-[12px] ml-auto mr-auto" src="${item.icons}"/>
     <p class="mt-[12px] text-base font-normal text-[#151875] text-center">${item.discoreption}</p>
     <strong class="text-[#151875] text-base mt-[12px] mb-[17px] flex justify-center">${item.strong}</strong>
    </div>
  `
).join("")

menuEl.innerHTML = menu.map(
  (item) => `
   <div class="bg-[#fff] shadow-xl p-[30px] w-[360px] h-[306px]">
      <img class="pl-[50px] pr-[50px]" src="${item.img}"/>
  
      <div class='flex justify-between items-center'>
        
        <p class="text-base  text-[red] text-center">${item.text}</p>

        <div class="flex gap-[10px] ">
          <p class="mt-[12px] text-base font-normal text-[#151875] text-center">${item.discoreption}</p>
          <strong class="text-[#151875] text-base mt-[12px] mb-[17px] flex justify-center">${item.strong}</strong>
        </div>
      </div>
    </div>
  `
).join("")