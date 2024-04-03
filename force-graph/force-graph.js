import {
  curveCatmullRomClosed,
  curveLinear,
  drag,
  forceLink,
  forceSimulation,
  forceX,
  forceY,
  index,
  line,
  pairs,
  select,
} from "d3";

export default function forceGraph({ el, data }) {
  const imageArea = 3200;
  const imageSmallArea = 1600;
  const imageLargeArea = 16000;
  const textFontFamily = "Reenie Beanie";
  const circleLinkStrokeWidth = 3;
  const dottedLineLinkStrokeWidth = 6;
  const dottedLineStrokeDasharray = "0 20";

  const nodes = data.nodes.map((d) => {
    const area =
      d.size === "large"
        ? imageLargeArea
        : d.size === "small"
        ? imageSmallArea
        : imageArea;
    const unitSize = Math.sqrt(area / d.width / d.height);
    const width = Math.round(unitSize * d.width);
    const height = Math.round(unitSize * d.height);
    return { ...d, x0: d.x, y0: d.y, width, height };
  });
  const forceLinks = data.links.flatMap((d) => {
    switch (d.shape) {
      case "circle":
        return pairs([...d.nodes, d.nodes[0]]).map(([source, target]) => ({
          source,
          target,
        }));
      case "dottedLine":
        return {
          source: d.nodes[0],
          target: d.nodes[1],
        };
      default:
        return [];
    }
  });
  const nodeMap = index(nodes, (d) => d.title);
  const links = data.links.map((d) => ({
    ...d,
    nodes: d.nodes.map((title) => nodeMap.get(title)),
  }));

  const simulation = forceSimulation(nodes)
    .force(
      "link",
      forceLink(forceLinks)
        .id((d) => d.title)
        .strength(0.1)
    )
    .force("x", forceX((d) => d.x0).strength(1))
    .force("y", forceY((d) => d.y0).strength(1))
    .velocityDecay(0.3);

  simulation.tick(300);

  const lineGenerator = {
    circle: line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(curveCatmullRomClosed),
    dottedLine: line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(curveLinear),
  };

  const svg = select(el)
    .append("svg")
    .attr("class", "force-graph")
    .style("display", "block")
    .style("max-width", `${data.width}px`)
    .style("height", "auto")
    .style("margin-inline", "auto")
    .style("overflow", "visible")
    .attr(
      "viewBox",
      data.viewBox || [
        -data.width / 2,
        -data.height / 2,
        data.width,
        data.height,
      ]
    );

  const text = svg
    .append("g")
    .attr("font-family", textFontFamily)
    .attr("text-anchor", "middle")
    .selectChildren("g")
    .data(data.texts)
    .join("g")
    .attr("font-size", (d) => d.fontSize)
    .attr("fill", (d) => d.color || data.color)
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .selectChildren("text")
    .data((d) => d.text)
    .join("text")
    .attr("dy", (_, i) => -0.35 + i * 1 + "em")
    .text((d) => d);

  const link = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", data.color)
    .attr("stroke-linecap", "round")
    .attr("stroke-linejoin", "round")
    .selectChildren("path")
    .data(links)
    .join("path");

  link
    .filter((d) => d.shape === "circle")
    .attr("stroke-width", circleLinkStrokeWidth);

  link
    .filter((d) => d.shape === "dottedLine")
    .attr("stroke-width", dottedLineLinkStrokeWidth)
    .attr("stroke-dasharray", dottedLineStrokeDasharray);

  const node = svg
    .append("g")
    .selectChildren("image")
    .data(nodes.filter((d) => d.type !== "anchor"))
    .join("image")
    .attr("href", (d) => `img/${d.path}`)
    .attr("x", (d) => -d.width / 2)
    .attr("y", (d) => -d.height / 2)
    .attr("width", (d) => d.width)
    .attr("height", (d) => d.height)
    .style("cursor", (d) => (d.link ? "pointer" : null))
    .on("click", (event, d) => {
      if (d.link) {
        window.open(d.link, "_blank");
      }
    });

  node.call(
    drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded)
  );

  const isTouchable =
    !!(
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        (window.DocumentTouch &&
          typeof document !== "undefined" &&
          document instanceof window.DocumentTouch))
    ) ||
    !!(
      typeof navigator !== "undefined" &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints)
    );

  simulation.on("tick", () => {
    // https://stackoverflow.com/questions/33425779/how-to-avoid-sluggish-d3-force-layout-on-android
    // https://stackoverflow.com/a/49423603/7612054
    if (isTouchable) simulation.tick(2);

    link.attr("d", (d) => lineGenerator[d.shape](d.nodes));

    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  });

  function dragStarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragEnded(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
}
