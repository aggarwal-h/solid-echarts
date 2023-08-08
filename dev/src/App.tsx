import { createSignal, type Component } from "solid-js";
import type { EChartsOption } from "../../src/";
import SolidECharts from "../../src";

const generateData = () => {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    // @ts-ignore
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  return data;
};

const getOption: EChartsOption = () => ({
  tooltip: {
    trigger: "axis",
    position: function (pt: any) {
      return [pt[0], "10%"];
    },
  },
  title: {
    left: "center",
    text: "Large Area Chart",
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "time",
    boundaryGap: [0, "2"],
  },

  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
  },
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 20,
    },
    {
      start: 0,
      end: 20,
    },
  ],
  series: [
    {
      name: "Fake Data",
      type: "line",
      smooth: true,
      symbol: "none",
      areaStyle: {},
      data: generateData(),
    },
  ],
});

const App: Component = () => {
  const [option, setOption] = createSignal(getOption());

  return (
    <>
      <SolidECharts
        option={option()}
        style={{
          width: "100%",
          height: "900px",
        }}
        opts={{ renderer: "canvas" }}
        debouncedResize={false}
      />
      <button onClick={() => setOption(getOption())}>Change it!</button>
    </>
  );
};

export default App;
