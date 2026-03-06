var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-PointsOnGraphs",
  "level": "1",
  "url": "sec-section-PointsOnGraphs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Effect of transformations on points",
  "body": " Effect of transformations on points  While the corresponding points on the graphs of vertical transformations may seem clear, the corresponding points on the graphs of the horizontal transformations can create some confusion. Let's see the logic argument behind the characterization we observed.     Let the graph of be a horizontal shift of units of the graph of . If the point lies on the graph of , then the point lies on the graph of .       Let be a function with domain . By definition Let be a function with domain defined by (a horizontal shift of by units.) Then . Write for some . Then     "
},
{
  "id": "prop-PointsHorizontalShift",
  "level": "2",
  "url": "sec-section-PointsOnGraphs.html#prop-PointsHorizontalShift",
  "type": "Proposition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let the graph of be a horizontal shift of units of the graph of . If the point lies on the graph of , then the point lies on the graph of .   "
},
{
  "id": "sec-section-PointsOnGraphs-4-1",
  "level": "2",
  "url": "sec-section-PointsOnGraphs.html#sec-section-PointsOnGraphs-4-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be a function with domain . By definition Let be a function with domain defined by (a horizontal shift of by units.) Then . Write for some . Then   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
