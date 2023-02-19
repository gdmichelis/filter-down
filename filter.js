"use strict";
const shoeSize = document.querySelector('#shoe-size');
const shoeColor = document.querySelector('#shoe-color');
const shoeSex = document.querySelector('#shoe-sex');
const shoePrice = document.querySelector('#shoe-price');
const getTableRows = document.getElementsByTagName('tr');
const filterReset = document.querySelector('#filter-reset');
const searchFilter = document.querySelector('#search');
let shoePriceRange = [];
let filtersTrue = [];
let filters = {};
let shoePriceNoCurrency;

/**
 * Filter Function
 * @param {object} e 
 */
function filter(e) {
    e.preventDefault();
    for( let i = 0; i < 4; i++) {
       if(shoeSize.value != "") {
        filters.size = shoeSize.value;
       } else {
        filters.size = "";
       }
       
       if(shoeColor.value != "") {
        filters.color = shoeColor.value;
       } else {
        filters.color = "";
       }

       if(shoeSex.value != "") {
        filters.sex = shoeSex.value;
       } else {
        filters.sex = "";
       }

       if(shoePrice.value != "") {
        filters.price = shoePrice.value;
       } else {
        filters.price = "";
       }
    }
    filtersTrue = Object.entries(filters);
    for(let i = 1; i < getTableRows.length; i++ ) {
        if(getTableRows[i].children[3].innerText.includes(filtersTrue[0][1]) == true) {
            getTableRows[i].classList.add('d-table-row');
            getTableRows[i].classList.remove('d-none');

        } else {
            getTableRows[i].classList.add('d-none');
            getTableRows[i].classList.remove('d-table-row');
        }
    }
    
    if(filtersTrue[1][1] != "") {
        for(let i = 1; i < getTableRows.length; i++ ) {
                 if(getTableRows[i].classList.contains("d-table-row")) {
                    if(getTableRows[i].children[4].innerText.includes(filtersTrue[1][1]) != true){
                            getTableRows[i].classList.remove("d-table-row");
                            getTableRows[i].classList.add("d-none");
                    }
                 }
        }
    } 

    
    if(filtersTrue[2][1] != "") {
        for(let i = 1; i < getTableRows.length; i++ ) {
            if(getTableRows[i].classList.contains("d-table-row")){
               if(getTableRows[i].children[5].innerText != filtersTrue[2][1]){
                   getTableRows[i].classList.remove("d-table-row");
                   getTableRows[i].classList.add("d-none");
                }    
                      
            }  
        }
    } 
    
    
    if(filtersTrue[3][1] != "") {
        for(let i = 1; i < getTableRows.length; i++ ) {
             shoePriceRange = filtersTrue[3][1].split('-');
             shoePriceNoCurrency = getTableRows[i].children[6].innerText.replace('€', '');
             if(getTableRows[i].classList.contains("d-table-row")){
                 if(shoePriceNoCurrency <= Number(shoePriceRange[0]) || shoePriceNoCurrency >= Number(shoePriceRange[1])) {
                      getTableRows[i].classList.remove("d-table-row");
                      getTableRows[i].classList.add("d-none");
                 }
             }
        }
    }
}

//Multiple Select Filters on Shoes Table

/**
 * Shoe Size Filter
 */
shoeSize.addEventListener( 'change' , filter);


/**
 * Shoe Color Filter
 */
shoeColor.addEventListener( 'change' , filter);

 
/**
 * Shoe Sex Filter
 */
shoeSex.addEventListener( 'change' , filter);
  

/**
 * Shoe Price Filter
 */
shoePrice.addEventListener( 'change' , filter);


// Shoe Search Filter
searchFilter.addEventListener( 'keyup', search);

/**
 *  Search Function
 */
function search() {
    for(let i = 1; i < getTableRows.length; i++ ) {
        if(getTableRows[i].children[2].innerText.toLowerCase().includes(searchFilter.value.toLowerCase()) == true || 
           getTableRows[i].children[3].innerText.toLowerCase().includes(searchFilter.value.toLowerCase()) == true || 
           getTableRows[i].children[4].innerText.toLowerCase().includes(searchFilter.value.toLowerCase()) == true ||
           getTableRows[i].children[5].innerText.toLowerCase() == searchFilter.value.toLowerCase()) {
              getTableRows[i].classList.add('d-table-row');
              getTableRows[i].classList.remove('d-none');

        } else {
             getTableRows[i].classList.add('d-none');
             getTableRows[i].classList.remove('d-table-row');
        }
    }
}

// Reset All Shoe Filters
filterReset.addEventListener( 'click', reset);

/**
 *  Reset Function
 * @param {object} e 
 */
function reset(e) {
   e.preventDefault();
   for(let i = 1; i < getTableRows.length; i++ ) {
     shoeSize.value = "";
     shoeColor.value = "";
     shoeSex.value = "";
     shoePrice.value = "";
     getTableRows[i].classList.remove('d-none');
     getTableRows[i].classList.remove('d-table-row');
   }
}