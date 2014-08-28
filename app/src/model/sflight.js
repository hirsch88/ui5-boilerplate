jQuery.sap.declare( 'model.sflight' );

/**
 * Model - sflight
 * --------------------
 * This is the sflight model
 */

model.sflight = {
    /*
    getURI: function(){
        var sURI = 'http://localhost/proxy/sap/opu/odata/sap/zsflight_tgdvosta_srv';

        return sURI;
    },

    setModel: function(){
        var oModel = new sap.ui.model.odata.ODataModel( this.getURI(), true, '', '', '', true, false );
        oModel.setCountSupported( false );

        return oModel;
    }
    */

    getModel: function() {
        var oModel = new sap.ui.model.odata.ODataModel( 'http://localhost/proxy/sap/opu/odata/sap/zsflight_tgdvosta_srv', true, '', '', '', true, false );
        return oModel;
    }



};