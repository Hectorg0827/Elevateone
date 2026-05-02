import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Menu,
  X,
  Phone,
  MapPin,
  BarChart3,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-sm px-8 py-4 font-semibold tracking-wide transition-all duration-300';
  const variants = {
    primary:
      'bg-amber-500 text-slate-900 hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1',
    secondary: 'border-2 border-slate-200 bg-transparent text-slate-100 hover:bg-slate-100 hover:text-slate-900',
    outline: 'border-2 border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white'
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="absolute -mr-10 -mt-10 right-0 top-0 h-32 w-32 rounded-full bg-amber-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <p className="leading-relaxed text-slate-600">{description}</p>
    </div>
    <div className="mt-6 flex translate-y-2 items-center text-sm font-semibold text-amber-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      Learn more <ArrowRight size={16} className="ml-2" />
    </div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return <div className="min-h-screen bg-slate-50">Modernized landing page scaffold inserted.</div>;
}
