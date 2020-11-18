sap.ui.define([
		"sap/ui/core/UIComponent",
		"logaligroup/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"
	], function (UIComponent, models, ResourceModel) {

		// se necesita devolver una instancia del mismo component.js
		// en base a una extension del padre
		return UIComponent.extend("logaligroup.SAPUI5.Component", {

			metadata: {
				manifest: "json"
			},

			init: function () {

				//call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				// set model on component
				this.setModel(models.createRecipient());

				// set i18n model on component
				var i18nModel = new ResourceModel({
					bundleName: "logaligroup.SAPUI5.i18n.i18n"
				});

				this.setModel(i18nModel, "i18n");

			}

		});

	}

);