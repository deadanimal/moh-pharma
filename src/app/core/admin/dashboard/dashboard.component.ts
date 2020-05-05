import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public clicked: boolean = true;
  public clicked1: boolean = false;

  private chart
  private chart1
  private chart2

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(
      () => {
        this.initChart()
        this.initChart1()
        this.initChart2()
      }
    )
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          this.chart1.dispose()
        }
        if (this.chart2) {
          this.chart2.dispose()
        }
      }
    )
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "month": "Jan",
      "amount": 3025
    }, {
      "month": "Feb",
      "amount": 1882
    }, {
      "month": "Mac",
      "amount": 1809
    }, {
      "month": "Apr",
      "amount": 1322
    }, {
      "month": "Mei",
      "amount": 1122
    }, {
      "month": "Jun",
      "amount": 1114
    }, {
      "month": "Jul",
      "amount": 984
    }, {
      "month": "Ogs",
      "amount": 711
    }, {
      "month": "Sep",
      "amount": 665
    }, {
      "month": "Okt",
      "amount": 580
    }, {
      "month": "Nov",
      "amount": 443
    }, {
      "month": "Dis",
      "amount": 441
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    // categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "amount";
    series.dataFields.categoryX = "month";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart = chart
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart3D);

    // Add data
    chart.data = [{
      "month": "Jan",
      "year2017": 3.5,
      "year2018": 4.2
    }, {
      "month": "Feb",
      "year2017": 1.7,
      "year2018": 3.1
    }, {
      "month": "Mac",
      "year2017": 2.8,
      "year2018": 2.9
    }, {
      "month": "Apr",
      "year2017": 2.6,
      "year2018": 2.3
    }, {
      "month": "Mei",
      "year2017": 1.4,
      "year2018": 2.1
    }, {
      "month": "Jun",
      "year2017": 2.6,
      "year2018": 4.9
    }, {
      "month": "Jul",
      "year2017": 6.4,
      "year2018": 7.2
    }, {
      "month": "Ogs",
      "year2017": 8,
      "year2018": 7.1
    }, {
      "month": "Sep",
      "year2017": 9.9,
      "year2018": 10.1
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "month";
    series.name = "Tahun 2018";
    series.clustered = false;
    // DP grow in {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "month";
    series2.name = "Tahun 2019";
    series2.clustered = false;
    // series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";

    this.chart1 = chart
  }

  initChart2() {
    let chart = am4core.create("chartdiv2", am4charts.PieChart);

    // Set data
    let selected;
    let types = [{
      type: "Data A",
      percent: 70,
      color: chart.colors.getIndex(0),
      subs: [{
        type: "Data A1",
        percent: 15
      }, {
        type: "Data A3",
        percent: 35
      }, {
        type: "Data A3",
        percent: 20
      }]
    }, {
      type: "Data B",
      percent: 30,
      color: chart.colors.getIndex(1),
      subs: [{
        type: "Data B1",
        percent: 15
      }, {
        type: "Data B2",
        percent: 10
      }, {
        type: "Data B3",
        percent: 5
      }]
    }];

    // Add data
    chart.data = generateChartData();

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.propertyFields.isActive = "pulled";
    pieSeries.slices.template.strokeWidth = 0;

    function generateChartData() {
      let chartData = [];
      for (var i = 0; i < types.length; i++) {
        if (i == selected) {
          for (var x = 0; x < types[i].subs.length; x++) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              pulled: true
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            id: i
          });
        }
      }
      return chartData;
    }

    pieSeries.slices.template.events.on("hit", function (event: any) {
      if (event.target.dataItem.dataContext.id != undefined) {
        selected = event.target.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      chart.data = generateChartData();
    });

    this.chart2 = chart
  }

}
