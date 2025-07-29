<script setup lang="ts">
import domToImage from "dom-to-image";

const props = defineProps<{
    config: Config
}>();

const toCanvas = () => new Promise<HTMLCanvasElement>((resolve) => {
    const img = new Image();
    domToImage.toSvg(document.getElementById("preview") as Node).then((dataUrl) => {
        img.src = dataUrl;
        return new Promise((resolve) => img.addEventListener("load", resolve));
    }).then(() => {
        return new Promise((resolve) => setTimeout(resolve, 100));
    }).then(() => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width * 2;
        canvas.height = img.height * 2;
        const context = canvas.getContext("2d");
        context?.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas);
    });
});

function copy() {
    toCanvas().then((canvas) => {
        return new Promise<Blob>((resolve) => canvas.toBlob((blob) => resolve(blob as Blob)));
    }).then((blob) => {
        return navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    }).then(() => {
        alert("复制成功！");
    });
}

function save() {
    toCanvas().then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg");
        a.download = `disqualified.jpg`;
        a.click();
    });
}
</script>

<template>
    <div id="previewer">
        <div id="preview" class="preview">
            <header>
                <div class="white"></div>
                <div class="icon" :style="{ color: props.config.color }">{{ props.config.icon }}</div>
            </header>
            <main :style="{ backgroundColor: props.config.color }">
                <div class="title">{{ props.config.title }}</div>
                <div class="titleEn">{{ props.config.titleEn }}</div>
                <div class="content">{{ props.config.content }}</div>
                <div class="contentEn">{{ props.config.contentEn }}</div>
                <div class="separator"></div>
                <img src="~/assets/img/x.webp">
            </main>
        </div>
        <div class="buttons">
            <UIButton icon="&#xECD3;" text="复制" @click="copy" />
            <UIButton icon="&#xEC5A;" text="下载" @click="save" />
        </div>
    </div>
</template>

<style scoped>
#previewer {
    flex: 6;

    .preview {
        width: 260px;
        /* height: fit-content; */
        height: 400px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px;
        background-color: #202020;

        header {
            position: relative;

            .icon {
                position: relative;
                font-family: "remixicon";
                font-size: 80px;
                width: fit-content;
                height: fit-content;
                margin: 0 auto;
            }

            .white {
                position: absolute;
                width: 60px;
                height: 60px;
                border-radius: 114514px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
            }
        }

        main {
            flex: 1 1 0;
            padding: 26px 26px 0 26px;
            width: calc(100% - (26px * 2));
            overflow: hidden;
            text-align: center;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .title,
            .titleEn {
                font-size: 32px;
                line-height: 32px;
                max-height: 64px;
            }

            .content,
            .contentEn {
                font-size: 20px;
                line-height: 20px;
                max-height: 40px;
            }

            .title,
            .content {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .titleEn,
            .contentEn {
                margin: 8px 0 16px 0;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                line-clamp: 2;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            img {
                width: 70px;
                height: 70px;
                margin: 0 auto;
            }
        }
    }

    .buttons {
        display: flex;
        gap: 10px;
        margin-top: 15px;
    }
}
</style>