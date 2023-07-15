
const obj = {
    "baseball":1,
    "soccer":5,
    "volleyball":6,
    "football":9,
    "baseketball":12
}
//20-8
//50-5

let condition = true

let Amount = 50

do{
    for(key in obj){
        if(obj[key]<Amount){
            Amount = Amount-obj[key]
            console.log(Amount)
        }else{
            condition = false

        }
    }
    console.log(condition)
}while(condition)

console.log("=============",Amount)
