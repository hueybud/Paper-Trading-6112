const fetch = require('node-fetch');
var yahooFinance = require('yahoo-finance');
var api_key = 'pk_182dfc5d61b24ef0bab43ff45b5903e9';

function getPortfolioQuotes(portfolioTickers) {
    return new Promise(async function(resolve, reject){
        var apiResponse = await fetch('https://cloud.iexapis.com/v1/stock/market/batch?&types=quote&symbols=' + portfolioTickers.toString() + '&token=' + api_key);
        apiResponse = await apiResponse.json();
        resolve(apiResponse);
    })
}

function getIndexes(dateRange) {
    return new Promise(async function(resolve ,reject){
        var apiResponse = await fetch('https://cloud.iexapis.com/stable/stock/market/batch?symbols=dia,qqq,spy&types=chart,quote&range=' + dateRange + '&token=' + api_key);
        apiResponse = await apiResponse.json();
        resolve(apiResponse);
    })
}
module.exports.getPortfolioQuotes = getPortfolioQuotes;
module.exports.getIndexes = getIndexes;