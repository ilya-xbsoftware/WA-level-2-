const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"toggleButton",
  $init: function(config){
    config.value = "Off";
    
    this._startState = config.state;
    this._lastState =  Object.keys(config.states).length;
    this.$view.classList.add("off");

    this.attachEvent("onItemClick", function(){
      this.config.state += 1;
      
      if(this.config.state === this._lastState){
        this.config.state = this._startState
      }

      this.config.value = config.states[this.config.state];
      this.refresh();

      this._setBtnColor();
      this.callEvent("onStateChange", [this.config.state]);
    })
  },
  _setBtnColor(){
    const state = this.config.state;
    const states = this.config.states;
    const className = this.$view.classList;

    Object.values(states).map((singleState)=>{
      className.remove(singleState.toLowerCase());
    });
    className.add(states[state].toLowerCase());
  }
}, webix.ui.button);