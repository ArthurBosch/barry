function createChartDiv(data, element) {
  const div = document.createElement("div");
  element.appendChild(div);
  createTicksContainer(data, element);
  createCharts(data, div);

  div.style.position = "relative";
  div.style.width = "100%";
  div.style.height = `${data.length * 30}px`;
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
  chart.style.border = "1px solid black";
}
