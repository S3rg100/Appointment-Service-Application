var alanBtnInstance = alanBtn({
  key: "5a650989b2490214b1298798a8f358162e956eca572e1d8b807a3e2338fdd0dc/stage",
  authData: {data:"your auth data if needed"},
  onCommand: function (commandData) {
    if (commandData.command === "go:back") {
      //call client code that will react on the received command
    }
  },
onCommand: function (commandData){
//Funciones


},
  
  
  rootEl: document.getElementById("alan-btn"),
});
