//get document
let container = document.querySelector('.container')
let inputVal = document.getElementById("amount")
let inputPercentage = document.getElementById("percentage")
let calcDisc = document.getElementById("disc-btn")
let savedAmountPara = document.querySelector(".saved-amount-para")



//get amount & percentage
let amount = inputVal.value
let percentage = inputPercentage.value


//discount calculating function
function getDiscount(disc){
    return (price)=>{
        return price - price*disc
    }
}



//discount showing in webpage
const getUserAmount = function(){

    amount = inputVal.value;
    percentage = inputPercentage.value
    let discountAmount = getDiscount(percentage/100);
    let customerDiscount = discountAmount(amount);
    console.log(customerDiscount);
    let saveAmount = amount-customerDiscount;
    let saveAmntMsg= document.createTextNode(`Congratulations! You have saved: ${saveAmount}TK & discounted amount is ${customerDiscount}TK.`)
    savedAmountPara.className="saved-amount-para"
    savedAmountPara.style.display="block"
    savedAmountPara.innerHTML=saveAmntMsg.data
    // console.log(saveAmntMsg);
    // console.dir(saveAmntMsg);
    inputVal.value='';
    inputPercentage.value=''

}


// add event listener
calcDisc.addEventListener('click',getUserAmount)







