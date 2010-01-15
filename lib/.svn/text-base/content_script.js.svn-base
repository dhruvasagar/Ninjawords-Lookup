var mode = false;
var keyOption = 'Shift+Ctrl+Alt+N';

function getSelectedText() {
    if(window.getSelection)
        return window.getSelection().toString();
    else if(document.getSelection)
        return document.getSelection();
    else if(document.selection)
        return document.selection.createRange().text;
}

function getDefinition() {
  chrome.extension.sendRequest({selectedText: getSelectedText()}, function(response) {
    $("#definition").html(response.html);
    resetKeyOption(response.keyOption);
  });
}

function getKeyOption() {
  chrome.extension.sendRequest({keyOption: 'keyOption'}, function(response) {
    resetKeyOption(response.keyOption);
  });
}

function resetKeyOption(key) {
    shortcut.remove(keyOption);
    keyOption = key;
    setKeyOption();
}

function setKeyOption() {
    shortcut.add(keyOption, function() {
      mode = !mode;
      if ( mode ) {
        $("body")
	  .append("<div id='definition' style='display:none;'></div>")
	  .append("<div id='ninjamode'>Ninja Mode</div>")
	  .bind('click', function() {
	    $('#definition').hide();
	  })
	  .bind("dblclick", function(e) {
	    $("#loading").remove();
	    $("#definition").show()
	      .css({
		'left': e.pageX,
		'top': e.pageY
	      })
	      .empty()
	      .prepend("<img id='loading' src='" + chrome.extension.getURL('img/indicator.gif') + "'/>")
	      .live('click', function() {
		return false;
	      });
	    getDefinition();
	  });
      } else {
        $('#ninjamode').remove();
        $('#definition').remove();
        $('body').unbind('click').unbind('dblclick');
        getKeyOption();
      }
    }, {
      'disable_in_input': false
    }
  );
}

$(document).ready(function() {
    shortcut.add("Escape", function() {
      if ( mode ) {
        $('#definition').hide();
      }
    }, {
      'propagate': true,
    });
    getKeyOption();
});
