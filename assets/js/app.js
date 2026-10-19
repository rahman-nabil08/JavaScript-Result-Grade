//GRADE :

// let A+ = 80-100
// let A = 70-79
// let A- = 60-69
// let B = 50-59
// let C = 40-49
// let D = 33-39
// let F = 0-32




// let result = {
//     "Name" : "Nabil",
//     "Subject Name" : "BANGLA",
//     "Mark" : 88
// };

// if(result.Mark >80 && result.Mark <100){
//     console.log(`He Got A+ in ${result["Subject Name"]}`);
// }else if(result.Mark >70 && result.Mark <79){
//     console.log(`He Got A in ${result["Subject Name"]}`);
// }else if(result.Mark >60 && result.Mark >69){
//     console.log(`He Got A- in ${result["Subject Name"]}`);
// }else if(result.Mark >50 && result.Mark >59){
//     console.log(`He Got B in ${result["Subject Name"]}`);
// }else if(result.Mark >40 && result.Mark >49){
//     console.log(`He Got C in ${result["Subject Name"]}`);
// }else if(result.Mark >33 && result.Mark >39) {
//     console.log(`He Got D in ${result["Subject Name"]}`);
// }else{
//     console.log(`He F(Failed) in ${result["Subject Name"]}`);
// }




// let Math = {
//     "Name" : "Nabil",
//     "Subject Name" : "Math",
//     "Mark" : 49
// };

// if(Math.Mark >=80 && Math.Mark <=100){
//     console.log(`He Got A+ in ${Math["Subject Name"]}`);
// }else if(Math.Mark >=70 && Math.Mark <=79) {
//     console.log(`He Got A in ${Math["Subject Name"]}`);  
// }else if(Math.Mark >=60 && Math.Mark <=69){
//     console.log(`He Got A- in ${Math["Subject Name"]}`);
// }else if(Math.Mark >=50 && Math.Mark <=59){
//     console.log(`He Got B in ${Math["Subject Name"]}`);  
// }else if(Math.Mark >=40 && Math.Mark <=49){
//     console.log(`He Got C in ${Math["Subject Name"]}`);
// }else if(Math.Mark >=33 && Math.Mark <=39){
//     console.log(`He Got D in ${Math['Subject Name']}`);
// }else{
//     console.log(`He F(Failed) in ${Math["Subject Name"]}`);
// }


var Acc = {
    "Name" : "Nabil",
    "Subject Name" : "Accounting",
    "Mark" : 81
};

switch (true){
    case(Acc.Mark >=80 && Acc.Mark <=100):
        console.log(`He Got A+ in ${Acc["Subject Name"]}`);
        break;
    case(Acc.Mark >=70 && Acc.Mark <=79):
        console.log(`He Got A in ${Acc["Subject Name"]}`);
        break;
    case(Acc.Mark >=60 && Acc.Mark <=69):
        console.log(`He Got A- in ${Acc["Subject Name"]}`);
        break;
    case(Acc.Mark >=50 && Acc.Mark <=59):
        console.log(`He Got C in ${Acc["Subject Name"]}`);
        break;
    case(Acc.Mark >=40 && Acc.Mark <=49):
        console.log(`He Got B in ${Acc["Subject Name"]}`);
        break;
    case(Acc.Mark >=33 && Acc.Mark <=39):
        console.log(`He Got D in ${Acc["Subject Name"]}`);
        break;
    default:
        console.log(`He F(Failed) in ${Acc["Subject Name"]}`);
}
