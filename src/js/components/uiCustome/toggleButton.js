const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"toggleButton",
  $init: function(config){
    config.value = "Off";
  
    this.states = config.states;
    this.state = config.state;
    this.startState = config.state;
    this.lastState =  Object.keys(this.states).length;
    this.$view.classList.add("off");

    this.attachEvent("onItemClick", function(){
      this.state += 1;
      if(this.state === this.lastState){
        this.state = this.startState
      }

      this.config.value = this.states[this.state];
      this.refresh();

      this._setBtnColor();
      this.callEvent("onStateChange", [this.state]);
    })
  },
  _setBtnColor(){
    const state = this.state;
    const states = this.states;
    const className = this.$view.classList;

    Object.values(states).map((singleState)=>{
      className.remove(singleState.toLowerCase());
    });
    className.add(states[state].toLowerCase());
  }
}, webix.ui.button);