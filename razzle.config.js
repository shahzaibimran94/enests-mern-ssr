module.exports = {
    
    modify: (config, { target, dev }, webpack) => {
      // do something to config
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })   
        );
        return config;
    },
};