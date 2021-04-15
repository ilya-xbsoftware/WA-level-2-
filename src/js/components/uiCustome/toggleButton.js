
const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"toggleButton",
  $init: function(config){
    config.value = config.states[0],
    this.$view.className = "off",

    this.attachEvent("onItemClick", function(){
      const lastState = 3;
      const startState = 0;
    
      config.state += 1;

      if(config.state === lastState){
        config.state = startState
      }
  
      this.config.state = config.state;
      this.config.value = this.config.states[config.state];
      this.refresh();

      setBtnColor(this);
      this.callEvent("onStateChange", [this.config.state]);
    })
  }
}, webix.ui.button);


function setBtnColor(btn){
  const state = btn.config.state;

  if(state === 0){
    btn.$view.className = "off"
  }else if(state === 1){
    btn.$view.className = "asc"
  }else if(state === 2){
    btn.$view.className = "desc"
  }
}