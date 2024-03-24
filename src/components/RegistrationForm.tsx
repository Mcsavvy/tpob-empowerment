// RegistrationForm.tsx
import * as React from "preact/compat";
import { useState } from "preact/compat";
import axios from "axios";

const techCategories = [
  "Web Development",
  "Data Science",
  "Mobile Apps",
  "Cloud Computing",
  "Machine Learning",
  "Game Development",
  "Cybersecurity",
  "DevOps",
  "UI/UX Design",
  "Internet of Things",
  "Blockchain",
  "Other",
];

// const localUrl = "http://localhost:8000";
const prodUrl = "https://api.techprojectonbudget.com";

const axiosInstance = axios.create({
  baseURL: prodUrl,
});

async function RegisterUser(firstName: string, lastName: string, email: string, category: string) {
  await axiosInstance.post("/register/", {
    tech_categories: [{name: category}],
    email,
    first_name: firstName,
    last_name: lastName,
    username: email.split("@")[0],
    password: email,
    password2: email,
  });
}

async function LoginUser(email: string) {
  const response = await axiosInstance.post("/login/", {
    email,
    password: email,
  });
  const access: string = response.data.access;
  return access;
}


async function CastVote(accessToken: string) {
  await Promise.all([
    await axiosInstance.post("poll/answers/10/vote/", {}, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    })
  ]);
}



function VoteButton({onClick, status: state}: {onClick: () => void, status: "idle" | "loading" | "success" | "error"}) {
  const baseClasses = "w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center";
  if (state === "loading") {
    return (
      <button className={baseClasses + " bg-primary"} disabled>
        Voting...
      </button>
    );
  } else if (state === "success") {
    return <button className={baseClasses + " bg-green-500"} disabled>
      Voted!
    </button>
  } else if (state === "error") {
    return <button className={baseClasses + " bg-red-500"} disabled>
      An Error Occurred
    </button>
  }
  return <button className={baseClasses + " bg-primary"} onClick={onClick}>
    <span>Cast Your Vote</span>
  </button>
}

const RegistrationForm: React.FC = () => {

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">( "idle" );
  const [selectedCategory, setSelectedCategory] = useState<string>(techCategories[0]);
  const [email, _setEmail] = useState<string>("");
  const [firstName, _setFirstName] = useState<string>("");
  const [lastName, _setLastName] = useState<string>("");

  function withClearError<A, R>(fn: (...args: [A]) => R) {
    return (...args: [A]): void => {
      if (status == "error" ) setStatus("idle");
      fn(...args);
    }
  }

  const setFirstName = withClearError(_setFirstName);
  const setLastName = withClearError(_setLastName);
  const setEmail = withClearError(_setEmail);


  return (
    <section class="bg-gray-50 dark:bg-gray-900" id="registration-form">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Join To Feed 50 People
            </h1>
            <form class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="fname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  onInput={(e) => setFirstName(e.currentTarget.value)}
                  value={firstName}
                  required
                />
              </div>
              <div>
                <label
                  for="lname"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  onInput={(e) => setLastName(e.currentTarget.value)}
                  value={lastName}
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="johndoe@example.com"
                  onInput={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                  required
                />
              </div>
              <label
                for="tech-category"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Tech Specialization
              </label>
              <select
                id="countries"
                onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                value={selectedCategory}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* <option selected>Choose your tech specialty</option> */}
                {techCategories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
              <VoteButton
                onClick={() => {
                  setStatus("loading");
                  RegisterUser(firstName, lastName, email, selectedCategory)
                    .then(() => LoginUser(email))
                    .then(CastVote)
                    .then(() => setStatus("success"))
                    .catch(() => setStatus("error"));
                  console.log("firstName", firstName);
                  console.log("lastName", lastName);
                  console.log("email", email);
                  console.log("selectedCategory", selectedCategory);
                }}
                status={status}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
