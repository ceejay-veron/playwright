import test, {page, expect} from '@playwright/test'



test('API Put Request', async({Request}) => {

    const response =await request.get('https://reqres.in/api/users/2', {
        data:{
            "name":"JOHN"
            "job":"Njoku"
        }
    })

    expect(response.status()).tobe(201);
    expect(text).toContain('JOHN');
    console.log(await response.json())
})

test('API Post Request', async({Request}) => {

    const response =await request.get('https://reqres.in/api/users', {
        data: {

            "name": "JOHN",
            "job": "Njoku"
        }
    })

    expect(response.status()).tobe(201);
    expect(text).toContain('JOHN');
    console.log(await response.json())
})

test.only('API GET Request', async({Request}) => {

    const response =await request.get('https://reqres.in/api/users/2')

    
    expect(response.status()).tobe(200);
    expect(text).toContain('janet');
    console.log(await response.json())

})

test('API DELETE Request', async({Request}) => {

    const response =await request.Delete('https://reqres.in/api/users/2')

    
    expect(response.status()).tobe(204)

})