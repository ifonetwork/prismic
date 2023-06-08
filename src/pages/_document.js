import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        <meta http-equiv="x-ua-compatible" content="IE=edge" />

        <meta name="author" content="SemiColonWeb" />

        <meta name="description" content="Get Canvas to build powerful websites easily with the Highly Customizable &amp; Best Selling Bootstrap Template, today." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&Montserrat:wght@400;700&family=Crete+Round:ital@0;1&display=swap" rel="stylesheet" />



        <link rel="stylesheet" href="/static/style.css" />

        <link rel="stylesheet" href="/static/css/font-icons.css" />

        <link rel="stylesheet" href="/static/demos/medical/css/medical-icons.css" />

        <link rel="stylesheet" href="/static/css/swiper.css" />


        <link rel="stylesheet" href="/static/demos/medical/medical.css" />


        <link rel="stylesheet" href="/static/css/custom.css" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />




      </Head>
      {/* <body className="overflow-x-hidden antialiased"> */}
      <body class="stretched page-transition" data-loader-html="<div id='css3-spinner-svg-pulse-wrapper'><svg id='css3-spinner-svg-pulse' version='1.2' height='210' width='550' xmlns='https://www.w3.org/2000/svg' viewport='0 0 60 60' xmlns:xlink='https://www.w3.org/1999/xlink'><path id='css3-spinner-pulse' stroke='#DE6262' fill='none' stroke-width='2' stroke-linejoin='round' d='M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210'></svg></div>">

        <Main />
        

        <div id="gotoTop" class="uil uil-angle-up rounded-circle"></div>

        <NextScript />
        <script src="/static/js/functions.js"></script>

      </body>
    </Html>
  );
}
