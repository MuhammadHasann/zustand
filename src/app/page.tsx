import Count from "@/components/Count";
import Username from "@/components/Username";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-y-3 mx-auto w-fit h-dvh">
      <Count />
      <hr className="w-full h-0.5 bg-black/75 rounded-full" />
      <Username />
    </section>
  );
};

export default Home;
