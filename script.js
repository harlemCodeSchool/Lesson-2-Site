window.onload = function(){




	console.log('script.js reporting!');

  // Style div with id #jsTarget
	var targetMyDiv = document.getElementById('jsTarget');
	var styleDiv = targetMyDiv.style;
	 styleDiv.width = ('200px');
	 styleDiv.height = ('100px');
	 styleDiv.border = ('3px solid red');
	 styleDiv.backgroundColor = ('forestgreen');



  // Create a div with id #createdWithJavascript
  var section = document.getElementById('jsDivCreation');
  var newDiv = document.createElement('p');
  newDiv.id = "createdWithJavascript";
  newDiv.innerHTML = "This text (and p element) made with Javascript!!";

  section.appendChild(newDiv);

}