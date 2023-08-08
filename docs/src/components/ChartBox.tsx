import type { Component } from "solid-js";
import SolidECharts from "solid-echarts";
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";

const ChartBox: Component<{
  option: EChartsOption;
  title: string;
  backgroundColorClass: string;
}> = (props) => {
  return (
    <div class="flex flex-col items-center p-10">
      <h1 class="mt-4 font-semibold text-xl">{props.title}</h1>

      <div
        class={`w-3/4 h-96 rounded-3xl p-5 shadow-2xl ${props.backgroundColorClass}`}
      >
        <SolidECharts
          echarts={echarts}
          option={props.option}
          style={{
            width: "100%",
            height: "400px",
          }}
          opts={{ renderer: "canvas" }}
          debouncedResize={false}
        />
      </div>
    </div>
  );
};

export default ChartBox;
