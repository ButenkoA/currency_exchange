const usdBuyCurrency = 28;
const euroBuyCurrency = 32;
const plzBuyCurrency = 7;

const usdSellCurrency = 28.2;
const euroSellCurrency = 32.31;
const plzSellCurrency = 7.4;


const usdBuy100 = 100 * usdBuyCurrency;
const usdSell100 = 100 * usdSellCurrency;
const euroBuy100 = 100 * euroBuyCurrency;
const euroSell100 = 100 * euroSellCurrency;
const plzSell100 = 100 * plzSellCurrency;
const plzBuy100 = 100 * plzBuyCurrency;

const usdBuy = document.getElementById('usdBuy');
const usdSell = document.getElementById('usdSell');
const euroBuy = document.getElementById('euroBuy');
const euroSell = document.getElementById('euroSell');
const plzBuy = document.getElementById('plzBuy');
const plzSell = document.getElementById('plzSell');


usdBuy.innerText = usdBuy100;
usdSell.innerText = usdSell100;
euroBuy.innerText = euroBuy100;
euroSell.innerText = euroSell100;
plzBuy.innerText = plzBuy100;
plzSell.innerText = plzSell100;