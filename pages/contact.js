import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import {AiFillStar} from "react-icons/ai"

export default function Form() {

  return (
    <Layout title="Contact">
      <main className="">
        <nav className="flex flex-row justify-between items-center p-8 bg-orange-50 dark:bg-blue-900">
          <div className="relative flex flex-row space-x-2 items-center"></div>
        </nav>
        <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-orange-50 dark:bg-blue-900 md:h-96">
          <div className="mx-auto mb-10 md:mt-20">
            <div className="badge bg-green-500 inline-block rounded-xl">
              <p className="font-light text-base px-4 py-1 text-gray-50">
                문의하기
              </p>
            </div>
            <h1 className="text-3xl font-bold mt-4 dark:text-gray-50 text-gray-700 font-mono">
              문의사항이 있으신가요?
            </h1>
            <p className="text-sm text-gray-700 mt-4 font-light dark:text-orange-300 font-mono">
              오른쪽에 있는 양식을 작성해서 이메일로 보내주세요. 최대한 빠른
              시일내로 답장해 드리겠습니다.
            </p>
          </div>
          <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
            <h1 className="text-2xl font-bold dark:text-gray-50 font-mono">
              메세지 보내기
            </h1>

            <label
              htmlFor="fullname"
              className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
              이름<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              이메일<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              용무<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></input>
            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              내용<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>

            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="px-10 mt-8 py-2 bg-green-500 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-white ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="text-left"></div>
          </form>
        </header>

        <section className="">
          <h1 className="text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 font-mono">
            연락처
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto my-20">
            <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg transition duration-200 hover:ring-2 hover:ring-green-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 h-4 w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                  fill="currentColor"
                />
                <path
                  d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                  fill="currentColor"
                />
                <path
                  d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-gray-500 font-light">+82 010-1234-5678</p>
            </div>
            <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200 hover:ring-2 hover:ring-green-400">
              <svg
                width="24"
                height="24"
                className="text-cyan-500 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-gray-500 font-light">
                letsfestival@jmail.ac.kr
              </p>
            </div>
            <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200 hover:ring-2 hover:ring-green-400">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-cyan-500 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-gray-500 font-light">
                중부대학교 정보보호학과
              </p>
            </div>
          </div>
        </section>
      </main>

      <div class="mx-auto max-w-5xl px-4 py-8">
        <section class="p-8">
          <div class="divide-y divide-orange-300 rounded-xl border border-orange-300 bg-white">
            <details class="group p-6" open>
              <summary class="flex cursor-pointer items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">
                  01. Let&#39;s Festival 홈페이지에 문제가 발생합니다.
                </h2>

                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                홈페이지에서 발생하는 문제는 아래 안내해드리는 페이지에서 다양한
                해결 방법을 확인하실 수 있습니다.
                <br />
                <br />
                &#91;
                <Link href="#" className="text-indigo-500">
                  홈페이지 도움말
                </Link>
                &#93;
                <br />
                <br />
                해당 페이지에 기재되지 않았거나 안내된 내용을 모두 수행했음에도
                문제가 지속될 경우 문의 메일을 보내주세요.
              </p>
            </details>

            <details class="group p-6">
              <summary class="flex cursor-pointer items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">
                  02. 이메일이 기억나지 않습니다.{" "}
                </h2>

                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                개발자에게 문의하기를 통해 이름과 Email을 알려주시면 본인 인증을
                통해 비밀번호를 다시 발급해드릴 수 있습니다.
              </p>
            </details>

            <details class="group p-6">
              <summary class="flex cursor-pointer items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">
                  03. 이름 또는 이메일을 변경하고 싶어요.
                </h2>

                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                로그인을 진행하신 후 우측 상단에 자신의 이름이 들어간 박스를
                클릭하시면 계정 설정을 클릭해 이메일과 이름을 변경하실 수
                있습니다.
              </p>
            </details>

            <details class="group p-6">
              <summary class="flex cursor-pointer items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">
                  04. 계정 도용(해킹) 당했어요.
                </h2>

                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                계정 도용으로 인해 피해가 발생한 경우, 아래와 같이 신고를 접수해
                주시면 도움을 받으실 수 있습니다.
                <br />
                1. 신고센터 방문
                <br />
                2. 신고서 작성 및 신고 접수
                <br />
                <br />
                &#8251; 유의사항
                <br />
                - 피해 발생일부터 15일 이내에 신고를 접수해 주셔야 조사가
                정상적으로 진행될 수 있습니다.
                <br />- 타인의 명의로 생성된 계정을 사용하는 경우는 도움을
                받으실 수 없습니다.
              </p>
            </details>

            <details class="group p-6">
              <summary class="flex cursor-pointer items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">
                  05. 개발자에게 개인적으로 연락이 하고싶습니다.
                </h2>

                <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                개발자들의 개인 이메일 주소는 다음과 같습니다.
                <br />
                <br />
                &#8251; 유의사항
                <br />
                - 지나친 빈도로 연락을 하는 경우 스팸으로 분류되거나 차단될
                가능성이 있습니다.
                <br />
                - 타인의 명의로 연락을 하는 경우는 도움을 받으실 수 없습니다.
                <br />
                <br />
                <table class="w-full h-full divide-y-2 divide-gray-200 text-sm break-normal">
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        김다혁
                      </td>
                      <td class="px-4 py-2 text-gray-700">
                        91812103@jmail.ac.kr
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-2 font-medium text-gray-900">
                        류재원
                      </td>
                      <td class="px-4 py-2 text-gray-700">
                        91812282@jmail.ac.kr
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        박범주
                      </td>
                      <td class=" px-4 py-2 text-gray-700">
                        <a>91812323@jmail.ac.kr</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        손진빈
                      </td>
                      <td class=" px-4 py-2 text-gray-700">
                        <a>91812505@jmail.ac.kr</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        지영욱
                      </td>
                      <td class=" px-4 py-2 text-gray-700">
                        <a>91813157@jmail.ac.kr</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </details>
          </div>
        </section>
      </div>
    </Layout>
  );
}
