
// document.querySelector("#calculator__form-technologies")

const technologiesSelect = document.querySelector("#calculator__form-technologies");

const technologiesMultiSelect = new Choices(technologiesSelect, {
    allowSearch: false,
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    removeItems: true,
    removeItemButton: true,
    editItems: false,
    duplicateItemsAllowed: false,
    delimiter: ",",
    paste: true,
    searchEnabled: false,
    searchChoices: true,
    searchResultLimit: -1,
    position: "auto",
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: true,
    noChoicesText: "No available options",
    itemSelectText: "Click to select",
    classNames: {
      containerInner: "choices__inner tech-input-container",
      input: "choices__input",
    },
  });


  calculateSum();

const calculatorForm = document.querySelector('.calculator__form');

calculatorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateSum();
    
    


    
});  


function calculateSum(){


    
    //selectors
    const websiteTypeSelect = document.querySelector('#calculator__form__website-type');
    const websiteCart = document.querySelector('#calculator__form__input__cart input:checked');
    const websiteReception = document.querySelector('#calculator__form__input__reception input:checked');



    // console.log(websiteCart.value);
    // console.log(websiteReception.value);

    //value
    const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);

    const technologiesValue = getTechnologiesSum(technologiesMultiSelect.getValue());

    const websiteCartValue = converCartOptionToPrice(websiteCart.value);

    const websiteReceptionValue = converReceptionOptionToPrice(websiteReception.value);

    const totalSum = websiteTypeValue + technologiesValue + websiteCartValue + websiteReceptionValue;

    renderSum(totalSum);
    
    
        
   
};

function renderSum(sum) {

    const costElement =document.querySelector('.calculator__total__cost');

    costElement.textContent = 'Calculating...';

    setTimeout(function(){

        costElement.textContent = sum + '$';

    }, 1000);

    

};


function converCartOptionToPrice(option) {
    if (option === 'yes') {
        return 300;
    }

    return 0;
};

function converReceptionOptionToPrice(option) {
    if (option === 'yes') {
        return 500;
    }

    return 0;
};




function getTechnologiesSum(technologiesArr) {

    let totalSum = 0;

    technologiesArr.forEach( function(tech) {

       totalSum = totalSum + extractPriceFromValue(tech.value)
    })

    return totalSum
};








function extractPriceFromValue(str) {
    const price = str.match(/:\d+/);
  
    if (price) {
      return Number(price[0].slice(1)) || 0;
    }
  
    return 0;
  }
  








  