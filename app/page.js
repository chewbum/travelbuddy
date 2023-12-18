import Link from "next/link";
const HomePage = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">TravelBuddy</h1>
          <p className="py-6 text-lg leading-loose">
            Your AI language companion. Powered by OpenAI, it enhances your
            conversations, content creation, and more!
          </p>
          <Link href="/chat" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
