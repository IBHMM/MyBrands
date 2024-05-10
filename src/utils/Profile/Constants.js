import profile from '../../assets/profile/profile.png'
import exit from '../../assets/profile/exit.png'
import address from '../../assets/profile/address.png'
import bonus from '../../assets/profile/bonus.png'
import liked from '../../assets/profile/liked.png'
import payment from '../../assets/profile/payment.png'
import questions from '../../assets/profile/questions.png'
import refund from '../../assets/profile/refund.png'
import customerservice from '../../assets/profile/customerservice.png'
import referal from '../../assets/profile/referal.png'
import order from '../../assets/profile/orders.png'

export const services = [
    { name: "İSTIFADECI MELUMATLARI", src: profile },
    { name: "ÜNVANLAR", src: address },
    { name: "BONUS VƏ HƏDİYYƐ KARTLARI", src: bonus },
    { name: "SEÇİLMİŞLƏR", src: liked },
    { name: "ÖDƐNIŞ Ve ÇATDIRILMA", src: payment },
    { name: "TEZ-TEZ VERILEN SUALLAR", src: questions },
    { name: "refund", src: refund },
    { name: "Müştərİ Xİdmətlərİ", src: customerservice },
    { name: "REFERRAL PROGRAMI", src: referal },
    { name: "SİFARİŞLƏR", src: order },
    { name: "HESABDAN ÇIX", src: exit },
];

const data = [
    {
        title : "Umumi",
        faqs: [{
            question : "Necə sifariş etməli?",
            answer : undefined   
        },{
            question : "MyBrands kartını necə yeniləmək olar ?",
            answer : undefined 
        }]
    },
    {
        title : "Geri qaytarılma",
        faqs: [{
            question : "Məhsulu necə geri qaytara bilərəm?",
            answer : undefined   
        },{
            question : "Məhsulun geri qaytarılma müddəti neçə gündür?",
            answer : undefined 
        },{
            question : "Məhsulun qaytarılması halında ödəniş nə zaman geri qaytarılacaqdır?",
            answer : undefined 
        },{
            question : "Ölçü uyğun deyil. Məhsulu dəyişdirə bilərəm ?",
            answer : undefined 
        }]
    },
    {
        title : "Çatdırılma",
        faqs: [{
            question : "Sifariş neçə gün ərzində çatdırılır ? ",
            answer : undefined   
        },{
            question : "Çatdırılma ödənişlidir?",
            answer : undefined 
        },{
            question : "Mən sifarişi qəbul edə bilmədim. Yeni çatdırılma tarixi təyin edə bilərəm?",
            answer : undefined 
        }]
    },
    {
        title : "Ödəniş",
        faqs: [{
            question : "Ödənişi həyata keçirildiyi karta deyil, başqa karta qaytarmaq mümkündür?",
            answer : undefined   
        },{
            question : "Ödənişi həyata keçirildiyi deyil, digər üsulla qaytarmaq olar?",
            answer : undefined 
        },{
            question : "Rəqəmsal hədiyyə kartını harda istifadə edə bilərəm ?",
            answer : undefined 
        }]
    }
]

export {data}