// ==========================================================================
// Project:   FixFileUpload - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals FixFileUpload */

// This page describes the main user interface for your application.  
FixFileUpload.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView panelButton paletteButton'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Welcome to SproutCore!"
    }),

    panelButton: SC.ButtonView.extend({
      layout: { centerX: 0, centerY: 20, width: 200, height: 24 },
      title: 'Panel Pane',
      target: 'FixFileUpload',
      action: 'openPanelPane'
    }),

    paletteButton: SC.ButtonView.extend({
      layout: { centerX: 0, centerY: 46, width: 200, height: 24 },
      title: 'Palette Pane',
      target: 'FixFileUpload',
      action: 'openPalettePane'
    })

  })

});
