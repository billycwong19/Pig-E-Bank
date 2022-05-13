
const userid = document.querySelector('#single-pig-stats-chart').value
const minichart = document.querySelector('.mini-chart')
const minichart2 = document.querySelector('.mini-chart-2')
console.log(userid)

const getPigsDataToChart = async () => {
    minichart.setAttribute('style', 'display: initial;')
    minichart2.setAttribute('style', 'display: initial;')
    console.log("hello")
    const getPigs = await fetch('http://localhost:3001/api/pigs');
    const pigs = await getPigs.json()
    let userpigs = []
    for (let pig of pigs){
        pig.user.id == userid ? userpigs.push(pig) : null;
    }
    return chart(userpigs), chart2(userpigs);
}

const chart = (userpigs) => {
    console.log(userpigs)
    const pigNames = []
    const pigsAmountHeld = []
    for (const pig of userpigs) {
        pigNames.push(pig.name)
        pigsAmountHeld.push(pig.amount_held)
    }
    
const ctx = document.getElementById('pigs-amount-chart').getContext('2d')  
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: pigNames,
        datasets: [{
            label: 'Amount Due',
            data: pigsAmountHeld,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

const chart2 = (userpigs) => {
    console.log(userpigs)
    const pigNames = []
    const pigsAmountDue = []
    for (const pig of userpigs) {
        pigNames.push(pig.name)
        pigsAmountDue.push(pig.amount_due)
    }
    
const ctx2 = document.getElementById('pigs-amount-due-chart').getContext('2d')  
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: pigNames,
        datasets: [{
            label: 'Pig Amounts',
            data: pigsAmountDue,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

