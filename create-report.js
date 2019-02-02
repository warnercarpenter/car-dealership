const createReport = () => {
    fetch("http://localhost:3000/vehicles")
    .then(response => response.json())
    .then(vehicles => {
    const profit = vehicles.map(p => p.gross_profit).reduce((total, currentAmount) => total + currentAmount, 0).toLocaleString()
    const month = monthNumbers[getMonth(vehicles) - 1]
    const salespersonCars = getSalespersonCars(vehicles)
    const salespersonProfit = getSalespersonProfit(vehicles)
    const popularModel = getPopularModel(vehicles)
    const bank = getMostLoans(vehicles)
    document.body.innerHTML = `
        <section>
            Total profit for 2017: $${profit}<br/>
            Sold most cars in: ${month}<br/>
            ${salespersonCars} sold the most cars<br/>
            ${salespersonProfit} made the most profit<br/>
            Most commonly sold model: ${popularModel}<br/>
            ${bank} provided the most loans

        </section>
    `
    })
}

createReport()