let Login = {
    email: "feamaral.comercial@gmail.com",
    senha: "senha123"
}

const token = await res.json();

test("POST: /api/reserva = 200", async()=> {
    const res = await fetch("http:localhost:3000/api/reserva", {
    method: "POST",
    headers: {"Content-type" : "application/json", "Authorization": "Bearer" + token},
    body: JSON.stringify( {
        pagamento:"pix",
        quartos:
         [ {    
            id: 1,
            dataInicio: "07/02/2026",
            dataFim: "10/02/2026",
            },
            {    
            id: 12,
            dataInicio: "10/02/2026",
            dataFim: "13/02/2026",
            },
        ]
            })     

        }

    )
}
)
