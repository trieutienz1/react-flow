import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nodes: [
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
        timeZone: "VN",
        date: "2025/10/10",
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
  ],
  edges: [],
  selectedNode: null,
};

const flowSlice = createSlice({
  name: "flow",
  initialState,
  reducers: {
    setNodes: (state, action) => {
      state.nodes = action.payload;
    },
    setEdges: (state, action) => {
      state.edges = action.payload;
    },
    addNode: (state, action) => {
      console.log("ađnode ghihhii:", state, action.payload);
      const newNode = action.payload;
      state.nodes.push(newNode);
    },
    addEdge: (state, action) => {
      state.edges.push(action.payload);
    },
    setSelectedNode: (state, action) => {
      state.selectedNode = action.payload;
    },
    turnOffAllToolbars: (state) => {
      state.nodes = state.nodes.map((item) => {
        return {
          ...item,
          data: {
            ...item.data,
            showToolbar: false,
          },
        };
      });
    },
    turnOnToolbar: (state, action) => {
      const id = action.payload;

      state.nodes = state.nodes.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            data: {
              ...item.data,
              showToolbar: true,
            },
          };
        }
        return item;
      });
    },
    updateNode: (state, action) => {
      const { id, data } = action.payload;
      const node = state.nodes.find((n) => n.id === id);
      if (node) node.data = { ...node.data, ...data };
    },
    removeNode: (state, action) => {
      const id = action.payload;
      state.nodes = state.nodes.filter((n) => n.id !== id);
      state.edges = state.edges.filter(
        (e) => e.source !== id && e.target !== id
      );
    },
  },
});

export const {
  setNodes,
  setEdges,
  addNode,
  addEdge,
  updateNode,
  removeNode,
  setSelectedNode,
  turnOnToolbar,
  turnOffAllToolbars,
} = flowSlice.actions;
export default flowSlice.reducer;
