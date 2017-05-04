(function($) {
	$.fn.tab = function() {
		this.each(function() {
			var $this = $(this),                 // 保存当前选项卡组
				$tab = $this.find('li.active'),  // 保存当前激活的选项卡
				$link = $tab.find('a'),          // 保存当前激活的选项卡中的a元素
				$panel = $($link.attr('href'));  // 保存当前激活的选项卡的href属性

			$this.on('click', '.tab-control', function(e) {
				e.preventDefault();
				var $link = $(this),             
					id = this.hash;				 // 保存被点击的选项卡的href属性

				if(id && !$link.is('.active')) {    // 如果不是当前激活
					$panel.removeClass('active');  // 之前激活的选项卡移除active属性
					$tab.removeClass('active');

					$panel = $(id).addClass('active');          // 刚才点击的选项卡添加active属性，panel
		      		$tab = $link.parent().addClass('active');   // tab
				}  
			});
		});
	}
}(jQuery));
