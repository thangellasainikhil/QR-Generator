function decrementQuantity(element){

    let itemId = element.name
    let itemQuantity = document.getElementById(itemId).value
    let subTotal = Number(document.getElementById(itemId+"_subTotal").innerHTML)
    let grandTotal = Number(document.getElementById("grandTotal").innerHTML)
    let itemPrice = Number(document.getElementById(itemId+"_price").innerHTML)
    if(itemQuantity>0){

        itemQuantity= Number(itemQuantity)-1
        document.getElementById(itemId).value = itemQuantity

        grandTotal = grandTotal - itemPrice
        subTotal = subTotal - itemPrice
        document.getElementById("grandTotal").innerHTML = grandTotal
        document.getElementById(itemId+"_subTotal").innerHTML = subTotal

    }

}

function incrementQuantity(element){

    let itemId = element.name
    let itemQuantity = document.getElementById(itemId).value
    let subTotal = Number(document.getElementById(itemId+"_subTotal").innerHTML)
    let grandTotal = Number(document.getElementById("grandTotal").innerHTML)
    let itemPrice = Number(document.getElementById(itemId+"_price").innerHTML)

    itemQuantity = Number(itemQuantity)+1
    document.getElementById(itemId).value = itemQuantity

    grandTotal = grandTotal + itemPrice
    subTotal = subTotal + itemPrice
    document.getElementById("grandTotal").innerHTML = grandTotal
    document.getElementById(itemId+"_subTotal").innerHTML = subTotal

}