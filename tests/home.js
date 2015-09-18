describe('La homepage',function(){
    it ('deberia tener el titulo correcto', function(){
       // browser.get('https://birth-class2-f-fischer.c9.io/');
        browser.get("/");
        element(by.id('exampleInputEmail2')).sendKeys('holahola');
       
        element(by.id('boton')).click();
        
        var  titulo = element(by.id('titulo'));
        expect(titulo.isPresent()).toBe(true);
        expect(titulo.getText()).toEqual('Bienvenidos a Birth-Class2 holahola');
    });
});