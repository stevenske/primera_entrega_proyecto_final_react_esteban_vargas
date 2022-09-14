const Data = [
    {
        id:1,
        brand: 'Samsung',
        model: 'Galaxy S22',
        color: 'Phantom White',
        gb: '128 GB',
        price:215000,
        img: './img/samsung-galaxy-s22.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G','Pantalla Dynamic AMOLED 2X de 6.1".','Tiene 3 cámaras traseras de 50Mpx/10Mpx/12Mpx.','Procesador Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) Octa-Core de 2.99GHz con 8GB de RAM.'
        ],
        alt:'Samsung Galaxy S22 phone',
        stock:12
    }, {
        id:2,
        brand: 'Samsung',
        model: 'Galaxy S22 Ultra',
        color: 'Phantom Black',
        gb: '256 GB',
        price:299000,
        img: './img/samsung-galaxy-s22-ultra.webp',
        desc:[
            'Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G.','Pantalla Dynamic AMOLED 2X de 6.8".','Tiene 4 cámaras traseras de 108Mpx/10Mpx/10Mpx/12Mpx.','Cámara delantera de 40Mpx.'
        ],
        alt:'Samsung Galaxy S22 Ultra phone',
        stock:23
    }, {
        id:3,
        brand: 'Motorola',
        model: 'G51',
        color: 'dorado',
        gb: '128 GB',
        price:549000,
        img: './img/motorola-g51.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G.','Pantalla IPS de 6.8".','Tiene 3 cámaras traseras de 50Mpx/8Mpx/2Mpx.','Cámara delantera de 13Mpx.'],
        alt:'Motorola G51 phone',
        stock:22
    }, {
        id:4,
        brand: 'Motorola',
        model: 'G71',
        color: 'Blue',
        gb: '128 GB',
        price:67900,
        img: './img/motorola-g71.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G.','Pantalla OLED de 6.4".','Tiene 3 cámaras traseras de 50Mpx/8Mpx/2Mpx.','Cámara delantera de 16Mpx.'],
        alt:'Motorola G71 phone',
        stock:14
    }, {
        id:5,
        brand: 'Xiaomi',
        model: 'Redmi Note 10',
        color: 'Azul Nocturno',
        gb: '128 GB',
        price:73000,
        img: './img/xiaomi-redmi-note-10.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G.','Pantalla IPS de 6.5".','Tiene 3 cámaras traseras de 48Mpx/2Mpx/2Mpx.','Cámara delantera de 8Mpx.'],
        alt:'Xiaomi Redmi Note 10 phone',
        stock:20
    }, {
        id:6,
        brand: 'Xiaomi',
        model: 'Redmi Note 10 Pro',
        color: 'Gris Onix',
        gb: '128 GB',
        price:96500,
        img: './img/xiaomi-redmi-note-10-pro.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras','Pantalla AMOLED de 6.67".','Tiene 4 cámaras traseras de 108Mpx/8Mpx/5Mpx/2Mpx.','Cámara delantera de 16Mpx.','Procesador Snapdragon 732G Octa-Core de 2.3GHz con 6GB de RAM.'],
        alt:'Xiaomi Redmi Note 10 Pro phone',
        stock:23
    }, {
        id:7,
        brand: 'Apple',
        model: 'iPhone 11',
        color: 'Negro',
        gb: '128 GB',
        price:213000,
        img: './img/apple-iphone-11.webp',
        desc:['Pantalla LCD Liquid Retina HD de 6.1 pulgadas. (3)','Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros). (1)','Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps.','Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta.','Face ID para una autenticación segura y Apple Pay.'],
        alt:'Apple iPhone 11 phone',
        stock:6
    }, {
        id:8,
        brand: 'Apple',
        model: 'iPhone 12',
        color: 'Blanco',
        gb: '128 GB',
        price:303000,
        img: './img/apple-iphone-12.webp',
        desc:['Pantalla Super Retina XDR de 6.1 pulgadas. (1)','Ceramic Shield, más resistente que cualquier vidrio de smartphone.','Chip A14 Bionic, el más rápido en un smartphone.','Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision.','Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision.'],
        alt:'Apple iPhone 12',
        stock:11
    }, {
        id:9,
        brand: 'Huawei',
        model: 'Mate 30 Pro',
        color: 'Purpura Cosmico',
        gb: '256 GB',
        price:474000,
        img: './img/huawei-mate-30-pro.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Pantalla OLED de 6.53".','Tiene 4 cámaras traseras de 40Mpx/40Mpx/8Mpx/2Mpx.','Cámaras delanteras de 32Mpx.','Procesador HiSilicon Kirin 990 Octa-Core de 2.86GHz con 8GB de RAM.'],
        alt:'Huawei Mate 30 Pro phone',
        stock:21
    }, {
        id:10,
        brand: 'Huawei',
        model: 'P40 Pro ',
        color: 'Negro',
        gb: '256 GB',
        price:476000,
        img: './img/huawei-p40-pro.webp',
        desc:['Dispositivo liberado para que elijas la compañía telefónica que prefieras.','Compatible con redes 5G.','Pantalla OLED de 6.58".','Tiene 4 cámaras traseras de 50Mpx/40Mpx/12Mpx.','Cámaras delanteras de 32Mpx.'],
        alt:'Huawei P40 Pro phone',
        stock:16
    }]

const GetFetch = new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(Data)
        }, 2000)
    } else {
        rej(console.log("No hay datos"))
    }
})
export default GetFetch