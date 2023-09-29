const imgDice = document.querySelector('img[alt=dice]');
const idNumber = document.getElementById('number');
const quote = document.getElementById('quote');

const getResponse = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const getData = async () => {
    try {
        const data = await getResponse();
        idNumber.textContent = data.slip.id;
        quote.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.log(error)
    }
}

imgDice.addEventListener('click', (e) => getData());