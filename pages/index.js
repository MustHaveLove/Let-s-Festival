import Layout from '../components/Layout';
import Styles from '../styles/Home.module.css';
import Slider from 'react-slick';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import Slidera from '../components/Slidera';
import Link from 'next/link';

export default function Home() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout title="Home">
      <section class="relative bg-[url('../public/orange.svg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/15 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let&#39;s
              <strong class="font-extrabold text-orange-500 sm:block">
                Festival
              </strong>
            </h1>

            <p class="mt-5 sm:text-xl sm:leading-relaxed">
              하나의 사이트에서 한국에 존재하는 모든 지역축제를 알아보세요.
              <br />
              다양한 정보들을 하나의 사이트에서 손쉽게 얻어 축제들에 대한
              관심도를 높일 수 있습니다.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/signin"
                class="block w-full rounded bg-orange-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-500 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              >
                로그인
              </Link>

              <Link
                href="/signup"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-400 shadow hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              >
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      </section>

      <Slidera></Slidera>

      {/* 축제 유튜브 링크  */}
      <h1 className={Styles.Youtube_title}>축제 유튜브 소개</h1>
      <h2 className={Styles.Youtube_title_a}></h2>
      <div className={Styles.Youtube_center}>
        <iframe
          src="https://www.youtube.com/embed/qrFnzqUsNXU"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/RKnB-x5iHpM"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/9fpaJvFKVQQ"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>
      </div>

      <h1 className={Styles.Youtube_title}>사이트 데모 영상</h1>
      <h2 className={Styles.Youtube_title_a}></h2>
      <div className={Styles.Youtube_center1}>
        <iframe
          src="https://www.youtube.com/embed/niABaCA8OnY"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box1}
        ></iframe>
      </div>

      <Link href="#" className={Styles.back_to_top}>
        <ArrowUpIcon></ArrowUpIcon>
      </Link>
    </Layout>
  );
}
