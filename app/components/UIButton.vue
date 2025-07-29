<script setup lang="ts">
const props = defineProps<{
    icon: string,
    text: string
}>();
</script>

<template>
    <div class="button">
        <div class="icon">{{ props.icon }}</div>
        <div class="text">{{ props.text }}</div>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: fit-content;
    background-color: var(--theme-color);
    color: white;
    padding: 8px 0;
    border-radius: 6px;
    flex: 1 1 0;
    filter: brightness(1);
    transition: filter .1s;

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        filter: brightness(1.1);
    }

    .icon {
        font-family: "remixicon";
        font-size: 20px;
    }

    .text {
        font-size: 16px;
    }
}
</style>