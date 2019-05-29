//chart js
const mainChart = function mainChart(){    
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
                display: false,
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
};


const doughnutChart1 = function doughnutChart1(){
    var doughnut = document.getElementById('chartDoughnut').getContext('2d');
    var myChart = new Chart(doughnut, {
        type: 'doughnut',
        data:{
            datasets: [{
                data: [48,52],
                backgroundColor:["#A3A1FB","#EDECFE"],
                hoverBackgroundColor:["#A3A1FB","#EDECFE"],

            }],

            labels: [
                'Saved',
                'Total Spent',
            ]
        },
        options:{   
             rotation: (-0.5*Math.PI) - (30 /180 * Math.PI),
                cutoutPercentage:80,


             legend:{
                display:false,
             },
        },
    })

}

doughnut = doughnutChart1();

const stackedBar1 = ()=>{
    var stackedBar1Data = {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
        datasets:[{
            label:'Income',
            backgroundColor: "#A3A1FB",
            data: [7.5,4.6,1.7,2.3,5.5,2.3,5],
        },{
            label:'Outcome',
            backgroundColor:"#E8E8F1",
            data: [0,-2.1,-4.9,-3,-1,0,-2.5],
        }]
    }

    var stackedBarElem = document.getElementById("stackedBar1").getContext('2d');
    var myChart = new Chart(stackedBarElem,{
        type:'bar',
        data:stackedBar1Data,
        options:{
            legend:{
                display:false
            },
            title:{

            },
            tooltips:{
                intersect:false,
            },
            scales:{
                xAxes:[{
                    gridLines:{
                        display:false,
                    },
                    stacked:true,
                }],
                yAxes:[{
                    stacked:true,
                    ticks: {
                                min:-8,
                                max:8,
                                callback: function(value, index, values) {
                               // value.substr(1,1);

                                if (value >= 0) {
                                    return '$' + value + 'k';
                                } else {
                                   return '$'+value+'k';
                                }
                            }
                        }
                }],
            }
        }
    })
} 

stackedBarElem = stackedBar1();
// end chart js
