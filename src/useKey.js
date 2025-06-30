import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          console.log("CLOSING");
        }
      }
      document.addEventListener("keydown", callback);
      // NEED TO CLEANUP EVENT LISTENER BOI VI  MOI KHI USEEFFECT EXECUTED  SE TAO THEM 1
      // EVENT LISTENER TO THE DOCUMENT
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
