# australian-tax-rate
return tax rate based on annual income

## usage:
```
  npm install australian-tax-rate
```


```js
var taxRate = require('australian-tax-rate');
//...
var pay = gross*(1 - taxRate(gross));
```

This is what [ATO says](https://www.ato.gov.au/rates/individual-income-tax-rates/) about personal tax:

| Taxable income    | Tax on this income |
| ------------------|--------------------|
| 0 – $18,200       |  Nil               |
| $18,201 – $37,000 | 19c for each $1 over $18,200 |
| $37,001 – $80,000 | $3,572 plus 32.5c for each $1 over $37,000 |
| $80,001 – $180,000| $17,547 plus 37c for each $1 over $80,000 |
| $180,001 and over | $54,547 plus 45c for each $1 over $180,000 |

Above as graphs:

![tax-rate](https://cloud.githubusercontent.com/assets/173025/12543208/384955ac-c381-11e5-8735-bd3edba762d8.png)

![net-pay-vs-gross](https://cloud.githubusercontent.com/assets/173025/12543210/3a40b4b8-c381-11e5-917c-946798f52ad4.png)
