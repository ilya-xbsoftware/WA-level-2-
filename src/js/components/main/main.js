import { DATA_USERS, COUNTRIES } from "../../data/data";
import * as toggleButton from "../uiCustome/toggleButton";

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

export { main }
