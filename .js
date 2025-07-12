var data = [
    {
        '1': false,
    },
    {
        '2': false
    },
]

data.forEach((value) => {
    Object.entries(value).map(([key, value]) => {
        console.log(key,value);

    })
})

