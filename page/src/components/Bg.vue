<template>
    <div id="bg">
        <div class="homepage-hero-module">
            <div class="video-container">
                <div :style="fixStyle" class="filter"></div>
                <video :style="fixStyle" autoplay loop class="fillWidth" @canplay="canplay">
                    <source src="https://app.coverr.co/s3/mp4/Amalfi-Traffic.mp4" type="video/mp4"/>
                    浏览器不支持 video 标签，建议升级浏览器。
                    <source src="https://app.coverr.co/s3/webm/Amalfi-Traffic.webm" type="video/webm"/>
                    浏览器不支持 video 标签，建议升级浏览器。
                </video>
                <div class="poster hidden" v-if="!vedioCanPlay">
                    <img :style="fixStyle" src="https://storage.googleapis.com/coverr-public/poster/Amalfi-Traffic.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bg',
    data() {
        return {
            vedioCanPlay: false,
            fixStyle: null,
        };
    },
    methods: {
        canplay() {
            console.log('加载完成');
            this.vedioCanPlay = true;
        },
    },
    mounted() { // 挂载后        ｛eslint-disable-next-line 取消下一行的报错｝
        window.onresize = () => {
            const windowWidth = document.body.clientWidth;
            const windowHeight = document.body.clientHeight;
            const windowAspectRatio = windowHeight / windowWidth;
            let videoWidth;
            let videoHeight;
            if (windowAspectRatio < 0.5625) {
                videoWidth = windowWidth;
                videoHeight = videoWidth * 0.5625;
                this.fixStyle = { // eslint-disable-next-line
                    height: windowWidth * 0.5625 + 'px', // eslint-disable-next-line
                    width: windowWidth + 'px', // eslint-disable-next-line
                    'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                    'margin-left': 'initial',
                };
            } else {
                videoHeight = windowHeight;
                videoWidth = videoHeight / 0.5625;
                this.fixStyle = { // eslint-disable-next-line
                    height: windowHeight + 'px', // eslint-disable-next-line
                    width: windowHeight / 0.5625 + 'px', // eslint-disable-next-line
                    'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                    'margin-bottom': 'initial',
                };
            }
        };
        window.onresize();
    },
};
</script>

<style lang="less" scoped>
    .homepage-hero-module,
    .video-container {
      position: relative;
      height: 100vh;
      overflow: hidden;
    }
    .video-container .poster img,
    .video-container video {
      z-index: 0;
      position: absolute;
    }
    .video-container .filter {
      z-index: 1;
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
    }
</style>
