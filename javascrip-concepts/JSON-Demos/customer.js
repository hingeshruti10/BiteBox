const Customer = {
    cust_id: 101,
    cust_name: "Shruti",
    address: {
        houseNo: 78,
        streetName: "RamMandirMarg",
        area: "Pratap nagar",
        city: "Nagpur",
        state: "Maharashtra",
        pincode: 443322
    },
    order: {
        order_id: 345665,
        bill_amount: "₹3455",
        transaction_type: "Online",
        card_payment: false,
        upi_payment: true,
        upi_id: "ijbhg21345",
        upi_mode: "Gpay"
    }
}
console.log(Customer.address.city);
console.log(Customer.order.upi_id);