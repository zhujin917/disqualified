<script setup lang="ts">
const props = defineProps<{
    presets: Array<Config>,
    config: Config
}>();

const presets = ref(props.presets);
const config = ref(props.config);

const emit = defineEmits<{
    (event: "config", value: Config): void
}>();
watch(config, (val) => {
    emit("config", val);
});
</script>

<template>
    <div id="editor">
        <section>
            <div class="title">预设</div>
            <div class="presets">
                <div v-for="preset of presets" :key="preset.presetName" class="preset"
                    :class="{ actived: preset.presetName == config.presetName }" @click="config = preset">
                    <div class="icon" :style="{ color: preset.color }">{{ preset.icon }}</div>
                    <div class="name">{{ preset.presetName }}</div>
                </div>
            </div>
        </section>
        <section>
            <div class="title">字段 1</div>
            <input type="text" v-model="config.title">
        </section>
        <section>
            <div class="title">字段 1 (英文)</div>
            <input type="text" v-model="config.titleEn">
        </section>
        <section>
            <div class="title">字段 2 </div>
            <input type="text" v-model="config.content">
        </section>
        <section>
            <div class="title">字段 2 (英文)</div>
            <input type="text" v-model="config.contentEn">
        </section>
    </div>
</template>

<style scoped>
#editor {
    flex: 4 1 0;
    padding-right: 100px;

    section {
        margin-bottom: 36px;

        .title {
            font-size: 17px;
            margin-bottom: 8px;
        }

        .presets {
            display: flex;
            align-items: center;

            .preset {
                text-align: center;
                margin-right: 12px;

                .icon {
                    font-family: "remixicon";
                    font-size: 50px;
                    line-height: 60px;
                    width: 60px;
                    height: 60px;
                    background-color: white;
                    box-shadow: 0 0 15px rgb(0 0 0 / .05);
                    border-radius: 6px;
                    border: 2px solid;
                    border-color: rgb(0 0 0 / .1);
                    transition: border-color .1s;
                }

                &:hover .icon {
                    border-color: rgb(0 102 204 / .25);
                }

                &.actived .icon {
                    border-color: var(--theme-color);
                }

                .name {
                    margin-top: 5px;
                    font-size: 14px;
                    color: rgb(0 0 0 / .6);
                }
            }
        }

        input[type=text] {
            width: 300px;
            background-color: white;
            box-shadow: 0 0 10px rgb(0 0 0 / .05);
            outline: none;
            border: 1px solid;
            border-color: rgb(0 0 0 / .15);
            border-radius: 6px;
            padding: 6px 12px;
            font-family: inherit;
            font-size: 15px;
            transition: border-color .1s;

            &:hover {
                border-color: rgb(0 102 204 / .25);
            }

            &:focus {
                border-color: var(--theme-color);
            }
        }
    }
}
</style>