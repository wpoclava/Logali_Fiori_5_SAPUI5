sap.ui.define([
	// parte declarativa
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	// zona restrictiva o privada
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {
		// funciones que la vista que usa éste controlador tendrá acceso



		onInit: function () {

		},

		onShowHello: function () {
			
			//read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);
			
			MessageToast.show(sMsg);

		}
	});
});