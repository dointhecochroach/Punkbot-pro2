
export function generatePine(){

return `
//@version=5
strategy("PunkBot Sweep Strategy")

sweep = high > high[1] and close < high[1]

if sweep
 strategy.entry("Short", strategy.short)

strategy.exit("TP/SL", profit=300, loss=100)
`

}
