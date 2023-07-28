<template>
    <div class="flex flex-col gap-y-2.5">
        <!-- img container -->
        <div class="max-w-[15rem]">
            <slot  name="img"/>
        </div>
        <h1 class="text-xl tracking-[2px]">
            <slot  name="name"/>
        </h1>
        <h2 class="text-lg">
            <slot  name="role"/>
        </h2>
        <div class="text-lg">
            <slot  name="bio"/>
        </div>
    </div>
</template>