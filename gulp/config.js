var src = './src';
var dest = './dest';
var jsSrc = src + '/js';

module.exports = {

    'srcRoot' : src,
    'destRoot': dest,

    'srcCopy' : src+'/copy',
    'destCopy': dest,

    'srcSass' : src + '/sass',
    'destSass': dest+ '/css',

    'srcEjs'  : src + '/ejs',

    //browserSyncの設定
    browserSync: {
        server: {
            baseDir: dest
        }
    },

    // autoprefixerの設定
    autoprefixer_browsers: [
        'ie >= 8',
        'ff >= 32',
        'chrome >= 42',
        'safari >= 7',
        'ios >= 6',
        'android >= 2.3'
    ],

    // browserifyの設定
    browserify: {
        bundleConfigs: [
            {
                entries: jsSrc + '/main.js',
                dest: dest + '/js',
                outputName: 'main.js'
            }
        ]
    },

    // jshintの対象ファイル
     lintfiles:[
        jsSrc + '/*.js'
    ]
};
