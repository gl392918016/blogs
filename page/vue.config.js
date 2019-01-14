module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [ // eslint-disable-next-line
                    require('postcss-px2rem')({
                        remUnit: 37.5,
                    }),
                ],
            },
        },
    },
};
