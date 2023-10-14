
const Home = () => {

  const handleSectionLink = (section:string) => {
    document.getElementById(`${section}`)?.scrollIntoView({
      behavior:"smooth", block: "start", inline:"nearest"
    });
  }

  return (
    <section className="w-full h-screen flex flex-wrap items-center justify-center bg-orange-300 font-montserrat" id="home">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center">
          <span className="text-7xl text-white text-center w-full font-comfortaa drop-shadow-xl shadow-yellow-700">Art Prints</span>
          <span className="text-2xl italic font-light w-full text-center">& More!</span>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/clothing.png')] bg-cover transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3">
          <a onClick={() => handleSectionLink("clothing")}>SHOP CLOTHING</a>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/home-decor.png')] bg-cover bg-center transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3 mx-2">
          <a onClick={() => handleSectionLink("home-decor")}>SHOP HOME DECOR</a>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/prints.png')] bg-cover transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3">
          <a onClick={() => handleSectionLink("prints")}>SHOP PRINTS</a>
        </div>
      </div>
    </section>
  );
}
 
export default Home;