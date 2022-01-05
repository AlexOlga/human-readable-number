module.exports = function toReadable (number) {
  
    let num = ["zero","one", "two", "three", "four" , "five" , "six", "seven" ,"eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]  ;
    let dozens= [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]  ;    
     // let razryd =["hundred", "thousand", "million", "miliard","trilion"];
   //19999
if (number == 0) {
    return "zero";
} else {
let srt='';
let raz1 =number;

 if (Math.floor(raz1/1000) > 0) { srt=srt+" "+ num[Math.floor(raz1/1000)] + " " + "thousand";};
raz1= raz1 - Math.floor(raz1/1000)*1000; 

if (Math.floor(raz1/100) > 0) { srt=srt + " "+ num[Math.floor(raz1/100)] + ' ' + "hundred"; };
raz1= raz1 - Math.floor(raz1/100)*100; 

if (Math.floor(raz1/10) > 1) { 
    srt=srt + " "+  dozens[Math.floor(raz1/10)];
    raz1= raz1 - Math.floor(raz1/10)*10;  
   
    if (raz1 > 0) {srt=srt + " "+  num[raz1]; };
}
else if (raz1 > 0) {srt=srt + " "+  num[raz1] };

return srt.trim();
};

       
}
