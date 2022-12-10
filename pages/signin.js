import Link from 'next/link';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SigninScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      console.log('Login: ' + result.status);
      await axios
        .post('/api/auth/loginLog', { provider: 'credentials' })
        .then((res) => {
          console.log(res.data.message);
        });
      if ((result, errors)) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const githubLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn('github', {
        redirect: false,
      });
      console.log('Login: ' + result.status);
      await axios
        .post('/api/auth/loginLog', { provider: 'github' })
        .then((res) => {
          console.log(res.data.message);
        });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const googleLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn('google', {
        redirect: false,
      });
      console.log('Login: ' + result.status);
      await axios
        .post('/api/auth/loginLog', { provider: 'google' })
        .then((res) => {
          console.log(res.data.message);
        });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const naverLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn('naver', {
        redirect: false,
      });
      console.log('Login: ' + result.status);
      await axios
        .post('/api/auth/loginLog', { provider: 'naver' })
        .then((res) => {
          console.log(res.data.message);
        });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const kakaoLoginHandler = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await signIn('kakao', {
        redirect: false,
      });
      console.log('Login: ' + result.status);
      await axios
        .post('/api/auth/loginLog', { provider: 'kakao' })
        .then((res) => {
          console.log(res.data.message);
        });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Sign In">
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">통합 로그인</h1>

            <p class="mt-4 text-gray-500">
              로그인을하고 더 많은 정보를 얻어가세요!
            </p>
          </div>

          <form
            action=""
            class="mx-auto mt-8 mb-0 max-w-md space-y-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div>
              <label htmlFor="email" class="sr-only">
                이메일
              </label>

              <div class="relative">
                <input
                  type="email"
                  {...register('email', {
                    required: '이메일을 입력하세요.',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: '이메일을 형식을 지켜주세요.',
                    },
                  })}
                  className="w-full rounded-lg border-slate-300 p-4 pr-12 text-sm shadow-sml"
                  id="email"
                  placeholder="이메일"
                  autoFocus
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" class="sr-only">
                비밀번호
              </label>
              <div class="relative">
                <input
                  type="password"
                  {...register('password', {
                    required: '비밀번호를 입력하세요.',
                    minLength: {
                      value: 3,
                      message: '비밀번호를 3글자 이상으로 입력하세요.',
                    },
                  })}
                  class="w-full rounded-lg border-slate-300 p-4 pr-12 text-sm shadow-sm"
                  id="password"
                  placeholder="비밀번호"
                  autoFocus
                />
                {errors.password && (
                  <div className="text-red-500 ">{errors.password.message}</div>
                )}

                <span class="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4 grid place-items-center">
              <button
                className="mb-2 py-3 px-6 text-sm font-medium text-orange-400 bg-white rounded border w-full
            border-orange-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-400
            focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
            dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
              >
                로그인
              </button>
            </div>
            <span className="relative block font-light text-md leading-7 text-center text-gray-500">
              <span className="absolute block left-0 top-1/2 h-px w-32 bg-opacity-100 bg-slate-300"></span>
              <span className="absolute block right-0 top-1/2 h-px w-32 bg-opacity-100 bg-slate-300"></span>
              소셜 로그인
            </span>
            <div className="mb-4 text-center">
              <button
                className="mt-2 mb-2 mx-3 py-3 text-sm font-medium text-orange-400 bg-white rounded border w-12 h-12
                border-orange-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-400
                focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
                dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
                type="button"
                onClick={githubLoginHandler}
              >
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                  <svg
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </span>
              </button>
              <button
                className="mx-3 py-3 text-sm font-medium text-orange-400 bg-white rounded border w-12 h-12
                border-orange-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-400
                focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
                dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
                type="button"
                onClick={googleLoginHandler}
              >
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 20"
                  >
                    <path
                      d="M22.0001 11.2439C22.0134 10.4877 21.9338 9.73268 21.7629 8.99512H11.2246V13.0773H17.4105C17.2933 13.793 17.0296 14.4782 16.6352 15.0915C16.2409 15.7048 15.724 16.2336 15.1158 16.6461L15.0942 16.7828L18.4264 19.3125L18.6571 19.3351C20.7772 17.4162 21.9997 14.5928 21.9997 11.2439"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M11.2245 22C14.255 22 16.7992 21.0222 18.6577 19.3355L15.1156 16.6465C14.1679 17.2945 12.8958 17.7467 11.2245 17.7467C9.80508 17.7386 8.42433 17.2926 7.27814 16.4721C6.13195 15.6516 5.27851 14.4982 4.83892 13.1755L4.70737 13.1865L1.24255 15.8143L1.19727 15.9377C2.13043 17.7603 3.56252 19.2925 5.33341 20.3631C7.10429 21.4338 9.14416 22.0005 11.2249 22"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M4.83889 13.1756C4.59338 12.4754 4.46669 11.7405 4.46388 11.0001C4.4684 10.2609 4.59041 9.52697 4.82552 8.82462L4.81927 8.6788L1.31196 6.00879L1.19724 6.06226C0.410039 7.59392 0 9.28503 0 11C0 12.715 0.410039 14.4061 1.19724 15.9377L4.83889 13.1756"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M11.2249 4.25337C12.8333 4.22889 14.3888 4.8159 15.565 5.89121L18.7329 2.86003C16.7011 0.992106 14.0106 -0.0328008 11.2249 3.27798e-05C9.14418 -0.000452376 7.10433 0.566279 5.33345 1.63686C3.56256 2.70743 2.13046 4.23965 1.19727 6.06218L4.82684 8.82455C5.27077 7.50213 6.12703 6.34962 7.27491 5.5295C8.4228 4.70938 9.80439 4.26302 11.2249 4.25337"
                      fill="#EB4335"
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                className="mx-3 py-3 text-sm font-medium text-orange-400 bg-white rounded border w-12 h-12
                border-orange-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-400
                focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
                dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
                type="button"
                onClick={naverLoginHandler}
              >
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start text-green-500">
                  <svg
                    role="img"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Naver</title>
                    <path d="M1.6 0S0 0 0 1.6v20.8S0 24 1.6 24h20.8s1.6 0 1.6-1.6V1.6S24 0 22.4 0zm3.415 5.6h4.78l4.425 6.458V5.6h4.765v12.8h-4.78L9.78 11.943V18.4H5.015Z" />
                  </svg>
                </span>
              </button>
              <button
                className="mx-3 py-3 text-sm font-medium text-orange-400 bg-white rounded border w-12 h-12
                border-orange-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-400
                focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
                dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
                type="button"
                onClick={kakaoLoginHandler}
              >
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start text-yellow-400">
                  <svg
                    role="img"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>KakaoTalk</title>
                    <path d="M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z" />
                  </svg>
                </span>
              </button>
            </div>

            <div class="mb-10 grid place-items-center">
              {/* <a class="text-base inline-block mb-2 text-[#adadad] hover:text-primary">
                비밀번호를 잃어버리셨나요?
              </a> */}
              <p class="text-base inline-block mb-2 text-[#adadad] hover:text-primary">
                아직 회원이 아니신가요? &nbsp;
                <Link
                  href="/signup"
                  class="text-primary text-blue-300 hover:underline"
                >
                  회원가입
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="images/jayden-sim-wYh_UTNgTME-unsplash.jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </Layout>
  );
}
