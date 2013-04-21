var menuWindow = Ti.UI.createWindow({
    top:0,
    left:0,
    width:250,
    layout : "vertical",
    backgroundColor: "#313649",
});

var menuTitle = Ti.UI.createView({
	width : 320 ,
	height : 44,
	backgroundImage:"/images/barra_data_renge.jpg",
	fonts:{
		fontFamily:"OpenSans",
	}
});


menuWindow.add(menuTitle);

var ltitle = Ti.UI.createLabel({
	text : "Filter",
	font:{
		fontSize :20,
		fontFamily:"OpenSans",
	},	
	color:"white",
	layout:"vertical",
});
menuTitle.add(ltitle);

var vStaticElement = Ti.UI.createView({
	layout:"vertical",
	height:195,
});
menuWindow.add(vStaticElement);

var titleStatic = Ti.UI.createView({
	height:20,
	backgroundImage:"/images/barra_menu_laterale.jpg",
});
vStaticElement.add(titleStatic);

var lTitle = Ti.UI.createLabel({
	left:5,
	text:"Data range",
	font:{
		fontFamily:"OpenSans",
	},
	color:"white",
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
});
titleStatic.add(lTitle);

var vFrom = Ti.UI.createView({
	height:31,
	left:20,
	right:20,
});
vStaticElement.add(vFrom);

var lFrom = Ti.UI.createLabel({
	text:"from",
	color:"white",
	bottom:0,
	left:0,
	font:{
		size:16,
		fontFamily:"OpenSans",
	},
});
vFrom.add(lFrom);

var tfFrom = Ti.UI.createTextField({
	left:20,
	right:20,
	editable:false,
	height:31,
	backgroundColor:"white",
	borderRadius:4,
	zIndex:2,
	editable:false
});
vStaticElement.add(tfFrom);
tfFrom.addEventListener("click" , function () {
	require('popCal').popup("From",function(data){
		tfFrom.setValue(data);
	});
});

var vTo = Ti.UI.createView({
	height:31,
	left:20,
	right:20,
});
vStaticElement.add(vTo);

var lTo = Ti.UI.createLabel({
	bottom:0,
	left:0,
	text:"to",
	color:"white",
	font:{
		size:16,
		fontFamily:"OpenSans",
	},
});
vTo.add(lTo);

var tfTo = Ti.UI.createTextField({
	left:20,
	right:20,
	editable:false,
	backgroundColor:"white",
	borderRadius:4,
	height:31,
	zIndex:2,
	font:{
		size:16,
		fontFamily:"OpenSans",
	},
});
vStaticElement.add(tfTo);
tfTo.addEventListener("click" , function () {
	require('popCal').popup("To",function(data){
		tfTo.setValue(data);
	});
});

var bSend = Ti.UI.createButton({
	title:"search",
	height:31,
	top:10,
});
vStaticElement.add(bSend);
bSend.addEventListener("click",function(e){
	var calendarView = require("calendar").calendar;
	calendarView.getInformation(tfFrom.value,tfTo.value,4,2013)
	var navWindow = require("firstWindow").navWindow;
	navWindow.animate({
        left:0,
        duration:400,
        curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
    });
    e.source.toggle = false;
	//calendar.update(tfFrom.value,tfTo.vale);
});

var makeRadioButton = function(row){
	var button = Ti.UI.createButton({
		right:10,
		top:10,
		bottom:10,
		width:20,
		backgroundImage:"images/radiobutton_unchecked.png",
	});
	row.status= false;
	button.addEventListener("click",function(e){
		row.status = !row.status;
		if(row.status){
			button.setBackgroundImage("images/radiobutton_checked.png");
		}else{
			button.setBackgroundImage("images/radiobutton_unchecked.png");
		}
	});
	row.add(button);
}


// Create the first TableViewSection
var section1 = Ti.UI.createTableViewSection({
    headerTitle:'NASA',
});
// use a loop to add some rows

var r1 = Ti.UI.createTableViewRow({
    	height:40,
        title:'HST',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r1);
section1.add(r1);


var r2 = Ti.UI.createTableViewRow({
    	height:40,
        title:'SWIFT',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r2);
section1.add(r2);

var r3 = Ti.UI.createTableViewRow({
    	height:40,
        title:'HST',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r3);
section1.add(r3);

var r4 = Ti.UI.createTableViewRow({
    	height:40,
        title:'NuSTAR',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r4);
section1.add(r4);

var r5 = Ti.UI.createTableViewRow({
    	height:40,
        title:'Chandra',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r5);
section1.add(r5);

var r6 = Ti.UI.createTableViewRow({
    	height:40,
        title:'RXTE',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r6);
section1.add(r6);

var r7 = Ti.UI.createTableViewRow({
    	height:40,
        title:'Spitzer',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r7);
section1.add(r7);

var r8 = Ti.UI.createTableViewRow({
    	height:40,
        title:'FERMI',
        color:'white',
        backgroundColor: "#313649",
    	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
makeRadioButton(r8);
section1.add(r8);

var section2 = Ti.UI.createTableViewSection({
    headerTitle: 'ESA',

});


	var row11 = Ti.UI.createTableViewRow({
    	height:40,
        title:'XMM-Newton',
        color:'white',
        backgroundColor: "#313649",
       	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
    makeRadioButton(row11);
    section2.add(row11);
    
    	var row12 = Ti.UI.createTableViewRow({
    	height:40,
        title:'INTEGRAL',
        color:'white',
        backgroundColor: "#313649",
       	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
    makeRadioButton(row12);
    section2.add(row12);
    
    	var row13 = Ti.UI.createTableViewRow({
    	height:40,
        title:'Herchel',
        color:'white',
        backgroundColor: "#313649",
       	font:{
			size:16,
			fontFamily:"OpenSans",
		},
    })
    makeRadioButton(row13);
    section2.add(row13);
    

// Now, here's our table, and we're setting the data to hold the sections
var tv = Ti.UI.createTableView({
    data:[section1,section2],
});
menuWindow.add(tv);



exports.menu = menuWindow;
