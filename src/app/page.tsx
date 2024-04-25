import Count from "@/components/Count";
import Login from "@/components/Login";
import Username from "@/components/Username";

const Home = () => {
  return (
    <section className="flex justify-center items-center w-full h-dvh">
      <div className="flex justify-center items-start gap-x-10 w-fit h-20">
        <Count />
        <hr className="w-0.5 h-full bg-black/75 rounded-full" />
        <Username />
        <hr className="w-0.5 h-full bg-black/75 rounded-full" />
        <Login />
      </div>
    </section>
  );
};

export default Home;
