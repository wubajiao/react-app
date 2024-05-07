import React, { useEffect, useRef } from 'react'
import G6 from '@antv/g6'

function LoopFlowChart() {
  const graphRef = useRef<any>(null)

  useEffect(() => {
    const graph = new G6.Graph({
      container: graphRef.current,
      width: 800,
      height: 600,
      fitView: false,
      modes: {
        default: ['drag-canvas', 'drag-node'],
      },
      layout: {
        type: 'dagre',
        rankdir: 'LR', // 可选，默认为图的中心
        align: 'DL', // 可选
        nodesep: 30, // 可选
        ranksep: 30, // 可选
        controlPoints: true, // 可选
      },
      defaultNode: {
        size: [30, 20],
        type: 'rect',
        style: {
          lineWidth: 2,
          stroke: '#5B8FF9',
          fill: '#C6E5FF',
        },
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        size: 2,
        color: '#e2e2e2',
        style: {
          endArrow: {
            path: 'M 0,0 L 8,4 L 8,-4 Z',
            fill: '#e2e2e2',
          },
          radius: 20,
        },
      },
    })

    const data: any = {
      nodes: [
        {
          id: '0',
          label: '0',
          x: 100,
          y: 100,
          style: {
            y: 40,
            fill: '#fff',
            stroke: '#000',
            lineWidth: 1,
          },
          labelCfg: {
            style: {
              y: 50,
            },
          },
        },
        {
          id: '1',
          label: '',
          size: 1,
          style: {
            y: 40,
            x: -30,
            fill: '#f00',
            stroke: '#000',
            width: 6,
            height: 6,
            opacity: 0,
          },
          labelCfg: {
            style: {
              y: 50,
            },
          },
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        {
          id: '2',
          label: '2',
          style: {
            width: 120,
            height: 30,
            y: -40,
            x: -40,
          },
          labelCfg: {
            style: {
              y: -24,
              x: 30,
            },
          },
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        {
          id: '3',
          label: '3',
          style: {
            y: 40,
          },
          labelCfg: {
            style: {
              y: 50,
            },
          },
        },
      ],
      edges: [
        {
          source: '1',
          target: '0',
          // style: { stroke: '#f00', lineWidth: 1, lineDash: [5, 5] },
        },
        {
          source: '1',
          target: '3',
        },
        // {
        //   source: '1',
        //   target: '0',
        // },
        {
          source: '0',
          target: '2',
        },
        {
          source: '2',
          target: '1',
          sourceAnchor: 1,
          targetAnchor: 0,
          style: {
            endArrow: false,
          },
        },
        {
          source: '4',
          target: '5',
        },
        // {
        //   source: '4',
        //   target: '6',
        // },
        // {
        //   source: '5',
        //   target: '7',
        // },
        // {
        //   source: '5',
        //   target: '8',
        // },
        // {
        //   source: '8',
        //   target: '9',
        // },
        // {
        //   source: '2',
        //   target: '9',
        // },
        // {
        //   source: '3',
        //   target: '9',
        // },
      ],
    }

    graph.data(data)
    graph.render()

    return () => {
      graph.destroy()
    }
  }, [])

  return <div ref={graphRef} />
}

export default LoopFlowChart
