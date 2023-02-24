const mainEl = document.querySelector("main");

const data = [
  {
    title: "Junior",
    value: 45000,
  },
  {
    title: "Middle",
    value: 70000,
  },
  {
    title: "Senior",
    value: 95000,
  },
  {
    title: "Lead",
    value: 135000,
  },
  {
    title: "PM",
    value: 145000,
  },
  {
    title: "SEO",
    value: 170000,
  },
];

const chartObject = new Barry(data, false, mainEl);
chartObject.createBarry();
chartObject.setBarColor("yellow");
