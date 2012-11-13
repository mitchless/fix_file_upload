///////////////////////////////////////////////////////////////////////////
// File: samplePanel.js
//
///////////////////////////////////////////////////////////////////////////

/*globals  SC: false, YES: false, NO: false, sc_require: false
 sc_super: false
 */

FixFileUpload.SamplePanel = SC.PanelPane.extend({

  layout: { width: 400, height: 200, centerX: 0, centerY: 0 },
  contentView: SC.View.extend({

    childViews: 'uploadView closeButton'.w(),

    uploadView: SC.FileFieldView.extend({

      layout: { left: 20, right: 20, height: 25, top: 20 },
      buttonTitle: 'Browse...',
      fileSelectedButtonTitle: null,
      autoSubmit: NO,
      inputName: 'file',
      emptyText: 'No file selected'

    }),

    closeButton: SC.ButtonView.extend({
      layout: { left: 20, right: 20, height: 24, top: 50 },
      title: 'Close',
      target: 'FixFileUpload',
      action: 'closeDlg'
    })

  })

});