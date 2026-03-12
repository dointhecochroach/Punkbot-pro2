
export function detectLiquiditySweep(prev, last){

 if(last.high > prev.high && last.close < prev.high){
   return {sweep:true,type:"buy_side_liquidity_taken"}
 }

 if(last.low < prev.low && last.close > prev.low){
   return {sweep:true,type:"sell_side_liquidity_taken"}
 }

 return {sweep:false}
}
