import { setTokenSourceMapRange } from "typescript";
//
// WeightedAdjacencyList = graphEdge[][] // 2d array [node][adjencies]

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity); //! atleast one item is has false for seen[] and distance known less than infinity
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;
  //find lowest distance item i in seen arr 'seen and dists are relational'
  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) {
      //already seen go on to next item in loop
      continue;
    }
    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }
  return idx;
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] {
  const seen = new Array(arr.length).fill(false);
  const dists = new Array(arr.length).fill(Infinity);
  const prev = new Array(arr.length).fill(-1);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists); //return i of vertex
    seen[curr] = true; //vertex is now seen and will be processed

    //neighbor vertexes
    const adjs = arr[curr]; // will get the subarray or arr[curr]=>[] b/c arr === [vertex][vertexAdjencies]

    //check all edges attached to curr vertex
    for (let i = 0; i < adjs.length; i++) {
      const edge = adjs[i]; //neighbor edge connected to neighbor
      if (seen[edge.to]) {
        //case: this edge goes to vertex that has been seen
        continue;
      }

      const dist = dists[curr] + edge.weight; // current distance we are from source
      if (dist < dists[edge.to]) {
        //case: new shorter distance found to vertex
        dists[edge.to] = dist; //update distance
        prev[edge.to] = curr; //update path to include current
      }
    }
  }

  const out: number[] = [];
  let curr = sink;
  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source); //push last vertex in
  return out.reverse(); //get path by reversing the arr
}
