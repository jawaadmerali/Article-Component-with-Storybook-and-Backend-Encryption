<template>
    <div class="mvt-article-list list-card">
        <mvtLazyload ref="lazyload" :async="true" data-role="articlecard">
            <mvtShifter ref="shifter" :center="true" v-if="relatedArticles && relatedArticles.length">
                    <ArticlePresentational v-for="article in relatedArticles" :href="article.link ||(glb.appUrl + article.url)" :key="article.title"
                        :image="article.image ? article.image : (glb.cdnUrl + 'vimages/nophoto_small.svg')"
                        :headerText="article.title"
                        :descriptionText="article.description"
                        :footerText="`By ${ article.author }, ${$filters.formatDate(article.date)}`"
                        :imageAltText="article.imageAltText"
                    />
            </mvtShifter>
            <div class="panel-card vertical" v-else>
                <div>
                    <i class="icon-search f1"></i> {{molang('dpp.mvtNearby.noResults')}}
                </div>
            </div>
        </mvtLazyload>
    </div>
</template>

<script src="./mvt-article.js"></script>
