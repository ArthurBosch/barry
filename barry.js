class Barry {
  constructor(data, options, element) {
    this.data = data.sort((a, b) => a.value - b.value) || [];
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
  createBarry() {
    //create a section
    const section = document.createElement("section");
    this.element.appendChild(section);
    this.section = section;
    section.className = "barry-section";

    //create title
    const title = document.createElement("h1");
    title.innerText = this.options.title.title;
    title.style.fontSize = this.options.title.fontSize;
    title.style.fontColor = this.options.title.fontColor;
    section.appendChild(title);

    //create a chart container inside section
    const chart = document.createElement("div");
    section.appendChild(chart);
    this.chart = chart;
    chart.className = "barry-section--chart";

    //create bars
    let i = 0;
    this.bars = [];
    while (i < this.data.length) {
      console.log(this.data[i].value);
      const bar = new Bar(
        this.data[i].title,
        this.data[i].value,
        this.data,
        this.options.barColor
      );
      bar.appendToChart(chart);
      this.bars.push(bar);
      i++;
    }

    //create ticks
    new Tics(this.data, section).drawTicks();
  }
  deleteBarry() {
    this.section.remove();
  }
  updateBarry() {
    this.deleteBarry();
    this.createBarry();
  }
  setData(array) {
    this.data = array.sort((a, b) => a.value - b.value);
  }
  createBars(chart) {}
  setBarColor(string) {
    this.options.barColor = string;
    this.updateBarry();
  }
  setLabelColor(string) {
    this.options.labelColor = string;
    this.updateBarry();
  }
  setBarSpacing(pxString) {
    this.options.barSpacing = pxString;
    this.updateBarry();
  }
  setTitleFontSize(pxString) {
    this.options.title.fontSize = pxString;
    this.updateBarry();
  }
  setFontColor(string) {
    this.options.fontColor = string;
    this.updateBarry();
  }
}

class Bar {
  constructor(title, value, data, color) {
    this.title = title || "untitled";
    this.value = value || 0;
    this.color = color || "black";
    this.data = data;
  }

  createNode() {
    const div = document.createElement("div");
    div.className = "chart-bar";
    const title = document.createElement("h3");
    title.innerText = this.title;
    div.appendChild(title);
    const valueText = document.createElement("h6");
    valueText.innerText = this.value;
    div.appendChild(valueText);
    div.style.width = `${
      (this.value / this.data[this.data.length - 1].value) * 100
    }%`;
    div.style.height = `${100 / this.data.length}%`;
    div.style.background = this.color;
    return div;
  }

  setTitle(title) {
    this.title = title;
  }
  setValue(value) {
    this.value = value;
  }

  appendToChart(parent) {
    parent.appendChild(this.createNode());
  }
}

class Tics {
  constructor(data, parent) {
    this.endPoint = data[data.length - 1].value;
    this.middlePoint = this.endPoint / 2;
    this.firstQuater = this.middlePoint / 2;
    this.thirdQuater = (this.middlePoint + this.endPoint) / 2;
    this.parent = parent;
  }
  drawTicks() {
    //draw container
    const ticksContainer = document.createElement("div");
    ticksContainer.className = "barry-section--ticks-container";
    this.parent.appendChild(ticksContainer);

    const ticksArray = [
      0,
      this.firstQuater,
      this.middlePoint,
      this.thirdQuater,
      this.endPoint,
    ];

    //ticks
    const markdown = ticksArray.map(
      (item) =>
        `<div class="ticks-container--tics-div"><span>|</span><span>${item}</span></div>`
    );

    markdown.forEach((div) => {
      ticksContainer.insertAdjacentHTML("beforeend", div);
    });
  }
}
