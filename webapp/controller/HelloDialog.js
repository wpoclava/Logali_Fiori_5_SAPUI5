sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {

	return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog", {

		//queremos recibir la instancia de la vista en tiempo de ejecución
		constructor: function (oView) {

			this._oView = oView;

		},

		//eliminar el objeto this._oView cuando no se utiliza
		exit: function () {

			delete this._oView;

		},

		//funcion que abre el dialogo
		open: function () {

			var oView = this._oView;

			if (!oView.byId("helloDialog")) {

				//instancia del controlador, con la funcion de cerrado
				var oFragmentController = {

					onCloseDialog: function () {
						//Se cierra el fragmento(dialogo) cargado antes
						oView.byId("helloDialog").close();
					}

				};

				//cargamos el fragmento HelloDialog en el Id de oView
				Fragment.load({
					id: oView.getId(),
					name: "logaligroup.SAPUI5.view.HelloDialog",
					controller: oFragmentController

				}).then(function (oDialog) {
					//agregamos las dependencias del dialogo para que tenga acceso a los modelos
					oView.addDependent(oDialog);
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					//abrimos el dialogo la primera vez
					oDialog.open();
				});

			} else {
				//Si la instancia existe solo llamamos al metodo open
				oView.byId("helloDialog").open();
			}

		}

	});

});