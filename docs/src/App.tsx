import type { Component } from "solid-js";
import ChartBox from "./components/ChartBox";
import { option as pieChartOption } from "./chart-options/pie";
import { option as stackedBarChartOption } from "./chart-options/stacked-bar";

const App: Component = () => {
  return (
    <div class="container mx-auto px-4 pt-5 font-poppins">
      <div class="flex flex-row justify-center">
        <h1 class="text-4xl font-bold text-gray-900">Solid ECharts</h1>
      </div>
      <ChartBox
        option={stackedBarChartOption}
        title={"Stacked Bar Chart"}
        backgroundColorClass="bg-black"
      />
      <ChartBox
        option={pieChartOption}
        title={"Pie Chart"}
        backgroundColorClass="bg-red-400"
      />
    </div>
  );
};

export default App;
