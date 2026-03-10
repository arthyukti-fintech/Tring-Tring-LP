import React from 'react'
import colors from '../../theme/colors'

function ModalForm({openModal, setOpenModal}) {
  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div
            className="bg-white rounded-xl p-8 w-[90%] max-w-md relative"
          >

            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-xl cursor-pointer"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h3
              className="text-2xl font-bold mb-4 text-center"
              style={{ color: colors.textDark }}
            >
              Get Notified When We Launch
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-lg px-4 py-2"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: colors.primary }}
              >
                Submit
              </button>

            </form>

          </div>

        </div>
  )
}

export default ModalForm
