<script lang="ts">
  import * as Icon from 'svelte-ionicons';

  import VersionSelector from './_components/VersionSelector.svelte';
</script>

<div class="flex flex-col gap-5 min-h-full | xl:flex-row">
  <div
    class="flex flex-col grow p-6 min-h-full gap-5 bg-white rounded-default shadow-xl shadow-slate-700/10 | xl:flex-row xl:gap-0"
  >
    <div class="flex flex-col gap-4 w-full text-sm bg-white rounded-default | md:w-96">
      <div class="flex gap-2">
        <Icon.BookOutline size="20" />
        <span>فهرست مطالب</span>
      </div>
      <div class="flex flex-col gap-5 text-xs text-accent-60">
        <a href="#x" class="flex gap-1 text-accent-100 font-bold">
          <Icon.CaretBack size="15" />
          <span> دستگاه CNC چیست؟</span></a
        >
        <a href="#x" class="flex gap-1 pr-[20px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> چگونه دستگاه CNC کار می کند؟</span>
        </a>
        <a href="#x" class="flex gap-1 pr-[20px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> کاربردهای دستگاه CNC</span></a
        >
        <a href="#x" class="flex gap-1 hover:cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> دستگاه CNC چیست؟</span></a
        >
        <a href="#x" class="flex gap-1 pr-[20px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> چگونه دستگاه CNC کار می کند؟</span>
        </a>
        <a href="#x" class="flex gap-1 pr-[40px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> کاربردهای دستگاه CNC</span></a
        >
        <a href="#x" class="flex gap-1 pr-[40px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> کاربردهای دستگاه CNC</span></a
        >
        <a href="#x" class="flex gap-1 hover:cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> دستگاه CNC چیست؟</span></a
        >
        <a href="#x" class="flex gap-1 pr-[20px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> چگونه دستگاه CNC کار می کند؟</span>
        </a>
        <a href="#x" class="flex gap-1 pr-[20px] cursor-pointer hover:text-accent-100">
          <Icon.CaretBack size="15" />
          <span> کاربردهای دستگاه CNC</span>
        </a>
      </div>
    </div>
    <div class="flex flex-col gap-2 grow border-dashed | lg:pr-10 lg:border-r">
      <div class="relative flex flex-row-reverse h-9">
        <VersionSelector
          class="w-full | lg:w-52"
          list={[
            { label: 'نسخه نهایی (4) ', value: '4' },
            { label: 'نسخه 3', value: '3' },
            { label: 'نسخه 2', value: '2' },
            { label: 'نسخه 1', value: '1' }
          ]}
          selected="4"
        />
        <div class="absolute hidden right-0 text-gray-400 text-sm h-9 leading-9 | md:block">
          شناسه : MAN-0001/4
        </div>
      </div>
      <article class="pt-2 text-justify prose prose-sm !max-w-[160ch] !leading-[1.8rem]">
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
          <pre class="ltr whitespace-pre-line">
            N5 G90 G21
            N10 G0 X0 Y0
            N15 M03 S500
            N20 G1 X30 F100
            N25 G2 X60 Y30 I0 J30
            N30 M05
            N35 G0 X0 Y0
            N40 M02
          </pre>
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
      <div class="flex flex-col gap-4 mt-auto">
        <div class="flex flex-wrap gap-2 text-xs">
          <div
            class="px-3 py-1 bg-accent-60 text-white rounded duration-75 cursor-pointer hover:bg-accent-90"
          >
            سند
          </div>
          <div
            class="px-3 py-1 bg-accent-60 text-white rounded duration-75 cursor-pointer hover:bg-accent-90"
          >
            دستگاه CNC
          </div>
          <div
            class="px-3 py-1 bg-accent-60 text-white rounded duration-75 cursor-pointer hover:bg-accent-90"
          >
            راهنما
          </div>
          <div
            class="px-3 py-1 bg-accent-60 text-white rounded duration-75 cursor-pointer hover:bg-accent-90"
          >
            مهم
          </div>
        </div>
        <div class="flex flex-wrap gap-3 text-xs pt-4 border-t border-dashed">
          <div
            class="flex gap-1 w-[calc(50%-0.75rem)] text-gray-600 cursor-pointer duration-100 hover:text-black | lg:w-fit"
          >
            <Icon.GitCommitOutline size="15" />
            <span>ایجاد نسخه جدید</span>
          </div>
          <div
            class="flex gap-1 w-[calc(50%-0.75rem)] text-gray-600 cursor-pointer duration-100 hover:text-black | lg:w-fit"
          >
            <Icon.BookmarkOutline size="15" />
            <span>نشان کردن</span>
          </div>
          <div
            class="flex gap-1 w-[calc(50%-0.75rem)] text-gray-600 cursor-pointer duration-100 hover:text-black | lg:w-fit"
          >
            <Icon.ShareSocialOutline size="15" />
            <span>به اشتراک گذاری</span>
          </div>
          <div
            class="flex gap-1 w-[calc(50%-0.75rem)] text-gray-600 cursor-pointer duration-100 hover:text-black | lg:w-fit lg:pr-2 lg:border-r"
          >
            <Icon.CheckmarkCircleOutline size="15" />
            <span>مطالعه شد</span>
          </div>
          <div
            class="flex gap-1.5 w-[calc(50%-0.75rem)] text-gray-600 cursor-pointer duration-100 hover:text-black | lg:mr-auto lg:w-fit"
          >
            <Icon.ThumbsUpOutline size="15" />
            <span>مفید بود</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-3 w-full text-xs | lg:w-96">
    <div
      class="flex gap-2 items-center bg-white rounded-default shadow-sm shadow-slate-700/10 overflow-hidden"
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
      class="flex gap-2 items-center bg-white rounded-default shadow-sm shadow-slate-700/10 overflow-hidden"
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
      class="flex gap-2 items-center bg-white rounded-default shadow-sm shadow-slate-700/10 overflow-hidden"
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
      class="flex gap-2 items-center bg-white rounded-default shadow-sm shadow-slate-700/10 overflow-hidden"
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
      class="flex gap-2 items-center bg-white rounded-default shadow-sm shadow-slate-700/10 overflow-hidden"
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
