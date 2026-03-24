import React, { useState } from 'react'
import colors from '../../theme/colors'
import { getNotified } from '../../redux/slices/getNotifiedSlice'
import { useDispatch, useSelector } from 'react-redux'
function ModalForm({ openModal, setOpenModal }) {
  const { loading } = useSelector((state) => state.getNotified)
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
const dispatch = useDispatch();
const handleSubmit = (e) => {
  e.preventDefault();

  dispatch(getNotified(formData)).then(() => {
    setFormData({
      name: "",
      number: "",
      email: ""
    });

    setOpenModal(false);
  });
};
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

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={HandleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            name="number"
            value={formData.number}
            onChange={HandleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={HandleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: colors.primary }}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>

      </div>

    </div>
  )
}

export default ModalForm
