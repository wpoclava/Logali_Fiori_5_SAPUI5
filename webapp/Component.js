sap.ui.define([
		"sap/ui/core/UIComponent",
		"logaligroup/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel",
		"./controller/HelloDialog"
	], function (UIComponent, models, ResourceModel, HelloDialog) {

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

				//Se crea una instancia de atributo
				this._helloDialog = new HelloDialog(this.getRootControl());

			},

			//cuando se sale del componente se destruye la instancia this._HelloDialog
			exit: function () {

				this._helloDialog.destroy();
				delete this._helloDialog;

			},

			//llamar a la funcionalidad del objeto gestionado, es decir llamar al open
			openHelloDialog: function () {

				this._helloDialog.open();

			}

		});

	}

);