const url_consult = "http://localhost:3000/api"

test("POST: /api/reserva = 200", async()=>{
    // realizar login
    const res = await fetch(url_consult + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "feamaral@gmail.com",
            senha: "senha123"}
        )
    });
    expect(res.status).toBe(200);
    const token = await res.json()


    //realizar reserva
    const resp = await fetch(url_consult + "/reserva",{
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ token
        },
        body: JSON.stringify({
            pagamento: "pix",
            quartos: [
                {
                    id: 1,
                    dataInicio: "2026/03/04",
                    dataFim: "2026/03/30",
                }            
            ]
        })

    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    // console.log(json)
})