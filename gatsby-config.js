/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'やってみたいを大事に',
    },
    /* Your site config here */
    plugins: [
        'gatsby-plugin-sharp',
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
        'gatsby-plugin-emotion',
    ],
};
