 

   
             
var httpcall = function(di,df,functionSuccess,functionError){
          
          Di = di.split("/")[0] + di.split("/")[1] +di.split("/")[2] ;
		Df = df.split("/")[0] + di.split("/")[1] +di.split("/")[2] ;

          var satellite = "integral";   
          var url = "http://199.180.196.10/json/"+satellite+"?startdate="+Di+"&enddate="+Df;
          var client = Ti.Network.createHTTPClient({
                   
      // function called when the response data is available
     onload : function(e) {
         
              Ti.API.info("Received text: " + this.responseText);  
              Ti.API.info('success' + this.responseText[4]);
              parsefunction(this, functionSuccess );     
     },
     
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         
         Ti.API.debug(e.error);
         functionError();
         
     },
     timeout : 500000  // in milliseconds
 });

 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();
                               }
     var parsefunction = function(str,functionSuccess){
                
            var data = JSON.parse(str.responseText);  
            var mat =[];
            var giorno;
            var mese;
            var anno;
            
        
            
                for(var i=0 ; i<data.length; i++){
            
            giorno = parseInt(((data[i][1]).split(" ")[0]).split("-")[2]);
            mese = parseInt(((data[i][1]).split(" ")[0]).split("-")[1]);
            anno = parseInt(((data[i][1]).split(" ")[0]).split("-")[0][2] + ((data[i][1]).split(" ")[0]).split("-")[0][3]);
            
         
         //  alert("" + giorno +"-"+ mese +"-"+ anno);
           
        
        if(mat[anno]===undefined){
            
                                         mat[anno]= new Array();
                                         
                                         if(mat[anno][mese]===undefined){
                                                    
                                                                                mat[anno][mese]= new Array();
                                                                                
                                                                                if (mat[anno][mese][giorno]===undefined){
                                                                                    
                                                                                    mat[anno][mese][giorno] = new Array();
                                                                                    
                                                                                    
                                                                                }
                                             
                                         }   
                                       // mat[giorno]= data[i];
                                   
       }            
           
      
          
          //alert(mat[anno][mese][giorno]);
           if(mat[anno][mese][giorno]===undefined ){
                
                                                              mat[anno][mese][giorno] = new Array(data[i]);   
                                             
       } else{    
                
            //  alert("n"+mat[anno][mese][giorno].length);      
              mat[anno][mese][giorno][mat[anno][mese][giorno].length]=data[i];

            }  
    
                     
            }
            
          //alert(mat[13][04][21]);
            
            functionSuccess(mat);
       
            }
exports.JsonCall = httpcall;            