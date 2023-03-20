let chart = null;

am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  chart = am4core.create("chartdiv", am4charts.XYChart);

  // Add data
  chart.data = [{
    "year": "2014",
    "uefa": 13,
    "conmebol": 6,
    "caf": 5,
    "afc": 4,
    "concacaf": 4
  }, {
    "year": "2018",
    "uefa": 14,
    "conmebol": 5,
    "caf": 5,
    "afc": 5,
    "concacaf": 3
  }, {
    "year": "2022",
    "uefa": 13,
    "conmebol": 4,
    "caf": 5,
    "afc": 6,
    "concacaf": 4
  }];

  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;


  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = true;
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;

  // Create series
  function createSeries(field, name) {
    
    // Set up series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = name;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.sequencedInterpolation = true;
    
    // Make it stacked
    series.stacked = true;
    
    // Configure columns
    series.columns.template.width = am4core.percent(60);
    series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

    // Change tooltip position
    series.tooltip.pointerOrientation = "down";

    // Add label
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
    labelBullet.label.hideOversized = true;
    
    return series;
  }

  // Modify each series display name
  createSeries("uefa", "UEFA");
  createSeries("concacaf", "CONCACAF");
  createSeries("afc", "AFC");
  createSeries("conmebol", "CONMEBOL");
  createSeries("caf", "CAF");

  // Legend
  chart.legend = new am4charts.Legend();
}); // end am4core.ready()

// Access chart globally
console.log('chart.series :', chart.series);
