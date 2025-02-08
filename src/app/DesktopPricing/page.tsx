import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className="flex flex-col justify-start items-start relative overflow-hidden bg-white">
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1162px] relative overflow-hidden bg-neutral-50"
  >
    <div
      className="flex flex-col justify-start items-center w-[1050px] absolute left-[195px] top-0 overflow-hidden gap-12 py-28"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-96 relative overflow-hidden bg-white">
        <svg
          width="1050"
          height="352"
          viewBox="0 0 1050 352"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1440px] h-[352px] absolute left-0 top-0"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_232_1590)">
            <rect
              width="1440"
              height="352"
              transform="translate(-195)"
              fill="white"
              fillOpacity="0.5"
            ></rect>
          </g>
          <defs>
            <clipPath id="clip0_232_1590">
              <rect width="1440" height="352" fill="white" transform="translate(-195)"></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="w-[1322px] h-[91px] absolute left-[59px] top-0 overflow-hidden">
          <div className="w-[1322px] h-[91px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[187px] h-[58px] absolute left-[136px] top-[17px] overflow-hidden">
              <p className="absolute left-0 top-[13px] text-2xl font-bold text-left text-[#252b42]">
                Bandage
              </p>
            </div>
            <div className="w-[815px] h-[58px] absolute left-[364px] top-4 overflow-hidden">
              <div
                className="flex justify-start items-center absolute left-0 top-[17px] overflow-hidden gap-[21px]"
              >
                <div className="flex-grow-0 flex-shrink-0 w-[43px] h-6 relative overflow-hidden">
                  <div className="w-[43px] h-6 absolute left-0 top-0 overflow-hidden">
                    <Link href="Home"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                      Home
                    </p></Link>
                  </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[59px] h-6 relative overflow-hidden">
                  <div className="w-[59px] h-6 absolute left-0 top-0 overflow-hidden">
                    <Link href="Products"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                      Product
                    </p></Link>
                  </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[52px] h-6 relative overflow-hidden">
                  <div className="w-[52px] h-6 absolute left-0 top-0 overflow-hidden">
                    <Link href="DesktopPricing"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                      Pricing
                    </p></Link>
                  </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[58px] h-6 relative overflow-hidden">
                  <div className="w-[58px] h-6 absolute left-0 top-0 overflow-hidden">
                    <Link href="DesktopContact"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                      Contact
                    </p></Link>
                  </div>
                </div>
              </div>
              <div
                className="flex justify-start items-center absolute left-[515px] top-[3px] gap-[45px]"
              >
                <div className="flex-grow-0 flex-shrink-0 w-[41px] h-[22px] relative overflow-hidden">
                  <div className="w-[41px] h-[22px] absolute left-0 top-0 overflow-hidden">
                    <p className="absolute left-0 top-0 text-sm font-bold text-right text-[#23a6f0]">
                      Login
                    </p>
                  </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[214px] h-[52px] relative overflow-hidden">
                  <div
                    className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[15px] px-[25px] py-[15px] rounded-[5px] bg-[#23a6f0]"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                      Become a member
                    </p>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-3 h-2.5 relative"
                      preserveAspectRatio="none"
                    >
                      <g clipPath="url(#clip0_232_1619)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_232_1619">
                          <rect width="12" height="10" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center w-[870px] absolute left-[285px] top-[104px] overflow-hidden py-[50px]"
        >
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden">
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500">
                PRICING
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-[58px] font-bold text-center text-[#252b42]">
                Simple Pricing
              </p>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px] py-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#252b42]">
                  Home
                </p>
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1628)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#BDBDBD"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1628">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-neutral-500">
                  Pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[633px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[625px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
            Pricing
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            <span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >Problems trying to resolve the conflict between </span>
              <br /><span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >the two major realms of classNameical physics: Newtonian mechanics
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
        <div className="flex-grow-0 flex-shrink-0 w-[186px] h-7 relative">
          <p className="absolute left-0 top-0 text-base font-bold text-left text-[#252b42]">Monthly</p>
          <svg
            width="46"
            height="25"
            viewBox="0 0 46 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[45px] h-[25px] absolute left-20 top-px"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect x="1" y="0.5" width="44" height="24" rx="12" fill="white"></rect>
            <rect x="1" y="0.5" width="44" height="24" rx="12" stroke="#23A6F0"></rect>
            <circle cx="14" cy="12.5" r="9" fill="#EBEBEB" stroke="#D0D0D0"></circle>
          </svg>
          <p className="absolute left-[135px] top-0 text-base font-bold text-left text-[#252b42]">
            Yearly
          </p>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 rounded-[37px] bg-[#b2e3ff]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#23a6f0]">
            Save 25%
          </p>
        </div>
      </div>
      <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden"
        >
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[35px] px-10 py-[50px] rounded-[10px] bg-white border border-[#23a6f0]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#252b42]">
              FREE
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500">
              <span
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500"
                >Organize across all </span>
                <br /><span
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500"
                >apps by hand</span>
            </p>
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#23a6f0]">
                0
              </p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
              >
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#23a6f0]">
                  $
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#8ec2f2]">
                  Per Month
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[15px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"></rect>
                  <g clipPath="url(#clip0_232_1656)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1656">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(8.5 10)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  1GB Cloud storage
                </p>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                >
                  <span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                    >Email and community </span>
                    <br /><span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                    >support
                  </span>
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[246px] relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#252b42]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                Try for free
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[329px] overflow-hidden"
        >
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[35px] px-10 py-[70px] rounded-[10px] bg-[#252b42] border border-[#23a6f0]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">
              STANDARD
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white">
              <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white"
                >Organize across all </span>
                <br /><span
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white"
                >apps by hand</span>
            </p>
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#23a6f0]">
                9.99
              </p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
              >
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#23a6f0]">
                  $
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#8ec2f2]">
                  Per Month
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[15px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"></rect>
                  <g clipPath="url(#clip0_232_1693)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1693">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(8.5 10)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-white"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <svg
                  width="33"
                  height="20"
                  viewBox="0 0 33 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"></rect>
                  <g clipPath="url(#clip0_232_1698)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1698">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(8.5 10)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-white"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-white"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-white"
                >
                  1GB Cloud storage
                </p>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-white"
                >
                  <span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-white"
                    >Email and community </span>
                    <br /><span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-white"
                    >support
                  </span>
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[246px] relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#23a6f0]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                Try for free
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[329px] overflow-hidden"
        >
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[35px] px-10 py-[50px] rounded-[10px] bg-white border border-[#23a6f0]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#252b42]">
              PREMIUM
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500">
              <span
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500"
                >Organize across all </span>
                <br /><span
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-neutral-500"
                >apps by hand</span>
            </p>
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#23a6f0]">
                19.99
              </p>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative"
              >
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#23a6f0]">
                  $
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#8ec2f2]">
                  Per Month
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[15px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"></rect>
                  <g clipPath="url(#clip0_232_1730)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1730">
                      <rect
                        width="16"
                        height="11"
                        fill="white"
                        transform="translate(8.5 10)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  Unlimited product updates
                </p>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[205px] h-[29.25px] text-sm font-bold text-left text-[#252b42]"
                >
                  1GB Cloud storage
                </p>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"></div>
                <p
                  className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                >
                  <span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                    >Email and community </span><br /><span
                    className="flex-grow-0 flex-shrink-0 w-[168px] text-sm font-bold text-left text-[#252b42]"
                    >support
                  </span>
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[246px] relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#23a6f0]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                Try for free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[365px] relative overflow-hidden bg-neutral-50"
  >
    <div
      className="flex flex-col justify-start items-center w-[1050px] absolute left-[195px] top-0 overflow-hidden py-20"
    >
      <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#252b42]">
        Trusted By Over 4000 Big Companies
      </p>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px] py-[50px]"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[153px] relative overflow-hidden"
        >
          <svg
            width="103"
            height="35"
            viewBox="0 0 103 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[103px] h-[34px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1761)">
              <path
                d="M23.2553 32.4249L29.4193 32.5526C27.2949 31.8183 25.2349 30.9244 23.2553 29.8709V32.4249ZM32.5414 31.5789V32.4249L29.4193 32.5526C35.2935 34.5479 40.6688 34.8193 44.66 33.7019C41.4574 33.7338 37.2891 33.2869 32.5414 31.5789ZM98.3488 13.1901C100.908 13.1901 103 11.131 103 8.577C103 6.02301 100.924 4.6662 98.3488 4.6662C95.7899 4.6662 93.6977 6.03897 93.6977 8.577C93.6977 11.115 95.7738 13.1901 98.3488 13.1901ZM93.6816 32.4249H103V14.7864H93.6816V32.4249ZM81.8205 32.4249H91.1388V1.25024L81.8205 5.60799V32.4249ZM76.8314 13.3657C73.9024 10.4606 68.7202 10.6362 68.7202 10.6362C68.7202 10.6362 63.5219 10.4606 60.6089 13.3657C57.6799 16.2709 57.9052 18.777 57.9052 21.762C57.9052 24.747 57.6799 27.2371 60.6089 30.1423C63.538 33.0474 68.7202 32.8718 68.7202 32.8718C68.7202 32.8718 73.9185 33.0474 76.8314 30.1423C79.7605 27.2371 79.5352 24.747 79.5352 21.762C79.5191 18.761 79.7444 16.2549 76.8314 13.3657ZM70.4261 24.8427C70.4261 25.4174 70.1364 26.838 68.7041 26.838C67.2718 26.838 66.9821 25.4174 66.9821 24.8427V18.3939C66.9821 17.0052 68.1569 16.654 68.7041 16.654C69.2513 16.654 70.4261 16.9892 70.4261 18.3939V24.8427ZM53.3346 13.3657C50.4055 10.4606 45.2233 10.6362 45.2233 10.6362C45.2233 10.6362 40.0411 10.4606 37.1121 13.3657C36.8063 13.669 36.5166 13.9883 36.2591 14.3235C30.1113 9.5986 24.5911 6.90094 19.8274 4.57043V1.2662L16.2063 2.95822C7.45129 -0.56948 1.88285 0.053056 0.547068 2.97418C0.547068 2.97418 -3.46027 8.20986 10.493 20.6606V32.4249H19.8113V27.8596C18.7652 27.1892 17.7191 26.4709 16.6891 25.6887C14.3072 23.9009 12.2794 22.2409 10.5091 20.6765V15.7282C12.6174 18.0747 15.4177 20.7404 19.1032 23.7573L19.8274 24.3319V19.5751C19.8274 18.4737 20.101 16.67 21.5655 16.67C23.03 16.67 23.2714 17.7714 23.2714 19.0643V26.838C26.1683 28.7855 29.2744 30.3657 32.5575 31.5629V16.5742C32.5575 13.5892 30.401 10.6042 26.0235 10.6042C23.4807 10.5883 21.1149 11.9132 19.8274 14.1V5.4324C26.5707 8.76855 33.33 12.8549 35.905 14.7385C34.2635 17.069 34.4083 19.2239 34.4083 21.7141C34.4083 24.6991 34.183 27.1892 37.1121 30.0944C40.0411 32.9995 45.2233 32.824 45.2233 32.824C45.2233 32.824 50.4216 32.9995 53.3346 30.0944C56.2636 27.1892 56.0222 24.6991 56.0222 21.7141C56.0222 18.761 56.2636 16.2549 53.3346 13.3657ZM10.493 5.60799V15.7122C2.65535 7.01268 4.23254 3.58075 4.82801 3.08592C7.00066 1.2662 10.8632 1.80893 15.1924 3.42113L10.493 5.60799ZM46.9453 24.8427C46.9453 25.4174 46.6557 26.838 45.2233 26.838C43.791 26.838 43.5013 25.4174 43.5013 24.8427V18.3939C43.5013 17.0052 44.6761 16.654 45.2233 16.654C45.7705 16.654 46.9453 16.9892 46.9453 18.3939V24.8427Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1761">
                <rect width="103" height="34" fill="white" transform="translate(0 0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[146px] relative overflow-hidden"
        >
          <svg
            width="84"
            height="59"
            viewBox="0 0 84 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[83px] h-[59px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1764)">
              <path
                d="M0.5 0.995479H13.1121V35.0101C13.1121 40.4049 15.5437 43.6156 17.5215 44.9521C15.4627 46.7612 9.22148 48.3585 4.52031 44.4958C1.76445 42.214 0.5 38.4165 0.5 34.8797V0.995479ZM79.2689 29.2731V25.6875H83.1272V13.1703H78.8961C77.2588 5.62421 70.5961 0.0175781 62.6365 0.0175781C53.4611 0.0175781 45.9879 7.51482 45.9879 16.756V45.9626C48.5816 46.3375 51.7266 45.9137 54.3689 43.6808C57.141 41.3991 58.3893 37.6179 58.3893 34.0648V32.9728H64.6791V20.4557H58.3893V16.6582C58.3893 11.019 66.8514 11.019 66.8514 16.6582V29.2242C66.8514 38.4491 74.3084 45.9626 83.5 45.9626V33.4944C81.1494 33.4944 79.2689 31.5875 79.2689 29.2731ZM31.5602 13.1377V31.5549C31.5602 34.0648 27.702 34.0648 27.702 31.5549V13.1377H15.252V34.7656C15.252 38.6446 16.5488 43.5667 22.5469 45.1803C28.5449 46.7775 31.9816 43.4527 31.9816 43.4527C31.6412 45.6366 29.6311 47.2502 26.324 47.5761C23.8113 47.8369 20.6178 46.9894 19.0291 46.3049V57.7626C23.098 58.985 27.3777 59.3598 31.6088 58.5286C39.2441 57.0455 44.0588 50.6402 44.0588 42.0999V13.0563H31.5602V13.1377Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1764">
                <rect width="83" height="59" fill="white" transform="translate(0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[152px] relative overflow-hidden"
        >
          <svg
            width="102"
            height="75"
            viewBox="0 0 102 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[102px] h-[75px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1767)">
              <path
                d="M102 0.145508C89.1225 8.82801 87.7519 15.1293 86.6362 17.057C85.5684 19.0332 84.7716 26.8248 82.9228 30.5991C81.0581 34.422 74.2847 37.4349 72.3881 38.6984C70.5234 39.9619 67.8778 44.8701 65.7103 49.098C48.4819 48.3853 39.0309 55.3831 24.4003 64.26C29.0859 62.6887 31.3012 61.5548 31.3012 61.5548C46.3144 55.7233 53.5022 50.4911 76.1016 53.585C76.2769 53.585 76.4044 53.6822 76.5478 53.7146C77.1694 54.071 77.3925 54.8323 77.0419 55.4641L68.4516 70.9824C68.0531 71.7438 67.2084 72.1487 66.3637 71.9706C46.155 68.1153 30.2016 74.7729 15.5391 74.9835C3.84094 75.1617 0 69.557 0 69.2978C0 69.1196 0.095625 69.0224 0.270938 69.0224C0.270938 69.0224 6.375 69.0224 16.7025 66.544C28.4325 43.8172 38.8875 35.8636 50.2669 35.8636C50.2669 35.8636 61.6941 35.8636 64.7062 45.8906C68.34 39.4598 69.2166 37.9209 69.2166 37.9209C70.0612 36.3982 74.7947 25.4155 82.9866 15.0159C91.1944 4.64875 97.3941 2.07315 102 0.145508Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1767">
                <rect width="102" height="75" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[151px] relative overflow-hidden"
        >
          <svg
            width="103"
            height="43"
            viewBox="0 0 103 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[103px] h-[42px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1770)">
              <path
                d="M26.5552 3.79318L19.5866 5.25682L19.5544 27.9114C19.5544 32.0955 22.741 34.8 26.9736 34.8C29.3233 34.8 31.0454 34.3705 31.9949 33.8614V28.4841C31.0775 28.85 26.5713 30.1546 26.5713 25.9864V15.9318H31.9949V9.91818H26.5713L26.5552 3.79318ZM40.8947 12.0023L40.4602 9.91818H34.2802V34.2909H41.4097V17.8886C43.0996 15.6932 45.9482 16.1227 46.8655 16.4091V9.91818C45.8999 9.58409 42.5685 8.96364 40.8947 12.0023ZM55.7493 0.5L48.5714 2.01136V7.77045L55.7493 6.25909V0.5ZM7.2266 17.0932C7.2266 15.9955 8.16004 15.5659 9.65676 15.55C11.8294 15.55 14.5975 16.2023 16.7702 17.3636V10.7136C14.4044 9.79091 12.0386 9.425 9.67285 9.425C3.8791 9.425 0.0166016 12.4159 0.0166016 17.4114C0.0166016 25.2386 10.8799 23.9659 10.8799 27.3386C10.8799 28.6432 9.73723 29.0727 8.14395 29.0727C5.77816 29.0727 2.72035 28.1023 0.322383 26.8136V33.1773C2.97785 34.3068 5.66551 34.7841 8.12785 34.7841C14.0664 34.7841 18.1543 32.2705 18.1543 27.1796C18.1543 18.7636 7.2266 20.275 7.2266 17.0932ZM103.001 22.3909C103.001 15.1523 99.4599 9.44091 92.6683 9.44091C85.8768 9.44091 81.7407 15.1523 81.7407 22.3432C81.7407 30.8545 86.6171 34.7841 93.5696 34.7841C96.9815 34.7841 99.5404 34.0205 101.488 32.9545V27.6409C99.5404 28.6114 97.3033 29.2 94.4708 29.2C91.6866 29.2 89.2404 28.2295 88.9185 24.9205H102.904C102.936 24.5545 103.001 23.075 103.001 22.3909ZM88.8541 19.7182C88.8541 16.5364 90.8336 15.2 92.6201 15.2C94.3743 15.2 96.2411 16.5364 96.2411 19.7182H88.8541ZM70.6843 9.44091C67.884 9.44091 66.0815 10.7455 65.0836 11.6523L64.7135 9.90227H58.4208V42.4841L65.5665 40.9886L65.5825 33.0023C66.6125 33.75 68.1414 34.7841 70.636 34.7841C75.7538 34.7841 80.421 31.0932 80.421 22.1205C80.4371 13.9114 75.7055 9.44091 70.6843 9.44091ZM68.9783 28.9296C67.3046 28.9296 66.3068 28.325 65.6147 27.5932L65.5665 17.0932C66.3068 16.2818 67.3368 15.6932 68.9783 15.6932C71.5855 15.6932 73.388 18.5886 73.388 22.2795C73.4041 26.0818 71.6338 28.9296 68.9783 28.9296ZM48.5875 34.2909H55.7654V9.91818H48.5875V34.2909Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1770">
                <rect width="103" height="42" fill="white" transform="translate(0 0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[151px] relative overflow-hidden"
        >
          <svg
            width="105"
            height="63"
            viewBox="0 0 105 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[104px] h-[62px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1773)">
              <path
                d="M29.8868 22.9882C29.7701 26.6263 31.6039 28.2373 31.6492 29.2605C31.6277 29.4687 31.5561 29.6688 31.4405 29.844C31.325 30.0192 31.1688 30.1645 30.9851 30.2676L28.9116 31.7068C28.6432 31.8933 28.3269 32.0002 27.9995 32.0152C27.9299 32.0119 26.6728 32.3091 24.6819 27.9016C23.4672 29.405 21.9218 30.6128 20.1638 31.4327C18.4058 32.2526 16.482 32.6628 14.5395 32.6319C11.9022 32.7749 4.75504 31.1478 5.12277 23.6034C4.8652 17.4548 10.6403 13.6352 16.613 13.9581C17.7631 13.9613 20.1121 14.0175 24.2251 14.9652V12.4562C24.6608 8.20619 21.8438 4.90862 16.9661 5.40334C16.5773 5.40494 13.8235 5.32303 9.54034 7.02723C8.34806 7.57013 8.19579 7.48018 7.79891 7.48018C6.59853 7.48018 7.09261 4.03002 7.32264 3.59313C8.16663 2.56515 13.1317 0.645723 18.0045 0.673028C21.2626 0.387326 24.5032 1.38434 27.0259 3.44857C28.0514 4.58591 28.8338 5.91753 29.3257 7.36301C29.8177 8.8085 30.0091 10.3379 29.8884 11.8587L29.8868 22.9882ZM15.8873 28.1907C21.1407 28.1153 23.3649 24.9831 23.8719 23.2966C24.2704 21.6824 24.204 20.6608 24.204 18.8956C22.6375 18.5229 20.3826 18.1166 17.7955 18.1133C15.3413 17.9302 10.859 19.0176 11.0339 23.295C10.833 25.9918 12.8353 28.3385 15.8873 28.1907ZM43.5752 31.8931C42.302 32.0087 41.7091 31.1125 41.5211 30.2274L33.4539 3.78106C33.2967 3.33453 33.193 2.87355 33.1428 2.40292C33.1131 2.2089 33.1622 2.01109 33.2795 1.85298C33.3967 1.69486 33.5725 1.58936 33.7681 1.55966C33.807 1.55323 33.4231 1.55966 37.3725 1.55966C38.7948 1.41831 39.2581 2.52821 39.4055 3.22531L45.1919 25.8457L50.5636 3.22531C50.6495 2.70811 51.0399 1.44723 52.6372 1.58054H55.417C55.7685 1.55163 57.2167 1.50023 57.4711 3.24619L62.8849 26.1557L68.8576 3.24619C68.9353 2.89603 69.2982 1.41992 70.9117 1.58054H74.1062C74.2439 1.55966 75.1024 1.45044 74.9567 2.95868C74.887 3.25583 75.5091 1.24645 66.4115 30.2483C66.2252 31.1333 65.6307 32.0296 64.3574 31.914H61.3297C59.5575 32.0987 59.3032 30.3624 59.2757 30.1873L53.9039 8.16121L48.5938 30.1648C48.5679 30.3399 48.3135 32.0762 46.5397 31.8915H43.5752V31.8931ZM87.8773 32.7974C86.9248 32.799 82.3824 32.7492 78.5853 30.8233C78.2071 30.6645 77.8849 30.398 77.6597 30.0574C77.4344 29.7168 77.3163 29.3176 77.3201 28.9103V27.1837C77.3201 25.8264 78.3245 26.0754 78.7505 26.2376C80.377 26.8897 81.4202 27.3844 83.4176 27.7796C89.3547 28.989 91.966 27.4101 92.6059 27.06C94.7361 25.8055 94.9046 22.9352 93.4563 21.4462C91.7587 20.0344 90.9487 19.9814 84.8496 18.0732C84.098 17.866 77.7705 15.8871 77.7559 9.66303C77.6571 5.12707 81.8139 0.639297 89.0177 0.67624C91.0702 0.674634 96.5391 1.33961 98.0197 3.18515C98.2384 3.52085 98.3469 3.91598 98.3307 4.31593V5.93982C98.3307 6.65298 98.0683 7.00956 97.5418 7.00956C96.2929 6.87142 94.0768 5.21541 89.5782 5.28287C88.4621 5.22505 83.1163 5.42904 83.356 9.2936C83.2864 12.339 87.6667 13.481 88.1672 13.6127C94.0735 15.3747 96.0482 15.6671 98.3923 18.3639C101.169 21.9377 99.6721 26.1219 99.097 27.2688C96.0061 33.2905 88.0134 32.8006 87.8773 32.7974ZM94.3894 49.6402C83.045 57.9475 66.5767 62.3695 52.5157 62.3695C33.543 62.4935 15.2098 55.5763 1.1199 42.9776C0.0620835 42.0315 0.995168 40.7353 2.2814 41.4565C17.9113 50.3215 35.6076 54.9794 53.614 54.968C67.0607 54.8965 80.3606 52.1918 92.75 47.0092C94.6583 46.2061 96.2767 48.262 94.3894 49.6402ZM99.118 44.2931C97.6666 42.4427 89.515 43.4289 85.8653 43.861C84.7654 43.9847 84.5791 43.0386 85.5753 42.3399C92.0664 37.8152 102.727 39.1114 103.952 40.6325C105.175 42.1536 103.62 52.745 97.5434 57.8046C96.6104 58.5868 95.7178 58.174 96.1325 57.146C97.4997 53.7328 100.569 46.1451 99.118 44.2931Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1773">
                <rect width="104" height="62" fill="white" transform="translate(0.5 0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[151px] relative overflow-hidden"
        >
          <svg
            width="77"
            height="73"
            viewBox="0 0 77 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[76px] h-[72px] relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_232_1776)">
              <path
                d="M67.926 28.1617C65.531 28.1617 63.4234 29.1559 61.8747 30.7113C56.1747 26.7505 48.4949 24.2009 39.9848 23.9283L44.4075 3.9158L58.4898 7.09085C58.4898 10.5546 61.2999 13.3768 64.7486 13.3768C68.2613 13.3768 71.0873 10.4744 71.0873 7.01068C71.0873 3.54698 68.2772 0.644531 64.7486 0.644531C62.2898 0.644531 60.1663 2.13585 59.1125 4.17237L43.5613 0.708674C42.7789 0.500211 42.0125 1.06146 41.805 1.8472L36.9512 23.9122C28.505 24.265 20.905 26.8147 15.189 30.7755C13.6403 29.1559 11.4529 28.1617 9.0579 28.1617C0.18059 28.1617 -2.72529 40.1243 5.4016 44.2133C5.1142 45.4802 4.98647 46.8271 4.98647 48.1741C4.98647 61.612 20.0587 72.5002 38.5638 72.5002C57.1487 72.5002 72.2209 61.612 72.2209 48.1741C72.2209 46.8271 72.0772 45.416 71.726 44.1492C79.6932 40.0441 76.7554 28.1617 67.926 28.1617ZM18.2865 45.0632C18.2865 41.5354 21.0966 38.6971 24.6251 38.6971C28.0739 38.6971 30.884 41.5194 30.884 45.0632C30.884 48.5269 28.0739 51.3492 24.6251 51.3492C21.1125 51.3652 18.2865 48.5269 18.2865 45.0632ZM52.5024 60.0565C46.6907 65.8935 30.2932 65.8935 24.4814 60.0565C23.8428 59.4953 23.8428 58.5011 24.4814 57.8597C25.0403 57.2984 26.0302 57.2984 26.589 57.8597C31.0276 62.4298 45.7487 62.51 50.3789 57.8597C50.9377 57.2984 51.9276 57.2984 52.4865 57.8597C53.1411 58.5011 53.1411 59.4953 52.5024 60.0565ZM52.3747 51.3652C48.926 51.3652 46.1159 48.543 46.1159 45.0793C46.1159 41.5514 48.926 38.7131 52.3747 38.7131C55.8873 38.7131 58.7134 41.5354 58.7134 45.0793C58.6974 48.5269 55.8873 51.3652 52.3747 51.3652Z"
                fill="#737373"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_232_1776">
                <rect width="76" height="72" fill="white" transform="translate(0.5 0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1037px] relative overflow-hidden bg-white">
    <div className="flex flex-col justify-start items-center absolute left-48 top-0 gap-[50px] py-20">
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1050px] overflow-hidden py-[45px]"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[651px] overflow-hidden"
        >
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] relative overflow-hidden gap-2.5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
              Pricing FAQs
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-[552px] text-xl text-center text-neutral-500">
              <span className="flex-grow-0 flex-shrink-0 w-[552px] text-xl text-center text-neutral-500"
                >Problems trying to resolve the conflict between </span>
                <br /><span
                className="flex-grow-0 flex-shrink-0 w-[552px] text-xl text-center text-neutral-500"
                >the two major realms of classNameical physics</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[30px]">
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1056px] gap-[30px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1790)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1790">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >dolor do met sent. RELIT official consequent door ENIM </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >RELIT Mollie. Excitation venial consequent sent </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1798)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1798">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey dolor </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >do met sent. RELIT official consequent door ENIM RELIT Mollie. </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Excitation venial consequent sent nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1056px] gap-[30px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1807)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1807">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >dolor do met sent. RELIT official consequent door ENIM </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >RELIT Mollie. Excitation venial consequent sent </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1815)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1815">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey dolor </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >do met sent. RELIT official consequent door ENIM RELIT Mollie. </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Excitation venial consequent sent nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1056px] gap-[30px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[491px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1824)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1824">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey </span>
                      <br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >dolor do met sent. RELIT official consequent door ENIM </span><br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >RELIT Mollie. Excitation venial consequent sent </span><br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[535px] overflow-hidden p-[25px] rounded-[9px]"
            >
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
              >
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_232_1832)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_232_1832">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500">
                    <span className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Met minim Mollie non desert Alamo est sit cliquey dolor </span><br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >do met sent. RELIT official consequent door ENIM RELIT Mollie. </span><br /><span
                      className="flex-grow-0 flex-shrink-0 text-sm text-left text-neutral-500"
                      >Excitation venial consequent sent nostrum met.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-grow-0 flex-shrink-0 w-[552px] text-xl text-center text-neutral-500">
        Haven’t got your answer? Contact our support
      </p>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[582px] relative overflow-hidden bg-white">
    <div
      className="flex flex-col justify-start items-center w-[1050px] absolute left-[195px] top-0 overflow-hidden gap-24 py-40"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] gap-9"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[30px]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-center text-[#252b42]">
            Start your 14 days free trial
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            <span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >Met minim Mollie non desert Alamo est sit cliquey dolor </span>
              <br /><span className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500"
              >do met sent. RELIT official consequent.</span>
          </p>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[52px] relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#23a6f0]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                Try it free now
              </p>
            </div>
          </div>
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[34px] p-2.5"
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[30px] h-[24.49px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_232_1848)">
                <path
                  d="M30 2.98277C28.8766 3.48044 27.685 3.80711 26.4649 3.95191C27.7358 3.19019 28.7116 1.98398 29.1711 0.546797C27.963 1.26373 26.6412 1.76886 25.2628 2.04035C24.14 0.844219 22.5405 0.0966797 20.7702 0.0966797C17.3711 0.0966797 14.6152 2.85246 14.6152 6.25137C14.6152 6.73383 14.6696 7.20351 14.7745 7.6541C9.6593 7.39734 5.12414 4.94707 2.0884 1.22332C1.55871 2.13234 1.2552 3.18973 1.2552 4.31754C1.2552 6.45293 2.34188 8.33672 3.99328 9.44051C3.01588 9.40989 2.05998 9.14591 1.20539 8.67058C1.20504 8.69637 1.20504 8.72215 1.20504 8.74804C1.20504 11.7301 3.3266 14.2178 6.14215 14.7832C5.2358 15.0297 4.28511 15.0658 3.3627 14.8887C4.14586 17.3339 6.41895 19.1133 9.11215 19.1631C7.0057 20.8138 4.35176 21.7978 1.46824 21.7978C0.971367 21.7978 0.481523 21.7686 0 21.7118C2.72379 23.4581 5.95898 24.4771 9.43477 24.4771C20.7559 24.4771 26.9466 15.0984 26.9466 6.96515C26.9466 6.6982 26.9407 6.43277 26.9288 6.16887C28.1337 5.29779 29.1737 4.21888 30 2.98277Z"
                  fill="#55ACEE"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_232_1848">
                  <rect width="30" height="24.4922" fill="white"></rect>
                </clipPath>
              </defs></svg>
              <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_232_1850)">
                <path
                  d="M28.3443 30.0001C29.2586 30.0001 30 29.2588 30 28.3444V1.65574C30 0.741211 29.2586 0 28.3443 0H1.65574C0.741094 0 0 0.741211 0 1.65574V28.3444C0 29.2588 0.741094 30.0001 1.65574 30.0001H28.3443Z"
                  fill="#395185"
                ></path>
                <path
                  d="M20.6993 30.0003V18.3827H24.5989L25.1828 13.8552H20.6993V10.9644C20.6993 9.65351 21.0634 8.76019 22.9432 8.76019L25.3407 8.75914V4.70973C24.9259 4.65453 23.5028 4.53125 21.8471 4.53125C18.3903 4.53125 16.0239 6.64121 16.0239 10.5161V13.8552H12.1143V18.3827H16.0239V30.0003H20.6993Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_232_1850">
                  <rect width="30" height="30.0001" fill="white"></rect>
                </clipPath>
              </defs></svg>
              <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_232_1853)">
                <path
                  d="M14.9998 7.30838C10.7435 7.30838 7.30854 10.7434 7.30854 14.9996C7.30854 19.2559 10.7435 22.6909 14.9998 22.6909C19.2561 22.6909 22.6911 19.2559 22.6911 14.9996C22.6911 10.7434 19.2561 7.30838 14.9998 7.30838ZM14.9998 19.9984C12.2473 19.9984 10.001 17.7521 10.001 14.9996C10.001 12.2471 12.2473 10.0009 14.9998 10.0009C17.7523 10.0009 19.9986 12.2471 19.9986 14.9996C19.9986 17.7521 17.7523 19.9984 14.9998 19.9984ZM23.0061 5.20088C22.0123 5.20088 21.2098 6.00338 21.2098 6.99713C21.2098 7.99088 22.0123 8.79338 23.0061 8.79338C23.9998 8.79338 24.8023 7.99463 24.8023 6.99713C24.8026 6.76116 24.7563 6.52745 24.6662 6.30939C24.576 6.09132 24.4437 5.89319 24.2769 5.72633C24.11 5.55947 23.9119 5.42718 23.6938 5.33701C23.4757 5.24684 23.242 5.20059 23.0061 5.20088ZM29.9923 14.9996C29.9923 12.9296 30.0111 10.8784 29.8948 8.81213C29.7786 6.41213 29.2311 4.28213 27.4761 2.52713C25.7173 0.768381 23.5911 0.224631 21.1911 0.108381C19.1211 -0.00786902 17.0698 0.010881 15.0035 0.010881C12.9335 0.010881 10.8823 -0.00786902 8.81604 0.108381C6.41604 0.224631 4.28604 0.772131 2.53104 2.52713C0.772288 4.28588 0.228537 6.41213 0.112287 8.81213C-0.00396278 10.8821 0.0147873 12.9334 0.0147873 14.9996C0.0147873 17.0659 -0.00396278 19.1209 0.112287 21.1871C0.228537 23.5871 0.776038 25.7171 2.53104 27.4721C4.28979 29.2309 6.41604 29.7746 8.81604 29.8909C10.886 30.0071 12.9373 29.9884 15.0035 29.9884C17.0735 29.9884 19.1248 30.0071 21.1911 29.8909C23.5911 29.7746 25.7211 29.2271 27.4761 27.4721C29.2348 25.7134 29.7786 23.5871 29.8948 21.1871C30.0148 19.1209 29.9923 17.0696 29.9923 14.9996ZM26.6923 23.8421C26.4186 24.5246 26.0886 25.0346 25.5598 25.5596C25.0311 26.0884 24.5248 26.4184 23.8423 26.6921C21.8698 27.4759 17.1861 27.2996 14.9998 27.2996C12.8135 27.2996 8.12604 27.4759 6.15354 26.6959C5.47104 26.4221 4.96104 26.0921 4.43604 25.5634C3.90729 25.0346 3.57729 24.5284 3.30354 23.8459C2.52354 21.8696 2.69979 17.1859 2.69979 14.9996C2.69979 12.8134 2.52354 8.12588 3.30354 6.15338C3.57729 5.47088 3.90729 4.96088 4.43604 4.43588C4.96479 3.91088 5.47104 3.57713 6.15354 3.30338C8.12604 2.52338 12.8135 2.69963 14.9998 2.69963C17.1861 2.69963 21.8736 2.52338 23.8461 3.30338C24.5286 3.57713 25.0386 3.90713 25.5636 4.43588C26.0923 4.96463 26.4223 5.47088 26.6961 6.15338C27.4761 8.12588 27.2998 12.8134 27.2998 14.9996C27.2998 17.1859 27.4761 21.8696 26.6923 23.8421Z"
                  fill="black"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_232_1853">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs></svg>
              <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[30px] h-[29.88px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clipPath="url(#clip0_232_1855)">
                <path
                  d="M25.5782 25.4624H21.1504V18.5282C21.1504 16.8747 21.1209 14.7461 18.8475 14.7461C16.5414 14.7461 16.1885 16.5477 16.1885 18.4078V25.4619H11.7609V11.2024H16.0114V13.1512H16.071C16.4963 12.4238 17.111 11.8254 17.8496 11.4198C18.5881 11.0142 19.4229 10.8165 20.2649 10.8477C24.7526 10.8477 25.58 13.7996 25.58 17.6398L25.5782 25.4624ZM6.76477 9.25338C5.34567 9.25361 4.19504 8.10334 4.19481 6.68423C4.19458 5.26513 5.34473 4.11451 6.76384 4.11427C8.18294 4.11392 9.33356 5.26419 9.3338 6.6833C9.33392 7.36478 9.06333 8.0184 8.58155 8.50038C8.09977 8.98236 7.44625 9.25322 6.76477 9.25338ZM8.9787 25.4625H4.54629V11.2024H8.97858V25.4624L8.9787 25.4625ZM27.7856 0.00217493H2.32139C1.11788 -0.0113659 0.130919 0.952719 0.116211 2.15622V27.7266C0.130452 28.9307 1.1173 29.8957 2.32127 29.8831H27.7856C28.9921 29.898 29.9828 28.933 29.9995 27.7266V2.15424C29.9823 0.9484 28.9915 -0.0155683 27.7856 0.000190493"
                  fill="#0A66C2"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_232_1855">
                  <rect width="30" height="29.8833" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[488px] relative overflow-hidden bg-white">
    <div className="w-[1440px] h-[142px] absolute left-0 top-0 overflow-hidden">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-10"
      >
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[577.5px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[236px] relative overflow-hidden gap-2.5"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[187px] h-[58px] relative overflow-hidden">
              <p className="absolute left-0 top-[13px] text-2xl font-bold text-left text-[#252b42]">
                Bandage
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[236px] overflow-hidden"
          >
            <div
              className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_232_1866)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_232_1866">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs></svg>
                <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_232_1869)">
                  <path
                    d="M13 1C10.0149 1 9.6395 1.01375 8.46663 1.066C7.29375 1.121 6.49487 1.30525 5.795 1.5775C5.06088 1.85363 4.39593 2.28676 3.84663 2.84663C3.2871 3.39621 2.85402 4.06108 2.5775 4.795C2.30525 5.4935 2.11963 6.29375 2.066 7.4625C2.01375 8.63812 2 9.01213 2 12.0014C2 14.9879 2.01375 15.3619 2.066 16.5347C2.121 17.7063 2.30525 18.5051 2.5775 19.205C2.85938 19.9282 3.23475 20.5415 3.84663 21.1534C4.45713 21.7652 5.07037 22.142 5.79363 22.4225C6.49487 22.6947 7.29238 22.8804 8.46388 22.934C9.63813 22.9862 10.0121 23 13 23C15.9879 23 16.3605 22.9862 17.5347 22.934C18.7049 22.879 19.5065 22.6947 20.2064 22.4225C20.94 22.1462 21.6045 21.7131 22.1534 21.1534C22.7652 20.5415 23.1406 19.9282 23.4225 19.205C23.6934 18.5051 23.879 17.7063 23.934 16.5347C23.9862 15.3619 24 14.9879 24 12C24 9.01213 23.9862 8.63813 23.934 7.46388C23.879 6.29375 23.6934 5.4935 23.4225 4.795C23.146 4.06106 22.7129 3.39618 22.1534 2.84663C21.6042 2.28655 20.9392 1.85339 20.205 1.5775C19.5037 1.30525 18.7035 1.11963 17.5334 1.066C16.3591 1.01375 15.9865 1 12.9973 1H13.0014H13ZM12.0141 2.98275H13.0014C15.9384 2.98275 16.2863 2.99238 17.4454 3.046C18.5179 3.09413 19.1009 3.27425 19.4886 3.42412C20.0015 3.6235 20.3686 3.86275 20.7536 4.24775C21.1386 4.63275 21.3765 4.9985 21.5759 5.51275C21.7271 5.89913 21.9059 6.48213 21.954 7.55463C22.0076 8.71375 22.0186 9.06163 22.0186 11.9973C22.0186 14.9329 22.0076 15.2821 21.954 16.4412C21.9059 17.5138 21.7257 18.0954 21.5759 18.4831C21.3995 18.9607 21.118 19.3926 20.7522 19.7467C20.3672 20.1318 20.0015 20.3696 19.4873 20.569C19.1023 20.7203 18.5192 20.899 17.4454 20.9485C16.2863 21.0007 15.9384 21.0131 13.0014 21.0131C10.0644 21.0131 9.71513 21.0007 8.556 20.9485C7.4835 20.899 6.90188 20.7203 6.51412 20.569C6.03631 20.3929 5.60405 20.1119 5.24913 19.7467C4.88303 19.392 4.60112 18.9598 4.42412 18.4818C4.27425 18.0954 4.09413 17.5124 4.046 16.4399C3.99375 15.2808 3.98275 14.9329 3.98275 11.9945C3.98275 9.0575 3.99375 8.711 4.046 7.55187C4.0955 6.47937 4.27425 5.89638 4.4255 5.50863C4.62488 4.99575 4.86412 4.62862 5.24913 4.24362C5.63412 3.85862 5.99988 3.62075 6.51412 3.42138C6.90188 3.27013 7.4835 3.09138 8.556 3.04188C9.57075 2.99513 9.964 2.98138 12.0141 2.98V2.98275ZM18.8726 4.80875C18.6993 4.80875 18.5276 4.84289 18.3675 4.90923C18.2073 4.97557 18.0618 5.0728 17.9392 5.19537C17.8167 5.31794 17.7194 5.46346 17.6531 5.62361C17.5868 5.78376 17.5526 5.95541 17.5526 6.12875C17.5526 6.30209 17.5868 6.47374 17.6531 6.63389C17.7194 6.79404 17.8167 6.93956 17.9392 7.06213C18.0618 7.1847 18.2073 7.28193 18.3675 7.34827C18.5276 7.41461 18.6993 7.44875 18.8726 7.44875C19.2227 7.44875 19.5585 7.30968 19.806 7.06213C20.0536 6.81458 20.1926 6.47884 20.1926 6.12875C20.1926 5.77866 20.0536 5.44292 19.806 5.19537C19.5585 4.94782 19.2227 4.80875 18.8726 4.80875ZM13.0014 6.3515C12.2521 6.33981 11.508 6.47729 10.8123 6.75594C10.1167 7.0346 9.48346 7.44885 8.94946 7.97458C8.41546 8.50032 7.99138 9.12703 7.70191 9.81823C7.41244 10.5094 7.26336 11.2513 7.26336 12.0007C7.26336 12.7501 7.41244 13.4919 7.70191 14.1831C7.99138 14.8743 8.41546 15.5011 8.94946 16.0268C9.48346 16.5525 10.1167 16.9668 10.8123 17.2454C11.508 17.5241 12.2521 17.6616 13.0014 17.6499C14.4844 17.6267 15.8988 17.0214 16.9393 15.9645C17.9799 14.9076 18.5631 13.4839 18.5631 12.0007C18.5631 10.5175 17.9799 9.09382 16.9393 8.03691C15.8988 6.97999 14.4844 6.37464 13.0014 6.3515ZM13.0014 8.33288C13.974 8.33288 14.9067 8.71923 15.5944 9.40695C16.2821 10.0947 16.6685 11.0274 16.6685 12C16.6685 12.9726 16.2821 13.9053 15.5944 14.593C14.9067 15.2808 13.974 15.6671 13.0014 15.6671C12.0288 15.6671 11.096 15.2808 10.4083 14.593C9.72061 13.9053 9.33425 12.9726 9.33425 12C9.33425 11.0274 9.72061 10.0947 10.4083 9.40695C11.096 8.71923 12.0288 8.33288 13.0014 8.33288Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_232_1869">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs></svg>
                <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-[19.76px] relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_232_1872)">
                  <path
                    d="M8.91075 19C17.213 19 21.7546 12.0731 21.7546 6.07669C21.7546 5.88285 21.7546 5.68625 21.7464 5.49241C22.6306 4.84789 23.3937 4.04993 24 3.13592C23.1741 3.50262 22.2988 3.7443 21.4026 3.85312C22.3466 3.28495 23.0536 2.391 23.3923 1.3374C22.5054 1.86647 21.5346 2.23787 20.5226 2.43534C19.8423 1.70572 18.9419 1.22237 17.9611 1.06016C16.9803 0.897946 15.9737 1.06592 15.0973 1.53807C14.2209 2.01023 13.5236 2.7602 13.1134 3.67182C12.7031 4.58345 12.6029 5.60585 12.8281 6.58066C11.0334 6.49005 9.27762 6.02057 7.67468 5.20269C6.07175 4.3848 4.65744 3.23678 3.5235 1.83307C2.94784 2.83421 2.77216 4.01843 3.03214 5.14526C3.29211 6.27209 3.96825 7.25705 4.92325 7.90013C4.20762 7.87565 3.50772 7.68215 2.88 7.33524V7.39754C2.88123 8.44631 3.24205 9.46247 3.90145 10.2743C4.56086 11.0861 5.4784 11.6438 6.499 11.853C6.11161 11.9605 5.71144 12.014 5.30963 12.0122C5.02635 12.0131 4.74365 11.9867 4.46537 11.9333C4.75383 12.8361 5.3155 13.6254 6.07171 14.1908C6.82793 14.7561 7.74081 15.0691 8.6825 15.0859C7.08276 16.3511 5.10668 17.0373 3.0725 17.034C2.71407 17.0355 2.35588 17.0147 2 16.9716C4.06458 18.297 6.46228 19.0008 8.91075 19Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_232_1872">
                    <rect
                      width="24"
                      height="19.7647"
                      fill="white"
                      transform="translate(0.5 0.117188)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
      width="1057"
      height="1"
      viewBox="0 0 1057 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[194px] top-[137px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2="1057" y2="0.5" stroke="#E6E6E6"></line>
    </svg>
    <div className="w-[1440px] h-[272px] absolute left-0 top-[142px] overflow-hidden bg-white">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-[50px]"
      >
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[148px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Company Info
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                About Us
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Carrier
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                We are hiring
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Blog
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[152px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Legal
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                About Us
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Carrier
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                We are hiring
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Blog
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[148px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Features
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Business Marketing
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                User Analytic
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Live Chat
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Unlimited Support
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[152px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Resources
            </p>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                IOS &#x26; Android
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Watch a Demo
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Customers
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                API
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[321px] relative overflow-hidden gap-5"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#252b42]">
              Get In Touch
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-[321px] h-[87px] relative">
              <div className="w-[321px] h-[58px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="w-[321px] h-[58px] absolute left-0 top-0 overflow-hidden rounded-[5px] bg-[#f9f9f9] border border-[#e6e6e6]"
                >
                  <p className="absolute left-5 top-[15px] text-sm text-left text-neutral-500">
                    Your Email
                  </p>
                </div>
                <div className="w-[117px] h-[58px] absolute left-[204px] top-0 overflow-hidden">
                  <div
                    className="w-[117px] h-[58px] absolute left-0 top-0 overflow-hidden rounded-tr-[5px] rounded-br-[5px] bg-[#23a6f0] border border-[#e6e6e6]"
                  >
                    <p className="absolute left-[22.5px] top-[15px] text-sm text-center text-white">
                      Subscribe
                    </p>
                  </div>
                </div>
              </div>
              <p className="absolute left-0.5 top-[59px] text-xs text-left text-neutral-500">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[1440px] h-[74px] absolute left-0 top-[414px] overflow-hidden bg-neutral-50">
      <div
        className="flex flex-col justify-start items-start w-[1050px] absolute left-[195px] top-0 overflow-hidden py-[25px]"
      >
        <div
          className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[213px]"
        >
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[600px] relative overflow-hidden"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page