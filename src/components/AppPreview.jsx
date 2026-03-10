import { useState } from "react";
import colors from "../theme/colors";
import apppreview from "../assets/app-preview.png";
import ModalForm from "./utilis/ModalForm";

function AppPreview() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section
        id="app-preview"
        className="px-6 md:px-12 lg:px-16 py-16"
        style={{ backgroundColor: colors.primaryBg }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">

            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colors.textDark }}
            >
              Experience Food Ordering
              <span style={{ color: colors.primary }}> The Simple Way</span>
            </h2>

            <p
              className="mt-5 text-sm md:text-lg"
              style={{ color: colors.gray }}
            >
              Tring Tring is designed to make food ordering extremely simple.
              Call restaurants directly, choose pickup or home delivery,
              and get your favorite food quickly.
            </p>

            <p
              className="mt-4 text-sm md:text-base font-semibold"
              style={{ color: colors.primary }}
            >
              🚀 Our application is launching soon.
            </p>

            <button
              className="mt-6 px-8 py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: colors.primary }}
              onClick={() => setOpenModal(true)}
            >
              Notify Me When Live
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">

            <div
              className="absolute w-[350px] h-[350px] rounded-full blur-3xl opacity-40"
              style={{ backgroundColor: colors.primary }}
            ></div>

            <img
              src={apppreview}
              alt="Trin Trin App Preview"
              className="relative w-[260px] md:w-[340px] lg:w-[420px] drop-shadow-2xl"
            />

          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
      <ModalForm openModal={openModal} setOpenModal={setOpenModal}/>
      )}
    </>
  );
}

export default AppPreview;