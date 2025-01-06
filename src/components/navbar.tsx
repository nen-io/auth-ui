import { useNavigate } from "@solidjs/router";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="navbar bg-base-100 mb-5">
        <div class="flex-1">
          <div class="btn btn-ghost text-xl" onClick={() => navigate("/")}>
            WebApp
          </div>
        </div>
      </div>
    </>
  );
};
