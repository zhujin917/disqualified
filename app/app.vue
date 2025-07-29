<script setup lang="ts">
const presets = ref<Array<Config>>([
    {
        presetName: "禁止通行",
        color: "#f03e3e",
        icon: "\uEE56",
        title: "禁止通行",
        titleEn: "NO ENTRY",
        content: "违者将被取消参赛资格",
        contentEn: "VIOLATORS WILL BE DISQUALIFIED"
    }, {
        presetName: "游客止步",
        color: "#fab005",
        icon: "\uECA0",
        title: "此处游客止步",
        titleEn: "VISITORS KEEP OUT",
        content: "违者将被列入黑名单",
        contentEn: "VIOLATORS WILL BE DISQUALIFIED"
    }
]);
const config = ref<Config>(presets.value[0] as Config);
</script>

<template>
    <main>
        <LeftEditor :presets="presets" :config="config" @config="c => config = c" />
        <RightPreviewer :config="config" />
    </main>
    <footer>
        <FooterContent />
    </footer>
</template>

<style>
@font-face {
    font-family: "remixicon";
    src: url("~/assets/fonts/remixicon.woff2");
}

@font-face {
    font-family: "Arquitecta";
    src: url("~/assets/fonts/Arquitecta.ttf");
}

@font-face {
    font-family: "MiLanting";
    src: url("~/assets/fonts/MiLanting.ttf");
}

:root {
    --theme-color: #0066CC;
}

html,
body {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    user-select: none;
    background-color: #F7F9FC;
    font-family: "Arquitecta", "MiLanting";

    #app {
        height: 100%;
        display: flex;
        flex-direction: column;

        main {
            flex: 1 1 0;
            width: fit-content;
            margin: 0 auto;
            display: flex;
            align-items: center;
        }

        footer {
            height: 50px;
            margin-bottom: 50px;
            text-align: center;
            color: #7a7a7a;

            &>* {
                vertical-align: middle;
                color: inherit;
            }
        }
    }
}
</style>