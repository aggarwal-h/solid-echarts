<p>
  <img width="100%" src="https://assets.solidjs.com/banner?project=LIBRARY&type=solid-echarts&background=tiles" alt="solid-echarts">
</p>

# solid-echarts

Supercharge your Data Visualization in Solid. Powered by ECharts.



## 📦 Installation

### Yarn

```bash
yarn add solid-echarts
```

### NPM

```bash
npm install solid-echarts --save
```

### PNPM

```bash
pnpm install solid-echarts --save
```

## Simple Usage

```jsx
import SolidECharts from "solid-echarts";

<SolidECharts 
    option={option} 
    style={{ 
        width: "100%",
        height: "900px",
    }} 

/>
```
Replace `option` with your ECharts chart option.


## Advanced Usage
For reduced bundle size:
```jsx
import { SolidEChartsCore } from "solid-echarts";
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Register only the components you need.
echarts.use([LineChart, GridComponent, TooltipComponent CanvasRenderer]);

<SolidEChartsCore 
    echarts={echarts}
    option={option} 
    style={{ 
        width: "100%",
        height: "900px",
    }} 
    opts={{ renderer: "canvas" }}
/>
```
Replace `option` with your ECharts chart option.