function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTitle() {
    var a = ['La Diputación de Castelló acoge la exposición ‘Genios de la cultura rumana’'
        , 'La Diputación rinde homenaje a la comunidad rumana castellonense con una exposición'
        , 'Vernisajul expoziției „Genii ale culturii române” din Castellon – Spania'
        , '"Geniile culturii românești" - omagiu adus comunității românești din Castellon: "Este o parte foarte importantă a orașului nostru"'
        , 'Expoziția cu titlul “Genii ale Culturii Românești” din Castellón de la Plana a fost inaugurată'
        , '„Genii ale Culturii Românești” – expoziție la Castellón de la Plana'];
    var b = 6;
    var c = '';

    // for (var i = 0; i < b; i++) {
    c += a[i] + ' ';
    // }

    return c;
}

function getImage() {
    var a = ['https://www.dipcas.es/uploads/dipcas/posts_ficha/636bbf186786c753988599.jpg'
        , 'https://castellonplaza.com/public/Image/2022/11/fiputacion_NoticiaAmpliada.jpg'
        , 'https://i0.wp.com/ziarultecucean.com/wp-content/uploads/2022/11/Expozitie-Spania-Muzeu-Tecuci-7.jpg?w=1024&ssl=1'
        , 'https://media.stiridiaspora.ro/image/202211/w670/genios-cultura-rumana-diputacion.jpg'
        , 'https://universromanesc.com/wp-content/uploads/2022/11/314722914_2426926144112298_9077922316013971783_n-800x445.jpg'
        , 'https://i0.wp.com/www.romanul.eu/wp-content/uploads/2022/11/geniialeculturii1.jpeg?resize=1280%2C640&ssl=1'];
    var b = 6;
    var c = '';

    // for (var i = 0; i < b; i++) {
    c += a[i] + ' ';
    // }

    return c;
}

function getBody(i) {
    var textsss =
        ['La muestra, que se podrá visitar hasta el 18 de noviembre, pretende dar a conocer las personalidades que han dejado su huella en el patrimonio cultural del pueblo rumano',
            '10/11/2022 - CASTELLÓ. La vicepresidenta de la Diputación de Castellón y diputada provincial de Bienestar Social, Patricia Puerta, ha asistido este jueves a la inauguración de la exposición Genios de la cultura rumana donde ha destacado “el alto nivel de integración que ha tenido la comunidad rumana en nuestra provincia, una integración que ha contribuido a la conformación de la actual sociedad castellonense”.',
            'Joi, 10 noiembrie 2022, la sediul Diputacion de Castellon (Consiliul Județean) a avut loc vernisajul expoziției „Genii ale culturii române”.  Evenimentul a fost organizat de Institutul Hispano – Român în parteneriat cu Muzeul de Istorie „Teodor Cincu” Tecuci și finanțat de Departamentul pentru Românii de Pretutindeni.   Managerul muzeului, Daniel Dojan a fost prezent în Castellon pentru a amenaja alături de domnul Manuel Păduraru – președintele Institutului Hispano-Român expoziția „Genii ale culturii române”.',
            'Consiliul Provincial aduce un omagiu comunității românești din Castellon printr-o expoziție intitulată "Geniile culturii românești". Este vorba despre o expoziție care cuprinde 20 de panouri fotografice cu imagini din viața și activitatea unor personalități care și-au lăsat amprenta asupra patrimoniului cultural al poporului român. Vicepreședintele Consiliului Provincial din Castellón și deputat provincial de Bunăstare Socială, Patricia Puerta, a participat, joi, la inaugurarea expoziției Geniile culturii românești, unde a subliniat "nivelul ridicat de  integrare pe care comunitatea românească l-a avut în provincia noastră, o integrare care a contribuit la conturarea societății actuale din Castellón".',
            'Expoziția cu titlul “Genii ale Culturii Românești” din Castellón de la Plana a fost inaugurată. Evenimentul a fost deschis de consilierul cultural Patricia Mir care a invitat publicul într-o călatorie printre secolele istoriei dar și să admire operele imense ale personajelor prezentate, într-un parcurs menit să unească cele două culturi de origine latină.',
            ' Vernisajul expoziției „Genii ale culturii române” organizat de Institutul Hispano – Român în parteneriat cu Muzeul de Istorie „Teodor Cincu” și sprijinit de Departamentul pentru Românii de Pretutindeni a avut loc la sediul Diputación de Castellón (Consiliul Județean).'];
    var aflam = textsss[i];
    var a = aflam.toString();
    var b = random(80, 160);
    var c = a.substr(0, b);
    var d = c.substr(0, Math.min(c.length, c.lastIndexOf(" ")));

    return d;
}

for (var i = 0; i < 6; i++) {
    var randomImageHeight = random(240, 340);
    var relation = 280 / randomImageHeight;
    var padding = 100 / relation;
    var idCol = 1;
    console.log('aici e i' + i);
    if (i == 1 || i == 4) {
        idCol = 2;
    } else if (i == 2 || i == 5) {
        idCol = 3;
    }
    $('.card-col-' + idCol).append(`
        <a href="./presa${i+1}">
        <div class="card"                             class="tile"
        data-aos="zoom-in-up"
        class="ok"
        data-aos-easing="ease-out-sine">
            <div class="top" style="padding-bottom: ${padding}%">
            <img src="${getImage(i)}">
            </div>
            <div class="bottom">
            <p class="titlu">${getTitle()}</p>
            <p>${getBody(i)}</p>
            </div>
        </div>
      </a>
      `);
}