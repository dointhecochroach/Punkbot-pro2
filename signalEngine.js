
export function generateSignal(data){

 if(!data.sweep) return null

 return{
  direction: data.type === "sell_side_liquidity_taken" ? "LONG":"SHORT",
  entry: data.price,
  stoploss: data.price * 0.99,
  targets:[
   data.price * 1.01,
   data.price * 1.02,
   data.price * 1.04
  ],
  confidence:0.81
 }

}
