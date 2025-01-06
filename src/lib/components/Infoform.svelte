<script>
  // @ts-nocheck

  import { goodCourses, goodGrades, studentInfo } from '$lib/state';
</script>

<div class="m-4 h-fit border-solid border-slate-800" style="border-width: 1px;">
  <form class="grid grid-cols-2 items-center gap-2 p-4">
    <label class="grid-col-1 justify-items-end" for="fullname">姓名：</label>
    <input
      class="grid-col-2"
      type="text"
      id="fullname"
      name="fullname"
      bind:value={$studentInfo.fullname}
    />
    <label class="grid-col-1" for="bopomofo">拼音：</label>
    <input
      class="grid-col-2"
      type="text"
      id="bopomofo"
      name="bopomofo"
      bind:value={$studentInfo.bopomofo}
    />
    <label class="grid-col-1" for="id">ID:</label>
    <input class="grid-col-2" type="text" id="id" name="id" bind:value={$studentInfo.idno} />
    <label class="grid-col-1" for="entry">入学：</label>
    <input class="grid-col-2" type="text" id="entry" name="entry" bind:value={$studentInfo.entry} />
    <label class="grid-col-1" for="grad">毕业：</label>
    <input class="grid-col-2" type="text" id="grad" name="grad" bind:value={$studentInfo.grad} />
    <div class="grid-col-1 grid-col-span-2">
      <label for="courses">11选&lt;4，用Ctrl/⌥键</label>
      <select
        class="checkbox-group flex flex-col"
        name="goodCourses"
        id="goodCourses"
        multiple
        bind:value={$goodCourses}
        onchange={() => {
          if ($goodCourses.length > 4) {
            $goodCourses = $goodCourses.slice(-4);
          }
        }}
        style="height: 12em;scrollbar-width: none"
      >
        <option value="chinese">中文</option>
        <option value="mathematics">数学</option>
        <option value="further-maths">高等数学</option>
        <option value="economics">经济</option>
        <option value="physics">物理</option>
        <option value="chemistry">化学</option>
        <option value="biology">生物</option>
        <option value="history">历史</option>
        <option value="geography">地理</option>
        <option value="politics">政治</option>
        <option value="pe">体育</option>
      </select>
    </div>
    <div class="grid-col-1 grid-col-span-2 flex flex-col">
      {#each $goodCourses as grade}
        <div>
          <label for={grade}>{grade}</label>：
          <input type="text" id={grade} name={grade} bind:value={$goodGrades[grade]} />
        </div>
      {/each}
    </div>
    <input type="submit" value="Submit" />
  </form>
</div>
