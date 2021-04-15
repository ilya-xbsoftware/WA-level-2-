import { DATA_USERS, COUNTRIES } from "../../data/data";

const webix = require("webix/webix.js");

const customButton = {
  view:"toggleButton", 
  width:100,
  state:0,
  states: {0: "Off", 1: "Asc", 2: "Desc"},
  on:{
    onStateChange:function(state){
      switch(state){
        case 0:
          $$("namesList").sort("#id#", "asc", "int");
          break;
        case 1:
          $$("namesList").sort("#name#", "asc",);
          break;
        case 2:
          $$("namesList").sort("#name#", "desc");
          break;
      }
    }
  }
}

webix.protoUI({
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


const toolBar = {
  view:"toolbar", 
  cols:[
    { view:"label", label:"Sort list:", width:100, align:"center"},
    customButton
  ],
}

const listWithNames = {
  view:"list",
  id:"namesList",
  data:DATA_USERS,
  template:"#id#. #name#"
}

const form = {
  view:"list", data:COUNTRIES, template:"#value#"
}

const main = {
  rows:[
    toolBar,
    listWithNames,
    {view:"resizer"},
    form
  ]
}

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



export { main }

// switch(state) {
//   case 0:
//     btn.css = "off";
//     break;
//   case 1:
//     btn.css = "asc";
//     break;
//   case 2:
//     btn.css = "desc";
//     break;
// }