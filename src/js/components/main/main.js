import { DATA_USERS } from "../../data/data";
import * as toggleButton from "../uiCustome/toggleButton";
import * as reusableForm from "../uiCustome/reusableForm";

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

const firstCustomeform = {
  view:"reusableForm", 
  fields:["Fname","Lname", "Address"], 
  saveAction: function(){
    webix.message('custome');
  }
}

const secondCustomeform = {
  view:"reusableForm", 
  fields:["Address ","Phone", "Email"], 
}

const main = {
  rows:[
    toolBar,
    listWithNames,
    {view:"resizer"},
    {
      cols:[
        firstCustomeform,
        secondCustomeform
      ]
    }
  ]
}

export { main }
