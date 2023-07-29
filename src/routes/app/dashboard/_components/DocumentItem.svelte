<script lang="ts">
	import * as Icon from 'svelte-ionicons';

	export let bookmarked = false;
	export let seen = false;
</script>

<div class="flex flex-col gap-3 text-xs px-3 py-2 bg-white rounded">
	<div class="flex gap-2">
		<Icon.Reader size="18" />
		<span class="font-bold">راهنمای استفاده از سیستم</span>
		<a
			class="text-gray-600 bg-gray-200 text-[10px] flex items-center px-2 rounded cursor-pointer"
			href="#"
		>
			➲ MAN-0001/1
		</a>
	</div>
	<div>
		<div class="line-clamp-2 text-[#555]">
			این راهنما، یک منبع جامع برای یادگیری استفاده از سیستم مدیریت دانش ما است. در این راهنما،
			تمامی جنبه‌های کار با سیستم، از ورود اولیه و ایجاد حساب کاربری تا جستجوی پیشرفته و مشارکت در
			گروه‌های تعاونی، به طور کامل توضیح داده شده است.
			<br />
			این راهنما، یک منبع جامع برای یادگیری استفاده از سیستم مدیریت دانش ما است. در این راهنما، تمامی
			جنبه‌های کار با سیستم، از ورود اولیه و ایجاد حساب کاربری تا جستجوی پیشرفته و مشارکت در گروه‌های
			تعاونی، به طور کامل توضیح داده شده است.
		</div>
	</div>
	<div class="flex gap-3">
		<div
			class="px-3 bg-accent-75 text-white opacity-80 rounded cursor-pointer duration-100 hover:opacity-100"
		>
			سند
		</div>
		<div
			class="px-3 bg-accent-75 text-white opacity-80 rounded cursor-pointer duration-100 hover:opacity-100"
		>
			آموزش
		</div>
		<div
			class="px-3 bg-accent-75 text-white opacity-80 rounded cursor-pointer duration-100 hover:opacity-100"
		>
			سیستم
		</div>
	</div>
	<div class="relative flex gap-3 mt-1">
		<button class="flex gap-1 hover:font-bold">
			<Icon.ChevronForwardCircleOutline size="15" />
			<span class="text-[12px]">نمایش </span>
		</button>
		<button class="flex gap-1 hover:font-bold">
			{#if bookmarked}
				<Icon.Bookmark class="text-accent-100" size="15" />
				<span class="text-[12px]">برداشتن نشان</span>
			{:else}
				<Icon.BookmarkOutline size="15" />
				<span class="text-[12px]">نشان کردن</span>
			{/if}
		</button>
		<button class="flex gap-1 hover:font-bold">
			<Icon.ShareSocialOutline size="15" />
			<span class="text-[12px]">به اشتراک گذاری</span>
		</button>
		{#if seen}
			<div class="absolute left-1 bottom-1">
				<Icon.EyeOutline class="text-gray-400" size="15" />
			</div>
		{/if}
	</div>
</div>
