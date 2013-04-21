var navWindow;
navWindow = Ti.UI.createWindow({
    width:320, // Set the width of the sliding window to avoid cut out from animation
    backgroundColor:'#003F6F',
});
	
exports.main = function (){
	var menuWindow = require("menuWindow").menu;
	menuWindow.open();
	
	//// ---- Window with navigationGroup
	
	navWindow.open();
	// Main window
	var win = Ti.UI.createWindow({
	    title:'Main Window',
	    backgroundColor:'#28292c',
	    barColor:'#28292c',
	    barColor:"#92A3BF",
	});
	// NavigationGroup
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
	    window:win,
	});
	navWindow.add(navGroup);
	// Top left button
	var menuButton = Ti.UI.createButton({
	    title:'Menu',
	    toggle:false // Custom property for menu toggle
	});
	win.setLeftNavButton(menuButton);
	
	
	menuButton.addEventListener('click', function(e){
	    // If the menu is opened
	    if(e.source.toggle == true){
	        navWindow.animate({
	            left:0,
	            duration:400,
	            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	        });
	        e.source.toggle = false;
	    }
	    // If the menu isn't opened
	    else{
	        navWindow.animate({
	            left:250,
	            duration:400,
	            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	        });
	        e.source.toggle  = true;
	    }
	});
	
	
	
	// Main window
	var win = Ti.UI.createWindow({
	    title:'Main Window',
	    backgroundColor:'#28292c',
	    barColor:'#28292c',
	    moving:false, // Custom property for movement
	    axis:0 // Custom property for X axis
	});
	
	var calendarView = require("calendar").calendar;
	calendarView.top = 44;
	navWindow.add(calendarView);
	
	
	win.addEventListener('touchstart', function(e){
	    // Get starting horizontal position
	    e.source.axis = parseInt(e.x);
	});
	
	
	win.addEventListener('touchmove', function(e){
	    // Subtracting current position to starting horizontal position
	    var coordinates = parseInt(e.globalPoint.x) - e.source.axis;
	    // Detecting movement after a 20px shift
	    if(coordinates > 20 || coordinates < -20){
	        e.source.moving = true;
	    }
	    // Locks the window so it doesn't move further than allowed
	    if(e.source.moving == true && coordinates <= 250 && coordinates >= 0){
	        // This will smooth the animation and make it less jumpy
	        navWindow.animate({
	            left:coordinates,
	            duration:20
	        });
	        // Defining coordinates as the final left position
	        navWindow.left = coordinates;
	    }
	});
	
	
	win.addEventListener('touchend', function(e){
	    // No longer moving the window
	    e.source.moving = false;
	    if(navWindow.left >= 75 && navWindow.left < 250){
	        // Repositioning the window to the right
	        navWindow.animate({
	            left:250,
	            duration:300
	        });
	        menuButton.toggle = true;
	    }else{
	        // Repositioning the window to the left
	        navWindow.animate({
	            left:0,
	            duration:300
	        });
	        menuButton.toggle = false;
	    }
	});
}

exports.navWindow = navWindow;