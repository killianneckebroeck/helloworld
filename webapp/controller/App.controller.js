sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel" // volgorde is belangrijk voor bendedn bij function moet overeenkomen
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("be.hogent.aalst.helloworld.controller.App", {
            onInit: function () {
                const oData = {
                    user: "Killian",
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onpress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
              },
        });
    });
