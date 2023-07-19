import {
  init,
  type SetOptionOpts,
  type EChartsType,
  type EChartsOption,
} from "echarts";

type EChartsInit = typeof init;
type EChartsInitParameters = Parameters<EChartsInit>;
type EChartsTheme = NonNullable<EChartsInitParameters[1]>;
type EChartsInitOpts = NonNullable<EChartsInitParameters[2]>;

type StyleProps = {
  [key: string]: string | number;
};

type SolidEChartsProps = {
  /**
   * The global ECharts object (full or core).
   */
  readonly echarts: any;

  /**
   * Additional CSS classes to pass down to the chart container.
   */
  readonly class?: string;

  /**
   * Inline styles to customize the chart container.
   */
  readonly style?: StyleProps;

  /**
   * The ECharts theme to be applied.
   */
  readonly theme?: EChartsTheme;

  /**
   * Optional chart configurations when initializing the chart.
   */
  readonly opts?: EChartsInitOpts;

  /**
   * The ECharts options object containing the chart's configuration and data.
   * See: https://echarts.apache.org/en/api.html#echarts.init
   */
  readonly option: EChartsOption;

  /**
   * An object mapping the ECharts event name to its callback function.
   * Events: https://echarts.apache.org/en/api.html#events
   */
  readonly createEvents?: Record<string, Function>;

  /**
   * Whether or not to merge with the previous option when setting a new option.
   * (false by default)
   */
  readonly notMerge?: boolean;

  /**
   * Whether or not to update the chart immediately on change.
   * (false by default)
   */
  readonly lazyUpdate?: boolean;

  /**
   * Whether or not show loading on the chart.
   * (false by default)
   */
  readonly showLoading?: boolean;

  /**
   * The loading configuration.
   * (null by default)
   */
  readonly loadingOption?: any;

  /**
   * Whether or not to debounce the resize functionality by 250ms.
   * (false by default)
   */
  readonly debouncedResize?: boolean;
};

export type {
  SolidEChartsProps,
  SetOptionOpts as EChartsSetOptionOpts,
  EChartsTheme,
  EChartsInitOpts,
  EChartsType,
  EChartsOption,
  EChartsInit,
};
