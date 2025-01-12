import { useNavigate } from "@solidjs/router";
import { BiSolidUserCircle } from "solid-icons/bi";
import { useStore } from "../store";
import { Show } from "solid-js";

export default () => {
  const navigate = useNavigate();
  const [store] = useStore();

  return (
    <>
      <div class="navbar motion-preset-slide-down motion-ease motion-duration-500 sticky z-10 top-0 bg-base-200 mb-5">
        <div class="flex-1">
          <a
            class="btn btn-ghost text-xl "
            onClick={() => {
              if (store.loggedIn) {
                navigate("/home");
              } else navigate("/");
            }}
          >
            🦍 WebApp 🦍
          </a>
        </div>
        <Show when={!store.loggedIn}>
          <a class="btn btn-primary" onClick={() => navigate("/sign-in")}>
            {" "}
            Sign In{" "}
          </a>
        </Show>
        <Show when={store.loggedIn}>
          <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                class="btn btn-ghost btn-circle avatar"
              >
                <div class="w-10 rounded-full">
                  <BiSolidUserCircle size={40} />
                </div>
              </div>
              <ul
                tabIndex={0}
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li onClick={() => navigate("/settings")}>
                  <a>Settings</a>
                </li>
                <li
                  onClick={() => {
                    store.setLogout();
                    navigate("/sign-in");
                  }}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </Show>
      </div>
    </>
  );
};
