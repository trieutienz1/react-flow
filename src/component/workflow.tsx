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
import Sidebar from "./sidebarSetting/sidebar";

import "./index.less";
import ConditionNode from "./customNode/Conditionnmode";
import HomeNode from "./customNode/HomeNode";
import SchedulesNode from "./customNode/SchedulesNode";
import LoopNode from "./customNode/LoopNode";
import ActionNode from "./customNode/ActionNode";

const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    type: "home",
    data: {
      label: "Node 2",
      showToolbar: false,
    },
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    type: "condition",
    data: {
      label: "node 1",
      showToolbar: false,
    },
  },

  {
    id: "n3",
    position: { x: 0, y: 200 },
    type: "schedules",
    data: {
      label: "schedules",
      showToolbar: false,
    },
  },

  {
    id: "n4",
    position: { x: 0, y: 300 },
    type: "loop",
    data: {
      label: "node loop",
      showToolbar: false,
    },
  },
  {
    id: "n5",
    position: { x: 0, y: 400 },
    type: "action",
    data: {
      label: "action node",
      showToolbar: false,
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
    action: ActionNode,
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

  const clearShowtoolbar = () => {
    setNodes((nds) =>
      nds.map((n) => {
        return { ...n, data: { ...n.data, showToolbar: false } };
      })
    );
  };

  const onNodeClick = (event, node) => {
    console.log("nodeClick");
    setSelectedNode(node);
    clearShowtoolbar();
    event.stopPropagation();
  };

  const handleFromNode = (nodeId: string) => {
    console.log("Node gọi ra ngoài:", nodeId);

    setNodes((nds) =>
      nds.map((n) => {
        return n.id == nodeId
          ? { ...n, data: { ...n.data, showToolbar: true } }
          : n;
      })
    );
    // ví dụ mở modal hoặc thêm node mới
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes.map((n) => ({
          ...n,
          data: { ...n.data, onClickHandle: handleFromNode },
        }))}
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
          clearShowtoolbar();
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
