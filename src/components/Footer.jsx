import colors from "../theme/colors";
import logo from "../assets/TrinLogo.png"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      id="contact"
      className="px-6 md:px-12 lg:px-16 py-12"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-18 h-18 flex items-center justify-center rounded-lg text-white font-bold"

              >
                <img src={logo} alt="Trin Trin Logo" />
              </div>

              <h2
                className="text-xl font-bold"
                style={{ color: colors.textDark }}
              >
                Tring Tring
              </h2>
            </div>
            <div className="mt-3">
              <p
                className="text-base font-semibold"
                style={{ color: colors.textDark }}
              >
                Call. Confirm. Pay.
              </p>

              <p
                className="text-sm mt-1"
                style={{ color: colors.gray }}
              >
                Food ordering, made simple again.
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: colors.textDark }}
            >
              Company
            </h3>

            <ul className="space-y-2 text-sm" style={{ color: colors.gray }}>

              <li className="cursor-pointer hover:underline"> <Link to="/about-us">About Us </Link></li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Press</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: colors.textDark }}
            >
              Support
            </h3>

            <ul className="space-y-2 text-sm" style={{ color: colors.gray }}>
              <li className="cursor-pointer hover:underline">Help Center</li>
              <li className="cursor-pointer hover:underline">Safety</li>
              <li className="cursor-pointer hover:underline">Terms of Service</li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: colors.textDark }}
            >
              Contact
            </h3>

            <ul className="space-y-2 text-sm" style={{ color: colors.gray }}>
              <li>📞 +91 9663311116</li>
              <li>✉️ support@trintrin.com</li>
              <li>📍 India</li>
            </ul>

            {/* SOCIAL */}
            {/* <div className="flex gap-4 mt-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer"
                style={{ backgroundColor: colors.primary }}
              >
                f
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer"
                style={{ backgroundColor: colors.primary }}
              >
                in
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer"
                style={{ backgroundColor: colors.primary }}
              >
                ig
              </div>
            </div> */}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t mt-10 pt-6 text-center" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-sm" style={{ color: colors.gray }}>
            © 2026 Tring Tring. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;