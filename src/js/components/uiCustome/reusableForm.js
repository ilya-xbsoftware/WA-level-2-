const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"reusableForm",
  $init: function(config){
    config.elements = this.createForm(config);
  },

  defaults:{
    saveAction: function() {
      webix.message({type:"success", text:"The form is saved !"})
    },

    cancelAction: function(){
      webix.confirm({title:"Are you sure ?",
        ok:"Yes", 
        cancel:"No",
      });
    }
  },
  
  createForm: function(config){
    const formFields = config.fields;
    const saveButton = {view: "button", value:"Save", css:"webix_primary", width:200, click: this._checkFunction(config.saveAction) || this.defaults.saveAction };
    const cancelButton = {view:"button", value:"Cancel", css:"webix_danger", width:200, click: this.defaults.cancelAction};
    const colsWithButtons = { cols:[cancelButton, {}, saveButton] };

    const form = this._generateFormElements(formFields);
    form.push(colsWithButtons);

    return form
  },

  _checkFunction(func){
    if(typeof func === "function"){
      return func
    }
    return false
  },
  _generateFormElements(formFields){
    const elements = [];
    formFields.forEach((field) => {
      elements.push({ view:"text", label:`${field}`, name:`${field}`})
    })
  
    return elements;
  }
}, webix.ui.form);


