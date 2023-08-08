import SolidEChartsCore from "./SolidEChartsCore";
import * as echarts from "echarts";

import type { Component } from "solid-js";
import type { SolidEChartsProps } from "./types";

const SolidECharts: Component<SolidEChartsProps> = (props) => {
  return <SolidEChartsCore {...props} echarts={echarts} />;
};

export default SolidECharts;
