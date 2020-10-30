const usdBuyCurrency = 28;
const euroBuyCurrency = 32;
const plzBuyCurrency = 7;

const usdSellCurrency = 28.2;
const euroSellCurrency = 32.31;
const plzSellCurrency = 7.4;

const factor = 100

const usdBuy100 = factor * usdBuyCurrency;
const usdSell100 = factor * usdSellCurrency;
const euroBuy100 = factor * euroBuyCurrency;
const euroSell100 = factor * euroSellCurrency;
const plzSell100 = factor * plzSellCurrency;
const plzBuy100 = factor * plzBuyCurrency;

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

// modal window-------------------------------------------------------------------

const modal = document.getElementById('myModal');
const btn = document.getElementById('modalBtn');
const span = document.getElementsByClassName('close')[0];


btn.onclick = () => {
    modal.style.display = 'block';
}

span.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// calculator--------------------------------------------------------------------

const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = () => {
    const n = document.getElementById('mySelect').options.selectedIndex;
    const sel = document.getElementById('mySelect').options[n].text;
    const b = document.getElementById('select').options.selectedIndex
    const bill = document.getElementById('select').options[b].text;
    const val = document.getElementById('input-value').value;
    setResult(sel, val, bill);
}

setResult = (sel, val, bill) => {
    let resultBuy;
    let resultSell
    switch (sel) {
        case "продать":
            switch (bill) {
                case "USD":
                    result = (val * usdSellCurrency).toFixed(2);
                    break;
                case "EURO":
                    result = (val * euroSellCurrency).toFixed(2);
                    break;
                case "PLZ":
                    result = (val * plzSellCurrency).toFixed(2);
                    break;
            }
            break;
        case "купить":
            switch (bill) {
                case "USD":
                    result = (val * usdBuyCurrency).toFixed(2);
                    break;
                case "EURO":
                    result = (val * euroBuyCurrency).toFixed(2);
                    break;
                case "PLZ":
                    result = (val * plzBuyCurrency).toFixed(2);
                    break;
            }
            break;
    }

    document.getElementById('result').innerHTML = `Сумма: ${result} грн.`;

}
