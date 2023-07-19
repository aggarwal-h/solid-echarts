import { createEffect, onMount, onCleanup } from "solid-js";
import { createResizeObserver } from "@solid-primitives/resize-observer";
import { debounce } from "@solid-primitives/scheduled";
import { typeIsFunction, typeIsString } from "./utils";

import type { Component } from "solid-js";
import type { SolidEChartsProps, EChartsType } from "./types";

const SolidEChartsCore: Component<SolidEChartsProps> = (props) => {
  let echartsRef: HTMLDivElement | undefined;
  let chartRef: EChartsType;
  let isFirstResize = true;

  onMount(() => {
    chartRef = props.echarts.init(echartsRef, props.theme, props.opts);
    bindEvents(chartRef, props.createEvents ?? {});
    createResizeObserver(echartsRef, (_, el) => {
      if (el === echartsRef) resizeChart();
    });
  });

  onCleanup(() => {
    disposeChart();
  });

  createEffect(() => {
    const instance = getEchartsInstance();

    instance?.setOption(props.option, props.notMerge, props.lazyUpdate);
    if (props.showLoading) {
      instance?.showLoading(props.loadingOption);
    } else {
      instance?.hideLoading();
    }
  });

  const resizeChart = debounce(
    () => {
      const instance = getEchartsInstance();
      if (!isFirstResize && instance) {
        try {
          instance.resize({
            width: "auto",
            height: "auto",
          });
        } catch (e) {
          console.warn(e);
        }
      }
      isFirstResize = false;
    },
    props.debouncedResize ? 250 : 0
  );

  const disposeChart = () => {
    if (echartsRef) {
      props.echarts.dispose(echartsRef);
    }
  };

  const getEchartsInstance = (): EChartsType | undefined => {
    if (echartsRef) {
      return props.echarts.getInstanceByDom(echartsRef) as EChartsType;
    }
    return undefined;
  };

  const bindEvents = (
    instance: EChartsType,
    events: SolidEChartsProps["createEvents"]
  ) => {
    for (const [eventType, eventCallback] of Object.entries(events ?? {})) {
      if (typeIsString(eventType) && typeIsFunction(eventCallback)) {
        instance.on(eventType, (parameters) => {
          eventCallback(parameters, instance);
        });
      } else {
        console.warn(
          "The event passed in must be a string, and the callback must be a function.",
          eventType,
          eventCallback
        );
      }
    }
  };

  const style = { height: "400px", width: "100%", ...props.style };
  return <div style={style} ref={echartsRef} class={props.class} />;
};

export default SolidEChartsCore;
