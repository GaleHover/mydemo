/**
 * Created by Hover on 2016/9/15.
 */
var emailModel = new EmailModel([
    "dencodell@me.com",
    "denodel@gmail.com",
    "heheda@qq.com"
]);

emailView = document.body;
emailViewModel = new EmailViewModel(emailModel,emailView);
emailViewModel.initialize();