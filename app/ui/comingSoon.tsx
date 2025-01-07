import HeaderComponent from "./header";
import InstallMethodComponent from "./installMethod";
import Link from "next/link";

export default async function ComingSoonComponent() {
  return (
    <main className="grid grid-rows-base-layout h-screen w-full">
      <HeaderComponent />
      <div className="grid row-start-2 overflow-auto px-3">
        <h1 className="text-4xl text-center mt-5">Coming Soon...</h1>
        <div className="text-lg text-center">
          <p>アプリケーション公開予定日: 1月上旬</p>
          <p>実験期間: 1/8(水)〜1/10(金)</p>
          <p className="text-xl font-bold underline text-red-500">
            本アプリケーションをスマートフォンの
            ホーム画面に追加してお待ちください
          </p>
          {/* <Link
            href="https://kankyoseisaku.pupu.jp/enre/#content"
            target="_blank"
            className="m-0 text-blue-600 underline"
          >
            ホームページはこちら
          </Link> */}
          <p></p>
        </div>
        <p className="font-bold text-xl text-center">
          アプリケーションを
          <br />
          ホーム画面に追加する方法
        </p>
        <InstallMethodComponent />
      </div>
    </main>
  );
}
