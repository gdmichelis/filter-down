'use strict';
import { fetchShoes} from './shop.js';

/**
 *  Shoe Size Dropdown Render
 */
let shoeSizeWrapper = document.querySelector('.shoe-size-wrapper');
let arr3 = [];
let arr4 = [];
let shoeSizeContent = `<option value="">Μέγεθος</option>`;

function populateShoeSizeDropdown(arr2) {
   for(let i = 0; i < arr2.length; i++) {
      arr3.push(arr2[i].size);
   }
   for(let j = 0; j < arr3.length; j++) {
       arr4 = arr4.concat(arr3[j]);
   }

   const count = arr4.reduce( (accumulator, v) => {
      accumulator[v] = ++accumulator[v] || 1;
      return accumulator;
      }, {});
     let countArr = Object.keys(count);

     for(let i = 0; i < countArr.length; i++) {
        shoeSizeContent += `<option value = "${countArr[i]}">${countArr[i]}</option>`;
     }
   shoeSizeWrapper.innerHTML = shoeSizeContent;
}

fetchShoes(populateShoeSizeDropdown);
                             

/**
 *  Shoe Color Dropdown Render
 */
let shoeColorWrapper = document.querySelector('.shoe-color-wrapper');
let arr3c = [];
let arr4c = [];
let shoeColorContent = `<option value="">Χρώμα</option>`;

function populateShoeColorDropdown(arr2) {
    for(let i = 0; i < arr2.length; i++) {
       arr3c.push(arr2[i].color);
    }


    for(let j = 0; j < arr3c.length; j++) {
        arr4c = arr4c.concat(arr3c[j]);
    }
  
    const countc = arr4c.reduce( (accumulator, v) => {
       accumulator[v] = ++accumulator[v] || 1;
       return accumulator;
       }, {});
    
      let countArr = Object.keys(countc);
      for(let i = 0; i < countArr.length; i++) {
         shoeColorContent += `<option value = "${countArr[i]}">${countArr[i]}</option>`;
      }
    shoeColorWrapper.innerHTML = shoeColorContent;
 }
 
 fetchShoes(populateShoeColorDropdown);

 