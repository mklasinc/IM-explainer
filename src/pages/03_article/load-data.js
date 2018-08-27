import 'jquery';

export default function(filepath){

  $.ajax({
   url: filepath,
   type: 'GET',
   dataType: 'json',
   error: function(err){
  		console.log("Something is wrong...");
  		console.log(err);
   },
  	success: function(data){
  		console.log("Successfully loaded in data");
  		// console.log(data);
      // g_chapters = data.all_chapters;
      return data;
   }
  });
};
