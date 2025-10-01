import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Sidebar from "./customNode/sidebarSetting/sidebar";

import "./index.less";
import ConditionNode from "./customNode/Conditionnmode";
import HomeNode from "./customNode/HomeNode";
import SchedulesNode from "./customNode/SchedulesNode";
import LoopNode from "./customNode/LoopNode";

const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    type: "home",
    data: {
      label: "Node 2",
    },
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    type: "condition",
    data: {
      label: "node 1",
      content: "21312312",
      color: "blue",
    },
  },

  {
    id: "n3",
    position: { x: 0, y: 200 },
    type: "schedules",
    data: {
      label: "schedules",
    },
  },

  {
    id: "n4",
    position: { x: 0, y: 300 },
    type: "loop",
    data: {
      label: "node loop",
    },
  },
];
const initialEdges = [
  // {
  //   id: "n1-n2",
  //   markerEnd: { type: MarkerType.ArrowClosed },
  //   source: "n1",
  //   target: "n2",
  // },
];

export default function WorkFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const [selectedNode, setSelectedNode] = useState(null);

  const nodeTypes = {
    condition: ConditionNode,
    home: HomeNode,
    schedules: SchedulesNode,
    loop: LoopNode,
  };

  const onNodesChange = useCallback((changes) => {
    console.log("chnge:", changes);
    setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
  }, []);
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge(
          { ...params, markerEnd: { type: MarkerType.ArrowClosed } },
          edgesSnapshot
        )
      ),
    []
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    event.stopPropagation();
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        defaultViewport={{ zoom: 1, x: 200, y: 200 }}
        proOptions={{ hideAttribution: true }}
        onPaneClick={(event) => {
          console.log("Click vào viewport React Flow", event);
          setSelectedNode(null);
        }}
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
        <MiniMap position="bottom-left" />
        {selectedNode && <Sidebar selectedNode={selectedNode} />}
      </ReactFlow>
    </div>
  );
}
