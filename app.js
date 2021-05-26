google.charts.load('current', {packages: ['corechart']});

function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'My Daily Activities',
    is3D: true,
    fontName: 'Montserrat',
    titleTextStyle: {
      fontSize: 20,
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('PieChart'));
  chart.draw(data, options);
}

function drawLineChart() {
  var data = new google.visualization.DataTable();
        data.addColumn('string', 'Day');
        data.addColumn('number', 'This Week');
        data.addColumn('number', 'Previous Week');

        data.addRows([
          ['Mon',  7.8, 0.8],
          ['Tue',  0.9, 9.5],
          ['Wed',  5.4,   7],
          ['Thu',  1.7, 8.8],
          ['Fri',  1.9, 7.6],
          ['Sat',   8.8, 3.6],
          ['Sun',   7.6, 2.3],

        ]);

  var options = {
    title: 'Time Spent',
    height:300,
    legend: 'bottom',
    curveType: 'function',

    animation : {
      duration: 1000,
      easing: 'out',
      startup: true
    },
    fontName: 'Montserrat',
    titleTextStyle: {
      fontSize: 20,
    }

  };
  var chart = new google.visualization.LineChart(document.getElementById('LineChart'));
  chart.draw(data, options);
}

document.getElementById('nav-Graphs-tab').onclick = function(){
  setTimeout(function(){
    drawLineChart();
    drawPieChart();

  },180);
}
