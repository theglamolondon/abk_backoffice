import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function CourbeCommande(props){
  const options = {
    lang: {
      months: [
          'Janvier', 'Février', 'Mars', 'Avril',
          'Mai', 'Juin', 'Juillet', 'Août',
          'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      weekdays: [
          'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
          'Jeudi', 'Vendredi', 'Samedi'
      ],
      shortMonths: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    title: {
      text: 'Evolution des commandes'
    },
    chart: {
      type: "spline"
    },
    series: [{
        name: "Commandes",
        data: [[new Date("2021-05-11").getTime(),1],[new Date("2021-05-13").getTime(), 2], [new Date("2021-05-14").getTime(), 3]]
      },
      {
        name: "Livrées",
        data: [[new Date("2021-05-11").getTime(),6], [new Date("2021-05-13").getTime(), 4], [new Date("2021-05-14").getTime(),3]]
      },
      {
        name: "Annulées",
        data: [[new Date("2021-05-11").getTime(),3], [new Date("2021-05-13").getTime(), 4], [new Date("2021-05-14").getTime(),2]]
      }
    ],
    xAxis: {
      type: 'datetime',
        //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }

  }

  const afterChartCreated = (chart) => {
    console.log("Charts",chart);
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      callback={afterChartCreated}
    />
  )
}

export default CourbeCommande