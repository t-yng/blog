/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'みどりさるのエンジニア',
        author: 't-yng',
        description: '神奈川の田舎で働いてるフロントエンドエンジニアのブログ',
        url: 'https://t-yng.jp',
        profile: {
            speciality: 'フロントエンドエンジニア',
            avatar: '/avatar.jpg',
            github: {
                icon: '/icons/github-32px.png',
                url: 'https://github.com/t-yng',
            },
        },
    },
    /* Your site config here */
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-57390966-4',
                head: true,
                sampleRate: 100,
                cookieDomain: 't-yng.jp'
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-emotion',
        'gatsby-plugin-remove-serviceworker',
    ],
};
