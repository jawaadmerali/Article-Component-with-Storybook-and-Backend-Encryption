<template>
    <a class="mvt-article-presentational panel-card vertical">
        <div class="profile">
            <img class="bg lazyload img-load-success" :src="image" :alt="imageAltText" />
        </div>
        <div class="singleline">
            <b class="f4">
                {{ headerText }}
            </b>
        </div>
        <div class="multipleline-3 f7" v-html="descriptionText"></div>
        <div class="singleline f7">{{ footerText }}</div>
    </a>
</template>

<script>
export default {
    name: 'ArticlePresentational',
    props: {
        image: String,
        headerText: String,
        descriptionText: String,
        footerText: String,
    },
};
</script>
