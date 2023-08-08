export const title = "Pie Chart";
export const option: any = {
  title: {
    text: title,
    left: "center",
    top: 20,
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "70%",
      center: ["50%", "50%"],
      data: [
        { value: 400, name: "Direct" },
        { value: 350, name: "Email" },
        { value: 300, name: "Union Ads" },
        { value: 270, name: "Video Ads" },
        { value: 230, name: "Search Engine" },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.9)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.9)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: "#c23531",
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function () {
        return Math.random() * 200;
      },
    },
  ],
};
