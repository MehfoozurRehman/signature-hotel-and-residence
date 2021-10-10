import React from "react";
import welcome_background from "../Assets/welcome__background.png";
import ringforbuilding from "../Assets/ringforbuilding.png";
import buildingback from "../Assets/buildingback.png";
import buildingfront from "../Assets/buildingfront.png";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function WelcomeScreen() {
  return (
    <>
      <Header />
      <div className="welcome__container">
        <img
          src={welcome_background}
          alt="welcome_background"
          className="welcome__container__img"
        />
        <div className="welcome__container__wrapper">
          <div className="welcome__container__wrapper__content">
            <div className="welcome__container__wrapper__content__left">
              <Link to="/home" className="welcome__container__wrapper__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48.286"
                  height="42.483"
                  viewBox="0 0 48.286 42.483"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#dfb449" />
                      <stop offset="1" stop-color="#786528" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Group_87"
                    data-name="Group 87"
                    transform="translate(507.869 -224.853)"
                  >
                    <path
                      id="Path_137"
                      data-name="Path 137"
                      d="M-477.162,236.676h.751q5.66,0,11.319,0a2.271,2.271,0,0,1,2.586,2.585q0,12.828,0,25.657v.959c.683,0,1.3,0,1.924,0,.485,0,.961.035,1,.68.026.5-.32.771-1,.773q-5.031.013-10.061.009-17.922,0-35.844-.007a4.459,4.459,0,0,1-.751-.037.686.686,0,0,1-.626-.8.657.657,0,0,1,.7-.66,13.634,13.634,0,0,1,1.571,0c.544.044.66-.178.658-.683-.018-4.59-.012-9.181-.012-13.772q0-8.741,0-17.482a2.21,2.21,0,0,1,2.539-2.482,1.831,1.831,0,0,0,1.925-1.091,10.448,10.448,0,0,1,9.925-5.456,10.6,10.6,0,0,1,9.295,6.017.778.778,0,0,0,.859.518,8.482,8.482,0,0,1,1.005-.005,2.17,2.17,0,0,1,2.239,2.214C-477.148,234.609-477.162,235.609-477.162,236.676Zm-1.511,29.167v-.7q0-15.528,0-31.057c0-.951-.131-1.085-1.1-1.085q-11.317-.007-22.633,0c-.84,0-1.031.192-1.031,1.042q0,15.56.006,31.12c0,.222.023.444.035.667h5.557c0-.3,0-.548,0-.8,0-1.928-.039-3.857.016-5.784a6.86,6.86,0,0,1,6.358-6.48A6.764,6.764,0,0,1-484.2,259.5c.031,1.865.006,3.73.007,5.6,0,.241,0,.483,0,.743Zm14.623-.061c.016-.335.034-.54.034-.746q0-12.86,0-25.719c0-1.058-.17-1.223-1.254-1.223l-10.69.006c-1.341,0-1.362.024-1.153,1.366,0,.018.025.033.1.131h.608q4.874,0,9.747.007c.906,0,1.124.218,1.131,1.107.007.922,0,1.845,0,2.767,0,1.025-.187,1.211-1.212,1.212q-4.811,0-9.621,0h-.758c-.02.228-.041.369-.045.511-.025,1-.024,1,.953,1q4.779-.007,9.558,0c.934,0,1.12.2,1.124,1.157q.006,1.352,0,2.7c0,.989-.2,1.187-1.168,1.188q-4.842,0-9.684,0c-.242,0-.485.021-.749.033-.015.208-.035.351-.034.494,0,1.142-.087.973.967.975,3.207.007,6.414,0,9.621,0,.817,0,1.045.227,1.052,1.044.008.964,0,1.929,0,2.893-.007.9-.221,1.117-1.108,1.117q-4.9,0-9.81,0h-.681v1.509h.712q4.9,0,9.81,0c.85,0,1.068.218,1.076,1.084q.012,1.415,0,2.83c-.007.942-.205,1.139-1.146,1.141q-4.653.006-9.307.006c-1.26,0-1.261,0-1.163,1.271a.388.388,0,0,0,.055.135Zm-21.719.065a2.281,2.281,0,0,0,.052-.311c0-2.093.049-4.188-.018-6.279a5.209,5.209,0,0,0-5.21-4.989,5.259,5.259,0,0,0-5.358,5.055c-.056,2.05-.019,4.1-.019,6.154a2.12,2.12,0,0,0,.068.37Zm2.98-34.488a9.406,9.406,0,0,0-8.642-5.018c-3.686.138-6.966,2.776-7.854,5.018Zm15.675,9.884h-10v1.995h8.4c1.816,0,1.816,0,1.661-1.836A.77.77,0,0,0-467.112,241.243Zm-10.013,15.013h10.086c0-.474-.033-.912.008-1.343.051-.538-.17-.664-.678-.661-2.949.021-5.9.009-8.848.012-.18,0-.36.029-.568.047Zm10,4.606h-9.983v2h8.391c1.864,0,1.864,0,1.66-1.894C-467.062,260.946-467.082,260.93-467.128,260.862Zm.034-11.108c.023-.174.054-.314.059-.455.052-1.524.051-1.524-1.483-1.524q-4.017,0-8.034,0c-.247,0-.593-.11-.6.334-.007.537,0,1.074,0,1.642Z"
                      transform="translate(0 0)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_138"
                      data-name="Path 138"
                      d="M-430.607,315.22c-.732,0-1.464,0-2.2,0a.746.746,0,0,1-.843-.8c-.02-1.505-.019-3.011-.005-4.517a.759.759,0,0,1,.845-.809c1.464-.009,2.928-.013,4.391.005a.8.8,0,0,1,.885.905c0,1.443.005,2.886,0,4.329,0,.622-.258.872-.877.883C-429.143,315.23-429.875,315.22-430.607,315.22Zm-1.537-1.561h3.07v-3.053c-.927,0-1.821-.013-2.714.015a.479.479,0,0,0-.34.32C-432.157,311.835-432.144,312.73-432.144,313.659Z"
                      transform="translate(-64.874 -73.64)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_139"
                      data-name="Path 139"
                      d="M-360.145,315.236c-.734,0-1.467,0-2.2,0a.725.725,0,0,1-.819-.811c0-1.509,0-3.018,0-4.527a.708.708,0,0,1,.787-.78c1.488-.015,2.976-.018,4.464,0a.783.783,0,0,1,.843.883c0,1.467,0,2.934,0,4.4,0,.574-.311.834-.87.832C-358.678,315.235-359.412,315.236-360.145,315.236Zm1.558-1.537c0-.94.01-1.832-.012-2.724,0-.118-.162-.331-.254-.334-.911-.025-1.824-.015-2.76-.015V313.7Z"
                      transform="translate(-126.503 -73.656)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_140"
                      data-name="Path 140"
                      d="M-430.573,385.661c-.733,0-1.466-.005-2.2,0a.764.764,0,0,1-.871-.841q-.022-2.23,0-4.461a.732.732,0,0,1,.838-.8c1.466.006,2.932-.008,4.4.007.6.006.874.292.879.9.012,1.445,0,2.89,0,4.336a.753.753,0,0,1-.849.853Zm1.513-4.583c-.942,0-1.835-.01-2.727.012-.118,0-.33.165-.332.258-.025.911-.015,1.824-.015,2.753h3.074Z"
                      transform="translate(-64.881 -135.253)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_141"
                      data-name="Path 141"
                      d="M-360.119,379.566c.711,0,1.423,0,2.135,0a.8.8,0,0,1,.9.888q.006,2.2-.006,4.395a.731.731,0,0,1-.824.809q-2.229.007-4.457,0a.724.724,0,0,1-.807-.821c0-1.486,0-2.972,0-4.457,0-.586.3-.826.864-.82C-361.584,379.572-360.851,379.566-360.119,379.566Zm-1.492,1.547v2.976h2.954v-2.976Z"
                      transform="translate(-126.49 -135.252)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>Commercial</span>
              </Link>
              <Link to="/home" className="welcome__container__wrapper__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.231"
                  height="55.623"
                  viewBox="0 0 50.231 55.623"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#725204" />
                      <stop offset="1" stop-color="#e9a500" />
                    </linearGradient>
                  </defs>
                  <g id="food-service" transform="translate(-24.817)">
                    <circle
                      id="Ellipse_16"
                      data-name="Ellipse 16"
                      cx="1.089"
                      cy="1.089"
                      r="1.089"
                      transform="translate(55.793 23.931)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_142"
                      data-name="Path 142"
                      d="M71.782,28.43H71.57V25.992A21.669,21.669,0,0,0,52.929,4.563a3.266,3.266,0,1,0-5.993,0A21.669,21.669,0,0,0,28.3,25.992V28.43h-.212a3.266,3.266,0,0,0,0,6.532H38.938a3.542,3.542,0,0,0-.212.685l-.935,4.676a6.961,6.961,0,0,0-3.338,6.025l-3.332,2.19a1.1,1.1,0,0,0-.272,1.564l3.828,5.091a1.1,1.1,0,0,0,1.485.244l7.315-5.009A12.044,12.044,0,0,0,50.415,44.1c1.182-.809,6.6-4.5,10.214-6.64a2.485,2.485,0,0,0,1.208-2.5h9.946a3.266,3.266,0,0,0,0-6.532ZM48.844,3.266a1.089,1.089,0,1,1,1.089,1.089A1.09,1.09,0,0,1,48.844,3.266ZM30.472,25.992A19.46,19.46,0,0,1,69.3,24.076H61.8a1.089,1.089,0,1,0,0,2.177h7.595V28.43H30.472Zm29.2,9.22a.309.309,0,0,1-.154.38c-4.119,2.443-10.506,6.835-10.57,6.879a1.087,1.087,0,0,0-.362.42,9.871,9.871,0,0,1-5.956,5.526c-.093.032-6.839,4.635-6.839,4.635l-2.5-3.332,2.859-1.879a1.089,1.089,0,0,0,.487-1c0-.035-.252-3.554,2.558-4.786a1.089,1.089,0,0,0,.63-.784l1.04-5.2a1.387,1.387,0,0,1,1.356-1.112,1.383,1.383,0,0,1,1.367,1.6l0,.022L43.065,40.4a1.089,1.089,0,0,0,1.609,1.1L56.4,34.962h2.941a.31.31,0,0,1,.327.25ZM45.5,34.962h6.434L45.513,38.54l.224-1.66A3.557,3.557,0,0,0,45.5,34.962Zm26.285-2.177h-43.7a1.089,1.089,0,1,1,0-2.177h43.7a1.089,1.089,0,0,1,0,2.177Z"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_143"
                      data-name="Path 143"
                      d="M126.412,101.551a14.233,14.233,0,0,0-7.328,8.032,1.089,1.089,0,1,0,2.049.736,12.042,12.042,0,0,1,6.2-6.8,1.089,1.089,0,0,0-.921-1.973Z"
                      transform="translate(-83.968 -90.427)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>Hotel Services</span>
              </Link>
              <Link to="/home" className="welcome__container__wrapper__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44.287"
                  height="44.287"
                  viewBox="0 0 44.287 44.287"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#dfb449" />
                      <stop offset="1" stop-color="#514726" />
                    </linearGradient>
                  </defs>
                  <g id="bed" transform="translate(-1 -1)">
                    <path
                      id="Path_144"
                      data-name="Path 144"
                      d="M45.287,33.858H43.858V16a2.14,2.14,0,0,0-1.429-2.011V3.143A2.146,2.146,0,0,0,40.287,1H6A2.146,2.146,0,0,0,3.857,3.143V13.989A2.14,2.14,0,0,0,2.429,16V33.858H1V42.43H4.014l.714,2.857H8.7l.714-2.857H36.872l.714,2.857h3.973l.714-2.857h3.014ZM6,2.429H40.287A.715.715,0,0,1,41,3.143V13.857h-3.59a3.535,3.535,0,0,0,.733-2.143V8.857a3.576,3.576,0,0,0-3.572-3.572H27.429a3.576,3.576,0,0,0-3.572,3.572v2.857a3.535,3.535,0,0,0,.733,2.143H21.7a3.539,3.539,0,0,0,.732-2.143V8.857a3.576,3.576,0,0,0-3.572-3.572H11.715A3.576,3.576,0,0,0,8.143,8.857v2.857a3.535,3.535,0,0,0,.733,2.143H5.286V3.143A.715.715,0,0,1,6,2.429Zm19.286,9.286V8.857a2.146,2.146,0,0,1,2.143-2.143h7.143a2.146,2.146,0,0,1,2.143,2.143v2.857a2.146,2.146,0,0,1-2.143,2.143H27.429A2.146,2.146,0,0,1,25.286,11.715Zm-15.715,0V8.857a2.146,2.146,0,0,1,2.143-2.143h7.143A2.146,2.146,0,0,1,21,8.857v2.857a2.146,2.146,0,0,1-2.143,2.143H11.715A2.146,2.146,0,0,1,9.572,11.715Zm-5,3.572H41.715A.715.715,0,0,1,42.43,16V18.17a9.426,9.426,0,0,0-4.642,1.5A8.111,8.111,0,0,1,33.141,21a8.111,8.111,0,0,1-4.647-1.334,9.411,9.411,0,0,0-5.356-1.523,9.4,9.4,0,0,0-5.352,1.523A8.1,8.1,0,0,1,13.142,21,8.1,8.1,0,0,1,8.5,19.666a9.4,9.4,0,0,0-4.639-1.5V16a.715.715,0,0,1,.714-.714ZM3.857,19.6a8.117,8.117,0,0,1,3.931,1.309,9.4,9.4,0,0,0,5.354,1.523,9.4,9.4,0,0,0,5.352-1.523,8.1,8.1,0,0,1,4.644-1.334,8.111,8.111,0,0,1,4.647,1.334,9.411,9.411,0,0,0,5.356,1.523A9.411,9.411,0,0,0,38.5,20.906,8.12,8.12,0,0,1,42.43,19.6v14.26H35A5.848,5.848,0,0,0,29.95,31H16.337a5.847,5.847,0,0,0-5.045,2.857H3.857Zm8.3,15.689.2-.4a4.43,4.43,0,0,1,3.984-2.462H29.949a4.43,4.43,0,0,1,3.984,2.462l.2.4h9.727v2.857H2.429V35.286ZM7.585,43.858H5.844L5.486,42.43H7.942Zm32.858,0H38.7l-.358-1.429H40.8ZM2.429,41V39.572h41.43V41Z"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_145"
                      data-name="Path 145"
                      d="M55,43h1.429v1.429H55Z"
                      transform="translate(-15.428 -11.999)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_146"
                      data-name="Path 146"
                      d="M55,39h1.429v1.429H55Z"
                      transform="translate(-15.428 -10.857)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_147"
                      data-name="Path 147"
                      d="M55,35h1.429v1.429H55Z"
                      transform="translate(-15.428 -9.714)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_148"
                      data-name="Path 148"
                      d="M7,31H8.429v1.429H7Z"
                      transform="translate(-1.714 -8.571)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_149"
                      data-name="Path 149"
                      d="M7,35H8.429v1.429H7Z"
                      transform="translate(-1.714 -9.714)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_150"
                      data-name="Path 150"
                      d="M7,39H8.429v1.429H7Z"
                      transform="translate(-1.714 -10.857)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>Hotel Suites</span>
              </Link>
              <Link to="/home" className="welcome__container__wrapper__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.501"
                  height="50.501"
                  viewBox="0 0 50.501 50.501"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#dfb449" />
                      <stop offset="1" stop-color="#5e522a" />
                    </linearGradient>
                  </defs>
                  <g id="apartment" transform="translate(0.25 0.25)">
                    <path
                      id="Path_151"
                      data-name="Path 151"
                      d="M48.388,37.1V11.291a1.615,1.615,0,0,0-1.613-1.613H45.162V4.839h2.111l-1.751-3.5A2.406,2.406,0,0,0,43.359,0H6.642A2.406,2.406,0,0,0,4.478,1.337l-1.751,3.5H4.839V9.678H3.226a1.615,1.615,0,0,0-1.613,1.613V29.115A2.169,2.169,0,0,0,0,31.2v1.527a3.531,3.531,0,0,0,.578,1.947A3.531,3.531,0,0,0,0,36.625v.945a3.531,3.531,0,0,0,.578,1.947A3.531,3.531,0,0,0,0,41.464v.945a3.531,3.531,0,0,0,.578,1.947A3.531,3.531,0,0,0,0,46.3v1.527a2.173,2.173,0,0,0,2.935,2.034l18.41-6.9a1.6,1.6,0,0,0,1.236.59h1.613a1.615,1.615,0,0,0,1.613-1.613H48.388A1.615,1.615,0,0,0,50,40.323V38.71A1.615,1.615,0,0,0,48.388,37.1Zm-1.613,0H43.549V32.259a1.615,1.615,0,0,0-1.613-1.613H35.485a1.615,1.615,0,0,0-1.613,1.613V37.1H30.646V11.291H46.775Zm-4.839-3.226H39.517V32.259h2.419Zm-4.032,0H35.485V32.259H37.9Zm-2.419,1.613H37.9V37.1H35.485Zm4.032,0h2.419V37.1H39.517ZM33.872,9.678H32.259V8.065h1.613Zm6.452,0H38.71V8.065h1.613ZM44.08,2.059l.584,1.167H40.822l-.806-1.613h3.344A.8.8,0,0,1,44.08,2.059Zm-33.1,1.167.806-1.613h3.036l-.806,1.613Zm5.645-1.613h3.036l-.806,1.613H15.821Zm4.839,0h2.727V3.226H20.66Zm4.34,0h2.727l.806,1.613H25.807Zm5.337,1.613-.806-1.613h3.036l.806,1.613Zm4.839,0-.806-1.613h3.036l.806,1.613ZM5.921,2.059a.8.8,0,0,1,.721-.446H9.986L9.179,3.226H5.337Zm.531,2.78h37.1V9.678H41.936V8.065a1.615,1.615,0,0,0-1.613-1.613H38.71A1.615,1.615,0,0,0,37.1,8.065V9.678H35.485V8.065a1.615,1.615,0,0,0-1.613-1.613H32.259a1.615,1.615,0,0,0-1.613,1.613V9.678a1.615,1.615,0,0,0-1.613,1.613H27.42V8.065a1.615,1.615,0,0,0-1.613-1.613H24.194a1.615,1.615,0,0,0-1.613,1.613v3.226H20.968a1.615,1.615,0,0,0-1.613-1.613V8.065a1.615,1.615,0,0,0-1.613-1.613H16.129a1.615,1.615,0,0,0-1.613,1.613V9.678H12.9V8.065a1.615,1.615,0,0,0-1.613-1.613H9.678A1.615,1.615,0,0,0,8.065,8.065V9.678H6.452Zm19.355,6.452H24.194V8.065h1.613ZM17.742,9.678H16.129V8.065h1.613Zm-6.452,0H9.678V8.065h1.613Zm8.065,1.613V35.329l-3.226-1.21V32.259a1.615,1.615,0,0,0-1.613-1.613H8.065a1.6,1.6,0,0,0-.723.178L3.226,29.28V11.291ZM14.516,33.514l-3.348-1.256h3.348ZM2.369,48.353a.571.571,0,0,1-.756-.523V46.3A1.955,1.955,0,0,1,2.044,45.1l12.62-2.366-.3-1.586L1.933,43.475a1.968,1.968,0,0,1-.32-1.066v-.945a1.959,1.959,0,0,1,.377-1.14H14.516V38.71H1.99a1.959,1.959,0,0,1-.377-1.14v-.945a1.966,1.966,0,0,1,.32-1.066L14.367,37.89l.3-1.586L2.044,33.939a1.955,1.955,0,0,1-.431-1.207V31.2a.57.57,0,0,1,.756-.523l18.6,6.974v3.721ZM21.344,36.075l-.376-.141V12.9h8.065V37.1H27.42V32.259a1.615,1.615,0,0,0-1.613-1.613H24.194a1.615,1.615,0,0,0-1.613,1.613v3.226A1.6,1.6,0,0,0,21.344,36.075Zm2.85-.59V32.259h1.613V37.1A1.615,1.615,0,0,0,24.194,35.485Zm-1.613,6.452V37.1h1.613v4.839Zm25.807-1.613H25.807V38.71H48.388Z"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_152"
                      data-name="Path 152"
                      d="M43.613,35.065h6.452a1.615,1.615,0,0,0,1.613-1.613V28.613A1.615,1.615,0,0,0,50.065,27H43.613A1.615,1.615,0,0,0,42,28.613v4.839A1.615,1.615,0,0,0,43.613,35.065Zm0-3.226h2.419v1.613H43.613Zm4.032,1.613V31.839h2.42v1.613Zm2.419-3.226H47.645V28.613h2.419Zm-4.032-1.613v1.613H43.613V28.613Z"
                      transform="translate(-8.128 -5.225)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_153"
                      data-name="Path 153"
                      d="M43.613,24.065h6.452a1.615,1.615,0,0,0,1.613-1.613V17.613A1.615,1.615,0,0,0,50.065,16H43.613A1.615,1.615,0,0,0,42,17.613v4.839A1.615,1.615,0,0,0,43.613,24.065Zm0-3.226h2.419v1.613H43.613Zm4.032,1.613V20.839h2.42v1.613Zm2.419-3.226H47.645V17.613h2.419Zm-4.032-1.613v1.613H43.613V17.613Z"
                      transform="translate(-8.128 -3.097)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_154"
                      data-name="Path 154"
                      d="M9.613,35.065h6.452a1.615,1.615,0,0,0,1.613-1.613V28.613A1.615,1.615,0,0,0,16.065,27H9.613A1.615,1.615,0,0,0,8,28.613v4.839A1.615,1.615,0,0,0,9.613,35.065Zm0-3.226h2.419v1.613H9.613Zm4.032,1.613V31.839h2.42v1.613Zm2.419-3.226H13.645V28.613h2.419Zm-4.032-1.613v1.613H9.613V28.613Z"
                      transform="translate(-1.548 -5.225)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_155"
                      data-name="Path 155"
                      d="M9.613,24.065h6.452a1.615,1.615,0,0,0,1.613-1.613V17.613A1.615,1.615,0,0,0,16.065,16H9.613A1.615,1.615,0,0,0,8,17.613v4.839A1.615,1.615,0,0,0,9.613,24.065Zm0-3.226h2.419v1.613H9.613Zm4.032,1.613V20.839h2.42v1.613Zm2.419-3.226H13.645V17.613h2.419Zm-4.032-1.613v1.613H9.613V17.613Z"
                      transform="translate(-1.548 -3.097)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_156"
                      data-name="Path 156"
                      d="M29.613,24.452h1.613a1.615,1.615,0,0,0,1.613-1.613V19.613A1.615,1.615,0,0,0,31.226,18H29.613A1.615,1.615,0,0,0,28,19.613v3.226A1.615,1.615,0,0,0,29.613,24.452Zm0-4.839h1.613v3.226H29.613Z"
                      transform="translate(-5.419 -3.484)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_157"
                      data-name="Path 157"
                      d="M29.613,34.452h1.613a1.615,1.615,0,0,0,1.613-1.613V29.613A1.615,1.615,0,0,0,31.226,28H29.613A1.615,1.615,0,0,0,28,29.613v3.226A1.615,1.615,0,0,0,29.613,34.452Zm0-4.839h1.613v3.226H29.613Z"
                      transform="translate(-5.419 -5.419)"
                      stroke="#3f343f"
                      stroke-width="0.5"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>Service Apartments</span>
              </Link>
            </div>
            <div className="welcome__container__wrapper__content__right">
              <img
                src={buildingfront}
                alt="buildingfront"
                className="building__front"
              />
              <img
                src={buildingback}
                alt="buildingback"
                className="building__back"
              />
              <img
                src={ringforbuilding}
                alt="ringforbuilding"
                className="building__ring"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
