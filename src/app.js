/**
 * Basic UI for fistbump. Need to make it a background app. Also need to change the trigger for the 
 * bump received page.
 */

var UI = require('ui');

var main = new UI.Card({
  title: 'Fistbump',
  subtitle: 'Ready to exchange information',
  body: 'Go ahead and bump!'
});

main.show();

main.on('click', 'up', function(e) {
  var receivedFrom = 'Mahesh';
  var menu = new UI.Card({
    title: 'Recieved Bump!',
    subtitle: 'from ' + receivedFrom
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});
