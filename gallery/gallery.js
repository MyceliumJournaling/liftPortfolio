const imageIds = [
    1459534,
    1271620,
    1496373,
    1662540,
    3466355,
    1083342,
    12687061,
    13725341,
]

for (const imageId of imageIds) {
    const image = document.createElement("img")
    image.alt = "Random forest images"
    image.width = 250
    image.height = 160
    image.src = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
    document.body.appendChild(image)
}