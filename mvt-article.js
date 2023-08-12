import mapper from '@/common/store/mapper/index.js';
import {mapGetters, mapActions } from 'vuex';
import ArticlePresentational from './mvt-article.presentational.vue';

export default {
    name: 'mvtArticle',
    components: {
        ArticlePresentational,
    },
    data() {
        return {
            relatedArticles: [],
        };
    },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            },
        },
        category: {
            type: [String, Number],
            default: '',
        },
        tag: {
            type: [String, Number],
            default: '',
        },
        limit: {
            type: [String, Number],
            default: 10,
        },
    },
    computed: {
        ...mapGetters('glb', ['glb']),
    },
    mounted() {
        var that = this;
        if (this.data && this.data.length > 0) {
            this.relatedArticles = this.data;
            this.completed();
        } else {
            this.fetchArticleFeeds({ category: this.category, tag: this.tag, limit: this.limit }).then((data) => {
                this.relatedArticles = mapper.article(data);
                that.completed();
            });
        }
    },
    methods: {
        ...mapActions('glb', ['fetchArticleFeeds']),
        completed() {
            this.$refs.lazyload.ready();
        },
    },
};
