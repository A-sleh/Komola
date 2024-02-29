/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors : {
        primary : '#ed4f2e' ,
        'primary-hover' : '#ec694fd5 ' ,
        secondary : '#ebebeb' ,
        secondarLayout : '#313d43c9' ,
        footer: '#1f2c33' ,
        facebook: '#001aff' ,
        twitter: '#00a6ff' ,
        linkedin: '#ffc400' ,
        youtube: '#ff0000' ,
        footerSecondary : '#283645' ,
      },
      backgroundImage : {
        header : 'url(/img/Header.png)' ,
        team : 'url(/img/video.jpg)' ,
        services : 'url(/img/sep_back.png)' ,
        customer_1 : 'url(/img/customer_back.png)',
        customer_2 : 'url(/img/suscribe_back.png)' ,
      },
      container : {
        center : true ,
      }
    },
  },
  plugins: [],
}

