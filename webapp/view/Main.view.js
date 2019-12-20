sap.ui.jsview("oil.ds.map.view.Main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf oil.ds.view.Main
	 */
	getControllerName: function () {
		return "oil.ds.map.controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf oil.ds.view.Main
	 */
	createContent: function (oController) {

		var oPanel = new sap.m.Panel("idPanel", {
			height: "560px"
		});

		var oSearchField = new sap.m.SearchField("idSF", {
			search: [oController.onSearch, oController]
		});

		// oVerticalLayout.addContent(oSearchField);

		var oPage = new sap.m.Page({
			title: "Google Map",
			id: "page",
			content: [oSearchField, oPanel]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});