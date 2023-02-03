import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-kown-p ">
        <div className="container mx-auto py-20 px-5 md:px-12 xl:px-40">
          <div className="flex flex-row justify-between items-center">
            <div className="flex-row justify-between hidden md:flex">
              <ul className="mr-20 list-disc">
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/About"}
                  >
                    Group
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/Sectors"}
                  >
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/Team"}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/Contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="list-disc">
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/pages/Privacy"}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/pages/Cookies"}
                  >
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-kown-p-500 hover:text-kown-p-600"
                    href={"/pages/FrequentlyAskedQuestions"}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="m-auto md:m-0">
              <Link href={"/"}>
                <svg
                  width="77"
                  height="188"
                  viewBox="0 0 77 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4453 179.27C10.2698 179.11 10.1134 179.003 9.97603 178.95C9.83868 178.896 9.63265 178.854 9.35794 178.824V178.572C9.63265 178.541 9.83868 178.499 9.97603 178.446C10.1134 178.392 10.2774 178.286 10.4682 178.125C10.659 177.965 10.9528 177.679 11.3496 177.267L18.1905 170.54H16.3363L8.64829 178.091H6.5689C6.5689 177.824 6.57271 177.534 6.57653 177.198C6.58416 176.603 6.58798 175.947 6.58798 175.23C6.6185 172.544 6.6414 170.983 6.65666 170.537H5.0542C5.08472 174.444 5.09998 177.355 5.09998 179.278C5.09998 181.216 5.08472 184.123 5.0542 187.996H6.65666C6.65666 187.736 6.6414 186.691 6.61088 184.86C6.59562 183.669 6.58416 182.525 6.57653 181.426C6.5689 180.617 6.5689 179.938 6.56508 179.32H8.69025L17.1108 187.992H18.9879L11.3229 180.167C10.9146 179.732 10.6208 179.43 10.4453 179.27Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M57.2088 177.474C56.6899 179.29 56.1786 181.102 55.675 182.907C55.1714 184.715 54.828 186.054 54.6448 186.924H54.4846L50.2495 170.541H48.876L44.6638 186.947H44.4807C44.2823 186.031 43.9275 184.643 43.4162 182.781C42.9049 180.919 42.3822 179.057 41.8481 177.199C40.9324 174.009 40.3143 171.792 39.9938 170.541H38.3914C38.9866 172.525 39.7611 175.222 40.7149 178.63C41.6688 182.041 42.5425 185.162 43.3361 188H45.6253C46.6173 184.383 47.3651 181.587 47.8687 179.603C48.3724 177.619 48.8073 175.863 49.1736 174.341C49.2346 174.112 49.2919 173.895 49.3453 173.689C49.3987 173.483 49.4483 173.28 49.4941 173.082H49.6772C49.7688 173.464 49.868 173.879 49.9748 174.33C50.0817 174.78 50.2037 175.287 50.3411 175.852C50.6463 177.119 51.0546 178.736 51.5658 180.701C52.0771 182.67 52.7219 185.104 53.5002 188H55.7895C56.1557 186.764 56.5411 185.421 56.9455 183.971C57.3499 182.521 57.7734 181.018 58.216 179.465C58.6739 177.817 59.1126 176.234 59.5323 174.719C59.952 173.2 60.3527 171.808 60.7342 170.541H59.1317C58.8265 171.762 58.1855 174.074 57.2088 177.474Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M75.469 170.541C75.4843 171.09 75.4919 171.689 75.4919 172.338C75.4919 172.987 75.4996 173.685 75.5148 174.433C75.5301 176.05 75.5377 178.653 75.5377 182.235C75.5377 182.8 75.5568 183.384 75.5949 183.986C75.6331 184.589 75.6827 185.173 75.7437 185.738C75.7437 185.814 75.7476 185.894 75.7552 185.978C75.7628 186.062 75.7743 186.15 75.7895 186.241H75.6064C75.5759 186.18 75.3393 185.768 74.8967 185.005C74.7594 184.761 74.6068 184.513 74.4389 184.261C74.271 184.009 74.1031 183.746 73.9352 183.471L65.3545 170.541H63.4773C63.5078 172.586 63.5231 174.28 63.5231 175.619C63.5231 180.621 63.5155 183.796 63.5002 185.139V188H64.9653C64.9348 184.032 64.9195 179.923 64.9195 175.665C64.9195 175.192 64.8928 174.627 64.8394 173.971C64.786 173.315 64.7364 172.727 64.6906 172.208H64.8966C65.1408 172.651 65.3545 173.032 65.5376 173.353C65.4003 173.124 65.8886 173.902 67.0027 175.688L75.1943 188H76.957C76.9265 183.849 76.9112 180.785 76.9112 178.801C76.9112 175.734 76.9341 172.983 76.9799 170.541H75.469Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M35.7941 180.056L29.7658 179.049L35.5995 177.225C35.8704 177.141 36.023 176.851 35.9391 176.576C35.8551 176.305 35.5651 176.153 35.2904 176.237L29.4567 178.061L33.8368 173.799C34.0428 173.6 34.0466 173.272 33.8482 173.066C33.6498 172.86 33.3217 172.856 33.1157 173.055L29.1744 176.885L31.4865 171.903C31.6086 171.643 31.4941 171.334 31.2347 171.216C30.9752 171.094 30.6662 171.208 30.5479 171.468L28.0565 176.836V171.056C28.0565 170.769 27.8237 170.537 27.5376 170.537C27.2514 170.537 27.0187 170.769 27.0187 171.056V177.03L24.3212 171.7C24.1915 171.445 23.8825 171.342 23.6268 171.471C23.3712 171.601 23.2682 171.91 23.3979 172.166L26.0954 177.496L21.2804 173.955C21.0515 173.787 20.7272 173.837 20.5555 174.066C20.3838 174.295 20.4372 174.619 20.6661 174.791L25.4811 178.331L19.5864 177.347C19.304 177.301 19.0369 177.492 18.9912 177.771C18.9454 178.053 19.1362 178.32 19.4147 178.366L25.3094 179.35L19.6054 181.132C19.3346 181.216 19.1819 181.506 19.2659 181.781C19.3498 182.051 19.6398 182.204 19.9145 182.12L25.6185 180.338L21.3338 184.505C21.1278 184.703 21.124 185.031 21.3224 185.237C21.5208 185.443 21.8489 185.447 22.0549 185.249L25.8703 181.54L23.6307 186.367C23.5086 186.626 23.623 186.935 23.8825 187.053C24.1419 187.175 24.451 187.061 24.5692 186.802L27.0149 181.529V187.481C27.0149 187.767 27.2476 188 27.5338 188C27.8199 188 28.0527 187.767 28.0527 187.481V181.372L30.8112 186.824C30.9409 187.08 31.25 187.183 31.5056 187.053C31.7612 186.924 31.8642 186.615 31.7345 186.359L28.976 180.907L33.9016 184.528C34.1306 184.695 34.4549 184.646 34.6266 184.417C34.7944 184.188 34.7448 183.864 34.5159 183.692L29.5903 180.071L35.6186 181.078C35.9009 181.124 36.168 180.934 36.2138 180.655C36.2672 180.369 36.0764 180.102 35.7941 180.056Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M76.9778 163.562H5.0542V165.489H76.9778V163.562Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M49.4797 91.0938C53.0051 89.2434 57.0532 87.4196 60.8571 85.2906C65.4356 89.8996 68.8885 93.3792 70.0598 94.5429C72.8832 97.3472 74.5085 99.522 75.4509 101.189C74.4742 102.616 71.544 106.165 65.5538 107.87C65.5538 107.87 58.5984 96.6261 50.4335 98.282C42.2686 99.934 41.1126 111.743 42.7074 114.719C44.3022 117.695 46.8585 123.364 61.2387 118.874C61.2387 118.874 64.3406 120.503 61.7957 122.88C59.2509 125.257 35.42 149.24 18.7774 143.899C2.13853 138.557 9.19698 118.423 9.96768 116.214C9.96768 116.214 4.84744 120.819 5.06111 131.388C5.27095 141.96 11.6235 158.801 31.4711 153.12C31.4711 153.12 46.9997 147.996 61.9941 130.816C61.9941 130.816 65.3707 127.679 65.7332 119.816C65.7637 119.141 66.2788 118.313 66.6069 117.756C67.4463 116.348 68.8579 115.543 70.0636 114.497C71.3799 113.357 72.6008 112.071 73.673 110.697C74.8977 109.129 76.2407 107.088 76.6413 104.982C76.5497 105.447 76.4772 105.714 76.4772 105.714C76.4772 105.714 76.6222 105.466 76.6489 104.94C76.6718 104.825 76.6947 104.707 76.71 104.593C76.8397 103.83 76.9771 102.735 76.9733 101.468C76.9656 97.0649 76.2254 90.3269 74.4475 86.4276C73.6462 84.6725 71.4944 82.2193 68.8465 79.6248C69.022 79.4569 69.2204 79.3043 69.3883 79.1326C75.6531 72.7495 72.7535 62.1237 70.0789 54.9775L68.3391 50.3342C68.3391 50.3342 72.6771 52.9782 71.4906 49.4566C70.3078 45.9351 64.7526 38.8079 64.7526 38.8079L62.1811 43.9053C62.1811 43.9053 60.4527 45.3818 62.4634 47.9076C63.1463 50.979 63.9361 54.0275 64.7946 57.0531C65.5119 59.5788 66.2788 62.1008 67.1983 64.5617C67.9003 66.4465 70.2506 69.8765 69.3234 71.8491C68.6596 73.2608 66.027 74.8594 64.1155 75.8438C64.1155 75.8438 32.0511 46.225 25.9655 38.5981C25.5077 38.0258 25.5993 37.2055 26.1639 36.74C28.7851 34.5881 36.496 28.4263 46.0954 22.3408C58.3809 14.5498 68.0834 5.07242 67.9499 13.0122C67.9499 13.0122 69.7393 16.7436 70.6283 8.63597C71.3647 1.9171 67.3509 0.93655 65.9545 0.795381C65.6683 0.768674 65.4012 0.833537 65.1609 0.993782C63.4974 2.1155 54.6991 8.10182 21.6465 31.3184C17.6366 32.7491 16.1753 42.238 19.6015 44.6226C21.8793 46.2059 41.6276 65.9734 55.8361 80.262C49.1935 83.7225 41.952 87.2861 34.3746 88.3086C27.6062 89.2243 19.8571 90.5101 13.4931 87.2517C7.77384 84.3215 4.50026 77.6713 3.49681 71.5705C2.98555 68.4648 3.13053 65.4774 3.90505 62.4442C4.09582 61.6926 6.55292 52.6616 6.75513 52.7302C6.75513 52.7302 5.16031 52.177 4.03859 54.9737C2.91687 57.7742 -2.90921 68.6327 1.8333 83.6042C6.5987 98.5758 26.4234 103.189 49.4797 91.0938ZM48.9532 108.255C49.6285 106.47 51.2386 105.527 53.0013 105.882C55.363 106.359 56.7594 107.187 58.4344 109.144C55.8704 110.381 50.5251 109.839 48.9532 108.255Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M10.6314 34.0153C10.765 34.0153 10.8985 33.9771 11.0168 33.8932L56.2213 2.66815C56.5304 2.45449 56.6067 2.03098 56.393 1.72575C56.3511 1.66471 56.2976 1.62274 56.2442 1.58077C56.1298 1.39 55.9199 1.0657 55.5193 0.520099C54.8478 -0.38796 53.9588 0.169085 53.9588 0.169085C52.9477 0.802437 51.9557 1.47394 50.9561 2.13018C47.6749 4.27061 44.3975 6.41103 41.1163 8.54764C36.0761 11.8327 31.0742 15.1597 25.9082 18.2463C24.4889 19.0933 22.9742 20.2875 22.9856 22.1037C22.9971 24.0152 20.456 25.7092 20.456 25.7092L21.1695 25.2323L10.2423 32.7791C9.93322 32.9927 9.85691 33.4162 10.0706 33.7215C10.2041 33.9122 10.4178 34.0153 10.6314 34.0153Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M61.0109 30.3715C61.2551 29.9404 61.4535 29.4787 61.5756 29.0018C61.6481 28.7195 61.6939 28.4295 61.7015 28.1357C61.7511 26.6553 60.7133 25.1902 59.1452 25.1292C57.7297 25.0758 56.3905 26.2547 55.4061 27.1475C54.4752 27.9984 53.7732 28.7156 52.4759 30.196C51.7129 31.0697 51.0795 31.829 50.6102 32.4051C50.4957 32.5463 50.4843 32.7485 50.5721 32.9087C50.7438 33.214 51.896 35.2819 52.2508 34.5074C52.4378 34.0991 52.4759 33.7252 52.5637 33.3361C52.7392 32.5654 53.0215 31.8176 53.3763 31.1117C53.6739 30.5241 54.0212 29.9289 54.6202 29.6008C55.368 29.1926 56.3409 29.4253 56.9132 30.0319C57.4359 30.589 57.5046 31.4169 57.4817 32.1457C57.4588 32.7981 57.3176 33.4582 57.165 34.5875C58.6339 33.359 60.0609 32.0579 61.0109 30.3715Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M47.2772 50.8297C49.3184 50.0094 50.4401 48.6663 51.1574 46.9838C51.3406 46.5564 51.5046 46.1177 51.6458 45.6713C52.2105 43.8819 52.3058 41.9399 52.0197 40.0894C51.7717 38.4908 51.2604 36.7357 50.4592 35.324C49.9708 34.4617 49.4291 33.8017 48.9483 33.3133C48.7919 33.1569 48.6393 33.0042 48.5057 32.886C46.5179 31.0393 44.3851 29.8527 41.5007 31.3674C39.1199 32.6227 37.9906 34.4121 36.7849 37.3728C37.1092 37.3461 37.3839 37.4301 37.6968 37.2736C38.3835 36.9303 38.8605 36.2816 39.4328 35.7895C39.9135 35.3774 40.5011 35.0302 41.1344 35.0264C42.6987 35.0188 44.1715 36.8387 45.049 37.9337C47.5824 41.089 48.727 45.3966 47.6091 49.3379C47.5023 49.7423 47.4374 50.1543 47.2772 50.8297Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M15.2224 129.668C15.0622 129.885 14.9859 130.133 15.0126 130.354C15.0393 130.495 15.1003 130.599 15.1957 130.675L15.23 130.698H15.2338C15.3025 130.743 15.3865 130.766 15.4742 130.766C15.4971 130.766 15.52 130.766 15.5467 130.763L15.5696 130.759C15.7833 130.724 16.0046 130.572 16.1572 130.354L29.2935 111.854L29.3431 111.785L29.0112 111.548L15.2224 129.668Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M36.7528 105.772L36.4323 105.52L16.1307 132.289C15.9476 132.529 15.8522 132.827 15.8866 133.071C15.9209 133.231 15.9896 133.353 16.0773 133.41L16.1002 133.433C16.1803 133.494 16.2795 133.525 16.3787 133.525C16.4093 133.525 16.4398 133.521 16.4703 133.517H16.5046C16.7412 133.479 16.9892 133.311 17.1723 133.063L36.7109 105.841L36.7528 105.772Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M18.5204 132.97C18.5471 133.104 18.612 133.218 18.7188 133.298C18.8066 133.356 18.8982 133.382 18.9935 133.382C19.0164 133.382 19.0355 133.382 19.0546 133.379L19.0775 133.375C19.2873 133.34 19.5086 133.188 19.6651 132.963L32.9044 114.317L32.954 114.248L32.6221 114.012L18.7341 132.276C18.5739 132.493 18.4937 132.749 18.5204 132.97Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M15.2099 126.412C15.0611 126.607 14.9886 126.836 15.0115 127.03C15.0267 127.152 15.084 127.256 15.1908 127.339C15.2671 127.393 15.3587 127.42 15.4426 127.42C15.4617 127.42 15.4808 127.42 15.496 127.416H15.5266C15.7364 127.378 15.931 127.236 16.0683 127.034L24.3668 115.195L24.4126 115.13L24.0921 114.878L15.2099 126.412Z"
                    fill="#C7A08A"
                  />
                  <path
                    d="M26.134 60.3037C24.1615 65.3591 18.4499 67.8849 13.3754 65.9276L12.8909 67.1752C17.9462 69.1325 20.472 74.8594 18.4995 79.9338L19.7624 80.4184C21.7196 75.3477 27.4465 72.8181 32.521 74.7907L33.0055 73.5431C27.9349 71.5705 25.4244 65.8398 27.3778 60.7845L26.134 60.3037Z"
                    fill="#C7A08A"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto pb-20 px-5 md:px-12 xl:px-40">
          <div className="block text-center md:flex md:text-left flex-row justify-between items-center text-kown-p-500">
            <div className="text-sm">Copyrights ®2023 KOWN</div>
            <div className="text-sm">
              Created by <Link href="https://id8media.com">ID8 Media</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
