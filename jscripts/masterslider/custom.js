	
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			loop:true,
			width:240,
			height:240,
			speed:20,
			view:'focus',
			preload:'all',
			space:0,
			wheel:true
		});
		slider.control('arrows');
		slider.control('slideinfo',{insertTo:'#staff-info'});
