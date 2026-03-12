
export function buildCornixSignal(signal,symbol){

return{
 exchange:"binance",
 symbol:symbol,
 side:signal.direction.toLowerCase(),
 entry:signal.entry,
 take_profit:signal.targets,
 stop_loss:signal.stoploss
}

}
