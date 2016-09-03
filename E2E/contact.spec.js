

describe('Protractor Demo App', function() {
    var cname = element(by.model('form.name'));
    var cemail = element(by.model('form.email'));
    var ccomment = element(by.model('form.comment'));
    var cbutton = element(by.className("btn waves-effect waves-teal"));
  beforeEach(function(){
       browser.get('https://resume-anilkumarsheoran.c9users.io');

    });

    it("should check about me link",function () {
        var link =  element(by.css('[ui-sref="aboutme"]'));
        link.click();
        expect(browser.getCurrentUrl()).toEqual('https://resume-anilkumarsheoran.c9users.io/aboutme');
    });
    it("should check resources link",function () {
        var link =  element(by.css('[ui-sref="resources"]'));
        link.click();
        expect(browser.getCurrentUrl()).toEqual('https://resume-anilkumarsheoran.c9users.io/resources');
    });
    it("should check resume link",function () {
        var link =  element(by.css('[ui-sref="resume"]'));
        link.click();
        expect(browser.getCurrentUrl()).toEqual('https://resume-anilkumarsheoran.c9users.io/resume');
    });
    it("should check contact link",function () {
        var link =  element(by.css('[ui-sref="contact"]'));
        link.click();
        expect(browser.getCurrentUrl()).toEqual('https://resume-anilkumarsheoran.c9users.io/contact');
    });
    it("should check text fields is empty & button is disabled",function(){
        // browser.get('https://resume-anilkumarsheoran.c9users.io/contact');
          var link =  element(by.css('[ui-sref="contact"]'));
          link.click();
          expect(cname.getText()).toEqual('');
          expect(cemail.getText()).toEqual('');
          expect(ccomment.getText()).toEqual('');
         expect(cbutton.isEnabled()).toBeFalsy();
      });

   it("should check button",function(){
        var link =  element(by.css('[ui-sref="contact"]'));
        link.click();
        cname.sendKeys("Anil");
        cemail.sendKeys('anilkumar@gmail.com');
        ccomment.sendKeys('Anil');
        expect(cbutton.isEnabled()).toBeTruthy();

    });

    it("should check alert",function(){
        var link =  element(by.css('[ui-sref="contact"]'));
        link.click();
        cname.sendKeys("Anil");
        cemail.sendKeys('anilkumar@gmail.com');
        ccomment.sendKeys('Anil');
        cbutton.click();
        browser.wait(function() {
            return browser.switchTo().alert().then(
                function(alert) {
                    expect(alert.getText()).toEqual("Button is Enabled");
                    alert.accept();
                    return true;
                },
                function() { return false; }
            );
        });
    });

    it("should checl collapase",function () {
        var ele=element(by.className("collapsible-header grey lighten-3"));
        var body=element(by.className("collapsible-body")).getAttribute('style');
       ele.click();
        expect(body).toEqual("block");
    })
})





//}