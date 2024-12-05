// class katmanı
class Currency{

     constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_SoZ5xuwAc2dLOGB7wI3iTbSkPJ2QcYoCu9iTc4QS&base_currency="
        
     }
     async exchange(amount, firstCurrency, secondCurrency) {
        const request = await fetch(`${this.url}${firstCurrency}`);
        const dataR= await request.json();
        const result = dataR.data[secondCurrency];
        return result;
     }
}