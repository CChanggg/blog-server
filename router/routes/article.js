const ArticleController = require('../controller/article')
module.exports = routes => {
    router.get('/article/list',ArticleController.article.getArticleList) //获取文章列表
    router.post('/article/add',ArticleController.article.addNewArticle) // 添加新文章
    router.post('/article/:articleId/update',ArticleController.article.updateArticle) // 更新指定ID文章
    router.post('/article/:articleId/delect',ArticleController.article.delectArticle) // 删除指定ID文章

}