// ==UserScript==
// @name         RackSpace Email Desktop Notifications
// @namespace    rahul.jain
// @version      0.1
// @description  Checks inbox every minute and notifies via desktop Notifications on new Emails and number of unread mails per folder.
// @author       Rahul Jain
// @match        *apps.rackspace.com/a/webmail.php*
// @grant        none
// ==/UserScript==

setInterval(function(){
   var toolbar_buttons = document.getElementsByClassName("item Widgets_Toolbar_Item button");
    toolbar_buttons[4].click();
    
}, 60000);

var msg_old="";
var msg;
setInterval(function(){
    var i=0;
    msg = "";
  var annots = document.getElementsByClassName("annotation");
    var labels = document.getElementsByClassName("label");
    while(annots[i]){
        if(annots[i].innerHTML !== ""){
            var temp = labels[i].innerHTML + " " + annots[i].innerHTML + "\n";
            msg = msg.concat(temp);
        }
        i++;
    }
    if(msg != msg_old && msg !== ""){
      console.log(msg);
        
        //SHOWING NOTIFICATION
    
      // Let's check if the browser supports notifications
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // Let's check if the user is okay to get some notification
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
            var notification = new Notification('Rackspace Email:', {body: msg});
      }

      // Otherwise, we need to ask the user for permission
      // Note, Chrome does not implement the permission static property
      // So we have to check for NOT 'denied' instead of 'default'
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            // Whatever the user answers, we make sure we store the information
            if(!('permission' in Notification)) {
              Notification.permission = permission;
            }

            // If the user is okay, let's create a notification
            if (permission === "granted") {
              var notification = new Notification('Rackspace Email:', {body: msg});
            }
        });
      }

      // At last, if the user already denied any notification, and you 
      // want to be respectful there is no need to bother him any more.
        setTimeout(function(){
        notification.close();
    }, 5000);
    }
    if(msg != msg_old)
        msg_old = msg;

    
        
}, 6000);

setInterval(function(){
    var i=0;
    msg = "";
  var annots = document.getElementsByClassName("annotation");
    var labels = document.getElementsByClassName("label");
    while(annots[i]){
        if(annots[i].innerHTML !== ""){
            var temp = labels[i].innerHTML + " " + annots[i].innerHTML + "\n";
            msg = msg.concat(temp);
        }
        i++;
    }
    if(msg !== ""){
      console.log(msg);
        
        //SHOWING NOTIFICATION
    
      // Let's check if the browser supports notifications
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // Let's check if the user is okay to get some notification
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
            var notification = new Notification('Rackspace Email:', {body: msg});
      }

      // Otherwise, we need to ask the user for permission
      // Note, Chrome does not implement the permission static property
      // So we have to check for NOT 'denied' instead of 'default'
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            // Whatever the user answers, we make sure we store the information
            if(!('permission' in Notification)) {
              Notification.permission = permission;
            }

            // If the user is okay, let's create a notification
            if (permission === "granted") {
              var notification = new Notification('Rackspace Email:', {body: msg});
            }
        });
      }

      // At last, if the user already denied any notification, and you 
      // want to be respectful there is no need to bother him any more.
            
        msg_old = msg;
        
        setTimeout(function(){
        notification.close();
    }, 5000);

    }  
}, 1800000);
