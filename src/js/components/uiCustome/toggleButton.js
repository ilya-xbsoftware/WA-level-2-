const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"toggleButton",
  $init: function(config){
    config.value = "Off",
    config.startState =  config.state;
    config.lastState =  Object.keys(config.states).length;
    this.$view.classList.add("Off"),

    this.attachEvent("onItemClick", function(){
      config.state += 1;

      if(config.state === config.lastState){
        config.state = config.startState
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
  const states = btn.config.states;
  const className = btn.$view.classList;
  const firstState = states[0].toLowerCase();
  const secondState = states[1].toLowerCase();
  const thirdState = states[2].toLowerCase();

  if(state === 0){
    className.remove(`${secondState}`);  
    className.remove(`${thirdState}`);
    className.add(`${firstState}`);  
  }else if(state === 1){
    className.remove(`${firstState}`);  
    className.remove(`${thirdState}`);
    className.add(`${secondState}`);   
  }else if(state === 2){
    className.remove(`${secondState}`);  
    className.remove(`${firstState}`);
    className.add(`${thirdState}`);  
  }
}