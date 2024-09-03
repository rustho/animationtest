import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { addElement, removeElement } from "./store/slices/elementSlice";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
  const elements = useSelector((state: RootState) => state.elements.elements);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(addElement());
  };

  const handleRemove = () => {
    dispatch(removeElement());
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div className="list">
        <AnimatePresence>
          {elements.map((element, index) => (
            <motion.div
              key={element.id}
              className="element"
              style={{ backgroundColor: element.color }}
              initial={{ x: index === 0 ? -100 : 0, opacity: 0 }}
              animate={{ x: 20 * index + "vw", opacity: 1 }}
              exit={{ x: 20 * index + 2 + "vw", opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
