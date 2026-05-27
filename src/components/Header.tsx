import { useState } from 'react';
import { ActiveTab } from '../types';
import { Menu, X, Bell, Globe, Search, ArrowRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'ko' | 'en'>('ko');

  const navItems = [
    { id: 'home', label: '메인 홈', desc: 'Home' },
    { id: 'academics', label: '학부/대학원 안내', desc: 'Academics' },
    { id: 'campus-life', label: '캠퍼스 라이프', desc: 'Campus Life' },
  ] as const;

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dummyNotifications = [
    { id: 1, title: '2학기 우수장학 수혜 자격 조회를 가이드라인 수정 안내', time: '10분 전', type: '장학' },
    { id: 2, title: '금일 가을 전학생 매칭 상담 센터 임시 휴진', time: '2시간 전', type: '학사' },
    { id: 3, title: '메이커스페이스 전동공구 운용 안전교육 시험 개시', time: '1일 전', type: '일반' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleTabChange('home')} id="header-logo">
            <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-brand-secondary shadow-md shadow-brand-primary/10 transition-transform duration-300 hover:scale-105">
              <GraduationCap className="w-7 h-7 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-brand-primary tracking-tight font-sans">
                  충북대학교
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-brand-secondary/15 text-brand-primary text-[10px] font-bold rounded-md">
                  거점국립대
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono">
                Chungbuk National University
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group overflow-hidden ${
                    isActive 
                      ? 'text-brand-primary bg-brand-primary/5' 
                      : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  <span className="relative z-10 flex flex-col items-center">
                    <span>{item.label}</span>
                    <span className="text-[9px] font-medium opacity-60 tracking-wider font-display uppercase mt-0.5">
                      {item.desc}
                    </span>
                  </span>
                  
                  {/* Subtle hover line */}
                  <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-brand-primary transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-40'
                  }`} />
                </button>
              );
            })}
          </nav>

          {/* Quick Controls */}
          <div className="flex items-center gap-2 sm:gap-3" id="header-controls">
            
            {/* Search Toggle */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  isSearchOpen ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                }`}
                title="통합 검색"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 origin-top-right"
                  >
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="학과, 장학금, 수강신청 등 검색..."
                        className="w-full text-sm px-4 py-3 bg-gray-50 hover:bg-gray-100/50 focus:bg-white rounded-xl border border-gray-200 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/10 pl-10"
                        autoFocus
                      />
                      <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    </div>
                    <div className="mt-3">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">실시간 인기 검색어</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['수강신청', '중앙도서관', '국가장학금', '생활관 식단', '융합연구원'].map((keyword, idx) => (
                          <button 
                            key={idx}
                            onClick={() => {
                              alert(`'${keyword}' 통합 검색으로 이동합니다.`);
                              setIsSearchOpen(false);
                            }}
                            className="text-xs px-2.5 py-1.5 bg-gray-50 hover:bg-brand-primary/5 hover:text-brand-primary rounded-lg border border-gray-100 transition-colors"
                          >
                            <span className="text-[10px] font-mono font-bold text-gray-400 mr-1">0{idx+1}</span>
                            {keyword}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notification Widget */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className={`p-2.5 rounded-xl relative transition-all duration-200 ${
                  isNotificationOpen ? 'bg-brand-primary/10 text-brand-primary' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                }`}
                title="캠퍼스 알림"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
              </button>

              <AnimatePresence>
                {isNotificationOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 origin-top-right"
                  >
                    <div className="p-3 border-b border-gray-50 flex justify-between items-center">
                      <span className="font-bold text-sm text-gray-800">캠퍼스 실시간 알림</span>
                      <button 
                        onClick={() => handleTabChange('home')}
                        className="text-[11px] text-brand-primary font-bold flex items-center gap-0.5 hover:underline"
                      >
                        공지 전체보기 <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="divide-y divide-gray-50 py-1">
                      {dummyNotifications.map((noti) => (
                        <div key={noti.id} className="p-3 hover:bg-gray-50 cursor-pointer rounded-xl transition-colors">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                              noti.type === '장학' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                              noti.type === '학사' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {noti.type}
                            </span>
                            <span className="text-[10px] text-gray-400">{noti.time}</span>
                          </div>
                          <p className="text-xs text-gray-700 font-medium leading-relaxed line-clamp-2">
                            {noti.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switch */}
            <button 
              onClick={() => {
                setCurrentLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
                alert(currentLang === 'ko' ? 'Switched to English language pack.' : '한국어 버전으로 변환되었습니다.');
              }}
              className="p-2.5 text-gray-500 hover:text-brand-primary rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center gap-1 text-xs font-bold"
              title="언어 선택 / Language"
            >
              <Globe className="w-5 h-5" />
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase">{currentLang}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-800 md:hidden"
              aria-label="메뉴 열기"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-inner"
          >
            <div className="px-4 py-3 space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex justify-between items-center px-4 py-3.5 rounded-xl text-left font-bold transition-all ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/5 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold">{item.label}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono font-medium -mt-0.5">{item.desc}</p>
                    </div>
                    {isActive && <div className="w-2 h-2 bg-brand-secondary rounded-full" />}
                  </button>
                );
              })}
            </div>
            
            <div className="p-4 bg-gray-50/50 border-t border-gray-50 space-y-3">
              <div className="flex justify-between text-xs text-gray-500 px-2 font-semibold">
                <span>학사 지원실: 043-261-2114</span>
                <span>입학 상담실: 043-261-3315</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
