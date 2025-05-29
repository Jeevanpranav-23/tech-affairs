// LoadingSpinner.js
function LoadingSpinner() {
  return `
    <div class="flex items-center justify-center h-screen w-full">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  `;
}

// Button.js
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = "",
  onClick,
  type = 'button'
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-slate-800 hover:bg-slate-900 text-white shadow-sm',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return `<a href="${href}" class="${classes}" onclick="${onClick}">${children}</a>`;
  }

  return `<button type="${type}" class="${classes}" onclick="${onClick}">${children}</button>`;
}

// SectionHeading.js
function SectionHeading({ title, subtitle, centered = false }) {
  return `
    <div class="mb-10 ${centered ? 'text-center' : ''}">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">${title}</h2>
      ${subtitle ? `<p class="text-lg text-slate-600 max-w-2xl mx-auto">${subtitle}</p>` : ''}
    </div>
  `;
}

// About.js
const stats = [
  { icon: '<svg class="h-6 w-6 text-blue-600" viewBox="0 0 24 24"><path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/></svg>', value: '500+', label: 'Active Members' },
  { icon: '<svg class="h-6 w-6 text-blue-600" viewBox="0 0 24 24"><path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1m-1 11h-5v5h5v-5z"/></svg>', value: '20+', label: 'Annual Events' },
  { icon: '<svg class="h-6 w-6 text-blue-600" viewBox="0 0 24 24"><path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>', value: '100+', label: 'Projects' },
  { icon: '<svg class="h-6 w-6 text-blue-600" viewBox="0 0 24 24"><path d="M18 2h-3v3h-2V2H9v3H7V2H4v4h3v1H4v4h3v-1h2v1h2v-1h2v1h2v-1h2v1h2v-1h3V6h-3V5h3V2h-3zm-5 4H9V5h4v1zm3 0h-1V5h1v1zm-9 5v1h1v-1H7zm4 0H9v1h2v-1zm2 0h-1v1h1v-1zm4 0h-3v1h3v-1z"/></svg>', value: '13+', label: 'Years of Excellence' }
];

function About() {
  let activeTab = 'mission';

  function setActiveTab(tab) {
    activeTab = tab;
    // You'll need to re-render the component here in a real app
  }

  return `
    <section id="about" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4">
        ${SectionHeading({
          title: "About!",
          subtitle: "A technical society nurturing innovation and excellence at IIIT Kancheepuram",
          centered: true
        })}

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img src="/images/mainphoto.png" alt="Photo" class="object-cover w-full h-full">
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center text-center">
              <svg class="h-8 w-8 text-blue-600 mb-2" viewBox="0 0 24 24"><path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"/></svg>
              <span class="text-sm font-medium text-slate-600">Established</span>
              <span class="text-xl font-bold text-slate-900">2007</span>
            </div>
          </div>

          <div>
            <div class="mb-6">
              <div class="flex space-x-1 border-b border-gray-200">
                <button onclick="setActiveTab('mission')" class="py-2 px-4 font-medium text-sm ${activeTab === 'mission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}">
                  Our Mission
                </button>
                <button onclick="setActiveTab('motto')" class="py-2 px-4 font-medium text-sm ${activeTab === 'motto' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}">
                  Our Motto
                </button>
                <button onclick="setActiveTab('values')" class="py-2 px-4 font-medium text-sm ${activeTab === 'values' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}">
                  Our Values
                </button>
              </div>

              <div class="mt-6">
                ${activeTab === 'mission' ? `
                  <div class="animate-fadein">
                    <h3 class="text-xl font-semibold mb-3 flex items-center">
                      <svg class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 24 24"><path d="M13 3v10h8V3m-8 18h8V11h-8M3 21h8v-8H3m0-2h8V3H3v8z"/></svg>
                      Our Mission
                    </h3>
                    <p class="text-slate-600 mb-4">
                      Technical Affairs aims to foster a vibrant technical culture at IIIT Kancheepuram by providing students with opportunities to explore various domains of technology and innovation. Our mission is to create a healthy community where people interact, explore, and increase their knowledge with added fun.
                    </p>
                    <p class="text-slate-600">
                      Our goal is to empower students with the skills and knowledge necessary to excel in the rapidly evolving technological landscape and contribute meaningfully to the global tech community.
                    </p>
                  </div>
                ` : ''}

                ${activeTab === 'motto' ? `
                  <div class="animate-fadein">
                    <h3 class="text-xl font-semibold mb-3 flex items-center">
                      <svg class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 24 24"><path d="M18 2h-3v3h-2V2H9v3H7V2H4v4h3v1H4v4h3v-1h2v1h2v-1h2v1h2v-1h2v1h2v-1h3V6h-3V5h3V2h-3zm-5 4H9V5h4v1zm3 0h-1V5h1v1zm-9 5v1h1v-1H7zm4 0H9v1h2v-1zm2 0h-1v1h1v-1zm4 0h-3v1h3v-1z"/></svg>
                      Our Motto
                    </h3>
                    <p class="text-slate-600 mb-4">
                      He who has a why can endure any how.
                    </p>
                    <p class="text-slate-600">
                      We aspire to be recognized nationally for our technical prowess, innovative projects, and the quality of engineers we help shape.
                    </p>
                  </div>
                ` : ''}

                ${activeTab === 'values' ? `
                  <div class="animate-fadein">
                    <h3 class="text-xl font-semibold mb-3 flex items-center">
                      <svg class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 24 24"><path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/></svg>
                      Our Values
                    </h3>
                    <ul class="text-slate-600 space-y-2">
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span><strong>Innovation:</strong> Encouraging creative thinking and novel approaches to problem-solving</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span><strong>Collaboration:</strong> Fostering teamwork and knowledge sharing across technical domains</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span><strong>Excellence:</strong> Striving for the highest standards in all our endeavors</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span><strong>Inclusivity:</strong> Creating a welcoming environment for all passionate about technology</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span><strong>Continuous Learning:</strong> Embracing lifelong learning and adaptability</span>
                      </li>
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              ${stats.map(stat => `
                <div class="bg-white p-4 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                  <div class="flex justify-center mb-2">${stat.icon}</div>
                  <div class="text-2xl font-bold text-slate-900">${stat.value}</div>
                  <div class="text-sm text-slate-600">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact.js
function Contact() {
  const formData = {
    name: "",
    email: "",
    interest: "",
    message: "",
  };

  function handleChange(e) {
    const { name, value } = e.target;
    formData[name] = value;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const applicantData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };
      
      // Save to a JSON file (in a real application, this would typically be handled by a backend)
      const blob = new Blob([JSON.stringify(applicantData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `applicant-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('Thank you for your interest! Your application has been saved.');
      formData.name = "";
      formData.email = "";
      formData.interest = "";
      formData.message = "";
    } catch (error) {
      console.error('Error saving application:', error);
      alert('There was an error saving your application. Please try again.');
    }
  }

  return `
    <section id="contact" class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-4">
        ${SectionHeading({
          title: "Join Tech",
          subtitle: "Interested in becoming a part of our technical community? Reach out to us!",
          centered: true
        })}

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden">
            <div class="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="p-6 md:p-8">
              <h3 class="text-xl font-bold mb-6 flex items-center">
                <svg class="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 24 24"><path d="M2 20v-6l15-2-15-2V4l22 8-22 8z"/></svg>
                Get in Touch
              </h3>

              <form onsubmit="handleSubmit(event)">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value="${formData.name}"
                      onchange="handleChange(event)"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Harshitha"
                      required
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value="${formData.email}"
                      onchange="handleChange(event)"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="harshi@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div class="mb-6">
                  <label for="interest" class="block text-sm font-medium text-gray-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value="${formData.interest}"
                    onchange="handleChange(event)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="auv">AUV Society</option>
                    <option value="cs">CS Club</option>
                    <option value="epic">EPIC Club</option>
                    <option value="gdsc">GDSC IIITDM</option>
                    <option value="ipd">IPD club</option>
                    <option value="mars">MaRS</option>
                    <option value="optica">Optica IIITDM Students Chapter</option>
                    <option value="robotics">Robotics Club</option>
                    <option value="sae">SAE Collegiate club of IIITDM Kancheepuram</option>
                    <option value="asme">ASME IIITDM Stdents Section</option>
                    <option value="ieee">IEEE Students Branch</option>
                    <option value="tad">TAD Aerodesign Club</option>
                  </select>
                </div>

                <div class="mb-6">
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value="${formData.message}"
                    onchange="handleChange(event)"
                    rows="4"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your interests and experience..."
                    required
                  ></textarea>
                </div>

                ${Button({
                  type: "submit",
                  variant: "primary",
                  className: "w-full",
                  children: "Submit Application"
                })}
              </form>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-6">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600/20 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-blue-500" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Address</h4>
                    <p class="text-gray-400">
                      Technical affairs, IIIT Kancheepuram<br />
                      Kandigai, Nellikuppam, Tamil Nadu,600127.
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600/20 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-blue-500" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Email</h4>
                    <a href="mailto:technical.affairs@iiitdm.ac.in" class="text-gray-400 hover:text-white transition-colors">
                      technical.affairs@iiitdm.ac.in
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="bg-blue-600/20 p-3 rounded-lg">
                    <svg class="h-6 w-6 text-blue-500" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-lg">Phone</h4>
                    <a href="tel:+911234567890" class="text-gray-400 hover:text-white transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div class="mt-10 bg-slate-800 rounded-xl p-6">
                <h3 class="text-xl font-bold mb-4">Recruitment Process</h3>
                <ol class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                    <span>Submit your application via the form</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                    <span>Technical assessment based on your area of interest</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                    <span>Personal interview with club coordinators</span>
                  </li>
                  <li class="flex items-start">
                    <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                    <span>Selection and onboarding</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}