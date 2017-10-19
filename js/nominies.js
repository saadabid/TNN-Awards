    $('.category-content[data-link=second]').hide();  
    $('.category-content[data-link=third]').hide();  
    $('.category-content[data-link=fourth]').hide();  

var gategory1 = [{profilepicture: "img/Jurey/jurey1.jpg" , name : "Saad" , work : "Camera Man"},
				 {profilepicture: "img/Jurey/jurey1.jpg" , name : "Moiz" , work : "Camera Man"},
				 {profilepicture: "img/Jurey/jurey1.jpg" , name : "Ali" , work : "Camera Man"},
				 {profilepicture: "img/Jurey/jurey1.jpg" , name : "Amir" , work : "Camera Man"}];
				
function gategory1func(array){
	
	var list = document.createElement('ul');
	
	for(var i =0 ; i<array.length; i++)
	{
		var item = document.createElement('li');
		var profile_img = document.createElement("img");
		
		profile_img.src = array[i].profilepicture;
		
		item.appendChild(profile_img).className="img-responsive";
		
		var para = document.createElement('p');
		var para2 = document.createElement('p');
		
		para.appendChild(document.createTextNode(''+array[i].name));
		para2.appendChild(document.createTextNode(array[i].work));
		
		item.appendChild(para);
		item.appendChild(para2);
		list.appendChild(item);
	}
	return list;
}

document.getElementById('gategory1list').appendChild(gategory1func(gategory1)).className = "nominieslistcss";



$('.link').click(function() {
    $('.category-content').hide();       
    $('.category-content[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});
