class Barry {
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
  createBarry() {
    //create a section
    const section = document.createElement("section");
    this.element.appendChild(section);
    section.className = "barry-section";

    //create a chart container inside section
    const chart = document.createElement("div");
    section.appendChild(chart);
    chart.className = "barry-section--chart";

    //create bars
    let i = 0;
    while (i < this.data.length) {
      // createBars()
      i++;
    }

    //create ticks
    new Tics(this.data, section).drawTicks();
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

class Bar {
  constructor(title, value, color) {
    this.title = title || "untitled";
    this.value = value || 0;
    this.color = color || "black";
  }

  createNode() {
    const div = document.createElement("div");
    div.style.width = `${value}%`;
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
    this.endPoint = data[data.length - 1];
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
