'use strict';

function BinarioADecimal(num) {
let numeroDecimal = 0;
for (let i = 0; i < num.length; i++) {
   let posicion= num.length -1 -i;
   let base= 2**i;
   numeroDecimal+= num[posicion] * base;  
}
return numeroDecimal;
}

function DecimalABinario(num) {
  let decimal= num.toString(2)
   return decimal;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
