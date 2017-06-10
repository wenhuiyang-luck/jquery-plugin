(function($){
	$.fn.photoViewer = function(){
		var request,                             // 最近一次请求的图片
			$current,                            // 当前显示的图片
			cache = {},							 // 缓存已加载过的图片
			$frame = $('#photo-viewer'),		 // 大图容器
			$thumbs = $('.thumb');				 // 缩略图

		function crossfade($img){                // 图像的淡入淡出
			if($current){                        // 若当前有图片显示
				$current.stop().fadeOut('slow'); // 停止动画淡出当前图片
			}
		      
			$img.css({                           // margin负值是图片居中显示
				marginLeft: -$img.width()/2,     
				marginTop: -$img.height()/2
			});

			$img.stop().fadeTo('slow',1);         // 新图片淡入
			$current = $img;					  // 新图片变为当前显示的图片
		}

		$(document).on('click', '.thumb', function(e){     // 缩略图被点击时
			var $img,
				src = this.href,                   // 存储大图的路径
				request = src;					   // 存储最近的图片请求

			e.preventDefault();                    // 阻止默认行为
			$thumbs.removeClass('active');         // 所有的thumbs移除'active'属性
			$(this).addClass('active');            // 当前点击的thumb添加'active'属性

			if(cache.hasOwnProperty(src)){         // cache中包含此图片且isLoading === false
				if(cache[src].isLoading === false ){
					crossfade(cache[src].$img);    // 执行图片淡入淡出
				}
			}else{
				$img = $('<img/>');                // 不在cache中,$img中存储一个<img/>空标签
				cache[src] = {					   
					$img: $img,                    // 添加路径，设置isLoading === true
					isLoading: true
				};

				$img.on('load',function(){
					$img.hide();
					$frame.removeClass('is-loading').append($img);
					cache[src].isLoading = false;
					if(request === src){
						crossfade($img);
					}
				});

				$frame.addClass('is-loading');

				$img.attr({
					'src': src,
					'alt': this.title || ''
				});
			}
		});

		$('.thumb').eq(0).click();  // 默认显示第一张
	}
}(jQuery));