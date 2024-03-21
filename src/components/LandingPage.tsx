import RegistrationForm from "./RegistrationForm";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <section className="text-center bg-gray-200 py-12">
        <div class="flex flex-col items-center justify-center lg:py-0">
          <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="/tpob-logo.png" alt="logo" />
            Tech Project On Budget
          </a>
        </div>
        <p className="text-xl mb-8">
          Join us in our initiative to feed 50 people in Lagos.
        </p>
        <a role={"button"} href={"#registration-form"} className="bg-primary text-white font-bold py-2 px-4 rounded-full">
          Join Us Now
        </a>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <p className="max-w-4xl mx-auto text-lg text-center">
          In the heart of Lagos, amidst the hustle and bustle of the city, there
          lies a silent narrative that often goes unnoticed. Everyday, countless
          people face the uncertainty of not knowing where their next meal will
          come from.
          <br />
          While the city is known for its vibrant culture and economic
          opportunities, the reality is that many people are left behind. Our
          mission is born from the streets of Lagos, inspired by the stories of
          those who live them. It's not just about providing food; it's about
          offering a moment of peace a taste of hope, and a reminder that they
          are not forgotten.
          <br />
          <br />
          Join us in making a difference. Together, we can feed 50 people in
          Lagos.
        </p>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat this block for each step */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">1. Register & Vote</h3>
            <p>
              Begin by signing up on our platform. Your registration not only
              brings us closer to our goal but also strengthens our community of
              supporters. After signing up, cast your vote for our mission. Your
              vote is your voice, telling us and the world that you stand for
              ending hunger in our community.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">2. Amplify Our Cause</h3>
            <p>
              After voting, we encourage you to share our mission with your
              friends, family, and social network. The more people know about
              our initiative, the bigger the impact we can make. Use the social
              sharing tools on our site to spread the word with just a few
              clicks.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">3. Pooling Resources</h3>
            <p>
              Each vote brings us closer to winning the funds needed to feed 50
              people. Beyond the financial aspect, your involvement raises
              awareness about hunger in Lagos and encourages more collective
              actions towards solving it.
            </p>
          </div>
          {/* ... */}
        </div>
      </section>
      <RegistrationForm />
      <footer className="text-center py-8">
        <p>&copy; 2024 TPOB Initiative</p>
      </footer>
    </div>
  );
};

export default LandingPage;
