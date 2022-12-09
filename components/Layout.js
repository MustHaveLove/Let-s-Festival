import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import { ArrowUturnRightIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    signOut({ callbackUrl: '/signin' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + " - Let's Festival" : "Let's Festival"}</title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/head.png" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <header
        aria-label="Site Header"
        class="border-b border-gray-100 z-20 fixed bg-white w-full shadow-lg"
      >
        <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div class="flex items-center">
            <button type="button" class="p-2 sm:mr-4 lg:hidden">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a href="/" class="flex">
              <div>
                <img src="/logo.png" class="h-16"></img>
              </div>
            </a>
          </div>

          <div class="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <a
                href="/Fmain"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                축제 소개
              </a>

              <a
                href="/Boardindex"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                게시판
              </a>

              <a
                href="/contact"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                문의하기
              </a>

              <a
                href="/about"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                개발자
              </a>
              <a
                href="/crypto/jwt"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                Jwt
              </a>
            </nav>

            <div class="ml-8 flex items-center">
              <div class="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  {status === "loading" ? (
                    <a
                      className="p-2 inline-flex justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      연결중..
                    </a>
                  ) : session?.user ? (
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button
                        className="inline-flex w-full justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75
            "
                      >
                        {session.user.name}
                      </Menu.Button>

                      <Menu.Items
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y
            divide-gray-100 rounded-md bg-white shadow-lg ring-1
            ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active
                                    ? "bg-orange-400 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                href="/accountsetting"
                              >
                                {active ? (
                                  <Cog6ToothIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <Cog6ToothIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                계정 설정
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-orange-400 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                href="/logout"
                                onClick={logoutClickHandler}
                              >
                                {active ? (
                                  <ArrowUturnRightIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ArrowUturnRightIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                로그아웃
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <a
                      href="/signin"
                      className="p-2 inline-flex justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      로그인
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="">{children}</main>

      <footer className="bg-orange-100">
        <div class="py-3 uk-link-reset">
          <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
            <div class="flex space-x-2 text-gray-700 uppercase">
              <a href="/about">About</a>
            </div>
            <p class="capitalize">
              Copyright &copy; 2022 Powered by Team FallGuys
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
