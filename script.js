var h1=React.createElement("h1",null,"hello World")
var h2=React.createElement("h2",null,"hello samyak")

var div=React.createElement("div",{id:parent},[h1,h2])

var samyak=ReactDOM.createRoot(document.querySelector("#box"))

samyak.render(div);