var articleController = {};

articleController.loadAll = function () {
  aboutController.hide();
  Article.loadAll(articleView.index);
};
