const monthNumbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getMonth(arrayToLoop) {
    monthArray = []
    arrayToLoop.forEach(function(currentCar) {
        monthArray.push(currentCar.purchase_date.split("-")[1].split("-")[0])
    })
    return monthArray.sort((a,b) => monthArray.filter(v => v===a).length - monthArray.filter(v => v===b).length).pop()
}

function getSalespersonCars(arrayToLoop) {
    salespersonArray = []
    arrayToLoop.forEach(function(currentCar) {
        salespersonArray.push(`${currentCar.sales_agent.first_name} ${currentCar.sales_agent.last_name}`)
    })
    return salespersonArray.sort((a,b) => salespersonArray.filter(v => v===a).length - salespersonArray.filter(v => v===b).length).pop()
}

function getSalespersonProfit(arrayToLoop) {
    salespersonProfitObject = {}
    arrayToLoop.forEach(function(currentCar) {
        carSalespersonName = `${currentCar.sales_agent.first_name} ${currentCar.sales_agent.last_name}`
        carProfit = currentCar.gross_profit
        if (salespersonProfitObject.hasOwnProperty(carSalespersonName)) {
            salespersonProfitObject[carSalespersonName] += carProfit
        }
        else {
            salespersonProfitObject[carSalespersonName] = carProfit
        }
    })

    salespersonProfitArray = Object.entries(salespersonProfitObject)
    salespersonProfitArray.sort(function(a, b){return a[1]-b[1]}).reverse()

    return salespersonProfitArray[0][0]
}

function getPopularModel(arrayToLoop) {
    modelObject = {}
    arrayToLoop.forEach(function(currentCar) {
        modelName = currentCar.vehicle.model
        if (modelObject.hasOwnProperty(modelName)) {
            modelObject[modelName]++
        }
        else {
            modelObject[modelName] = 1
        }
    })

    modelArray = Object.entries(modelObject)
    modelArray.sort(function(a, b){return a[1]-b[1]}).reverse()

    return modelArray[0][0]
}

function getMostLoans(arrayToLoop) {
    bankObject = {}
    arrayToLoop.forEach(function(currentCar) {
        bankName = currentCar.credit.credit_provider
        if (bankObject.hasOwnProperty(bankName)) {
            bankObject[bankName]++
        }
        else {
            bankObject[bankName] = 1
        }
    })

    bankArray = Object.entries(bankObject)
    bankArray.sort(function(a, b){return a[1]-b[1]}).reverse()

    return bankArray[0][0]
}