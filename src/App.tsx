/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import { 
  LayoutDashboard, 
  Receipt, 
  Zap, 
  Calendar, 
  ShieldCheck, 
  Info, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  blue: '#2E3192',
  green: '#76B82A',
  bg: '#F5F7FA',
  white: '#FFFFFF',
  text: '#1A1A1A',
  muted: '#6B7280'
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar({ onOpenPrivacy }: { onOpenPrivacy?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://zcxsscvheqidzvkhlnwz.supabase.co/storage/v1/object/public/Default%20image/MACA/maca.svg" 
              alt="Maca Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="hover:opacity-80 transition-opacity font-medium">Features</Link>
            <Link to="/#about" className="hover:opacity-80 transition-opacity font-medium">About</Link>
            <Link to="/privacypolicy" className="hover:opacity-80 transition-opacity font-medium">Privacy Policy</Link>
            <button className="px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95" style={{ backgroundColor: COLORS.blue }}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link to="/#features" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Features</Link>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">About</Link>
              <Link to="/privacypolicy" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium">Privacy Policy</Link>
              <button className="w-full py-3 rounded-xl text-white font-semibold" style={{ backgroundColor: COLORS.blue }}>
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="https://zcxsscvheqidzvkhlnwz.supabase.co/storage/v1/object/public/Default%20image/MACA/maca.svg" 
                alt="Maca Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              The ultimate solution for mess management. Simplifying shared living through technology and transparency.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6" style={{ color: COLORS.blue }}>Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link to="/#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link to="/#about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6" style={{ color: COLORS.blue }}>Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>graphynovus@gmail.com</li>
              <li>+91 9735542669</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-50 pt-8 flex flex-col md:row justify-center items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Maca Mess Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  const features = [
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Mess Management",
      description: "Efficiently manage daily meals, boarder counts, and manager duties."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Expenditure Tracking",
      description: "Keep track of all mess expenses with detailed breakdowns and reports."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Electric Bill",
      description: "Calculate and distribute electricity costs among boarders accurately."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Shift Scheduler",
      description: "Organize manager shifts and duties with an integrated calendar."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6" style={{ color: COLORS.blue }}>
                Smart Mess <br />
                <span style={{ color: COLORS.green }}>Management</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Maca simplifies the complexities of mess operations. From tracking expenditures to calculating bills, we've got everything covered for boarders and managers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-2xl text-white font-bold text-lg shadow-xl flex items-center gap-2 transition-all hover:shadow-2xl hover:-translate-y-1" style={{ backgroundColor: COLORS.blue }}>
                  Download App <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all hover:bg-gray-50" style={{ borderColor: COLORS.blue, color: COLORS.blue }}>
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://zcxsscvheqidzvkhlnwz.supabase.co/storage/v1/object/public/Default%20image/PORTFOLIO/MACAThumbnail.png" 
                  alt="Maca App Interface" 
                  className="rounded-[2rem] w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-gray-50">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: COLORS.green }}>
                    <Receipt className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Bill</p>
                    <p className="text-2xl font-bold" style={{ color: COLORS.blue }}>₹1,234.00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.blue }}>Powerful Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Everything you need to run a mess smoothly, all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 bg-[#F9FAFB] hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg" style={{ backgroundColor: COLORS.blue }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.blue }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-gray-50 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6">
                <Info className="w-4 h-4" /> About Maca
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.blue }}>Designed for Managers and Boarders</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Maca was born out of the need for a transparent and efficient way to manage shared living expenses. Whether you're a manager handling the accounts or a boarder checking your monthly units, Maca provides real-time data and clarity.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time meal tracking",
                  "Automated bill generation",
                  "Transparent expenditure logs",
                  "Easy-to-use manager dashboard"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: COLORS.green }}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Data" referrerPolicy="no-referrer" />
                <div className="bg-[#2E3192] p-6 rounded-3xl text-white">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-80">Accuracy in Billing</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#76B82A] p-6 rounded-3xl text-white">
                  <p className="text-3xl font-bold">Real-time</p>
                  <p className="text-sm opacity-80">Updates & Notifications</p>
                </div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Management" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-16 border border-gray-50"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: COLORS.blue }}>
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-4xl font-bold" style={{ color: COLORS.blue }}>Privacy Policy</h1>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <p className="font-bold text-blue-900 m-0">Last Updated: March 26, 2026</p>
            </div>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">Maca collects information necessary for mess management, including boarder names, contact information, and meal preferences. We also track expenditure data and utility bill distributions as entered by authorized managers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed">Your data is used exclusively to provide mess management services, including:</p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>Calculating individual boarder bills and expenditures.</li>
                <li>Managing manager shifts and duties.</li>
                <li>Generating reports for mess transparency.</li>
                <li>Sending important notifications regarding mess activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p className="leading-relaxed">We implement industry-standard security measures to protect your personal and financial data. Access to mess records is restricted to authenticated boarders and managers of the respective mess.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed">Maca does not sell, trade, or otherwise transfer your personal information to outside parties. Data is only shared within your specific mess group for operational purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">You have the right to access, correct, or delete your personal information stored in Maca. Please contact your mess manager or our support team for assistance.</p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <span className="font-semibold text-blue-600">support@maca.app</span>.</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}
