import Title from "../components/Title";

export default function LandingPage() {
  return (
    <>
      <Title>WebApp</Title>
      <div class="flex flex-row justify-end px-4 mt-16">
        <div class="w-[50%] rounded-3xl p-10 min-h-[200px] bg-blue-900 motion-preset-slide-left motion-duration-1500">
          {"Get Ready for this Epic App"}
        </div>
      </div>
      <div class="flex flex-row justify-start px-4">
        <div class="w-[50%] rounded-3xl p-10 min-h-[200px] bg-blue-900  motion-preset-slide-right motion-duration-1500">
          {"Give me all your money and data plz"}
        </div>
      </div>
      <div class="flex flex-row justify-end px-4 mt-16">
        <div class="w-[50%] rounded-3xl p-10 min-h-[200px] bg-blue-900 motion-preset-slide-left motion-duration-1500">
          {"Here's some reasons why you should"}
        </div>
      </div>
    </>
  );
}
