//main chart / first chart
const mainChart = ()=> {    
    var ctx = document.getElementById('chart').getContext('2d');

    var gradientblue = ctx.createLinearGradient(0, 0, 0, 330);
    gradientblue.addColorStop(0, 'rgba(84,216,255,0.7)');   
    gradientblue.addColorStop(1, 'rgba(255,255,255,0)');

    var gradientpurple = ctx.createLinearGradient(0,0,0,330);
    gradientpurple.addColorStop(0, 'rgba(167,167,255,0.7)');   
    gradientpurple.addColorStop(1, 'rgba(167,167,255,0)');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Products sold',
                data: [15,10, 15, 18, 15, 24],
                backgroundColor: gradientpurple,
                borderColor: "#a7a7ff" ,
                borderWidth: 2
            },
            {
                label: 'Total views',
                data: [19,8, 16, 13, 17, 10],
                backgroundColor: gradientblue,
                borderColor: "#54D8FF" ,
                borderWidth: 2
            }
            ],
        },
        options: {
            title: {
                display: true,
                text: "Statisctics",
            },
            scales: {
                yAxes: [
                    {
                       ticks: {
                                min:5,
                                max:25,
                                callback: function(value, index, values) {
                                return '$' + value + 'k';
                            }
                        }
                        
                    }
                ]
            },
            legend:{
                position:'bottom',
                
            }
        }

    })
}

ctx = mainChart();

// end main chart
