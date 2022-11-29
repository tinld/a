// import "./styles.css";
import React, { useState } from "react";
import Comment from "./comments/Comment";

const App = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsPaneOpen(true);
        }}
      >
        Open Comment
      </button>
      {isPaneOpen && (
        <Comment
          isPaneOpen={isPaneOpen}
          onClose={() => {
            setIsPaneOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
