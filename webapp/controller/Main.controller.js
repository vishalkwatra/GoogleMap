sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("oil.ds.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oil.ds.view.Main
		 */

		oMap: null,

		onInit: function () {

		},

		onSearch: function (oEvent) {
			var sQuery = oEvent.getParameter("query");
			var oGeocoder = new google.maps.Geocoder();
			var that = this;
			oGeocoder.geocode({
					address: sQuery
				},
				function (results, status) {
					if (status === "OK") {
						var loc = {
							lat: results[0].geometry.location.lat(),
							lng: results[0].geometry.location.lng()
						};
						that.oMap.setCenter(loc);
						new google.maps.Marker({
							map: that.oMap,
							title: sQuery,
							position: loc
						});
					}
				}

			);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oil.ds.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oil.ds.view.Main
		 */
		onAfterRendering: function () {
			if (this.oMap === null) {
				this.oMap = new google.maps.Map(document.getElementById("idPanel"), {
					zoom: 10,
					center: {
						lat: 20.59,
						lng: 78.96
					}
				});
			}
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oil.ds.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});