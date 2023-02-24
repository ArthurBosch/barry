const mainEl = document.querySelector("main");

class Chart {
  constructor(data, options, element) {
    this.data = data.sort((a, b) => a - b) || [];
    this.options = options || {
      barColor: "Black",
      labelColor: "White",
      barSpacing: "20px",
      title: {
        title: "Hey! I'm Barry",
        fontSize: "16px",
        fontColor: "Black",
      },
    };
    this.element = element;
  }
  drawBarChart() {
    createChartDiv(this.data, this.element);
  }
  setData(array) {
    this.data = array.sort((a, b) => a - b);
  }
  setBarColor(string) {
    this.options.barColor = string;
  }
  setLabelColor(string) {
    this.options.labelColor = string;
  }
  setBarSpacing(pxString) {
    this.options.barSpacing = pxString;
  }
  setTitleFontSize(pxString) {
    this.options.title.fontSize = pxString;
  }
  setFontColor(string) {
    this.options.fontColor = string;
  }
}

const chartObject = new Chart([5, 9, 7], false, mainEl).drawBarChart();

function createChartDiv(data, element) {
  const div = document.createElement("div");
  element.appendChild(div);
  createTicksContainer(data, element);
  createCharts(data, div);

  div.style.position = "relative";
  div.style.width = "100%";
  div.style.minHeight = "100px";
  div.style.borderBottom = "1px solid black";
  div.style.borderLeft = "1px solid black";

  return div;
}

function createTicksContainer(data, element) {
  const div = document.createElement("div");
  element.appendChild(div);
  createZeroTick(div);
  createMiddleTick(data, div);
  createEndTick(data, div);
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
}

function createZeroTick(element) {
  const span = document.createElement("span");
  span.innerHTML = "0";
  element.appendChild(span);
}

function createEndTick(data, element) {
  const span = document.createElement("span");
  span.innerHTML = data[data.length - 1];
  element.appendChild(span);
}

function createMiddleTick(data, element) {
  const span = document.createElement("span");
  span.innerHTML = data[data.length - 1] / 2;
  element.appendChild(span);
}

function createCharts(data, element) {
  const chartsContainer = document.createElement("div");
  element.appendChild(chartsContainer);
  chartsContainer.style.position = "absolute";
  chartsContainer.style.width = "100%";
  chartsContainer.style.height = "100%";
  let i = 0;
  while (i < data.length) {
    createChart(data, data[i], chartsContainer);
    i++;
  }
}

function createChart(data, singleData, element) {
  const chart = document.createElement("div");
  element.appendChild(chart);
  const ratio = Math.floor((singleData / data[data.length - 1]) * 100);
  chart.style.width = `${ratio}%`;
  chart.style.height = `${100 / data.length}%`;
  chart.style.background = "black";
}
