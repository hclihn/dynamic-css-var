// Javascript here
const content = document.getElementById("content");
const n = 4000;

function entryClicked() {
  let b = this.querySelector(".collapsible");
  if (b !== null) {
    let content = this.querySelector(".content");
    if (this.classList.contains("active")) {
      b.classList.remove("active");
      content.style.display = "none";
    } else {
      b.classList.add("active");
      content.style.display = "block";
    }
  }
  this.classList.toggle("active");
}

function addEntry(parent, type, idx) {
  let iDiv = document.createElement("div");
  iDiv.id = `${type}-${idx}`;
  iDiv.className = `${type} entry`;
  let icon = "";
  switch (type) {
    case "info":
      icon = "mdi-information-outline";
      break;
    case "debug":
      icon = "mdi-alpha-d-circle-outline";
      break;
    case "trace":
      icon = "mdi-alpha-t-circle-outline";
      break;
    default:
      icon = "mdi-help-circle-outline";
      break;
  }
  let t = `<span class="mdi ${icon}"></span> This is a log entry #${
    idx + 1
  } for the level of ${type}.`;
  if (Math.random() > 0.5) {
    // extra long txt
    t +=
      " This is an extra long text: Lorem ipsum dolor sit amet, consectetur adipisicing " +
      "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
      "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
      "commodo consequat.";
  }
  if (Math.random() > 0.5) {
    // extra content
    let b = document.createElement("button");
    b.className = "collapsible";
    b.innerHTML = t;
    /*b.addEventListener("click", function () {
      let p = this.parentElement;
      let content = this.nextElementSibling;
      if (p.classList.contains("active")) {
        this.classList.remove("active");
        content.style.display = "none";
      } else {
        this.classList.add("active");
        content.style.display = "block";
      }
      p.classList.toggle("active");
    });*/
    iDiv.appendChild(b);

    let d = document.createElement("div");
    d.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
    consequat.</p>`;
    d.style.display = "none";
    d.className = "content";
    d.style.borderTop = "1px solid #c0c0c0";
    iDiv.appendChild(d);
  } else {
    iDiv.innerHTML = t;
  }
  iDiv.addEventListener("click", entryClicked);
  parent.appendChild(iDiv);
}

for (let i = 0; i < n; i++) {
  addEntry(content, "info", i);
  addEntry(content, "debug", i);
  addEntry(content, "trace", i);
}

function showLog(level) {
  let root = document.documentElement;
  switch (level) {
    case 1:
      root.style.setProperty("--debug-display", "block");
      root.style.setProperty("--trace-display", "none");
      break;
    case 2:
      root.style.setProperty("--debug-display", "block");
      root.style.setProperty("--trace-display", "block");
      break;
    default:
      root.style.setProperty("--debug-display", "none");
      root.style.setProperty("--trace-display", "none");
      break;
  }
}
