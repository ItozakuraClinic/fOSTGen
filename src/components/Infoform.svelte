<script>
	// document.getElementById('items').addEventListener('change', function () {
	//     var selected = document.getElementById('items');
	//     var max = 4;
	//     if (selected.selectedIndex > max) {
	//         alert('You can only choose 4 items!');
	//         selected.selectedIndex = max;
	//     }
	// });
</script>

<div class="m-4 border-solid border-slate-800 h-fit" style="border-width: 1px;">
	<form class="grid grid-cols-2 items-center gap-2 p-4">
		<label class="grid-col-1 justify-items-end" for="fullname">姓名：</label>
		<input class="grid-col-2" type="text" id="fullname" name="fullname" />
		<label class="grid-col-1" for="bopomofo">拼音：</label>
		<input class="grid-col-2" type="text" id="bopomofo" name="bopomofo" />
		<label class="grid-col-1" for="id">ID:</label>
		<input class="grid-col-2" type="text" id="id" name="id" />
		<label class="grid-col-1" for="entry">入学：</label>
		<input class="grid-col-2" type="text" id="entry" name="entry" />
		<label class="grid-col-1" for="grad">毕业：</label>
		<input class="grid-col-2" type="text" id="grad" name="grad" />
		<div class="grid-col-1 grid-col-span-2">
			<label for="courses">11选&lt;4</label>
			<div class="checkbox-group flex flex-col">
				<label><input type="checkbox" value="chinese" name="chinese" />中文</label>
				<label><input type="checkbox" value="mathematics" name="mathematics" />数学</label>
				<label><input type="checkbox" value="further-maths" name="further-maths" />高等数学</label>
				<label><input type="checkbox" value="economics" name="economics" />经济</label>
				<label><input type="checkbox" value="physics" name="physics" />物理</label>
				<label><input type="checkbox" value="chemistry" name="chemistry" />化学</label>
				<label><input type="checkbox" value="biology" name="biology" />生物</label>
				<label><input type="checkbox" value="history" name="history" />历史</label>
				<label><input type="checkbox" value="geography" name="geography" />地理</label>
				<label><input type="checkbox" value="politics" name="politics" />政治</label>
				<label><input type="checkbox" value="pe" name="pe" />体育</label>
			</div>
		</div>
		<input type="submit" value="Submit" />
	</form>
</div>
