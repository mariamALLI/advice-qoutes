const adviceBox = document.querySelector('#advice_box');
const adviceQuoteId = document.querySelector('#advice_quote_id')
const url = 'https://api.adviceslip.com/advice';

const getAdvice = async () => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to fetch advice');
        }else{
            const data = await response.json();
            console.log(data)
            const adviceId = data.slip.id
            const adviceQuote = data.slip.advice
            adviceBox.innerHTML = `
            <div class="text-neon_green font-bold font-manrope text-center text-sm my-3" id="advice_quote_id">
                ADVICE #${adviceId}
            </div>

            <div class="my-4 text-gray-300 text-xl text-center font-bold font-manrope" id="advice_quotes">
            &#34${adviceQuote}&#34
            </div>

            <div class="my-8 p-4">
                <img src="images/pattern-divider-mobile.svg" alt="advice-line-img">
            </div>

            `
        }
    }catch(error){
        console.error(error)
    }
}
getAdvice()