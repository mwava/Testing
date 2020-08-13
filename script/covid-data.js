getData();
function getData(){

    const ctx = document.getElementById('chart').getContext('2d');
    const url='https://coronavirus-19-api.herokuapp.com/all';
    
   async function getDatas(){
       const reponse =await fetch(url);
   const data =await reponse.json();
   console.log(data);

            const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Kasus','Meninggal','Sembuh'],
                datasets: [{
                    label:"KASUS COVID-19 GLOBAL",
                    data: [data.cases,data.deaths,data.recovered],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

   }
   getDatas();
}


