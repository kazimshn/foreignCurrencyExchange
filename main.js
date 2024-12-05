// elementleri seçip event'leri topladığımız katman
//elementleri seçelim

const amountElement = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();


//eventlistener metodunu oluştur
runEventListener();

function runEventListener(){
    amountElement.addEventListener("input", exchangeIn);
}
function exchangeIn(){
    const amountValue =Number(amountElement.value.trim());
    const firstValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondValue = secondOption.options[secondOption.selectedIndex].textContent;

    exchangedResult = currency.exchange(amountValue, firstValue, secondValue)
    .then((result)=> resultInput.value = amountValue*result);
}



// ----- INPUT EVENTI KULLAN ------

// DEĞERLERŞ AL SERVİSE GİT 

// SONUCU DÖN