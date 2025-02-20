
describe('otra descripcion de Pruebas en < DemoComponent2/>',()=>{

            test ('Esta prueba no debe fallar', ()=> {
            const message1 = 'hola mundo';
            const message2 = message1.trim();//sacer espacios a mesage1

            expect ( message1 ).toBe( message2);                
            });
});