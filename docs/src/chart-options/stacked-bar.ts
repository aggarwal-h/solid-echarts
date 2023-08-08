import colors from "tailwindcss/colors";

export const title = "Stacked Bar Chart";

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
  xAxisData.push("A" + i);
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}
export const option = {
  title: {
    text: title,
    left: "center",
    top: 20,
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    bottom: 100,
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    splitLine: {
      show: false,
    },
  },
  yAxis: {},
  series: [
    {
      name: "Bar",
      type: "bar",
      data: data1,
      stack: "total",
      emphasis: {
        focus: "series",
      },
      color: colors.blue[600],
      animationDelay: function (idx: number) {
        return idx * 10;
      },
    },
    {
      name: "Bar 2",
      type: "bar",
      stack: "total",
      data: data2,
      emphasis: {
        focus: "series",
      },
      color: colors.red[600],
      animationDelay: function (idx: number) {
        return idx * 10 + 100;
      },
    },
  ],
  animationEasing: "elasticOut",
  animationDelayUpdate: function (idx: number) {
    return idx * 5;
  },
  textStyle: {
    color: "#fff",
  },
};
