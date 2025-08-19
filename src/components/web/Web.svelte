<script lang="ts">
  import * as d3 from 'd3'
  import {onMount} from 'svelte'
  import type {ForceLink, SimulationNodeDatum} from 'd3'
  import type {Force, SimulationLinkDatum} from 'd3-force'
  import * as string_decoder from 'node:string_decoder'
  
  interface WebNode extends SimulationNodeDatum {
    id: string,
    group: number
  }
  interface WebLink extends SimulationLinkDatum<WebNode> {
    value: number
  }
  const data: {nodes:WebNode[], links: WebLink[]} = {
    nodes: [
      {
        id: 'Richard',
        group: 1
      },
      {
        id: 'Chantal',
        group: 1
      },
      {
        id: 'Valerie',
        group: 2
      },
      {
        id: 'Ariane',
        group: 2
      },
      {
        id: 'Andre',
        group: 2
      },
      {
        id: 'Blaise',
        group: 3
      },
      {
        id: 'James',
        group: 3
      },
      {
        id: 'Olivier',
        group: 3
      },
      {
        id: 'Jeff',
        group: 4
      },
    ],
    links: [
      {source: 'Richard', target: 'Ariane', value: 1},
      {source: 'Chantal', target: 'Ariane', value: 1},
      {source: 'Richard', target: 'Valerie', value: 1},
      {source: 'Chantal', target: 'Valerie', value: 1},
      {source: 'Richard', target: 'Andre', value: 1},
      {source: 'Chantal', target: 'Andre', value: 1},
      {source: 'Ariane', target: 'James', value: 1},
      {source: 'Ariane', target: 'Olivier', value: 1},
      {source: 'Ariane', target: 'Blaise', value: 1},
      {source: 'Jeff', target: 'James', value: 1},
      {source: 'Jeff', target: 'Olivier', value: 1},
      {source: 'Jeff', target: 'Blaise', value: 1},
    ]
    
  }
  const web = () => {
    // Specify the dimensions of the chart.
    const width = 928
    const height = 600
    
    // Specify the color scale.
    const color = d3.scaleOrdinal(d3.schemeCategory10)
    
    // The force simulation mutates links and nodes, so create a copy
    // so that re-evaluating this cell produces the same result.
    const links = data.links.map(d => ({...d}))
    const nodes: SimulationNodeDatum[] = data.nodes.map(d => ({...d}))
    
    // Create a simulation with several forces.
    const simulation = d3.forceSimulation(nodes)
      .force('link', (d3.forceLink(links) as ForceLink<WebNode,WebLink>)
        .id(d => d.id)
        .distance(150) // Set the desired link distance
        .strength(0.5) // Set the link strength
        // .theta(0.5)
      )
      .force('charge', d3.forceManyBody()
        .strength(-51) // Set the link strength
        .theta(0.5))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked)
    
    // Create the SVG container.
    const svg = d3.create('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100% height: auto')
    
    // Add a line for each link, and a circle for each node.
    const link = svg.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll()
      .data(links)
      .join('line')
      .attr('stroke-width', d => d.value * 5)
    
    const node = svg.append('g')
      .attr('stroke', '#535')
      .attr('stroke-width', 1.2)
      .selectAll()
      .data(nodes)
      .join('circle')
      .attr('r', 15)
      .attr('fill', d => color(d.group))
    
    node.append('title')
      .text(d => d.id)
    

    
    // Set the position attributes of links and nodes each time the simulation ticks.
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        
        node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
    }
    
    // Reheat the simulation when drag starts, and fix the subject position.
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      event.subject.fx = event.subject.x
      event.subject.fy = event.subject.y
    }
    
    // Update the subject (dragged node) position during drag.
    function dragged(event) {
      event.subject.fx = event.x
      event.subject.fy = event.y
    }
    
    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0)
      event.subject.fx = null
      event.subject.fy = null
    }
    // Add a drag behavior.
    node.call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended))
    
    // When this cell is re-run, stop the previous simulation. (This doesn’t
    // really matter since the target alpha is zero and the simulation will
    // stop naturally, but it’s a good practice.)
    // invalidation.then(() => simulation.stop())
    
    return svg.node()
    //return svg
  }
  
  let webEl
  let el
  
  onMount(() => {
    d3.select(el)
      .selectAll('div')
      .data([30, 86, 168, 281, 303, 365])
      .enter()
      .append('div')
      .style('width', function (d) {
        return d + 'px'
      })
      .text(function (d) {
        return d
      })
    webEl.append(web())
  })

</script>

<h1>Sources</h1>
<section class="web">
  <h1>Connections</h1>
  <div bind:this={el} class="chrt"></div>
  <h2>web</h2>
  <div bind:this={webEl} class="chrt"></div>
  <h2>-----</h2>
</section>
<style>
  .chrt :global(div) {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
  }
</style>