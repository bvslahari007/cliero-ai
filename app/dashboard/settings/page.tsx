import { interTight, instrumentSerif } from "@/app/fonts";
import Footer from "@/components/footer";

export default function Settings() {
  return (
    <div className="notebook-bg min-h-screen bg-white p-14 py-12">
      <h1
        className={`${interTight.className} text-4xl md:text-5xl font-bold text-blue-900`}
      >
        Settings
      </h1>

      <p className={`${instrumentSerif.className} mt-2 text-2xl md:text-3xl text-gray-500`}>
        Manage your profile and learning preferences.
      </p>

      <div className={`${interTight.className} mt-8 max-w-2xl `}>
        
        {/* Full Name */}
        <div className="mb-4">
          <label className="mb-2 block text-lg font-medium text-blue-900">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="
            bg-white
              w-full
              rounded-2xl
              border
              border-blue-800
              p-3
              text-blue-900
              focus:outline-none
              focus:ring-2
              focus:ring-blue-800
            "
          />
        </div>

        {/* Domain */}
        <div className="mb-8">
          <label className="mb-2 block text-lg font-medium text-blue-900">
            Field of Study
          </label>

          <select
            className="
            bg-white
              w-full
              rounded-2xl
              border
              border-blue-800
              p-3
              text-blue-900
              focus:outline-none
              focus:ring-2
              focus:ring-blue-800
            "
          >
            <option>Computer Science</option>
            <option>Artificial Intelligence</option>
            <option>Data Science</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Electronics</option>
            <option>Electrical Engineering</option>
            <option>Civil Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Aerospace Engineering</option>
            <option>Humanities</option>
            <option>Law</option>
            <option>Other</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          className="
            rounded-2xl
            bg-blue-900
            px-6
            py-3
            text-white
            transition-all
  duration-300
  hover:scale-105
  hover:shadow-lg
  active:scale-95
  hover:bg-blue-800
          "
        >
          Save Changes
        </button>
      </div>

      {/* Logout */}
      <div className="mt-8">
        <button
          className="
            rounded-2xl
            border
            border-red-300
            px-6
            py-3
            text-red-600
            transition-all
  duration-300
  hover:scale-105
  hover:shadow-lg
  active:scale-95
  hover:bg-red-500
  hover:text-white
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}