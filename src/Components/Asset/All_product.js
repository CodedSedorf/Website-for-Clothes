import f1 from "../Asset/female1.jpg";
import f2 from "../Asset/female10.jpeg";
import f3 from "../Asset/female2.jpg";
import f4 from "../Asset/female3.jpg";
import f5 from "../Asset/female4.jpg";
import f6 from "../Asset/female5.jpg";
import f7 from "../Asset/female15.jpg";
import f8 from "../Asset/female8.jpg";
import f9 from "../Asset/female9.jpg";
import f10 from "../Asset/female11-removebg.png";
import f11 from "../Asset/newcollection1.jpg";
import f12 from "../Asset/newcollection2.jpg";
import f13 from "../Asset/newcollection3.jpg";
import f14 from "../Asset/newcollection4.jpg";
import m1 from "../Asset/male.jpg";
import m2 from "../Asset/male2.jpg";
import m3 from "../Asset/male3.jpg";
import m4 from "../Asset/male4.jpg";
import m5 from "../Asset/male8.jpg";
import m6 from "../Asset/male10.jpg";
import m7 from "../Asset/male11.jpg";
import m8 from "../Asset/mencollection1.jpg";
import m9 from "../Asset/mencollection2.jpg";
import m10 from "../Asset/mencollection3.jpg";
import m11 from "../Asset/mencollection4.jpg";
import m12 from "../Asset/mencollection5.jpg";
import k1 from "../Asset/kid1.png";
import k2 from "../Asset/kid2.jpeg";
import k3 from "../Asset/kid3.jpg";
import k4 from "../Asset/kid6.jpg";
import k5 from "../Asset/kid8.jpg";
import k6 from "../Asset/kid11.jpg";
import k7 from "../Asset/kid12.jpg";
import k8 from "../Asset/kid13.jpg";
import k9 from "../Asset/kidcollection1.jpg";
import k10 from "../Asset/kidcollection2.jpg";



const All_products_data = [
    {
        id: 1,
        name: "Picazo design",
        image: f1,
        new_price: 30.00,
        old_price: 45.00
    },
    {
        id: 2,
        name: "Sedorf",
        image: f2,
        new_price: 15.00,
        old_price: 27.00
    },
    {
        id: 3,
        name: "Jogger",
        image: f3,
        new_price: 8.00,
        old_price: 45.00
    },
    {
        id: 4,
        name: "XXXXXX",
        image: f4,
        new_price: 45.00,
        old_price: 35.00
    },
    {
        id: 5,
        name: "YYYYYYY",
        image: f5,
        new_price: 6.00,
        old_price: 18.00
    },
    {
        id: 6,
        name: "FFFFF",
        image: f6,
        new_price: 18.00,
        old_price: 27.00
    },
    {
        id: 7,
        name: "TTTTT",
        image: f7,
        new_price: 13.00,
        old_price: 15.00
    },
    {
        id: 8,
        name: "AAAAA",
        image: f8,
        new_price: 200.00,
        old_price: 20000.00
    },
    {
        id: 9,
        name: "PPPPPP",
        image: f9,
        new_price: 13.00,
        old_price: 26.00
    },
    {
        id: 10,
        name: "GGGGG",
        image: f10,
        new_price: 12.15,
        old_price: 78.00
    },
    {
        id: 11,
        name: "WEWE",
        image: f11,
        new_price: 50.00,
        old_price: 89.99
    },
    {
        id: 12,
        name: "ZYZY",
        image: f12,
        new_price: 26.26,
        old_price: 35.85
    },
    {
        id: 13,
        name: "ERRE",
        image: f13,
        new_price: 15.75,
        old_price: 28.70
    },
    {
        id: 14,
        name: "ROUGH",
        image: f14,
        new_price: 33.60,
        old_price: 45.00
    },
    {
        id: 15,
        name: "MMMM",
        image: m1,
        new_price: 120.50,
        old_price: 150.00
    },
    {
        id: 16,
        name: "MADHT",
        image: m2,
        new_price: 1250.99,
        old_price: 1500.99
    },
    {
        id: 17,
        name: "F****CK THE SHIT",
        image: m3,
        new_price: 1050.56,
        old_price: 1159.99
    },
    {
        id: 18,
        name: "SKSSK",
        image: m4,
        new_price: 2350.99,
        old_price: 2500.00
    },
    {
        id: 19,
        name: "KPK",
        image: m5,
        new_price: 250.00,
        old_price: 280.00
    },
    {
        id: 20,
        name: "OPP FASHION",
        image: m6,
        new_price: 300.00,
        old_price: 350.00
    },
    {
        id: 21,
        name: "WWE",
        image: m7,
        new_price: 750.85,
        old_price: 1000.30
    },
    {
        id: 22,
        name: "WPPWP",
        image: m8,
        new_price: 20000,
        old_price: 19999
    },
    {
        id: 23,
        name: "KLMP",
        image: m9,
        new_price: 3500.80,
        old_price: 4900.56
    },
    {
        id: 24,
        name: "TTPPO",
        image: m10,
        new_price: 650.85,
        old_price: 720.44
    },
    {
        id: 25,
        name: "BROP",
        image: m11,
        new_price: 1500000,
        old_price: 2000000
    },
    {
        id: 26,
        name: "GUCCIIIIIII",
        image: m12,
        new_price: 2450.34,
        old_price: 1000.99
    },
    {
        id: 27,
        name: "KHANG",
        image: k1,
        new_price: 250.99,
        old_price: 300.00
    },
    {
        id: 28,
        name: "KIDDO",
        image: k2,
        new_price: 500.00,
        old_price: 450.00
    },
    {
        id: 29,
        name: "FILLA",
        image: k3,
        new_price: 34.50,
        old_price: 35.23
    },
    {
        id: 30,
        name: "OCTOPUS",
        image: k4,
        new_price: 15.99,
        old_price: 14.95
    },
    {
        id: 31,
        name: "EMMA",
        image: k5,
        new_price: 5.00,
        old_price: 12.50
    },
    {
        id: 32,
        name: "BANGERLEE",
        image: k6,
        new_price: 15.45,
        old_price: 20.00
    },
    {
        id: 33,
        name: "SMALL CATS",
        image: k7,
        new_price: 23.00,
        old_price: 25.00
    },
    {
        id: 34,
        name: "GOAT",
        image: k8,
        new_price: 12.50,
        old_price: 10.99
    },
    {
        id: 35,
        name: "RYRYPO",
        image: k9,
        new_price: 45.00,
        old_price: 38.70
    },
    {
        id: 36,
        name: "WONDERFUL",
        image: k10,
        new_price: 200.50,
        old_price: 2000.99
    }
]
