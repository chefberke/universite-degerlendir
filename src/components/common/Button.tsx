import React from "react";

interface buttonText {
  text: string;
}

function Button({ text }: buttonText) {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-gray-800 text-gray-100 px-6 h-[2rem] rounded text-[0.9rem] hover:h-[2.2rem] transition-all dark:bg-gray-200 dark:text-gray-950">
        {text}
      </button>
    </div>
  );
}

export default Button;
