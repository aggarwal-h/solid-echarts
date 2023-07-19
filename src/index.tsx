import * as echarts from "echarts";
import SolidEChartsCore from "./EChartsCore";
import { SolidEChartsProps } from "./types";

import type { Component } from "solid-js";

const SolidECharts: Component<SolidEChartsProps> = (props) => {
  return <SolidEChartsCore {...props} echarts={echarts} />;
};

export default SolidECharts;
export { SolidEChartsCore };
