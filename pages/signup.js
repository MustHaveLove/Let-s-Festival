import Link from "next/link";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

export default function RegisterScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Create Account">
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="/images/dark-ga95c10069_1920.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div class="hidden lg:relative lg:block lg:p-12">
              
              {/* <a class="block text-white" href="/">
                <span class="sr-only">Home</span>
                <svg
                  class="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}

              <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Let's Festival에 어서오세요!
              </h2>

              <p class="mt-4 leading-relaxed text-white/90">
                하나의 사이트에서 한국에 존재하는 모든 지역축제를 알아보세요.
                <br />
                다양한 정보들을 하나의 사이트에서 손쉽게 얻어 보세요.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              <form
                action=""
                class="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit(submitHandler)}
              >
                <div class="col-span-6">
                  <label
                    htmlFor="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    이름
                  </label>

                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    id="name"
                    autoFocus
                    {...register("name", {
                      required: "이름을 입력해주세요.",
                    })}
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                </div>

                <div class="col-span-6">
                  <label
                    htmlFor="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "이메일을 입력해주세요.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: "이메일을 형식을 지켜주세요.",
                      },
                    })}
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    id="email"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    비밀번호
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "비밀번호를 입력하세요.",
                      minLength: {
                        value: 6,
                        message: "비밀번호를 5글자 이상 입력하세요.",
                      },
                    })}
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    id="password"
                    autoFocus
                  />
                  {errors.password && (
                    <div className="text-red-500 ">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="confirmPassword"
                    class="block text-sm font-medium text-gray-700"
                  >
                    비밀번호 확인
                  </label>

                  <input
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    type="password"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "비밀번호를 한번더 입력해주세요.",
                      validate: (value) => value === getValues("password"),
                      minLength: {
                        value: 3,
                        message: "비밀번호를 2글자 이상 입력하세요.",
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="text-red-500 ">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "validate" && (
                      <div className="text-red-500 ">
                        비밀번호가 일치하지 않습니다.
                      </div>
                    )}
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4 flex justify-center">
                  <button
                    class="inline-block shrink-0 rounded-md border border-orange-300 bg-orange-300 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-orange-300 focus:outline-none focus:ring-orange-400 focus:ring-2 active:text-orange-500"
                  >
                    회원가입
                  </button>
                </div>

                <div class="col-span-6 flex justify-center">
                  <p class="text-base inline-block mb-2 text-[#adadad] hover:text-primary">
                    이미 계정이 있으신가요? &nbsp;
                    <a
                      href={`/signin?redirect=${redirect || "/"}`}
                      class="text-primary text-blue-300 hover:underline"
                    >
                      로그인
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
}
