import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AccountsettingScreen() {
  const router = useRouter();
  const { redirect } = router.query;

  const { data: session } = useSession();

  // useEffect(() => {
  //   if (session?.user) {
  //     router.push(redirect || "/");
  //   }
  // }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('name', session?.user.name);
    setValue('email', session?.user.email);
  }, [session?.user, setValue]);

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('Profile updated successfully');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Profile">
      {/* <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">계정 설정</h1>

        <div className="mb-4">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            className="w-full"
            id="name"
            autoFocus
            {...register("name", {
              required: "변경할 이름을 입력해주세요.",
            })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            className="w-full"
            id="email"
            {...register("email", {
              required: "변경할 이메일을 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "이메일 형식을 지켜주세요.",
              },
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password">비밀번호</label>
          <input
            className="w-full"
            type="password"
            id="password"
            {...register("password", {
              minLength: {
                value: 6,
                message: "비밀번호를 5글자 이상 입력하세요.",
              },
            })}
          />
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "비밀번호 확인을 5글자 이상 입력하세요.",
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
              <div className="text-red-500 ">비밀번호가 일치하지 않습니다.</div>
            )}
        </div>
        <div className="mb-4">
          <button
            className="py-2 px-4 text-sm font-medium text-blue-700 bg-amber-200 rounded border
            border-gray-200 hover:bg-amber-400 focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
            dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            계정 정보 변경
          </button>
          &nbsp; &nbsp;&nbsp;
          <Link
            href={`/?redirect=${redirect || "/"}`}
            className="py-2 px-4 text-sm font-medium text-blue-700 bg-amber-200 rounded border
            border-gray-200 hover:bg-amber-400 focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
            dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            취소
          </Link>
        </div>
      </form> */}

      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="/images/butterfly-gbfa6ab678_1280.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {/* <div class="hidden lg:relative lg:block lg:p-12">
              <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                계정정보 변경하기
              </h2>

              <p class="mt-4 leading-relaxed text-white/90">
                이름과 비밀번호를 변경하기
              </p>
            </div> */}
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
                    {...register('name', {
                      required: '변경할 이름을 입력해주세요.',
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
                    {...register('email', {
                      required: '변경할 이메일을 입력해주세요.',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: '이메일을 형식을 지켜주세요.',
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
                    {...register('password', {
                      required: '비밀번호를 입력하세요.',
                      minLength: {
                        value: 6,
                        message: '비밀번호를 5글자 이상 입력하세요.',
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
                    {...register('confirmPassword', {
                      required: '비밀번호를 한번더 입력해주세요.',
                      validate: (value) => value === getValues('password'),
                      minLength: {
                        value: 3,
                        message: '비밀번호를 2글자 이상 입력하세요.',
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="text-red-500 ">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate' && (
                      <div className="text-red-500 ">
                        비밀번호가 일치하지 않습니다.
                      </div>
                    )}
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <button
                    class="inline-block shrink-0 rounded-md border border-orange-300 bg-orange-300 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-orange-300 focus:outline-none focus:ring-orange-400 focus:ring-2 active:text-orange-500"
                  >
                    계정 정보 변경
                  </button>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <Link
                    href={`/signin?redirect=${redirect || '/'}`}
                    class="inline-block shrink-0 rounded-md border border-orange-300 bg-orange-300 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-orange-300 focus:outline-none focus:ring-orange-400 focus:ring-2 active:text-orange-500"
                  >
                    메인 돌아가기
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
}

AccountsettingScreen.auth = true;
