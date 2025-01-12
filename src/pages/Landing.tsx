import Title from "../components/Title";

export default function LandingPage() {
  return (
    <>
      <Title>WebApp</Title>
      <div class="flex flex-row justify-end px-4 mt-16">
        <div class="w-[50%] hover:motion-ease hover:motion-scale-out-125 rounded-3xl min-h-[200px] bg-gray-900 motion-preset-slide-left motion-duration-1500">
          {" "}
        </div>
      </div>
      <div class="flex flex-row justify-start px-4">
        <div class="w-[50%] rounded-3xl min-h-[200px] bg-gray-900  motion-preset-slide-right motion-duration-1500">
          {" "}
        </div>
      </div>
    </>
  );
}
