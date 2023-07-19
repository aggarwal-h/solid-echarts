import * as echarts from "echarts";
import SolidEChartsCore from "./EChartsCore";
import {
  SolidEChartsProps,
  EChartsSetOptionOpts,
  EChartsTheme,
  EChartsInitOpts,
  EChartsType,
  EChartsOption,
  EChartsInit,
} from "./types";

import type { Component } from "solid-js";

const SolidECharts: Component<SolidEChartsProps> = (props) => {
  return <SolidEChartsCore {...props} echarts={echarts} />;
};

export { SolidECharts as default, SolidEChartsCore };
export type {
  SolidEChartsProps,
  EChartsSetOptionOpts,
  EChartsTheme,
  EChartsInitOpts,
  EChartsType,
  EChartsOption,
  EChartsInit,
};
