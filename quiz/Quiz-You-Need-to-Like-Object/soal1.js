function ganjilGenapAsianGames(date, data) {
    if (date < 1 || date > 31) return "Invalid Dates"

    let counter = 0
    let isEven = date % 2 === 0
    let isOdd = null
    let num = null

    for (const el of data) {
        if (el.type === "Mobil") {
            num = el.plat.replace(/\D/g, "")
            isOdd = num[num.length - 1] % 2 === 1

            if (isOdd === isEven) counter++
        }
    }

    return counter
}

console.log(ganjilGenapAsianGames(30, [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
}, {
    plat: 'A 2457 HE',
    type: 'Motor'
}, {
    plat: 'AB 87 RFS',
    type: 'Motor'
}, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
    plat: 'A 24 HE',
    type: 'Mobil'
}, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
}, {
    plat: 'Z 9992 ERT',
    type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 24 WE',
    type: 'Mobil'
}, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
}, {
    plat: 'Z 9992 XOXO',
    type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 2431 HE',
    type: 'Motor'
}, {
    plat: 'AB 8711 RFS',
    type: 'Motor'
}, {
    plat: 'Z 999 ERT',
    type: 'Motor'
}])) // 0

console.log(ganjilGenapAsianGames(32, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
}])) // invalid dates