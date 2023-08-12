import type { Meta, StoryObj } from '@storybook/vue3';
import ArticlePresentational from '../vweb/common/components/mvtarticle/mvt-article.presentational.vue';

const meta: Meta<typeof ArticlePresentational> = {
    title: 'General/Article Card',
    component: ArticlePresentational,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        image: '',
        headerText: '',
        descriptionText: '',
        footerText: '',
    },
};

export default meta;

type Story = StoryObj<typeof ArticlePresentational>;

export const Default: Story = {
    args: {
        image: 'https://www.movoto.com/blog/wp-content/uploads/sites/2/2012/03/blog-successful-people4.jpg',
        headerText: 'The top 10 most successful US Cities',
        descriptionText:'Looking to start your journey to a successful career? These are the cities that have proven track records of harboring success. It’s hard to define success, especially in an age where people choose to live as homeless nomads. Everyone’s ideas of success vary, but for the purposes of simplicity, we gauged how successful a city is first by looking at its gross domestic product (GDP)1—defined as the value of all goods and services made during a specific period (in our case, a year). Then we factored in how many colleges and universities were in the area, how many Fortune 500 companies are headquartered there, and the average salary.',
        footerText: 'By OJO Editorial Team, 04/19/2022',
    },
};
