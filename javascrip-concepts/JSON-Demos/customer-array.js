const Customers = [
    {
        cust_id: 1,
        cust_name: "abc",
        cust_username: "Bret",
        cust_email: "abc@gmail.com",
        address: {
            street: "Kulas Light",
            suite: "Apt.556",
            city: "GWenborough",
            zipcode: "123456-098765"
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org"
    },
    {
        cust_id: 2,
        cust_name: "safd",
        cust_username: "Cret",
        cust_email: "safd@gmail.com",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771"
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net"
    },
    {
        cust_id: 3,
        cust_name: "kjh",
        cust_username: "Samantha",
        cust_email: "kjhd@gmail.com",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157"
        },
        phone: "1-463-123-4447",
        website: "ramiro.info"
    },
    {
        cust_id: 4,
        cust_name: "sdf",
        cust_username: "Karianne",
        cust_email: "sdf@gmail.com",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257"
        },
        phone: "493-170-9623 x156",
        website: "kale.biz"
    },
    {
        cust_id: 5,
        cust_name: "wert",
        cust_username: "Kamren",
        cust_email: "wert@gmail.com",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263"
        },
        phone: "(254)954-1289",
        website: "demarco.info"
    }

]
console.log(Customers[0].cust_name);
Customers.forEach(cust => console.log(cust));