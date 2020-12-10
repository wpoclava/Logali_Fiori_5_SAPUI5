sap.ui.define([
	// parte declarativa
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	// zona restrictiva o privada
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {
		// funciones que la vista que usa éste controlador tendrá acceso

		onInit: function () {

		},

		onShowHello: function () {

			//read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);

			MessageToast.show(sMsg);

		},

		onOpenDialog: function () {

			//se llama a la funcion openHelloDialog del Component
			this.getOwnerComponent().openHelloDialog();

		}
		
	});
});