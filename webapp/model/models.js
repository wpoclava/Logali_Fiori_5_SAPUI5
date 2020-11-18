sap.ui.define([
	// parte declarativa
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	// zona restrictiva o privada
	"use strict";

	return {

		createRecipient: function () {

			//set model on view
			var oData = {
				// fichero en formato JSON, con propiedad y valor
				recipient: {
					name: "World"
				}
			};

			// devuelve instancia del modelo JSON
			return new JSONModel(oData);

		}

	};

});