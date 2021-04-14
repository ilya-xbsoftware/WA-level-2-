import { DATA_USERS, COUNTRIES } from "../../data/data";

console.log(DATA_USERS)

const webix = require("webix/webix.js");

const main = {
  rows:[
    { view:"list", data:DATA_USERS, menu:[ "Add", "Update", "Delete" ],  template:"#name#",},
    {view:"resizer"},
    { view:"list", data:DATA_USERS, menu:"Delete", template:"#country#" }
  ]
};

webix.protoUI({
	name:"menuList",
    on_context:true,
  	defaults:{
        select:true
    },
    $init:function(config){
      	this.$view.className += " menu_list";
      	this.$ready.push(this.initMenu);
        this.attachEvent("onAfterContextMenu", function(id){
        	this.select(id);
        });
    },
    initMenu:function(){
    	var menu = webix.ui({
        	view:"contextmenu",
            data:this.config.menu
        });
      	menu.attachTo(this);
        this.menu = menu.config.id;
    },
    getMenu:function(){
      return this.menu;
    },
    menu_setter:function(value){
  		if(!webix.isArray(value))
          value = [value];
        return value;
    }
}, webix.ui.list);

export { main }