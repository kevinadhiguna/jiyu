let charts = [];
let CHART_ID = 'amcharts-XY-chart'; // Same as the id of <div></div> that contains the chart

let chartData = [
  {
    category: 105,
    percentageAmongTotal: 11.111,
  },
  {
    category: 145,
    percentageAmongTotal: 11.111,
  },
  {
    category: 195,
    percentageAmongTotal: 22.222,
  },
  {
    category: 245,
    percentageAmongTotal: 11.111,
  },
  {
    category: 495,
    percentageAmongTotal: 11.111,
  },
];

function getLowestCategory() {
  let lowest = null;
  chartData.forEach((chartDatum, index) => {
    if (chartDatum.hasOwnProperty('category')) {
      if (index === 0) {
        lowest = chartDatum.category;
      }
      if (chartDatum.category < lowest) {
        lowest = chartDatum.category;
      }
    }
  });
  return lowest;
}

function getHighestCategory() {
  let highest = null;
  chartData.forEach((chartDatum, index) => {
    if (chartDatum.hasOwnProperty('category')) {
      if (index === 0) {
        highest = chartDatum.category;
      }
      if (chartDatum.category > highest) {
        highest = chartDatum.category;
      }
    }
  });
  return highest;
}

let lowestCategory = getLowestCategory();

let highestCategory = getHighestCategory();

function createChart() {
  am4core.ready(function () {
    let chart = am4core.create(CHART_ID, am4charts.XYChart);

    chart.data = [];
    chart.colors.step = 1;
    chart.colors.minColors = 5;
    chart.colors.maxColors = 10;
    chart.padding(0, 0, 0, 0);
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.valign = 'top';
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
    chart.cursor = new am4charts.XYCursor();

    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.renderer.labels.template.rotation = 90;

    // -- Properties related to trim space --
    xAxis.extraMin = 0.01;
    xAxis.extraMax = 0.01;
    // xAxis.min = 85;
    // console.log('lowestCategory :', lowestCategory);
    xAxis.min = lowestCategory;
    // xAxis.max = 495;
    // console.log('highestCategory :', highestCategory);
    xAxis.max = highestCategory;
    xAxis.strictMinMax = true;
    // --------------------------------------

    xAxis.renderer.labels.template.maxWidth = 40;
    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.labels.template.disabled = true;
    xAxis.renderer.labels.template.verticalCenter = 'middle';

    function createGrid(value) {
      let range = xAxis.axisRanges.create();
      range.value = value;
      nextRank = value + 10;
      range.nextRank = nextRank;
      range.label.text = '{value}-{nextRank}';
    }

    let range = xAxis.axisRanges.create();
    range.value = 85;
    range.label.text = '<95';

    // Loop sections
    let section = 95;
    let nextRank = 0;

    for (let i = 0; i < 40; i++) {
      createGrid(section, i);
      section += 10;
    }

    range = xAxis.axisRanges.create();
    range.value = 495;
    range.label.text = '>495';

    range = xAxis.axisRanges.create();

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = 100;
    yAxis.strictMinMax = true;
    yAxis.calculateTotals = true;
    yAxis.renderer.minWidth = 50;
    yAxis.numberFormatter = new am4core.NumberFormatter();
    yAxis.numberFormatter.numberFormat = `#'%'`;

    charts.push(chart);

    createSeries();
  });
}

function createSeries() {
  let chart = charts[0];
  let series = new am4charts.LineSeries();
  series.data = chartData;
  series.dataFields.valueX = 'category';
  series.dataFields.valueY = 'percentageAmongTotal';
  series.strokeWidth = 4;

  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.stroke = am4core.color('#fff');
  bullet.circle.strokeWidth = 2;
  bullet.tooltipText =
    '[bold font-size: 17px]{category} ({percentageAmongTotal}%)[/]';

  series.tooltip.label.textAlign = 'middle';
  series.tooltip.pointerOrientation = 'down';
  series.tooltip.dy = -5;

  series = chart.series.push(series);
}

createChart();

function getChartByContainerId(id) {
  for (let i = 0; i < am4core.registry.baseSprites.length; i++) {
    if (am4core.registry.baseSprites[i].htmlContainer.id === id) {
      return am4core.registry.baseSprites[i];
    }
  }
}

// Related to dispose chart problem
function disposeChart() {
  // let currentChart = getChartByContainerId(chartDiv);
  // currentChart.dispose();
  charts[0].dispose();

  // Clear charts array so it can be used for another generated chart
  charts.length = 0;

  // -- Alternatives --
  // (1) Remove the last element of 'charts' array (applicable if charts array only has one element)
  // charts.pop();

  // (2) Remove the last element of 'charts' array (applicable if charts array only has one element)
  // charts.shift();
}
