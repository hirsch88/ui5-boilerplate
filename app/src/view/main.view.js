/**
 * View - Main
 * --------------------
 * This is the main view
 *
 */
sap.ui.jsview( 'view.main', {

    getControllerName: function(){
        return "view.main";
    },

    /**
     * Defines the content of the view
     * @param oController
     */
    createContent: function( /*oController*/ ){

        var oNavCon = new sap.m.NavContainer( 'navContainerControl', {
            pages: [
                sap.ui.jsview( 'carrier.list', 'view.carrier.list' ),
                sap.ui.jsview( 'carrier.detail', 'view.carrier.detail' )
            ],
            initialPage: 'carrier.list'
        } );

        return oNavCon;
    }

} );