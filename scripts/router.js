$('#about').hide();
page('/', articleController.loadAll);
page('/index', articleController.loadAll);
page('/index.html', articleController.loadAll);
page('/about', aboutController.show);
page.start();
