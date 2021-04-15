const webix = require("webix/webix.js");

export default webix.protoUI({
  name:"reusableForm",
  $init: function(config){
    this.fields = config.fields;
    this.saveAction = config.saveAction;
    config.elements = this.createForm(config);
  },
  createForm: function(){
    const self = this;
    const formFields = self.fields;
    const saveButton = {view: "button", value:"Save", css:"webix_primary", width:200, click: () => {
      if(self.saveAction && typeof self.saveAction === "function") {
        self.saveAction()
      }else{
        webix.message({type:"success", text:"The form is saved !"})
      }
    }};
    const cancelButton = {view:"button", value:"Cancel", css:"webix_danger", width:200, click:confirmMessage};
    const colsWithButtons = { cols:[cancelButton, {}, saveButton] };

    const form = generateFormElements(formFields);
    form.push(colsWithButtons);

    return form
  },
  fields_setter: function(parameters){
    return parameters;
  }
}, webix.ui.form);

function generateFormElements(formFields){
  const elements = [];
  

  formFields.forEach((field) => {
    elements.push({ view:"text", label:`${field}`, name:`${field}`})
  })

  return elements;
}

const confirmMessage = () =>{
  webix.confirm({
    title:"Are you sure ?",
    ok:"Yes", 
    cancel:"No",
  });
}