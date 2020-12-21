// Module pattern
const DOMManager = (() => {
    let containerDiv = document.querySelector("#container");

    const showTodos = () => {
      console.log("Showing todos!"); 
      console.log(containerDiv);
    }

    return { showTodos };
  })()
  
  export { DOMManager };