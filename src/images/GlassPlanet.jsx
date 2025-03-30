import * as React from "react";
const GlassPlanet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 3840 2160"
    {...props}
    width={800}
  >
    <defs>
      <style>
        {
          "\n      .cls-1 {\n        mask: url(#mask);\n      }\n\n      .cls-2 {\n        filter: url(#luminosity-noclip);\n      }\n\n      .cls-3 {\n        fill: url(#linear-gradient-24);\n      }\n\n      .cls-3, .cls-4 {\n        opacity: .8;\n      }\n\n      .cls-3, .cls-5 {\n        mix-blend-mode: hard-light;\n      }\n\n      .cls-6 {\n        filter: url(#luminosity-noclip-2);\n      }\n\n      .cls-7 {\n        fill: url(#linear-gradient-5);\n      }\n\n      .cls-8 {\n        fill: url(#linear-gradient-9);\n      }\n\n      .cls-9 {\n        fill: #fff;\n        opacity: .2;\n      }\n\n      .cls-9, .cls-10, .cls-11, .cls-12, .cls-13 {\n        mix-blend-mode: overlay;\n      }\n\n      .cls-14 {\n        mix-blend-mode: multiply;\n      }\n\n      .cls-14, .cls-13 {\n        fill: url(#linear-gradient-25);\n        stroke: #000;\n        stroke-miterlimit: 10;\n      }\n\n      .cls-15 {\n        isolation: isolate;\n      }\n\n      .cls-16 {\n        mask: url(#mask-2);\n      }\n\n      .cls-17 {\n        mask: url(#mask-1);\n      }\n\n      .cls-18 {\n        fill: url(#linear-gradient-6);\n      }\n\n      .cls-18, .cls-19, .cls-20 {\n        opacity: .1;\n      }\n\n      .cls-19 {\n        fill: url(#linear-gradient-7);\n      }\n\n      .cls-20 {\n        fill: url(#linear-gradient-8);\n      }\n\n      .cls-21 {\n        fill: url(#linear-gradient-2);\n      }\n\n      .cls-21, .cls-22, .cls-23, .cls-24, .cls-25 {\n        opacity: .15;\n      }\n\n      .cls-22 {\n        fill: url(#linear-gradient-3);\n      }\n\n      .cls-23 {\n        fill: url(#linear-gradient-4);\n      }\n\n      .cls-26 {\n        fill: url(#linear-gradient-19);\n      }\n\n      .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32 {\n        mix-blend-mode: color-dodge;\n      }\n\n      .cls-27 {\n        fill: url(#linear-gradient-23);\n      }\n\n      .cls-28 {\n        fill: url(#linear-gradient-18);\n      }\n\n      .cls-29 {\n        fill: url(#linear-gradient-15);\n      }\n\n      .cls-30 {\n        fill: url(#linear-gradient-17);\n      }\n\n      .cls-31 {\n        fill: url(#linear-gradient-16);\n      }\n\n      .cls-32 {\n        fill: url(#linear-gradient-26);\n      }\n\n      .cls-33 {\n        fill: none;\n        stroke: #fff;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 15px;\n      }\n\n      .cls-34 {\n        fill: url(#linear-gradient-13);\n      }\n\n      .cls-34, .cls-35, .cls-36, .cls-37, .cls-38, .cls-39, .cls-40, .cls-41, .cls-42, .cls-43, .cls-44, .cls-45, .cls-46, .cls-47, .cls-48, .cls-49, .cls-50, .cls-51, .cls-52, .cls-53, .cls-54, .cls-55, .cls-56, .cls-57, .cls-58, .cls-59, .cls-60, .cls-61, .cls-62, .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-70, .cls-71, .cls-72, .cls-73, .cls-74, .cls-75, .cls-76, .cls-77, .cls-78, .cls-79, .cls-80 {\n        mix-blend-mode: screen;\n      }\n\n      .cls-35 {\n        fill: url(#linear-gradient-53);\n      }\n\n      .cls-36 {\n        fill: url(#linear-gradient-54);\n      }\n\n      .cls-37 {\n        fill: url(#linear-gradient-55);\n      }\n\n      .cls-38 {\n        fill: url(#linear-gradient-56);\n      }\n\n      .cls-39 {\n        fill: url(#linear-gradient-50);\n      }\n\n      .cls-40 {\n        fill: url(#linear-gradient-51);\n      }\n\n      .cls-41 {\n        fill: url(#linear-gradient-59);\n      }\n\n      .cls-42 {\n        fill: url(#linear-gradient-58);\n      }\n\n      .cls-43 {\n        fill: url(#linear-gradient-57);\n      }\n\n      .cls-44 {\n        fill: url(#linear-gradient-62);\n      }\n\n      .cls-45 {\n        fill: url(#linear-gradient-72);\n      }\n\n      .cls-46 {\n        fill: url(#linear-gradient-71);\n      }\n\n      .cls-47 {\n        fill: url(#linear-gradient-52);\n      }\n\n      .cls-48 {\n        fill: url(#linear-gradient-67);\n      }\n\n      .cls-49 {\n        fill: url(#linear-gradient-68);\n      }\n\n      .cls-50 {\n        fill: url(#linear-gradient-69);\n      }\n\n      .cls-51 {\n        fill: url(#linear-gradient-63);\n      }\n\n      .cls-52 {\n        fill: url(#linear-gradient-65);\n      }\n\n      .cls-53 {\n        fill: url(#linear-gradient-64);\n      }\n\n      .cls-54 {\n        fill: url(#linear-gradient-66);\n      }\n\n      .cls-55 {\n        fill: url(#linear-gradient-61);\n      }\n\n      .cls-56 {\n        fill: url(#linear-gradient-60);\n      }\n\n      .cls-57 {\n        fill: url(#linear-gradient-70);\n      }\n\n      .cls-58 {\n        fill: url(#linear-gradient-29);\n      }\n\n      .cls-59 {\n        fill: url(#linear-gradient-27);\n      }\n\n      .cls-60 {\n        fill: url(#linear-gradient-39);\n      }\n\n      .cls-61 {\n        fill: url(#linear-gradient-37);\n      }\n\n      .cls-62 {\n        fill: url(#linear-gradient-14);\n      }\n\n      .cls-63 {\n        fill: url(#linear-gradient-31);\n      }\n\n      .cls-64 {\n        fill: url(#linear-gradient-30);\n      }\n\n      .cls-65 {\n        fill: url(#linear-gradient-33);\n      }\n\n      .cls-66 {\n        fill: url(#linear-gradient-32);\n      }\n\n      .cls-67 {\n        fill: url(#linear-gradient-35);\n      }\n\n      .cls-68 {\n        fill: url(#linear-gradient-38);\n      }\n\n      .cls-69 {\n        fill: url(#linear-gradient-34);\n      }\n\n      .cls-70 {\n        fill: url(#linear-gradient-36);\n      }\n\n      .cls-71 {\n        fill: url(#linear-gradient-40);\n      }\n\n      .cls-72 {\n        fill: url(#linear-gradient-41);\n      }\n\n      .cls-73 {\n        fill: url(#linear-gradient-42);\n      }\n\n      .cls-74 {\n        fill: url(#linear-gradient-43);\n      }\n\n      .cls-75 {\n        fill: url(#linear-gradient-48);\n      }\n\n      .cls-76 {\n        fill: url(#linear-gradient-49);\n      }\n\n      .cls-77 {\n        fill: url(#linear-gradient-45);\n      }\n\n      .cls-78 {\n        fill: url(#linear-gradient-47);\n      }\n\n      .cls-79 {\n        fill: url(#linear-gradient-44);\n      }\n\n      .cls-80 {\n        fill: url(#linear-gradient-46);\n      }\n\n      .cls-24 {\n        fill: url(#linear-gradient-10);\n      }\n\n      .cls-25 {\n        fill: url(#linear-gradient-11);\n      }\n\n      .cls-81 {\n        fill: url(#linear-gradient-12);\n      }\n\n      .cls-82 {\n        fill: url(#linear-gradient-21);\n      }\n\n      .cls-83 {\n        fill: url(#linear-gradient-20);\n      }\n\n      .cls-84 {\n        fill: url(#linear-gradient-22);\n      }\n\n      .cls-85 {\n        fill: url(#linear-gradient-28);\n      }\n\n      .cls-86 {\n        opacity: .25;\n      }\n\n      .cls-11 {\n        fill: #ffafcb;\n      }\n\n      .cls-11, .cls-13 {\n        opacity: .4;\n      }\n\n      .cls-5 {\n        fill: url(#linear-gradient);\n        opacity: .5;\n      }\n\n      .cls-12 {\n        fill: aqua;\n      }\n    "
        }
      </style>
      <linearGradient
        id="linear-gradient"
        x1={2227.59}
        y1={1387.59}
        x2={1612.41}
        y2={772.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffafcb" stopOpacity={0} />
        <stop offset={1} stopColor="#e678ff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1={1258}
        y1={794}
        x2={1258}
        y2={534}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5fbaa0" />
        <stop offset={1} stopColor="#f6ee1e" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        y1={774}
        y2={554}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-4"
        y1={754}
        y2={574}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-5"
        y1={734}
        y2={594}
        xlinkHref="#linear-gradient-2"
      />
      <linearGradient
        id="linear-gradient-6"
        x1={3048}
        y1={554}
        x2={3048}
        y2={374}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cd4557" />
        <stop offset={1} stopColor="#e3b019" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-7"
        y1={540.15}
        y2={387.85}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-8"
        y1={526.31}
        y2={401.69}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-9"
        y1={512.46}
        y2={415.54}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-10"
        x1={2708}
        y1={1662}
        x2={2708}
        y2={1502}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-11"
        x1={2708}
        y1={1642}
        x2={2708}
        y2={1522}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-12"
        x1={2708}
        y1={1622}
        x2={2708}
        y2={1542}
        xlinkHref="#linear-gradient-6"
      />
      <linearGradient
        id="linear-gradient-13"
        x1={2560}
        y1={602}
        x2={2560}
        y2={662}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1f2ad5" stopOpacity={0.1} />
        <stop offset={1} stopColor="#c838e7" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-14"
        x1={1280}
        y1={1486}
        x2={1280}
        y2={1546}
        xlinkHref="#linear-gradient-13"
      />
      <linearGradient
        id="linear-gradient-15"
        x1={2069}
        y1={432}
        x2={2069}
        y2={402}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#5fbaa0" />
        <stop offset={1} stopColor="#f6ee1e" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linear-gradient-16"
        x1={1403}
        y1={404}
        x2={1403}
        y2={374}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-17"
        x1={2003}
        y1={1706}
        x2={2003}
        y2={1676}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-18"
        y1={964}
        y2={934}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-19"
        x1={1717}
        y1={938}
        x2={1717}
        y2={908}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-20"
        x1={1714}
        y1={1254}
        x2={1714}
        y2={951.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.46} stopColor="#456edc" />
        <stop offset={1} stopColor="#8cf4ff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-21"
        x1={1991.53}
        y1={1488.83}
        x2={1913.21}
        y2={1044.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4268db" />
        <stop offset={1} stopColor="#8cf4ff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-22"
        x1={1985.77}
        y1={1489.85}
        x2={1929.84}
        y2={1172.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#de009f" />
        <stop offset={0.1} stopColor="#de06a1" />
        <stop offset={0.24} stopColor="#de18a9" />
        <stop offset={0.4} stopColor="#de36b6" />
        <stop offset={0.58} stopColor="#df60c8" />
        <stop offset={0.78} stopColor="#e096e0" />
        <stop offset={0.98} stopColor="#e0d7fc" />
        <stop offset={1} stopColor="#e1deff" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-23"
        x1={2437.42}
        y1={1539.42}
        x2={2154.58}
        y2={1256.58}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#1f2ad5" />
        <stop offset={1} stopColor="#c838e7" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-24"
        x1={2027.42}
        y1={1480.9}
        x2={1812.58}
        y2={679.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#dfff3b" />
        <stop offset={0.16} stopColor="#edff91" stopOpacity={0.04} />
        <stop offset={1} stopColor="#eeff94" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="linear-gradient-25"
        x1={2227.59}
        y1={1387.59}
        x2={1612.41}
        y2={772.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <filter
        id="luminosity-noclip"
        x={1273.87}
        y={610}
        width={1292.26}
        height={939.99}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask"
        x={1273.87}
        y={610}
        width={1292.26}
        height={939.99}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-2">
          <g className="cls-4">
            <path
              className="cls-10"
              d="M1874,1174l338-234,103.98-40.29c-68.53-150.26-220.05-254.71-395.98-254.71-240.24,0-435,194.76-435,435,0,102.13,35.21,196.03,94.14,270.26l294.86-176.26Z"
            />
            <path
              className="cls-10"
              d="M1740.69,1476.44c54.67,24.77,115.38,38.56,179.31,38.56,240.24,0,435-194.76,435-435,0-17.46-1.06-34.66-3.06-51.58l-611.25,448.02Z"
            />
          </g>
        </g>
      </mask>
      <linearGradient
        id="linear-gradient-26"
        x1={2042.08}
        y1={1225.49}
        x2={1797.92}
        y2={934.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cb5180" />
        <stop offset={0.12} stopColor="#c2507d" />
        <stop offset={0.31} stopColor="#ab4e77" />
        <stop offset={0.55} stopColor="#864b6c" />
        <stop offset={0.82} stopColor="#53475e" />
        <stop offset={1} stopColor="#2e4454" />
      </linearGradient>
      <filter
        id="luminosity-noclip-2"
        x={1273.87}
        y={610}
        width={1292.26}
        height={939.99}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="mask-1"
        x={1273.87}
        y={610}
        width={1292.26}
        height={939.99}
        maskUnits="userSpaceOnUse"
      >
        <g className="cls-6">
          <g className="cls-4">
            <path
              className="cls-10"
              d="M1874,1174l338-234,103.98-40.29c-68.53-150.26-220.05-254.71-395.98-254.71-240.24,0-435,194.76-435,435,0,102.13,35.21,196.03,94.14,270.26l294.86-176.26Z"
            />
            <path
              className="cls-10"
              d="M1740.69,1476.44c54.67,24.77,115.38,38.56,179.31,38.56,240.24,0,435-194.76,435-435,0-17.46-1.06-34.66-3.06-51.58l-611.25,448.02Z"
            />
          </g>
        </g>
      </mask>
      <linearGradient
        id="linear-gradient-27"
        x1={2042.08}
        y1={1225.49}
        x2={1797.92}
        y2={934.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#cb5180" />
        <stop offset={0.19} stopColor="#8d3859" stopOpacity={0.7} />
        <stop offset={0.37} stopColor="#5b2439" stopOpacity={0.45} />
        <stop offset={0.53} stopColor="#331420" stopOpacity={0.25} />
        <stop offset={0.68} stopColor="#17090e" stopOpacity={0.11} />
        <stop offset={0.82} stopColor="#060203" stopOpacity={0.03} />
        <stop offset={0.92} stopColor="#000" stopOpacity={0} />
      </linearGradient>
      <mask
        id="mask-2"
        x={1273.87}
        y={644.5}
        width={1292.26}
        height={1005.5}
        maskUnits="userSpaceOnUse"
      >
        <circle
          id="Shine-3"
          data-name="Shine"
          className="cls-14"
          cx={1920}
          cy={1080}
          r={435}
        />
      </mask>
      <linearGradient
        id="linear-gradient-28"
        x1={2042.08}
        y1={1325.49}
        x2={1797.92}
        y2={1034.51}
        xlinkHref="#linear-gradient-27"
      />
      <linearGradient
        id="linear-gradient-29"
        x1={1653}
        y1={1114}
        x2={1653}
        y2={1084}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-30"
        x1={1733}
        y1={1168}
        x2={1733}
        y2={1138}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-31"
        x1={1731}
        y1={1110}
        x2={1731}
        y2={1080}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-32"
        x1={1617}
        y1={1244}
        x2={1617}
        y2={1214}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-33"
        x1={1675}
        y1={1344}
        x2={1675}
        y2={1314}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-34"
        x1={1787}
        y1={1290}
        x2={1787}
        y2={1260}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-35"
        x1={1831}
        y1={1442}
        x2={1831}
        y2={1412}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-36"
        x1={1893}
        y1={1374}
        x2={1893}
        y2={1344}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-37"
        x1={2013}
        y1={1412}
        x2={2013}
        y2={1382}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-38"
        x1={2043}
        y1={1314}
        x2={2043}
        y2={1284}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-39"
        x1={2119}
        y1={1374}
        x2={2119}
        y2={1344}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-40"
        x1={2111}
        y1={1304}
        x2={2111}
        y2={1274}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-41"
        x1={2185}
        y1={1228}
        x2={2185}
        y2={1198}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-42"
        x1={2215}
        y1={1250}
        x2={2215}
        y2={1220}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-43"
        x1={2265}
        y1={1162}
        x2={2265}
        y2={1132}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-44"
        x1={2073}
        y1={1124}
        x2={2073}
        y2={1094}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-45"
        x1={1969}
        y1={1162}
        x2={1969}
        y2={1132}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-46"
        x1={1901}
        y1={1214}
        x2={1901}
        y2={1184}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-47"
        x1={1801}
        y1={1238}
        x2={1801}
        y2={1208}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-48"
        x1={1879}
        y1={1266}
        x2={1879}
        y2={1236}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-49"
        x1={1593.42}
        y1={1121.72}
        x2={1593.42}
        y2={1106.76}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-50"
        x1={1691.31}
        y1={1158.64}
        x2={1691.31}
        y2={1143.68}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-51"
        x1={1698.31}
        y1={1055.72}
        x2={1698.31}
        y2={1040.77}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-52"
        x1={1633.48}
        y1={1196.53}
        x2={1633.48}
        y2={1181.57}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-53"
        x1={1662.39}
        y1={1246.38}
        x2={1662.39}
        y2={1231.42}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-54"
        x1={1794.23}
        y1={1413.46}
        x2={1794.23}
        y2={1398.5}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-55"
        x1={1716.16}
        y1={1359.23}
        x2={1716.16}
        y2={1344.28}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-56"
        x1={1919.07}
        y1={1441.33}
        x2={1919.07}
        y2={1426.38}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-57"
        x1={1830.89}
        y1={1280.28}
        x2={1830.89}
        y2={1265.32}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-58"
        x1={1963.85}
        y1={1319.42}
        x2={1963.85}
        y2={1304.47}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-59"
        x1={1883.74}
        y1={1261.33}
        x2={1883.74}
        y2={1246.38}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-60"
        x1={2075.75}
        y1={1406.44}
        x2={2075.75}
        y2={1391.48}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-61"
        x1={1916.64}
        y1={1188.55}
        x2={1916.64}
        y2={1173.59}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-62"
        x1={2141.6}
        y1={1189.52}
        x2={2141.6}
        y2={1174.56}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-63"
        x1={2162.52}
        y1={1063.65}
        x2={2162.52}
        y2={1048.69}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-64"
        x1={1964.81}
        y1={1396.7}
        x2={1964.81}
        y2={1381.75}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-65"
        x1={1808.96}
        y1={1155.65}
        x2={1808.96}
        y2={1140.69}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-66"
        x1={1801.06}
        y1={1105.57}
        x2={1801.06}
        y2={1090.61}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-67"
        x1={2195.06}
        y1={1330.18}
        x2={2195.06}
        y2={1282}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-68"
        x1={2079.06}
        y1={1268.18}
        x2={2079.06}
        y2={1220}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-69"
        x1={2243.06}
        y1={1122.18}
        x2={2243.06}
        y2={1074}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-70"
        x1={2009.06}
        y1={1130.18}
        x2={2009.06}
        y2={1082}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-71"
        x1={1725.21}
        y1={1297.53}
        x2={1725.21}
        y2={1282.58}
        xlinkHref="#linear-gradient-15"
      />
      <linearGradient
        id="linear-gradient-72"
        x1={1586.09}
        y1={1193.49}
        x2={1586.09}
        y2={1178.54}
        xlinkHref="#linear-gradient-15"
      />
    </defs>
    <g className="cls-15">
      <g id="Artwork">
        <circle id="Shine" className="cls-5" cx={1920} cy={1080} r={435} />
        <path
          className="cls-21"
          d="M1258,794c-71.68,0-130-58.32-130-130s58.32-130,130-130,130,58.32,130,130-58.32,130-130,130Z"
        />
        <path
          className="cls-22"
          d="M1258,774c-60.65,0-110-49.35-110-110s49.35-110,110-110,110,49.35,110,110-49.35,110-110,110Z"
        />
        <path
          className="cls-23"
          d="M1258,754c-49.63,0-90-40.37-90-90s40.37-90,90-90,90,40.37,90,90-40.37,90-90,90Z"
        />
        <circle className="cls-7" cx={1258} cy={664} r={70} />
        <path
          className="cls-18"
          d="M3048,554c-49.63,0-90-40.37-90-90s40.37-90,90-90,90,40.37,90,90-40.37,90-90,90Z"
        />
        <path
          className="cls-19"
          d="M3048,540.15c-41.99,0-76.15-34.16-76.15-76.15s34.16-76.15,76.15-76.15,76.15,34.16,76.15,76.15-34.16,76.15-76.15,76.15Z"
        />
        <path
          className="cls-20"
          d="M3048,526.31c-34.36,0-62.31-27.95-62.31-62.31s27.95-62.31,62.31-62.31,62.31,27.95,62.31,62.31-27.95,62.31-62.31,62.31Z"
        />
        <circle className="cls-8" cx={3048} cy={464} r={48.46} />
        <path
          className="cls-24"
          d="M2708,1662c-44.11,0-80-35.89-80-80s35.89-80,80-80,80,35.89,80,80-35.89,80-80,80Z"
        />
        <path
          className="cls-25"
          d="M2708,1642c-33.08,0-60-26.92-60-60s26.92-60,60-60,60,26.92,60,60-26.92,60-60,60Z"
        />
        <circle className="cls-81" cx={2708} cy={1582} r={40} />
        <circle className="cls-34" cx={2560} cy={632} r={30} />
        <circle className="cls-62" cx={1280} cy={1516} r={30} />
        <circle className="cls-29" cx={2069} cy={417} r={15} />
        <circle className="cls-31" cx={1403} cy={389} r={15} />
        <circle className="cls-30" cx={2003} cy={1691} r={15} />
        <circle className="cls-28" cx={2069} cy={949} r={15} />
        <circle className="cls-26" cx={1717} cy={923} r={15} />
        <path
          className="cls-12"
          d="M1652.4,575.92l-31.68,3.09c-.09,0-.16.07-.18.16l-6.08,31.24c-.04.23-.37.21-.4-.02l-3.09-31.68c0-.09-.07-.16-.16-.18l-31.24-6.08c-.23-.04-.21-.37.02-.4l31.68-3.09c.09,0,.16-.07.18-.16l6.08-31.24c.04-.23.37-.21.4.02l3.09,31.68c0,.09.07.16.16.18l31.24,6.08c.23.04.21.37-.02.4Z"
        />
        <path
          className="cls-12"
          d="M772.4,1059.92l-31.68,3.09c-.09,0-.16.07-.18.16l-6.08,31.24c-.04.23-.37.21-.4-.02l-3.09-31.68c0-.09-.07-.16-.16-.18l-31.24-6.08c-.23-.04-.21-.37.02-.4l31.68-3.09c.09,0,.16-.07.18-.16l6.08-31.24c.04-.23.37-.21.4.02l3.09,31.68c0,.09.07.16.16.18l31.24,6.08c.23.04.21.37-.02.4Z"
        />
        <path
          className="cls-12"
          d="M2720.4,1059.92l-31.68,3.09c-.09,0-.16.07-.18.16l-6.08,31.24c-.04.23-.37.21-.4-.02l-3.09-31.68c0-.09-.07-.16-.16-.18l-31.24-6.08c-.23-.04-.21-.37.02-.4l31.68-3.09c.09,0,.16-.07.18-.16l6.08-31.24c.04-.23.37-.21.4.02l3.09,31.68c0,.09.07.16.16.18l31.24,6.08c.23.04.21.37-.02.4Z"
        />
        <path
          className="cls-12"
          d="M2248.88,595.32l-21.65,2.11c-.06,0-.11.05-.12.11l-4.15,21.35c-.03.15-.25.14-.27-.01l-2.11-21.65c0-.06-.05-.11-.11-.12l-21.35-4.15c-.15-.03-.14-.25.01-.27l21.65-2.11c.06,0,.11-.05.12-.11l4.15-21.35c.03-.15.25-.14.27.01l2.11,21.65c0,.06.05.11.11.12l21.35,4.15c.15.03.14.25-.01.27Z"
        />
        <path
          className="cls-12"
          d="M1156.79,989.36c-3.91,3.91-10.24,3.91-14.14,0-3.91-3.91-3.91-10.24,0-14.14s70.71-56.57,70.71-56.57c0,0-52.66,66.81-56.57,70.71Z"
        />
        <path
          className="cls-12"
          d="M1584.79,1639.36c-3.91,3.91-10.24,3.91-14.14,0-3.91-3.91-3.91-10.24,0-14.14s70.71-56.57,70.71-56.57c0,0-52.66,66.81-56.57,70.71Z"
        />
        <path
          className="cls-12"
          d="M2142.79,487.36c-3.91,3.91-10.24,3.91-14.14,0-3.91-3.91-3.91-10.24,0-14.14,3.91-3.91,70.71-56.57,70.71-56.57,0,0-52.66,66.81-56.57,70.71Z"
        />
        <path
          className="cls-12"
          d="M2546.79,997.36c-3.91,3.91-10.24,3.91-14.14,0-3.91-3.91-3.91-10.24,0-14.14s70.71-56.57,70.71-56.57c0,0-52.66,66.81-56.57,70.71Z"
        />
        <path
          className="cls-12"
          d="M2717.13,872.48c-2.65,2.65-6.95,2.65-9.6,0s-2.65-6.95,0-9.6,48.01-38.41,48.01-38.41c0,0-35.76,45.36-38.41,48.01Z"
        />
        <path
          className="cls-12"
          d="M1491.13,756.48c-2.65,2.65-6.95,2.65-9.6,0s-2.65-6.95,0-9.6,48.01-38.41,48.01-38.41c0,0-35.76,45.36-38.41,48.01Z"
        />
        <path
          className="cls-12"
          d="M1041.13,1550.48c-2.65,2.65-6.95,2.65-9.6,0s-2.65-6.95,0-9.6c2.65-2.65,48.01-38.41,48.01-38.41,0,0-35.76,45.36-38.41,48.01Z"
        />
        <path
          className="cls-12"
          d="M1055.13,1312.48c-2.65,2.65-6.95,2.65-9.6,0s-2.65-6.95,0-9.6c2.65-2.65,48.01-38.41,48.01-38.41,0,0-35.76,45.36-38.41,48.01Z"
        />
        <path
          className="cls-83"
          d="M1758,1182c67.73-10.06,115.41-42.48,163.43-76.84-.02,0-.03,0-.05,0-96.35-15.72-114.54-86.35-201.25-92.67-72.18-5.27-152.64,36.9-213.58,103.29.02.2.04.39.06.58,105.84,65.66,188.88,74.92,251.38,65.64Z"
        />
        <path
          className="cls-82"
          d="M2334.87,1069.47c-.04-1.47-.11-2.93-.16-4.39-.07-2.02-.13-4.04-.23-6.06-.11-2.1-.26-4.2-.39-6.29-.09-1.35-.15-2.71-.26-4.06-.21-2.82-.47-5.63-.74-8.44-.06-.6-.1-1.2-.16-1.79-.02-.16-.04-.32-.05-.48-45.28-17.85-95.08-30.41-147.66-31.93-21.32-.62-43.09.57-65.21,3.97-87.44,13.44-143.23,55.58-198.57,95.16-48.02,34.35-95.7,66.78-163.43,76.84-62.5,9.28-145.54.02-251.38-65.64.11,1.21.24,2.41.35,3.62.19,2.02.38,4.04.6,6.05.14,1.27.31,2.54.47,3.81.24,2.01.47,4.02.74,6.03.17,1.24.36,2.47.54,3.7.29,2.02.58,4.05.9,6.07.19,1.21.42,2.41.62,3.62.34,2.02.67,4.05,1.04,6.06.22,1.21.48,2.42.71,3.63.39,2,.76,4,1.18,5.99.25,1.19.53,2.38.79,3.57.43,1.99.86,3.98,1.32,5.97.27,1.17.58,2.34.86,3.51.48,1.98.96,3.97,1.47,5.94.3,1.15.62,2.29.93,3.43.53,1.98,1.05,3.96,1.61,5.93.32,1.14.67,2.26,1.01,3.4.58,1.96,1.14,3.93,1.75,5.88.34,1.11.72,2.21,1.07,3.32.62,1.96,1.24,3.92,1.89,5.86.37,1.09.76,2.17,1.13,3.26.67,1.95,1.34,3.9,2.04,5.83.39,1.08.81,2.15,1.21,3.22.72,1.93,1.42,3.86,2.17,5.77.42,1.07.86,2.13,1.28,3.2.76,1.9,1.51,3.8,2.29,5.69.44,1.06.9,2.11,1.35,3.16.8,1.88,1.59,3.76,2.42,5.63.47,1.06.97,2.11,1.44,3.17.83,1.84,1.66,3.69,2.52,5.51.5,1.05,1.02,2.09,1.52,3.14.87,1.82,1.74,3.64,2.64,5.44.51,1.02,1.04,2.03,1.56,3.05.92,1.81,1.84,3.62,2.79,5.42.54,1.03,1.11,2.04,1.66,3.06.95,1.77,1.9,3.54,2.88,5.3.57,1.02,1.16,2.03,1.74,3.04.99,1.74,1.97,3.47,2.98,5.19.59,1,1.2,1.98,1.79,2.98,1.03,1.72,2.05,3.44,3.11,5.14.61.98,1.24,1.94,1.85,2.92,1.07,1.7,2.14,3.4,3.23,5.08.63.97,1.29,1.93,1.93,2.89,1.1,1.66,2.2,3.33,3.32,4.97.67.97,1.36,1.93,2.03,2.9,1.13,1.62,2.25,3.25,3.4,4.85.68.94,1.37,1.87,2.06,2.8,1.17,1.61,2.34,3.22,3.54,4.81.71.95,1.45,1.88,2.17,2.82,1.19,1.56,2.38,3.12,3.59,4.66.74.93,1.49,1.85,2.24,2.77,1.23,1.53,2.45,3.07,3.7,4.58.75.9,1.52,1.79,2.27,2.69,1.27,1.51,2.53,3.03,3.82,4.52.78.9,1.58,1.78,2.36,2.67,1.29,1.47,2.58,2.94,3.89,4.4.81.9,1.65,1.78,2.47,2.67,1.31,1.42,2.61,2.85,3.94,4.25.84.89,1.7,1.75,2.55,2.63,1.34,1.39,2.66,2.78,4.02,4.15.84.85,1.7,1.68,2.55,2.52,1.38,1.37,2.76,2.75,4.16,4.1.89.86,1.81,1.7,2.71,2.56,1.38,1.31,2.76,2.63,4.15,3.92.92.85,1.86,1.68,2.79,2.52,1.4,1.27,2.79,2.55,4.21,3.8.95.84,1.93,1.66,2.89,2.49,1.42,1.23,2.83,2.46,4.26,3.67,1,.84,2.02,1.66,3.03,2.49,1.42,1.17,2.82,2.35,4.26,3.5,1.03.83,2.07,1.63,3.11,2.44,1.44,1.14,2.87,2.28,4.32,3.4,1.03.79,2.07,1.55,3.11,2.33,1.48,1.11,2.95,2.24,4.45,3.33,1.09.8,2.2,1.57,3.3,2.36,1.46,1.05,2.92,2.11,4.39,3.14,1.11.77,2.23,1.52,3.35,2.28,1.49,1.02,2.97,2.05,4.47,3.05,1.11.74,2.24,1.45,3.36,2.18,1.53.99,3.05,2,4.59,2.97,1.16.73,2.34,1.44,3.51,2.16,1.52.94,3.03,1.89,4.56,2.81,1.22.73,2.46,1.44,3.69,2.16,1.5.88,2.99,1.77,4.5,2.64,1.23.7,2.47,1.37,3.71,2.06,1.53.85,3.06,1.72,4.6,2.55,1.27.68,2.55,1.34,3.82,2.01,1.53.81,3.06,1.63,4.6,2.42,1.31.67,2.63,1.31,3.95,1.96,1.53.76,3.05,1.53,4.59,2.28,1.36.65,2.73,1.28,4.09,1.92,1.52.71,3.02,1.44,4.55,2.13,1.36.62,2.74,1.21,4.11,1.81,1.55.68,3.09,1.38,4.64,2.04,1.4.6,2.82,1.16,4.23,1.75,1.54.64,3.07,1.29,4.62,1.91,1.43.57,2.87,1.11,4.31,1.66,1.55.6,3.09,1.21,4.65,1.79,1.37.51,2.76.99,4.14,1.49,1.64.59,3.27,1.2,4.92,1.77,1.41.49,2.83.94,4.24,1.41,1.63.55,3.26,1.11,4.9,1.63,1.47.47,2.95.91,4.43,1.36,1.6.49,3.2,1,4.81,1.48,1.49.44,3,.85,4.5,1.27,1.61.45,3.21.92,4.83,1.36,1.5.4,3.02.77,4.53,1.16,1.63.42,3.25.85,4.89,1.25,1.51.37,3.03.7,4.54,1.05,1.65.38,3.3.78,4.96,1.15,1.52.33,3.05.63,4.58.95,1.67.34,3.33.71,5,1.03,1.58.31,3.16.58,4.74.86,1.64.3,3.27.61,4.91.89,1.61.27,3.23.51,4.85.76,1.63.26,3.25.53,4.89.77,1.75.25,3.52.47,5.28.7,1.51.2,3.01.42,4.52.6,1.98.24,3.98.44,5.97.65,1.3.14,2.6.3,3.91.42,1.91.18,3.83.33,5.74.48,1.4.12,2.8.25,4.21.35,1.82.13,3.64.22,5.46.33,1.52.09,3.02.2,4.54.27,2.26.11,4.53.17,6.8.25,1.09.03,2.17.09,3.26.12,3.37.08,6.74.12,10.13.12,228.83,0,415-186.17,415-415,0-3.52-.05-7.03-.13-10.53Z"
        />
        <path
          className="cls-84"
          d="M2322.83,1179.84c-66.62-31.72-145.65-52.58-228.86-36.07-149.41,29.64-194.25,156.31-327.61,182-52.47,10.11-121.32,5.08-209.04-44.26,70.98,127.23,206.93,213.49,362.68,213.49,194.42,0,358.01-134.4,402.83-315.16Z"
        />
        <circle className="cls-27" cx={2296} cy={1398} r={200} />
        <path
          className="cls-9"
          d="M2020.73,677.39c94.04,76.15,154.27,192.47,154.27,322.61,0,228.83-186.17,415-415,415-34.73,0-68.47-4.31-100.73-12.39,71.31,57.74,162.04,92.39,260.73,92.39,228.83,0,415-186.17,415-415,0-194.1-133.96-357.48-314.27-402.61Z"
        />
        <path
          id="Low_Yellow"
          data-name="Low Yellow"
          className="cls-3"
          d="M1920,1495c-228.83,0-415-186.17-415-415s186.17-415,415-415,415,186.17,415,415-186.17,415-415,415Z"
        />
        <path
          className="cls-11"
          d="M1920,645c-240.24,0-435,194.76-435,435s194.76,435,435,435,435-194.76,435-435-194.76-435-435-435ZM1920,1495c-228.83,0-415-186.17-415-415s186.17-415,415-415,415,186.17,415,415-186.17,415-415,415Z"
        />
        <circle
          id="Shine-2"
          data-name="Shine"
          className="cls-13"
          cx={1920}
          cy={1080}
          r={435}
        />
        <g className="cls-1">
          <path
            className="cls-32"
            d="M2557.91,633.33c-56.39-80.53-387.7,54.17-740.01,300.86-352.31,246.69-592.2,511.95-535.82,592.48,56.39,80.53,387.7-54.17,740.01-300.86,352.31-246.69,592.2-511.95,535.82-592.48ZM2004.89,1201.23c-334.21,234.02-643.15,369.45-690.04,302.5-46.88-66.96,186.04-310.94,520.26-544.96,334.21-234.02,643.15-369.45,690.04-302.5,46.88,66.96-186.04,310.94-520.26,544.96Z"
          />
        </g>
        <g className="cls-17">
          <path
            className="cls-59"
            d="M2557.91,633.33c-56.39-80.53-387.7,54.17-740.01,300.86-352.31,246.69-592.2,511.95-535.82,592.48,56.39,80.53,387.7-54.17,740.01-300.86,352.31-246.69,592.2-511.95,535.82-592.48ZM2004.89,1201.23c-334.21,234.02-643.15,369.45-690.04,302.5-46.88-66.96,186.04-310.94,520.26-544.96,334.21-234.02,643.15-369.45,690.04-302.5,46.88,66.96-186.04,310.94-520.26,544.96Z"
          />
        </g>
        <g className="cls-16">
          <path
            className="cls-85"
            d="M2557.91,733.33c-56.39-80.53-387.7,54.17-740.01,300.86-352.31,246.69-592.2,511.95-535.82,592.48,56.39,80.53,387.7-54.17,740.01-300.86,352.31-246.69,592.2-511.95,535.82-592.48ZM2004.89,1301.23c-334.21,234.02-643.15,369.45-690.04,302.5-46.88-66.96,186.04-310.94,520.26-544.96,334.21-234.02,643.15-369.45,690.04-302.5,46.88,66.96-186.04,310.94-520.26,544.96Z"
          />
        </g>
        <path
          className="cls-33"
          d="M1659.27,839.31c25.21-27.29,54.64-50.63,87.25-68.97"
        />
        <path
          className="cls-33"
          d="M1604.96,916.47c7.13-13.68,15.12-26.84,23.91-39.4"
        />
        <g className="cls-86">
          <circle className="cls-58" cx={1653} cy={1099} r={15} />
          <circle className="cls-64" cx={1733} cy={1153} r={15} />
          <circle className="cls-63" cx={1731} cy={1095} r={15} />
          <circle className="cls-66" cx={1617} cy={1229} r={15} />
          <circle className="cls-65" cx={1675} cy={1329} r={15} />
          <circle className="cls-69" cx={1787} cy={1275} r={15} />
          <circle className="cls-67" cx={1831} cy={1427} r={15} />
          <circle className="cls-70" cx={1893} cy={1359} r={15} />
          <circle className="cls-61" cx={2013} cy={1397} r={15} />
          <circle className="cls-68" cx={2043} cy={1299} r={15} />
          <circle className="cls-60" cx={2119} cy={1359} r={15} />
          <circle className="cls-71" cx={2111} cy={1289} r={15} />
          <circle className="cls-72" cx={2185} cy={1213} r={15} />
          <circle className="cls-73" cx={2215} cy={1235} r={15} />
          <circle className="cls-74" cx={2265} cy={1147} r={15} />
          <circle className="cls-79" cx={2073} cy={1109} r={15} />
          <circle className="cls-77" cx={1969} cy={1147} r={15} />
          <circle className="cls-80" cx={1901} cy={1199} r={15} />
          <circle className="cls-78" cx={1801} cy={1223} r={15} />
          <circle className="cls-75" cx={1879} cy={1251} r={15} />
          <circle className="cls-76" cx={1593.42} cy={1114.24} r={7.48} />
          <circle className="cls-39" cx={1691.31} cy={1151.16} r={7.48} />
          <circle className="cls-40" cx={1698.31} cy={1048.24} r={7.48} />
          <circle className="cls-47" cx={1633.48} cy={1189.05} r={7.48} />
          <circle className="cls-35" cx={1662.39} cy={1238.9} r={7.48} />
          <circle className="cls-36" cx={1794.23} cy={1405.98} r={7.48} />
          <circle className="cls-37" cx={1716.16} cy={1351.76} r={7.48} />
          <circle className="cls-38" cx={1919.07} cy={1433.86} r={7.48} />
          <circle className="cls-43" cx={1830.89} cy={1272.8} r={7.48} />
          <circle className="cls-42" cx={1963.85} cy={1311.94} r={7.48} />
          <circle className="cls-41" cx={1883.74} cy={1253.86} r={7.48} />
          <circle className="cls-56" cx={2075.75} cy={1398.96} r={7.48} />
          <circle className="cls-55" cx={1916.64} cy={1181.07} r={7.48} />
          <circle className="cls-44" cx={2141.6} cy={1182.04} r={7.48} />
          <circle className="cls-51" cx={2162.52} cy={1056.17} r={7.48} />
          <circle className="cls-53" cx={1964.81} cy={1389.22} r={7.48} />
          <circle className="cls-52" cx={1808.96} cy={1148.17} r={7.48} />
          <circle className="cls-54" cx={1801.06} cy={1098.09} r={7.48} />
          <circle className="cls-48" cx={2195.06} cy={1306.09} r={24.09} />
          <circle className="cls-49" cx={2079.06} cy={1244.09} r={24.09} />
          <circle className="cls-50" cx={2243.06} cy={1098.09} r={24.09} />
          <circle className="cls-57" cx={2009.06} cy={1106.09} r={24.09} />
          <circle className="cls-46" cx={1725.21} cy={1290.06} r={7.48} />
          <circle className="cls-45" cx={1586.09} cy={1186.01} r={7.48} />
        </g>
      </g>
    </g>
  </svg>
);
export default GlassPlanet;
