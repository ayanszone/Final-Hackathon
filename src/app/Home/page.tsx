import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Pagiination from "../../../components/Pagiination"


const page = async () => {
  return (
    <div className="flex flex-col justify-start items-start relative overflow-hidden bg-white">
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[852px] relative overflow-hidden bg-neutral-50"
  >
    <div className="w-[1440px] h-[747px] absolute left-0 top-0 overflow-hidden">
      <Image
        width={1440}
        height={747}
        alt='Image'
        src="/hero-cover.2.jpeg"
        className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
      />
      <div className="w-[1440px] h-[747px] absolute left-0 top-0 overflow-hidden bg-black/50"></div>
    </div>
    <div className="w-[1439px] h-[136px] absolute left-0 top-0 overflow-hidden bg-white">
      <div className="w-[1439px] h-[58px] absolute left-0 top-0 overflow-hidden bg-[#252b42]">
        <div className="w-[1438px] h-[46px] absolute left-0.5 top-[9px] overflow-hidden">
          <div
            className="flex justify-between items-start w-[1438px] absolute left-0 top-0 overflow-hidden"
          >
            <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[1438px] px-6">
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[46px] overflow-hidden gap-2.5"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px] p-2.5 rounded-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_4932)">
                      <path
                        d="M3.65447 1.32829C3.59544 1.25236 3.52092 1.18985 3.43587 1.14492C3.35082 1.09999 3.25719 1.07368 3.16119 1.06772C3.06519 1.06176 2.96902 1.07629 2.87907 1.11036C2.78912 1.14442 2.70744 1.19724 2.63947 1.26529L1.60547 2.30029C1.12247 2.78429 0.944471 3.4693 1.15547 4.0703C2.03121 6.55788 3.45577 8.81639 5.32347 10.6783C7.1854 12.546 9.4439 13.9705 11.9315 14.8463C12.5325 15.0573 13.2175 14.8793 13.7015 14.3963L14.7355 13.3623C14.8035 13.2943 14.8563 13.2127 14.8904 13.1227C14.9245 13.0327 14.939 12.9366 14.933 12.8406C14.9271 12.7446 14.9008 12.6509 14.8558 12.5659C14.8109 12.4808 14.7484 12.4063 14.6725 12.3473L12.3655 10.5533C12.2843 10.4904 12.19 10.4467 12.0895 10.4256C11.989 10.4044 11.8851 10.4064 11.7855 10.4313L9.59547 10.9783C9.30315 11.0514 8.99689 11.0475 8.70652 10.967C8.41614 10.8866 8.15154 10.7324 7.93847 10.5193L5.48247 8.06229C5.26924 7.84933 5.1148 7.58478 5.03418 7.29439C4.95357 7.00401 4.94954 6.6977 5.02247 6.4053L5.57047 4.2153C5.59538 4.11569 5.59734 4.01173 5.57621 3.91126C5.55507 3.81079 5.51139 3.71642 5.44847 3.63529L3.65447 1.32829ZM1.88447 0.511295C2.05947 0.336244 2.2697 0.200425 2.50121 0.112856C2.73272 0.0252871 2.98021 -0.0120282 3.22725 0.00338804C3.47429 0.0188043 3.71522 0.0865995 3.93405 0.202272C4.15288 0.317944 4.3446 0.478846 4.49647 0.674295L6.29047 2.98029C6.61947 3.4033 6.73547 3.9543 6.60547 4.4743L6.05847 6.6643C6.03019 6.77772 6.03172 6.89654 6.06291 7.0092C6.0941 7.12187 6.15388 7.22456 6.23647 7.3073L8.69347 9.76429C8.77631 9.84705 8.87916 9.90694 8.99202 9.93813C9.10488 9.96933 9.22389 9.97076 9.33747 9.9423L11.5265 9.3953C11.7831 9.33113 12.0509 9.32615 12.3098 9.38072C12.5686 9.43529 12.8116 9.54799 13.0205 9.71029L15.3265 11.5043C16.1555 12.1493 16.2315 13.3743 15.4895 14.1153L14.4555 15.1493C13.7155 15.8893 12.6095 16.2143 11.5785 15.8513C8.93965 14.9228 6.54374 13.4121 4.56847 11.4313C2.58776 9.45631 1.07708 7.06075 0.148471 4.4223C-0.213529 3.3923 0.111471 2.2853 0.851471 1.54529L1.88547 0.511295H1.88447Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4932">
                        <rect width="16.0005" height="16.0004" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                    (225) 555-0118
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px] p-2.5 rounded-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_4936)">
                      <path
                        d="M-0.499512 4C-0.499512 3.46957 -0.288798 2.96086 0.0862747 2.58579C0.461347 2.21071 0.970055 2 1.50049 2H13.5005C14.0309 2 14.5396 2.21071 14.9147 2.58579C15.2898 2.96086 15.5005 3.46957 15.5005 4V12C15.5005 12.5304 15.2898 13.0391 14.9147 13.4142C14.5396 13.7893 14.0309 14 13.5005 14H1.50049C0.970055 14 0.461347 13.7893 0.0862747 13.4142C-0.288798 13.0391 -0.499512 12.5304 -0.499512 12V4ZM1.50049 3C1.23527 3 0.980918 3.10536 0.793381 3.29289C0.605845 3.48043 0.500488 3.73478 0.500488 4V4.217L7.50049 8.417L14.5005 4.217V4C14.5005 3.73478 14.3951 3.48043 14.2076 3.29289C14.0201 3.10536 13.7657 3 13.5005 3H1.50049ZM14.5005 5.383L9.74249 8.238L14.5005 11.114V5.384V5.383ZM14.4665 12.261L8.77149 8.82L7.50049 9.583L6.22849 8.82L0.534488 12.26C0.591686 12.4724 0.717337 12.6601 0.891976 12.7938C1.06662 12.9276 1.2805 13.0001 1.50049 13H13.5005C13.7203 13.0001 13.9341 12.9278 14.1088 12.7942C14.2834 12.6607 14.4091 12.4732 14.4665 12.261ZM0.500488 11.114L5.25849 8.238L0.500488 5.383V11.113V11.114Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4936">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000488281)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                    michelle.rivera@example.com
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                  Follow Us and get a chance to win 80% off
                </p>
              </div>
              <div
                className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[46px] relative overflow-hidden gap-2.5 p-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                  Follow Us :
                </p>
                <div className="flex-grow-0 flex-shrink-0 w-[120px] h-[26px] relative overflow-hidden">
                  <div className="flex justify-start items-start absolute left-0 top-0 gap-2.5 p-[5px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[31.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4948)">
                        <path
                          d="M9.051 1.99902H9.14C9.962 2.00202 14.127 2.03202 15.25 2.33402C15.5895 2.42619 15.8989 2.60585 16.1472 2.85503C16.3955 3.10422 16.574 3.41421 16.665 3.75402C16.766 4.13402 16.837 4.63702 16.885 5.15602L16.895 5.26002L16.917 5.52002L16.925 5.62402C16.99 6.53802 16.998 7.39402 16.999 7.58102V7.65602C16.998 7.85002 16.989 8.76402 16.917 9.71602L16.909 9.82102L16.9 9.92502C16.85 10.497 16.776 11.065 16.665 11.483C16.5743 11.823 16.3958 12.1331 16.1475 12.3823C15.8991 12.6316 15.5896 12.8111 15.25 12.903C14.09 13.215 9.681 13.237 9.07 13.238H8.928C8.619 13.238 7.341 13.232 6.001 13.186L5.831 13.18L5.744 13.176L5.573 13.169L5.402 13.162C4.292 13.113 3.235 13.034 2.748 12.902C2.40849 12.8102 2.09907 12.6308 1.85072 12.3818C1.60238 12.1327 1.42385 11.8228 1.333 11.483C1.222 11.066 1.148 10.497 1.098 9.92502L1.09 9.82002L1.082 9.71602C1.03265 9.03842 1.0053 8.3594 1 7.68002L1 7.55702C1.002 7.34202 1.01 6.59902 1.064 5.77902L1.071 5.67602L1.074 5.62402L1.082 5.52002L1.104 5.26002L1.114 5.15602C1.162 4.63702 1.233 4.13302 1.334 3.75402C1.42469 3.41407 1.60316 3.10393 1.85151 2.85471C2.09986 2.60548 2.40937 2.42592 2.749 2.33402C3.236 2.20402 4.293 2.12402 5.403 2.07402L5.573 2.06702L5.745 2.06102L5.831 2.05802L6.002 2.05102C6.95371 2.0204 7.90581 2.0034 8.858 2.00002H9.051V1.99902ZM7.4 5.20902V10.027L11.557 7.61902L7.4 5.20902Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4948">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[61.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4951)">
                        <path
                          d="M16.002 8.05C16.002 3.604 12.42 0 8.002 0C3.582 0.001 0 3.604 0 8.051C0 12.068 2.926 15.398 6.75 16.002V10.377H4.72V8.051H6.752V6.276C6.752 4.259 7.947 3.145 9.774 3.145C10.65 3.145 11.565 3.302 11.565 3.302V5.282H10.556C9.563 5.282 9.253 5.903 9.253 6.54V8.05H11.471L11.117 10.376H9.252V16.001C13.076 15.397 16.002 12.067 16.002 8.05Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4951">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="flex justify-start items-start absolute left-[93.5px] top-0 gap-2.5 p-[5px]"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clipPath="url(#clip0_1_4954)">
                        <path
                          d="M5.026 14.0007C11.064 14.0007 14.367 8.99769 14.367 4.66669C14.367 4.52669 14.367 4.38469 14.361 4.24469C15.0041 3.77918 15.5591 3.20284 16 2.54269C15.3993 2.80754 14.7628 2.9821 14.111 3.06069C14.7975 2.65033 15.3117 2.00466 15.558 1.24369C14.913 1.62582 14.207 1.89407 13.471 2.03669C12.9762 1.50972 12.3214 1.16061 11.6081 1.04345C10.8948 0.92629 10.1627 1.04761 9.52534 1.38863C8.88796 1.72965 8.38081 2.27132 8.08245 2.92975C7.78409 3.58818 7.71118 4.32663 7.875 5.03069C6.56974 4.96524 5.29282 4.62616 4.12704 4.03544C2.96127 3.44471 1.93268 2.61554 1.108 1.60169C0.68934 2.32478 0.561574 3.18009 0.750646 3.99396C0.939718 4.80782 1.43145 5.51922 2.126 5.98369C1.60554 5.96601 1.09652 5.82625 0.64 5.57569V5.62069C0.640897 6.37817 0.903307 7.11211 1.38287 7.69845C1.86244 8.28479 2.52975 8.68757 3.272 8.83869C2.99026 8.91631 2.69923 8.955 2.407 8.95369C2.20098 8.95432 1.99538 8.93523 1.793 8.89669C2.00279 9.54875 2.41127 10.1189 2.96125 10.5272C3.51122 10.9355 4.17513 11.1615 4.86 11.1737C3.69656 12.0875 2.2594 12.5831 0.78 12.5807C0.519321 12.5818 0.258823 12.5668 0 12.5357C1.50151 13.493 3.2453 14.0012 5.026 14.0007Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_4954">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1437px] h-[58px] absolute left-0 top-[70px] overflow-hidden">
        <div className="w-[187px] h-[58px] absolute left-[38px] top-0 overflow-hidden">
          <p className="absolute left-0 top-[13px] text-2xl font-bold text-left text-[#252b42]">
            Bandage
          </p>
        </div>
        <div className="w-[1155px] h-[58px] absolute left-[265px] top-0 overflow-hidden">
          <div
            className="flex justify-start items-start absolute left-0 top-[16.5px] overflow-hidden gap-[15px]"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[43px] h-6 relative overflow-hidden">
              <div className="w-[43px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="Home"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Home
                </p></Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
            >
              <div className="flex-grow-0 flex-shrink-0 w-[63px] h-[25px] relative overflow-hidden">
                <Link href="Products"><p
                  className="absolute left-1.5 top-[-1px] text-sm font-medium text-left text-[#252b42]"
                >
                  Shop
                </p></Link>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[62px] top-[9px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
                    fill="#252B42"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[45px] h-6 relative overflow-hidden">
              <div className="w-[45px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="About"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  About
                </p></Link>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[33px] h-6 relative overflow-hidden">
              <div className="w-[33px] h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="DesktopPricing"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Prices
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
            <div className="flex-grow-0 flex-shrink-0 w-11 h-6 relative overflow-hidden">
              <div className="w-11 h-6 absolute left-0 top-0 overflow-hidden">
                <Link href="DesktopTeam"><p className="absolute left-0 top-0 text-sm font-bold text-center text-neutral-500">
                  Pages
                </p></Link>
              </div>
            </div>
          </div>
          <div
            className="flex justify-start items-center absolute left-[832px] top-0.5 overflow-hidden"
          >
            <div className="flex-grow-0 flex-shrink-0 w-[166px] h-[54px] relative overflow-hidden">
              <div className="w-[166px] h-[54px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5027)">
                      <path
                        d="M5.99976 6C6.79541 6 7.55847 5.68393 8.12108 5.12132C8.68369 4.55871 8.99976 3.79565 8.99976 3C8.99976 2.20435 8.68369 1.44129 8.12108 0.87868C7.55847 0.316071 6.79541 0 5.99976 0C5.20411 0 4.44104 0.316071 3.87844 0.87868C3.31583 1.44129 2.99976 2.20435 2.99976 3C2.99976 3.79565 3.31583 4.55871 3.87844 5.12132C4.44104 5.68393 5.20411 6 5.99976 6ZM7.99976 3C7.99976 3.53043 7.78904 4.03914 7.41397 4.41421C7.0389 4.78929 6.53019 5 5.99976 5C5.46932 5 4.96062 4.78929 4.58554 4.41421C4.21047 4.03914 3.99976 3.53043 3.99976 3C3.99976 2.46957 4.21047 1.96086 4.58554 1.58579C4.96062 1.21071 5.46932 1 5.99976 1C6.53019 1 7.0389 1.21071 7.41397 1.58579C7.78904 1.96086 7.99976 2.46957 7.99976 3ZM11.9998 11C11.9998 12 10.9998 12 10.9998 12H0.999756C0.999756 12 -0.000244141 12 -0.000244141 11C-0.000244141 10 0.999756 7 5.99976 7C10.9998 7 11.9998 10 11.9998 11ZM10.9998 10.996C10.9988 10.75 10.8458 10.01 10.1678 9.332C9.51576 8.68 8.28876 8 5.99976 8C3.70976 8 2.48376 8.68 1.83176 9.332C1.15376 10.01 1.00176 10.75 0.999756 10.996H10.9998Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5027">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(-0.000244141)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#23a6f0]">
                    Login / Register
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative overflow-hidden">
              <div className="w-[46px] h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5033)">
                      <path
                        d="M11.7427 10.3441C12.7109 9.02279 13.1446 7.38459 12.957 5.75725C12.7693 4.12991 11.9741 2.63344 10.7304 1.56723C9.48677 0.501022 7.8864 -0.0562959 6.24949 0.00677721C4.61258 0.0698504 3.05984 0.748663 1.90192 1.90741C0.744005 3.06615 0.0663042 4.61938 0.00440239 6.25633C-0.0574994 7.89329 0.500963 9.49326 1.56806 10.7361C2.63516 11.979 4.1322 12.7732 5.75967 12.9597C7.38715 13.1462 9.02503 12.7113 10.3457 11.7421H10.3447C10.3747 11.7821 10.4067 11.8201 10.4427 11.8571L14.2927 15.7071C14.4802 15.8947 14.7345 16.0002 14.9998 16.0003C15.2651 16.0004 15.5195 15.8951 15.7072 15.7076C15.8948 15.5201 16.0003 15.2657 16.0004 15.0005C16.0005 14.7352 15.8952 14.4807 15.7077 14.2931L11.8577 10.4431C11.8219 10.4069 11.7835 10.3735 11.7427 10.3431V10.3441ZM12.0007 6.5001C12.0007 7.22237 11.8584 7.93757 11.582 8.60486C11.3056 9.27215 10.9005 9.87847 10.3897 10.3892C9.87902 10.8999 9.2727 11.305 8.60541 11.5814C7.93812 11.8578 7.22292 12.0001 6.50065 12.0001C5.77838 12.0001 5.06319 11.8578 4.3959 11.5814C3.7286 11.305 3.12229 10.8999 2.61157 10.3892C2.10084 9.87847 1.69572 9.27215 1.41932 8.60486C1.14292 7.93757 1.00065 7.22237 1.00065 6.5001C1.00065 5.04141 1.58012 3.64246 2.61157 2.61101C3.64302 1.57956 5.04196 1.0001 6.50065 1.0001C7.95934 1.0001 9.35829 1.57956 10.3897 2.61101C11.4212 3.64246 12.0007 5.04141 12.0007 6.5001Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5033">
                        <rect
                          width="16.0006"
                          height="16.0003"
                          fill="white"
                          transform="translate(-0.000244141)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-14 h-[46px] relative overflow-hidden">
              <div className="w-14 h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5038)">
                      <path
                        d="M0.000366211 1.5C0.000366211 1.36739 0.0530446 1.24021 0.146813 1.14645C0.240581 1.05268 0.367758 1 0.500366 1H2.00037C2.1119 1.00003 2.22022 1.03735 2.3081 1.10602C2.39598 1.1747 2.45838 1.27078 2.48537 1.379L2.89037 3H14.5004C14.5738 3.00007 14.6463 3.0163 14.7127 3.04755C14.7792 3.0788 14.8379 3.12429 14.8848 3.1808C14.9316 3.23731 14.9655 3.30345 14.9839 3.37452C15.0023 3.44558 15.0049 3.51984 14.9914 3.592L13.4914 11.592C13.4699 11.7066 13.4091 11.8101 13.3195 11.8846C13.2298 11.9591 13.1169 11.9999 13.0004 12H4.00037C3.8838 11.9999 3.77093 11.9591 3.68128 11.8846C3.59162 11.8101 3.53081 11.7066 3.50937 11.592L2.01037 3.607L1.61037 2H0.500366C0.367758 2 0.240581 1.94732 0.146813 1.85355C0.0530446 1.75979 0.000366211 1.63261 0.000366211 1.5ZM3.10237 4L4.41537 11H12.5854L13.8984 4H3.10237ZM5.00037 12C4.46993 12 3.96123 12.2107 3.58615 12.5858C3.21108 12.9609 3.00037 13.4696 3.00037 14C3.00037 14.5304 3.21108 15.0391 3.58615 15.4142C3.96123 15.7893 4.46993 16 5.00037 16C5.5308 16 6.03951 15.7893 6.41458 15.4142C6.78965 15.0391 7.00037 14.5304 7.00037 14C7.00037 13.4696 6.78965 12.9609 6.41458 12.5858C6.03951 12.2107 5.5308 12 5.00037 12ZM12.0004 12C11.4699 12 10.9612 12.2107 10.5862 12.5858C10.2111 12.9609 10.0004 13.4696 10.0004 14C10.0004 14.5304 10.2111 15.0391 10.5862 15.4142C10.9612 15.7893 11.4699 16 12.0004 16C12.5308 16 13.0395 15.7893 13.4146 15.4142C13.7897 15.0391 14.0004 14.5304 14.0004 14C14.0004 13.4696 13.7897 12.9609 13.4146 12.5858C13.0395 12.2107 12.5308 12 12.0004 12ZM5.00037 13C5.26558 13 5.51994 13.1054 5.70747 13.2929C5.89501 13.4804 6.00037 13.7348 6.00037 14C6.00037 14.2652 5.89501 14.5196 5.70747 14.7071C5.51994 14.8946 5.26558 15 5.00037 15C4.73515 15 4.4808 14.8946 4.29326 14.7071C4.10572 14.5196 4.00037 14.2652 4.00037 14C4.00037 13.7348 4.10572 13.4804 4.29326 13.2929C4.4808 13.1054 4.73515 13 5.00037 13ZM12.0004 13C12.2656 13 12.5199 13.1054 12.7075 13.2929C12.895 13.4804 13.0004 13.7348 13.0004 14C13.0004 14.2652 12.895 14.5196 12.7075 14.7071C12.5199 14.8946 12.2656 15 12.0004 15C11.7351 15 11.4808 14.8946 11.2933 14.7071C11.1057 14.5196 11.0004 14.2652 11.0004 14C11.0004 13.7348 11.1057 13.4804 11.2933 13.2929C11.4808 13.1054 11.7351 13 12.0004 13Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5038">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000366211)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#23a6f0]">1</p>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 w-14 h-[46px] relative overflow-hidden">
              <div className="w-14 h-[46px] absolute left-0 top-0 overflow-hidden">
                <div
                  className="flex justify-start items-center absolute left-0 top-0 overflow-hidden gap-[5px] p-[15px] rounded-[37px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_1_5044)">
                      <path
                        d="M8.00026 2.74805L7.28326 2.01105C5.60026 0.281049 2.51426 0.878049 1.40026 3.05305C0.877261 4.07605 0.759261 5.55305 1.71426 7.43805C2.63426 9.25305 4.54826 11.427 8.00026 13.795C11.4523 11.427 13.3653 9.25305 14.2863 7.43805C15.2413 5.55205 15.1243 4.07605 14.6003 3.05305C13.4863 0.878049 10.4003 0.280049 8.71726 2.01005L8.00026 2.74805ZM8.00026 15C-7.33274 4.86805 3.27926 -3.03995 7.82426 1.14305C7.88426 1.19805 7.94326 1.25505 8.00026 1.31405C8.05668 1.2551 8.11539 1.19839 8.17626 1.14405C12.7203 -3.04195 23.3333 4.86705 8.00026 15Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5044">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000366211)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#23a6f0]">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="w-[1439px] h-[716px] absolute left-px top-[136px] rounded-[5px] bg-white border border-[#dedede]"
    >
      <div className="w-[1439px] h-[716px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden">
        <div
  className="w-[1440px] h-[716px] absolute left-0 top-0 overflow-hidden bg-[url('/shop-hero-1-product-slide-1.jpeg')] bg-cover bg-no-repeat bg-center"
></div>
          <div
            className="flex flex-col justify-start items-center absolute left-[197.5px] top-12 overflow-hidden gap-20 py-28"
          >
            <div
              className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[30px] py-12"
            >
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[599px] relative overflow-hidden gap-[35px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-white">
                  SUMMER 2020
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-[58px] font-bold text-left text-white">
                  NEW COLLECTION
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50">
                  <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50"
                    >We know how large objects will act, </span>
                    <br /><span className="flex-grow-0 flex-shrink-0 text-xl text-left text-neutral-50"
                    >but things on a small scale.</span>
                </p>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                  <div
                    className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
                  >
                    <Link href="ProductList"><p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                      SHOP NOW
                    </p></Link>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[415px] h-[280px] overflow-hidden"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6 h-[44.47px] absolute left-[1381px] top-[283px] overflow-hidden"></div>
    </div>
  </div>
  <div
    className="self-stretch flex-grow-0 flex-shrink-0 h-[770px] relative overflow-hidden bg-neutral-50"
  >
    <div
      className="flex flex-col justify-start items-center absolute left-[190px] top-0 overflow-hidden gap-12 py-20"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[607px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#252b42]">
            EDITOR’S PICK
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>
      <div
        className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[30px]"
      >
        <div className="flex-grow-0 flex-shrink-0 w-[510px] h-[500px] relative overflow-hidden">
          <div className="w-[510px] h-[500px] absolute left-0 top-0 overflow-hidden bg-white">
            <svg
              width="510"
              height="500"
              viewBox="0 0 510 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-[510px] h-[500px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5079)">
                <rect width="510" height="500" fill="url(#pattern0_1_5079)"></rect>
                <rect
                  width="509"
                  height="500"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="509"
                  height="500"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5079)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5079"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5079"
                    transform="matrix(0.00130548 0 0 0.00133159 0 -0.179112)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5079"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5079"
                    transform="matrix(0.00277778 0 0 0.00282778 0 -0.144733)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5079">
                  <rect width="510" height="500" fill="white"></rect>
                </clipPath>
                
              </defs>
            </svg>
            <Link href = {`/Products`} ><Image
                width={1440}
                height={747}
                alt='Image'
                src="/filter-1.png"
                className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
                /></Link>
            <div className="w-[170px] h-12 absolute left-[31px] top-[426px] overflow-hidden bg-white">
              <p className="absolute left-16 top-3 text-base font-bold text-center text-[#252b42]">
                Men
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-60 h-[500px] relative overflow-hidden">
          <div className="w-60 h-[500px] absolute left-0 top-0 overflow-hidden bg-white">
            <svg
              width="240"
              height="500"
              viewBox="0 0 240 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[500px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5086)">
                <rect width="240" height="500" fill="url(#pattern0_1_5086)"></rect>
                <rect
                  width="239"
                  height="500"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="500"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5086)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5086"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5086"
                    transform="matrix(0.00208333 0 0 0.001 -0.0864583 0)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5086"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5086"
                    transform="matrix(0.00458783 0 0 0.00219298 -0.325809 0)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5086">
                  <rect width="240" height="500" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <Link href="/Products"><Image
                width={360}
                height={456}
                alt='Image'
                src="/unsplash_psmddexaewe.jpeg"
                className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
                /></Link>
            <div
              className="flex justify-center items-center w-[136px] absolute left-[21px] top-[434px] overflow-hidden gap-2.5 px-12 py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                WOMEN
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-4"
        >
          <div className="flex-grow-0 flex-shrink-0 w-60 h-[242px] relative overflow-hidden bg-white">
            <svg
              width="240"
              height="242"
              viewBox="0 0 240 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[242px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5093)">
                <rect width="240" height="242" fill="url(#pattern0_1_5093)"></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5093)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5093"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5093"
                    transform="matrix(0.00314123 0 0 0.00311526 -0.257035 0)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5093"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5093"
                    transform="matrix(0.00277778 0 0 0.00274334 0 -0.125482)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5093">
                  <rect width="240" height="242" fill="white"></rect>
                </clipPath>
                <image
                  id="image0_1_5093"
                  width="482"
                  height="321"
                  xlinkHref="data:image/jpeg;base64,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"
                ></image>
              </defs>
            </svg>
            <Link href="/Products"><Image
                width={360}
                height={456}
                alt='Image'
                src="/unsplash_lks7vei-eag.jpeg"
                className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
                /></Link>
            <div
              className="flex justify-start items-start w-[170px] absolute left-3.5 top-[171px] overflow-hidden gap-2.5 px-[26px] py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                ACCESSORIES
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-60 h-[242px] relative overflow-hidden bg-white">
            <svg
              width="240"
              height="242"
              viewBox="0 0 240 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-60 h-[242px] absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5099)">
                <rect width="240" height="242" fill="url(#pattern0_1_5099)"></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="#212121"
                  fillOpacity="0.25"
                ></rect>
                <rect
                  width="239"
                  height="242"
                  transform="translate(1)"
                  fill="url(#pattern1_1_5099)"
                ></rect>
              </g>
              <defs>
                <pattern
                  id="pattern0_1_5099"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_5099"
                    transform="matrix(0.00401606 0 0 0.00398287 0 -0.459873)"
                  ></use>
                </pattern>
                <pattern
                  id="pattern1_1_5099"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_1_5099"
                    transform="matrix(0.00277778 0 0 0.00274334 0 -0.125482)"
                  ></use>
                </pattern>
                <clipPath id="clip0_1_5099">
                  <rect width="240" height="242" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <Link href="/Products"><Image
                width={360}
                height={456}
                alt='Image'
                src="/product-cover-5 (18).png"
                className="w-[1440px] h-[747px] absolute left-[-1px] top-[-1px] object-cover"
                /></Link>
            <div
              className="flex justify-start items-start w-[120px] absolute left-[18px] top-44 overflow-hidden gap-2.5 px-10 py-3 bg-white"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#252b42]">
                KIDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[300px] relative overflow-hidden bg-white ">
    <div
      className="flex flex-col justify-start items-center w-[1124px] absolute left-[195px] top-0 overflow-hidden py-20"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[692px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[691px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-neutral-500">
            Featured Products
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#252b42]">
            BESTSELLER PRODUCTS
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-neutral-500">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </div>
      </div>
      </div>
      <Pagiination/>
        
  <div
    className="flex-grow-0 flex-shrink-0 w-[1440px] h-[709px] relative rounded-[5px] bg-white border border-[#dedede]"
  >
    <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
      <div className="w-[1440px] h-[709px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[1440px] h-[711px] absolute left-0 top-0 overflow-hidden bg-[#23856d]"></div>
        <div
          className="flex flex-col justify-start items-start w-[1036px] h-[711px] absolute left-[209px] top-0 overflow-hidden gap-20 py-28"
        >
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[599px] overflow-hidden gap-[30px]"
          >
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[509px] relative overflow-hidden gap-[30px] pt-[60px]"
            >
              <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">SUMMER 2020</p>
              <p
                className="flex-grow-0 flex-shrink-0 w-[509px] text-[58px] font-bold text-left text-white"
              >
                Vita classNameic Product
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[341px] text-sm text-left text-white">
                We know how large objects will act, We know how are objects will act, We know
              </p>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[34px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">
                  $16.48
                </p>
                <Link href="/Products"><div
                  className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
                >
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                    ADD TO CART
                  </p>
                </div></Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[510px] relative overflow-hidden"
            >
              <Image
                width={443}
                height={685}
                alt='Image'
                src="/shop-hero-2-png-picture-1.png"
                className="flex-grow-0 flex-shrink-0 w-[443px] h-[685px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-6 h-[44.47px] absolute left-[1381px] top-[401px] overflow-hidden"></div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[682px] relative overflow-hidden bg-white">
    <div
      className="flex justify-end items-center w-[1439px] absolute left-0 top-0 overflow-hidden gap-[30px]"
    >
      <div className="flex-grow-0 flex-shrink-0 w-[704px] h-[682px] relative">
        <div className="w-[704px] h-[682px] absolute left-0 top-0 overflow-hidden">
          <div className="w-[632px] h-[491.99px] absolute left-9 top-[117px]">
            <Image
              width={725}
              height={774}
              alt='Image'
              src="/asian-woman-man-with-winter-clothes-1.png"
              className="w-[725px] h-[774px] absolute left-[-137.85px] top-[-211.85px] object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[573px] relative overflow-hidden gap-[30px]"
      >
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#bdbdbd]">
          SUMMER 2020
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]">
          <span className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]"
            >Part of the Neural </span><br /><span
            className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-left text-[#252b42]"
            >Universe</span>
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500">
          <span className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500"
            >We know how large objects will act, </span><br /><span
            className="flex-grow-0 flex-shrink-0 w-[376px] text-xl text-left text-neutral-500"
            >but things on a small scale.</span>
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
        <Link href="/Products"><div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] bg-[#2dc071]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
              BUY NOW
            </p>
          </div></Link>
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-10 py-[15px] rounded-[5px] border border-[#2dc071]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#2dc071]">
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[1440px] h-[1044px] relative overflow-hidden bg-white">
    <div
      className="flex flex-col justify-start items-center w-[1050px] absolute left-[195px] top-0 gap-20 py-28"
    >
      <div
        className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[692px] overflow-hidden"
      >
        <div
          className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[691px] relative overflow-hidden gap-2.5"
        >
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#23a6f0]">
            Practice Advice
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[40px] font-bold text-center text-[#252b42]">
            Featured Posts
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
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 gap-[30px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[328px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white"
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_hhdhcfaifhu.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{ boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L&apos;integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It&apos;s only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_17)">
                      <path
                        d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_17">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_22)">
                      <path
                        d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_22">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0.5 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
                </p>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_7008_27)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_27">
                      <rect width="9" height="16" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[328px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white"
            style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)"}}
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_degu-ocub1y.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)"}}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L&apos;integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It&apos;s only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_105)">
                      <path
                        d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_105">
                        <rect width="16" height="16" fill="white" transform="translate(0.5)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_110)">
                      <path
                        d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_110">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0.5 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
                </p>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[9px] h-4 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_7008_115)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_115">
                      <rect width="9" height="16" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[329px]">
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[348px] relative overflow-hidden bg-white 0px 2px 4px 0 rgba(0,0,0,0.1)"
          >
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[300px] relative overflow-hidden">
            <div
  className="w-[348px] h-[300px] absolute left-0 top-0 overflow-hidden bg-[url('/unsplash_tveqstc2uz8.jpeg')] bg-cover bg-no-repeat bg-center"
></div>

              <div
                className="flex justify-start items-center absolute left-5 top-5 overflow-hidden px-2.5 rounded-[3px] bg-[#e74040]"
                style={{boxShadow: "0px 2px 4px 0 rgba(0,0,0,0.1)"}}
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white">
                  NEW
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[25px] pt-[25px] pb-[35px]"
            >
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[15px]"
              >
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8ec2f2]">Google</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">Trending</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">New</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]">
                <span className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >Loudest à la Madison #1 </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[247px] text-xl text-left text-[#252b42]"
                  >(L&apos;integral)</span>
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500">
                <span className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >We focus on ergonomics and meeting </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >you where you work. It&apos;s only a </span><br /><span
                  className="flex-grow-0 flex-shrink-0 w-[280px] text-sm text-left text-neutral-500"
                  >keystroke away.</span>
              </p>
              <div
                className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden py-[15px]"
              >
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_155)">
                      <path
                        d="M7.99934 14.6667C4.70379 14.6232 2.04278 11.9622 1.99934 8.66668C2.04278 5.37113 4.70379 2.71011 7.99934 2.66668C11.2949 2.71011 13.9559 5.37113 13.9993 8.66668C13.9559 11.9622 11.2949 14.6232 7.99934 14.6667ZM7.99934 4.00001C5.43612 4.03376 3.36642 6.10346 3.33268 8.66668C3.36642 11.2299 5.43612 13.2996 7.99934 13.3333C10.5626 13.2996 12.6323 11.2299 12.666 8.66668C12.6323 6.10346 10.5626 4.03376 7.99934 4.00001ZM11.3327 9.33334H7.33268V5.33334H8.66601V8.00001H11.3327V9.33334ZM13.5273 4.47201L11.5213 2.47201L12.4607 1.52734L14.4673 3.52734L13.5273 4.47134V4.47201ZM2.47068 4.47201L1.52734 3.52734L3.52134 1.52734L4.46468 2.47201L2.47201 4.47201H2.47068Z"
                        fill="#23A6F0"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_155">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    22 April 2021
                  </p>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-[5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-[14.67px] relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_7008_160)">
                      <path
                        d="M15.8333 13.8332H1.5V0.833171C1.5 0.741504 1.425 0.666504 1.33333 0.666504H0.166667C0.075 0.666504 0 0.741504 0 0.833171V15.1665C0 15.2582 0.075 15.3332 0.166667 15.3332H15.8333C15.925 15.3332 16 15.2582 16 15.1665V13.9998C16 13.9082 15.925 13.8332 15.8333 13.8332ZM3 12.4998H14.1667C14.2583 12.4998 14.3333 12.4248 14.3333 12.3332V3.24984C14.3333 3.09984 14.1521 3.02692 14.0479 3.13109L9.66667 7.51234L7.05417 4.929C7.02284 4.89799 6.98054 4.88059 6.93646 4.88059C6.89238 4.88059 6.85007 4.89799 6.81875 4.929L2.88125 8.879C2.86596 8.89433 2.85385 8.91252 2.84562 8.93255C2.8374 8.95257 2.83322 8.97402 2.83333 8.99567V12.3332C2.83333 12.4248 2.90833 12.4998 3 12.4998Z"
                        fill="#23856D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_7008_160">
                        <rect
                          width="16"
                          height="14.6667"
                          fill="white"
                          transform="translate(0 0.666504)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-neutral-500">
                    10 comments
                  </p>
                </div>
              </div>
              <div
                className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                  Learn More
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
                  <g clipPath="url(#clip0_7008_165)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                      fill="#23A6F0"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_7008_165">
                      <rect width="9" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="self-stretch flex-grow-0 flex-shrink-0 h-[488px] relative overflow-hidden bg-white">
    <div className="w-[1440px] h-[142px] absolute left-0 top-0 overflow-hidden bg-neutral-50">
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
                <g clipPath="url(#clip0_1_5293)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5293">
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
                <g clipPath="url(#clip0_1_5296)">
                  <path
                    d="M13 1C10.0149 1 9.6395 1.01375 8.46663 1.066C7.29375 1.121 6.49487 1.30525 5.795 1.5775C5.06088 1.85363 4.39593 2.28676 3.84663 2.84663C3.2871 3.39621 2.85402 4.06108 2.5775 4.795C2.30525 5.4935 2.11963 6.29375 2.066 7.4625C2.01375 8.63812 2 9.01213 2 12.0014C2 14.9879 2.01375 15.3619 2.066 16.5347C2.121 17.7063 2.30525 18.5051 2.5775 19.205C2.85938 19.9282 3.23475 20.5415 3.84663 21.1534C4.45713 21.7652 5.07037 22.142 5.79363 22.4225C6.49487 22.6947 7.29238 22.8804 8.46388 22.934C9.63813 22.9862 10.0121 23 13 23C15.9879 23 16.3605 22.9862 17.5347 22.934C18.7049 22.879 19.5065 22.6947 20.2064 22.4225C20.94 22.1462 21.6045 21.7131 22.1534 21.1534C22.7652 20.5415 23.1406 19.9282 23.4225 19.205C23.6934 18.5051 23.879 17.7063 23.934 16.5347C23.9862 15.3619 24 14.9879 24 12C24 9.01213 23.9862 8.63813 23.934 7.46388C23.879 6.29375 23.6934 5.4935 23.4225 4.795C23.146 4.06106 22.7129 3.39618 22.1534 2.84663C21.6042 2.28655 20.9392 1.85339 20.205 1.5775C19.5037 1.30525 18.7035 1.11963 17.5334 1.066C16.3591 1.01375 15.9865 1 12.9973 1H13.0014H13ZM12.0141 2.98275H13.0014C15.9384 2.98275 16.2863 2.99238 17.4454 3.046C18.5179 3.09413 19.1009 3.27425 19.4886 3.42412C20.0015 3.6235 20.3686 3.86275 20.7536 4.24775C21.1386 4.63275 21.3765 4.9985 21.5759 5.51275C21.7271 5.89913 21.9059 6.48213 21.954 7.55463C22.0076 8.71375 22.0186 9.06163 22.0186 11.9973C22.0186 14.9329 22.0076 15.2821 21.954 16.4412C21.9059 17.5138 21.7257 18.0954 21.5759 18.4831C21.3995 18.9607 21.118 19.3926 20.7522 19.7467C20.3672 20.1318 20.0015 20.3696 19.4873 20.569C19.1023 20.7203 18.5192 20.899 17.4454 20.9485C16.2863 21.0007 15.9384 21.0131 13.0014 21.0131C10.0644 21.0131 9.71513 21.0007 8.556 20.9485C7.4835 20.899 6.90188 20.7203 6.51412 20.569C6.03631 20.3929 5.60405 20.1119 5.24913 19.7467C4.88303 19.392 4.60112 18.9598 4.42412 18.4818C4.27425 18.0954 4.09413 17.5124 4.046 16.4399C3.99375 15.2808 3.98275 14.9329 3.98275 11.9945C3.98275 9.0575 3.99375 8.711 4.046 7.55187C4.0955 6.47937 4.27425 5.89638 4.4255 5.50863C4.62488 4.99575 4.86412 4.62862 5.24913 4.24362C5.63412 3.85862 5.99988 3.62075 6.51412 3.42138C6.90188 3.27013 7.4835 3.09138 8.556 3.04188C9.57075 2.99513 9.964 2.98138 12.0141 2.98V2.98275ZM18.8726 4.80875C18.6993 4.80875 18.5276 4.84289 18.3675 4.90923C18.2073 4.97557 18.0618 5.0728 17.9392 5.19537C17.8167 5.31794 17.7194 5.46346 17.6531 5.62361C17.5868 5.78376 17.5526 5.95541 17.5526 6.12875C17.5526 6.30209 17.5868 6.47374 17.6531 6.63389C17.7194 6.79404 17.8167 6.93956 17.9392 7.06213C18.0618 7.1847 18.2073 7.28193 18.3675 7.34827C18.5276 7.41461 18.6993 7.44875 18.8726 7.44875C19.2227 7.44875 19.5585 7.30968 19.806 7.06213C20.0536 6.81458 20.1926 6.47884 20.1926 6.12875C20.1926 5.77866 20.0536 5.44292 19.806 5.19537C19.5585 4.94782 19.2227 4.80875 18.8726 4.80875ZM13.0014 6.3515C12.2521 6.33981 11.508 6.47729 10.8123 6.75594C10.1167 7.0346 9.48346 7.44885 8.94946 7.97458C8.41546 8.50032 7.99138 9.12703 7.70191 9.81823C7.41244 10.5094 7.26336 11.2513 7.26336 12.0007C7.26336 12.7501 7.41244 13.4919 7.70191 14.1831C7.99138 14.8743 8.41546 15.5011 8.94946 16.0268C9.48346 16.5525 10.1167 16.9668 10.8123 17.2454C11.508 17.5241 12.2521 17.6616 13.0014 17.6499C14.4844 17.6267 15.8988 17.0214 16.9393 15.9645C17.9799 14.9076 18.5631 13.4839 18.5631 12.0007C18.5631 10.5175 17.9799 9.09382 16.9393 8.03691C15.8988 6.97999 14.4844 6.37464 13.0014 6.3515ZM13.0014 8.33288C13.974 8.33288 14.9067 8.71923 15.5944 9.40695C16.2821 10.0947 16.6685 11.0274 16.6685 12C16.6685 12.9726 16.2821 13.9053 15.5944 14.593C14.9067 15.2808 13.974 15.6671 13.0014 15.6671C12.0288 15.6671 11.096 15.2808 10.4083 14.593C9.72061 13.9053 9.33425 12.9726 9.33425 12C9.33425 11.0274 9.72061 10.0947 10.4083 9.40695C11.096 8.71923 12.0288 8.33288 13.0014 8.33288Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5296">
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
                <g clipPath="url(#clip0_1_5299)">
                  <path
                    d="M8.91075 19C17.213 19 21.7546 12.0731 21.7546 6.07669C21.7546 5.88285 21.7546 5.68625 21.7464 5.49241C22.6306 4.84789 23.3937 4.04993 24 3.13592C23.1741 3.50262 22.2988 3.7443 21.4026 3.85312C22.3466 3.28495 23.0536 2.391 23.3923 1.3374C22.5054 1.86647 21.5346 2.23787 20.5226 2.43534C19.8423 1.70572 18.9419 1.22237 17.9611 1.06016C16.9803 0.897946 15.9737 1.06592 15.0973 1.53807C14.2209 2.01023 13.5236 2.7602 13.1134 3.67182C12.7031 4.58345 12.6029 5.60585 12.8281 6.58066C11.0334 6.49005 9.27762 6.02057 7.67468 5.20269C6.07175 4.3848 4.65744 3.23678 3.5235 1.83307C2.94784 2.83421 2.77216 4.01843 3.03214 5.14526C3.29211 6.27209 3.96825 7.25705 4.92325 7.90013C4.20762 7.87565 3.50772 7.68215 2.88 7.33524V7.39754C2.88123 8.44631 3.24205 9.46247 3.90145 10.2743C4.56086 11.0861 5.4784 11.6438 6.499 11.853C6.11161 11.9605 5.71144 12.014 5.30963 12.0122C5.02635 12.0131 4.74365 11.9867 4.46537 11.9333C4.75383 12.8361 5.3155 13.6254 6.07171 14.1908C6.82793 14.7561 7.74081 15.0691 8.6825 15.0859C7.08276 16.3511 5.10668 17.0373 3.0725 17.034C2.71407 17.0355 2.35588 17.0147 2 16.9716C4.06458 18.297 6.46228 19.0008 8.91075 19Z"
                    fill="#23A6F0"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1_5299">
                    <rect
                      width="24"
                      height="19.7647"
                      fill="white"
                      transform="translate(0.5 0.117676)"
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
              <Link href="/About"><p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                About Us
              </p></Link>
              <Link href="/DesktopContact"><p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                Carrier
              </p></Link>
              <Link href="/DesktopContact"><p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-500">
                We are hiring
              </p></Link>
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