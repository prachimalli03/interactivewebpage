
function showDetails() {
    const cricketerDropdown = document.getElementById('cricketer');
    const cricketerDetails = document.getElementById('cricketers');

    const details = {
       
        sachin: {
            name: 'Sachin Tendulkar',
            runs: '34,357 runs',
            matches: '664 matches',
            description: 'Sachin Tendulkar is a former international cricketer from India and one of the greatest batsmen of all time.',
            image: '../image/sachint.jpg'
            
        },
        virat: {
            name: 'Virat Kohli',
            runs: '22,818 runs',
            matches: '416 matches',
            description: 'Virat Kohli is an Indian cricketer and the current captain of the Indian national team. He is considered one of the best batsmen in the world.',
            image: '../image/virat1.png'
        },
        dhoni: {
            name: 'MS Dhoni',
            runs: '17,266 runs',
            matches: '538 matches',
            description: 'MS Dhoni is a former Indian cricketer and captain. He led India to victory in the 2007 ICC World Twenty20, 2010 and 2016 Asia Cups, and the 2011 ICC Cricket World Cup.',
            image: '../image/dhoni.jpg'
        }
    };

    const selectedCricketer = cricketerDropdown.value;

    if (selectedCricketer) {
        const cricketer = details[selectedCricketer];
        cricketerDetails.innerHTML = `
         
             <div class="details-text">
               <h2>${cricketer.name}</h2>
                <p><strong>Runs:</strong> ${cricketer.runs}</p>
                <p><strong>Matches:</strong> ${cricketer.matches}</p>
                <p>${cricketer.description}</p>
             </div>
            <img src="${cricketer.image}" alt="${cricketer.name}">
          
            
        `;
    } else {
        cricketerDetails.innerHTML = '';
    }
}
