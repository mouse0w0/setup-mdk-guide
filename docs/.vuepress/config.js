const nav = require('./nav.js');
const sidebar = require('./sidebar.js');

module.exports = {
    title: '配置MDK指南',
    base: '/setup-mdk-guide/',
    markdown: {
        lineNumbers: true
    },
    theme: 'vdoing',
    themeConfig: {
        repo: 'mouse0w0/setup-mdk-guide',
        nav,
        sidebar,
        sidebarDepth: 2,
        updateBar: {
            showToArticle: false
        },
        titleBadge: false,
        category: false,
        tag: false,
        archive: false,
        rightMenuBar: false,
    }
}