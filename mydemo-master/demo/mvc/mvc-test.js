/**
 * Created by Hover on 2016/9/11.
 */
var emailModel=new EmailModel([
    "denodedell@me.com",
    "denode@gmail.com",
    "d@qq.com"
]);

emailFormView = new EmailFormView();
emailistView = new EmailListView();
emailView = new EmailView([emailFormView,emailistView]);
emailController =new EmailController(emailModel,emailView);
emailController.initialize();