import React, { useState } from 'react';
import Layout from '../../components/Layout';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function JwtScreen() {
  const { data: session } = useSession();
  const userEmail = session?.user.email;

  const [username, setUsername] = useState(userEmail);
  const [token, setToken] = useState('');
  const [decoded, setDecoded] = useState('');
  const [result, setResult] = useState('');

  const genJwt = async () => {
    await axios.post('/api/crypto/jwt', { username }).then((res) => {
      setToken(res.data.token);
      localStorage.setItem('jwt', res.data.token);
      let decoded = jwt.decode(res.data.token);
      setDecoded(JSON.stringify(decoded));
    });
  };

  const verifyJwt = async () => {
    await axios.post('/api/crypto/jwt-v', { token }).then((res) => {
      setResult(res.data.result);
    });
  };

  return (
    <Layout title="JWT">
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="/images/jwt.png"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              <Link href="/" class="block text-orange-300">
                <span class="sr-only">Home</span>
              </Link>

              <h1 class="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                JWT (JSON Web Token)
              </h1>

              <p class="mt-4 leading-relaxed text-gray-500">
                인증에 필요한 정보들을 암호화시킨 JSON 토큰을 의미한다. JWT 기반
                인증은 JWT 토큰(Access Token)을 HTTP 헤더에 실어 서버가
                클라이언트를 식별하는 방식이다
              </p>

              <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-md font-bold text-gray-700"
                  >
                    이메일
                  </label>

                  <input
                    type="email"
                    name="input"
                    id="input"
                    autoFocus
                    value={session?.user.email}
                    onChange={(e) => setUsername(e.target.value)}
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">
                  <button
                    class="inline-block shrink-0 rounded-md border border-orange-300 bg-orange-300 px-12 py-3 text-sm font-medium
                    text-white transition hover:bg-transparent hover:text-orange-400 focus:outline-none focus:ring-orange-300 focus:ring-2 active:text-orange-300"
                    type="button"
                    onClick={genJwt}
                  >
                    Jwt 발급하기
                  </button>
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-md font-bold text-gray-700"
                  >
                    JWT - 서버발행
                  </label>

                  <textarea
                    name="jwt"
                    id="jwt"
                    cols="50"
                    rows="3"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={token}
                    readOnly
                  ></textarea>
                </div>

                <div class="col-span-6">
                  <label
                    for="Email"
                    class="block text-md font-bold text-gray-700"
                  >
                    JWT - 클라이언트 복호화, 검증 안됨
                  </label>

                  <textarea
                    name="jwt"
                    id="jwt"
                    cols="50"
                    rows="3"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={decoded}
                    readOnly
                  ></textarea>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4 justify-center">
                  <button
                    type="button"
                    onClick={verifyJwt}
                    class="inline-block shrink-0 rounded-md border border-orange-300 bg-orange-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent
                  hover:text-orange-300 focus:outline-none focus:ring-orange-300 focus:ring-2 active:text-orange-300"
                  >
                    JWT 검증하기
                  </button>
                </div>

                <div class="col-span-6">
                  <label
                    for="Password"
                    class="block text-md font-bold text-gray-700"
                  >
                    검증 여부
                  </label>

                  <input
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    name="jwt"
                    id="jwt"
                    value={result ? '검증된 토큰' : '검증되지 않음'}
                    readOnly
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </Layout>
  );
}
