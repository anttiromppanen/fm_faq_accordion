import Card from "./components/Card";

function App() {
  return (
    <main className="px-6 md:px-0">
      <div className="bg-userMobileBg md:bg-userDesktopBg absolute left-0 top-0 -z-10 h-[232px] w-full bg-cover bg-no-repeat md:h-[320px]" />
      <Card />
    </main>
  );
}

export default App;
