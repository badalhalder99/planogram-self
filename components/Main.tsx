"use client"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from "./sidebar";
import Content from "./content";

const Main = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mainWrap">
        <Sidebar />
        <Content />
      </div>
    </DndProvider>
  )
}
export default Main;