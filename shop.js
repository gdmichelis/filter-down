"use strict";
  export async function fetchShoes(k) {
    const shoesJsonUrl = "shoes.json";
    let shoesJsonRequest = new Request(shoesJsonUrl);
    const shoesJsonResponse =  await fetch(shoesJsonRequest);
    const a =  await shoesJsonResponse.json();
     k(a);
   
} 

const shoesTable = document.querySelector('#shoes-table-body');
let content = "";
function populateShoesTable(arr) {
     for(let i = 0; i < arr.length; i++) {
       content += `<tr>
                     <td>${arr[i].id}</td>
                     <td><img src= "${arr[i].image}" width="150" /></td>
                     <td>${arr[i].description}</td>
                     <td>${arr[i].size}</td>
                     <td>${arr[i].color}</td>
                     <td>${arr[i].sex}</td>
                     <td>&euro;${arr[i].price}</td>
                   </tr>`;
     }

  shoesTable.innerHTML = content;      
}  

fetchShoes(populateShoesTable);