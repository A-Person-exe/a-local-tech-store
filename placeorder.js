function orderItem(){
    if (confirm("Place your order?")) {
        alert('Order placed');
        document.write("Your order has been placed")
    }
    else{
        alert('Order not placed');
    }
}
