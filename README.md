# jquery-plugin

1. [手风琴]( https://wenhuiyang-luck.github.io/jquery-plugin/手风琴/index.html)

```
<section class="container">
		<ul class="menu">
			 <li>
          <button class="accordion-control">Lorem ipsum 1</button>
          <div class="content accordion-content"></div>
        	</li>
       <li>
          <button class="accordion-control">Lorem ipsum 2</button>
          <div class="content accordion-content"></div>
        	</li>
       <li>
          <button class="accordion-control">Lorem ipsum 3</button>
          <div class="content accordion-content"></div>
       </li>
		</ul>
</section>
```

```
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.accordion-plugin.js"></script>
<script>
  $('.menu').accordion();
</script>
```
