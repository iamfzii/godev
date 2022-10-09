const amt = document.getElementById("amount").value;
const btn = document.getElementById("calculate-btn")
btn.addEventListener("click",() =>{});
const duration = document.getElementById("salary-selection").value;

function taxcal(){
    const amt = document.getElementById("amount").value;


    if (amt < 600001) {
        alert("No tax")
    }
        else if(amt>=600000 && amt<=1200000){
        let tax1 = amt-600000;
        let final1 = (2.5/100)*tax1;
        alert("Your applicable tax ammount is " + final1)
    }
        else if(amt>=1200000 && amt<=2400000){
        let tax2 = amt-1200000;
        let final2 = (12.5/100)*tax2+15000;
        alert("Your applicable tax ammount is " + final2)
    }
        else if(amt>=2400000 && amt<=3600000){
        let tax3 = amt-2400000;
        let final3 = (20/100)*tax3+165000;
        alert("Your applicable tax ammount is " + final3)
    }
        else if(amt>=3600000 && amt<=6000000){
        let tax4 = amt-3600000;
        let final4 = (25/100)*tax4+405000;
        alert("Your applicable tax ammount is " + final4)
    }
        else if(amt>=6000000 && amt<=12000000){
        let tax5 = amt-6000000;
        let final5 = (32.5/100)*tax5+1005000;
        alert("Your applicable tax ammount is " + final5)
    }
        else if(amt>=12000000){
            let tax6 = amt-12000000;
            let final6 = (32.5/100)*tax6+2955000;
            alert("Your applicable tax ammount is " + final6)
        }


}   
