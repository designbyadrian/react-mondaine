import "@testing-library/jest-dom/extend-expect";

if (!SVGElement.prototype.getTotalLength) {
  SVGElement.prototype.getTotalLength = () => 1;
}
