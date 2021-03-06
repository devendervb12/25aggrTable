sap.ui.controller("z5table.Table", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z5table.Table
*/
	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/employeeData.json");
		
		this.getView().setModel(oModel);
		
//		var oTable = this.getView().byId("idTable");
		
		/*var oTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({ text : "{name}"}),
				new sap.m.Input({value : "{dept}"}),
				new sap.m.Button({text : "{role}"})
				
			]
		});
		
		oTable.bindAggregation("items", "/companyData/empInfo", oTemplate);*/
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf z5table.Table
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf z5table.Table
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf z5table.Table
*/
//	onExit: function() {
//
//	}

});