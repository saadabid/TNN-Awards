var gategoryArray = [{profilepicture: "img/Jurey/jurey1.jpg" , linkUrl :"http://www.msn.com" ,name : "MEMBER 1",worktitle : "Speaker"}];


function gategorieslistfunc(array)
{
	var list = document.createElement('ul');
	
	for(var i =0 ; i<array.length; i++ )
	{
		var item = document.createElement('li');
		var a = document.createElement('a');
		var profile_img = document.createElement("img");
		var button = document.createElement('button');
		var btntext = document.createTextNode('VOTE NOW');
		
		button.appendChild(btntext);
		profile_img.src = array[i].profilepicture;
		
		a.textContent = array[i].name;		
		a.appendChild(profile_img).className="img-responsive";
		a.setAttribute('href', array[i].linkUrl);
		
		
		item.appendChild(a);
		item.appendChild(button);
		list.appendChild(item);
	}
	return list;
}



document.getElementById('gategorylist').appendChild(gategorieslistfunc(gategoryArray)).className = "nominieslistcss";