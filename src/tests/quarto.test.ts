const URL_ROOMS: string = "https://back-end-mobile-hotelaria.vercel.app/api/quartosDisponiveis";

const searchParams = {
    dataInicio: "2025-09-24",
    dataFim: "2024-09-25",
    quantidade: 2
};

test("POST: api/rooms/available = 200", async () => {
    const res = await fetch(URL_ROOMS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchParams)
    });

    expect(res.status).toBe(200);
    const json = await res.json();
    console.log("Quartos disponíveis encontrados:");
    console.log(json);
    expect(Array.isArray(json)).toBe(true);
    if (json.length > 0) {
        expect(json[0]).toHaveProperty("id");
    }
});