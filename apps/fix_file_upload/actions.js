///////////////////////////////////////////////////////////////////////////
// File: actions.js
//
///////////////////////////////////////////////////////////////////////////

/*globals SC: false, YES: false, NO: false, sc_require: false
 sc_super: false
 */

FixFileUpload.openPanelPane = function() {
  var pane = FixFileUpload.SamplePanel.create(),
    paneStack = this.get('paneStack');

  paneStack.push(pane);
  pane.append();
};

FixFileUpload.openPalettePane = function() {
  var pane = FixFileUpload.SamplePalette.create(),
    paneStack = this.get('paneStack');

  paneStack.push(pane);
  pane.append();
};

FixFileUpload.closeDlg = function() {
  var paneStack = this.get('paneStack'),
    pane = paneStack.pop();

  if (!SC.empty(pane)) {
    pane.remove();
    pane.destroy();
  }

  pane = null;
};