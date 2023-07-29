<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  export let data;
</script>

<div class="flex gap-5 min-h-full">
  <div class="flex grow p-6 text-justify min-h-full bg-white rounded shadow-xl shadow-slate-700/10">
    <div class="flex flex-col gap-4 w-96 text-sm bg-white rounded">
      <div class="flex gap-2">
        <Icon.BookOutline size="20" />
        <span>فهرست مطالب</span>
      </div>
      <div class="flex flex-col gap-3 text-xs text-accent-60">
        <a href="#x" class="text-accent-100 font-bold"># دستگاه CNC چیست؟</a>
        <a href="#x" class="pr-[10px] cursor-pointer hover:text-accent-100">
          # چگونه دستگاه CNC کار می کند؟
        </a>
        <a href="#x" class="pr-[10px] cursor-pointer hover:text-accent-100"
          ># کاربردهای دستگاه CNC</a
        >
        <a href="#x" class=" hover:cursor-pointer hover:text-accent-100"># دستگاه CNC چیست؟</a>
        <a href="#x" class="pr-[10px] cursor-pointer hover:text-accent-100">
          # چگونه دستگاه CNC کار می کند؟
        </a>
        <a href="#x" class="pr-[20px] cursor-pointer hover:text-accent-100"
          ># کاربردهای دستگاه CNC</a
        >
        <a href="#x" class="pr-[20px] cursor-pointer hover:text-accent-100"
          ># کاربردهای دستگاه CNC</a
        >
        <a href="#x" class=" hover:cursor-pointer hover:text-accent-100"># دستگاه CNC چیست؟</a>
        <a href="#x" class="pr-[10px] cursor-pointer hover:text-accent-100">
          # چگونه دستگاه CNC کار می کند؟
        </a>
        <a href="#x" class="pr-[10px] cursor-pointer hover:text-accent-100"
          ># کاربردهای دستگاه CNC</a
        >
      </div>
    </div>
    <div class="flex flex-col gap-2 grow border-r border-dashed">
      <!-- <div class="relative flex flex-row-reverse gap-2">Versions</div> -->
      <article class="p-2 pr-7 prose prose-sm !max-w-[160ch]">
        <h1>نحوه استفاده از ماشین فرز CNC</h1>
        <p>
          این راهنما شما را در فرآیند استفاده از یک ماشین فرز CNC (کنترل عددی کامپیوتری) همراهی می
          کند. ماشین فرز CNC یک ابزار قدرتمند در تولید و نمونه سازی است.
        </p>
        <section>
          <h2>قدم 1: آماده سازی</h2>
          <p>
            اولین گام در استفاده از ماشین فرز CNC، آماده سازی ماشین است. این شامل موارد زیر است:
          </p>
          <ul>
            <li>
              <strong>بررسی ایمنی:</strong> اطمینان حاصل کنید که تمام دستورالعمل های ایمنی را می دانید
              و رعایت می کنید. این شامل استفاده از تجهیزات ایمنی شخصی مانند عینک ایمنی، کلاه ایمنی و
              دستکش ها است.
            </li>
            <li>
              <strong>تنظیم ماشین:</strong> ماشین را براساس نیازهای پروژه تنظیم کنید. این شامل امری مانند
              امن کردن قطعه کار روی میز ماشین، نصب ابزار برش لازم در اسپیندل ماشین و تنظیم محورهای `X`،
              `Y` و `Z` ماشین بر اساس نیازهای پروژه شما است.
            </li>
            <li>
              <strong>برنامه‌ریزی مسیر ابزار:</strong> با استفاده از نرم‌افزار CAD (طراحی کمکی کامپیوتر)
              و CAM (تولید کمکی کامپیوتر)، قسمتی را که می‌خواهید ایجاد کنید طراحی کنید و مسیر ابزار برای
              ماشین را ایجاد کنید.
            </li>
          </ul>
        </section>
        <section>
          <h2>قدم 2: برنامه‌ریزی</h2>
          <p>
            در این مرحله، باید یک برنامه CNC را نوشته یا ویرایش کنید. این دسته از دستوراتی است که
            ماشین CNC برای فرز قطعه کار پیروی می کند. در زیر نمونه ای از یک برنامه ساده CNC وجود
            دارد:
          </p>
          <pre class="ltr">
N5 G90 G21
N10 G0 X0 Y0
N15 M03 S500
N20 G1 X30 F100
N25 G2 X60 Y30 I0 J30
N30 M05
N35 G0 X0 Y0
N40 M02</pre>
          <p>
            در بالا، دستوراتی مانند `G90` (حرکت مطلق)، `G21` (معیار میلیمتر)، `G0` (حرکت سریع)، و
            `M03` (شروع چرخش اسپیندل) وجود دارند.
          </p>
        </section>
        <section>
          <h2>قدم 3: اجرای برنامه</h2>
          <p>
            با توجه به نیازهای پروژه، ممکن است نیاز باشد دستورات اضافی را اجرا کنید یا تنظیمات ماشین
            را تغییر دهید. این شامل تغییر سرعت اسپیندل، تغییر ابزار برش یا تنظیم محورها است.
          </p>
          <ul>
            <li>
              <strong>بررسی موقعیت:</strong> قبل از اجرای برنامه، مطمئن شوید که ماشین در موقعیت اولیه
              قرار دارد.
            </li>
            <li>
              <strong>اجرای برنامه:</strong> با استفاده از واحد کنترل CNC، برنامه را اجرا کنید.
            </li>
            <li>
              <strong>بررسی نتایج:</strong> پس از اجرای برنامه، نتایج را بررسی کنید. اگر قطعه به طور
              صحیح فرز نشده است، ممکن است نیاز به تغییر برنامه یا تنظیمات ماشین باشد.
            </li>
          </ul>
        </section>
        <section>
          <h2>قدم 4: تمیز کردن و نگهداری</h2>
          <p>
            پس از تکمیل فرز، مهم است که ماشین را تمیز کرده و به درستی نگهداری کنید. این شامل تمیز
            کردن هر گونه خرد کردن موجود در ماشین و اطمینان از روغن کردن قطعات متحرک است.
          </p>
          <ul>
            <li>
              <strong>پاک کردن ماشین:</strong> با استفاده از برس یا دستمال، هر گونه خرد کردن را از روی
              ماشین پاک کنید.
            </li>
            <li>
              <strong>نگهداری:</strong> قطعات متحرک را روغن کنید و مطمئن شوید که ماشین به طور منظم تعمیر
              و نگهداری می شود.
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
  <div class="flex flex-col gap-3 w-96 text-xs">
    <div
      class="flex gap-2 items-center bg-white rounded shadow-sm shadow-slate-700/10 overflow-hidden"
    >
      <div class="p-3 bg-accent-80 text-white">
        <Icon.Person size="20" />
      </div>
      <div class="relative flex grow gap-1.5">
        <div class="font-bold">نویسنده:</div>
        <div class="absolute left-4">کمیل طاهری</div>
      </div>
    </div>
    <div
      class="flex gap-2 items-center bg-white rounded shadow-sm shadow-slate-700/10 overflow-hidden"
    >
      <div class="p-3 bg-accent-80 text-white">
        <Icon.Documents size="20" />
      </div>
      <div class="relative flex grow gap-1.5">
        <div class="font-bold">نوع سند:</div>
        <div class="absolute left-4">راهنما</div>
      </div>
    </div>
    <div
      class="flex gap-2 items-center bg-white rounded shadow-sm shadow-slate-700/10 overflow-hidden"
    >
      <div class="p-3 bg-accent-80 text-white">
        <Icon.GitMerge size="20" />
      </div>
      <div class="relative flex grow gap-1.5">
        <div class="font-bold">نسخه:</div>
        <div class="absolute left-4">12</div>
      </div>
    </div>
    <div
      class="flex gap-2 items-center bg-white rounded shadow-sm shadow-slate-700/10 overflow-hidden"
    >
      <div class="p-3 bg-accent-80 text-white">
        <Icon.CalendarNumber size="20" />
      </div>
      <div class="relative flex grow gap-1.5">
        <div class="font-bold">تاریخ انتشار:</div>
        <div class="absolute left-4">25 مرداد 1401</div>
      </div>
    </div>
    <div
      class="flex gap-2 items-center bg-white rounded shadow-sm shadow-slate-700/10 overflow-hidden"
    >
      <div class="p-3 bg-accent-80 text-white">
        <Icon.CheckmarkCircle size="20" />
      </div>
      <div class="relative flex grow gap-1.5">
        <div class="font-bold">تایید کننده:</div>
        <div class="absolute left-4">حسین طاهری</div>
      </div>
    </div>
  </div>
</div>
