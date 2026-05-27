import { useState } from 'react';
import { newsItems, academicNotices, academicCalendar, universityStats } from '../data/homeData';
import { ActiveTab, AcademicNotice } from '../types';
import { ArrowRight, Calendar, Bookmark, Flame, Zap, Award, BookOpen, Users, GraduationCap, Clock, Volume2, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeTab({ setActiveTab }: HomeTabProps) {
  const [activeNoticeCategory, setActiveNoticeCategory] = useState<string>('전체');
  const [noticeSearch, setNoticeSearch] = useState<string>('');

  // Filtering notices
  const filteredNotices = academicNotices.filter((item) => {
    const matchesCategory = activeNoticeCategory === '전체' || item.category === activeNoticeCategory;
    const matchesSearch = item.title.toLowerCase().includes(noticeSearch.toLowerCase()) || 
                          item.department.toLowerCase().includes(noticeSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickLink = (linkId: string) => {
    if (linkId === 'academics') {
      setActiveTab('academics');
    } else if (linkId === 'campus-life') {
      setActiveTab('campus-life');
    } else {
      alert(`'${linkId}' 관련 서무 서비스로 이동합니다.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredNews = newsItems.find(item => item.featured) || newsItems[0];
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[550px] overflow-hidden rounded-3xl" id="home-hero-section">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1800&auto=format&fit=crop" 
            alt="Chungbuk National University Campus" 
            className="w-full h-full object-cover brightness-40 saturate-[0.85] scale-102 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-5"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-secondary/90 text-brand-primary-dark font-black text-xs uppercase tracking-widest shadow-md">
              <Flame className="w-3.5 h-3.5 fill-brand-primary animate-pulse" />
              <span>Academic Excellence since 1951</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] font-sans tracking-tight">
              충북대학교와 함께 <br />
              <span className="text-brand-secondary">미래를 창조합니다</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans font-medium max-w-2xl">
              전통적인 학문의 유산과 현대적인 디지털 접근성을 결합하여 학생, 교수진 및 미래의 지원자들에게 신뢰받는 혁신의 중심이 됩니다. 빛나는 개신인들이 세계 무대에서 마음껏 기량을 펼칠 수 있도록 최상의 교육 환경을 지원하겠습니다.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => handleQuickLink('academics')}
                className="px-6 py-3.5 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-2xl shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary-light/40 transition-all flex items-center gap-1.5"
              >
                <span>학부 지원 가이드</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleQuickLink('campus-life')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5"
              >
                <span>캠퍼스 온라인 시설 답사</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK LINKS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quick-links-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 -mt-16 relative z-20">
          {[
            { id: 'admissions', title: '입학 안내', desc: 'Admissions Info', icon: GraduationCap, color: 'bg-emerald-800 text-white shadow-emerald-900/10 hover:bg-emerald-700' },
            { id: 'library', title: '중앙도서관', desc: 'Central Library', icon: BookOpen, color: 'bg-white text-gray-800 shadow-gray-200/50 hover:bg-gray-50 hover:border-brand-primary border border-gray-100' },
            { id: 'map', title: '캠퍼스 맵', desc: 'Interactive Map', icon: Users, color: 'bg-white text-gray-800 shadow-gray-200/50 hover:bg-gray-50 hover:border-brand-primary border border-gray-100' },
            { id: 'scholarships', title: '장학 장려금', desc: 'Financial Aid', icon: Award, color: 'bg-brand-secondary text-brand-primary-dark shadow-amber-700/10 hover:bg-brand-secondary-light' }
          ].map((lnk) => {
            const IconComponent = lnk.icon;
            return (
              <button
                key={lnk.id}
                onClick={() => {
                  if (lnk.id === 'map') {
                    // Smooth scroll to interactive map on the page or switch to campus life
                    setActiveTab('campus-life');
                    setTimeout(() => {
                      const element = document.getElementById('campus-interactive-map-panel');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    handleQuickLink(lnk.id);
                  }
                }}
                className={`flex flex-col items-start p-5 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer text-left w-full group ${lnk.color}`}
                id={`quick-link-card-${lnk.id}`}
              >
                <div className={`p-2.5 rounded-xl mb-4 ${lnk.color.includes('bg-white') ? 'bg-brand-primary/5 text-brand-primary' : 'bg-white/10 text-white'}`}>
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-extrabold tracking-tight">{lnk.title}</h3>
                <p className={`text-[11px] font-semibold mt-0.5 tracking-wider uppercase font-mono ${lnk.color.includes('bg-white') ? 'text-gray-400' : 'text-white/70'}`}>
                  {lnk.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. NEWS & EVENTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="news-section">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">최신 소식 및 이벤트</h2>
            <p className="text-xs sm:text-sm text-gray-400 font-bold font-mono tracking-wider uppercase">Chungbuk National News & Events</p>
          </div>
          <button 
            onClick={() => alert('소식 게시판 전체 목록 페이지로 이동합니다.')}
            className="text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary-light flex items-center gap-1 hover:underline"
          >
            기사 전체보기 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Featured big card (Left) */}
          <div className="lg:col-span-2 group" id="featured-news-card">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-brand-primary text-white text-[11px] font-black tracking-widest uppercase rounded-lg shadow-md">
                  {featuredNews.category}
                </span>
                <span className="absolute bottom-4 right-4 inline-block px-2.5 py-1 bg-black/50 backdrop-blur-md text-white/90 text-[10px] font-mono rounded">
                  조회수 {featuredNews.views}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>발행일: {featuredNews.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-gray-900 group-hover:text-brand-primary leading-snug transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {featuredNews.description}
                  </p>
                </div>
                <button 
                  onClick={() => alert(`'${featuredNews.title}' 보도자료를 읽습니다.`)}
                  className="text-xs font-black text-brand-primary flex items-center gap-1 group/btn self-start"
                >
                  보도 보도 전문 기사 정독 <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Sibling rows (Right) */}
          <div className="space-y-6 flex flex-col justify-between" id="other-news-list">
            {otherNews.map((news) => (
              <div 
                key={news.id} 
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col h-[48%]"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 inline-block px-2.5 py-0.5 bg-brand-secondary text-brand-primary-dark text-[9px] font-black roundedShadow shadow">
                    {news.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono font-medium">{news.date}</span>
                    <h4 className="text-sm font-black text-gray-900 group-hover:text-brand-primary line-clamp-2 mt-0.5 transition-colors">
                      {news.title}
                    </h4>
                  </div>
                  <button 
                    onClick={() => alert(`'${news.title}' 간이 기사를 로드합니다.`)}
                    className="text-[11px] font-bold text-brand-primary flex items-center gap-1 group/sub-btn mt-2"
                  >
                    바로가기 <ArrowRight className="w-3 h-3 group-hover/sub-btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STATISTICS WRAPPER */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden" id="stats-section">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase text-brand-secondary tracking-widest bg-white/10 px-3 py-1 rounded-md">
              대학 경영 지표
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
              세계를 선도하는 <br />혁신 거점 대학
            </h2>
            <p className="text-xs text-brand-secondary-light font-bold">
              전통과 학벌 위에서 가치를 증명하며 세계적인 기술 선진 학술 포커스를 영위하고 있습니다.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
            {universityStats.map((st, idx) => {
              // Map lucide icons
              return (
                <div key={idx} className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-brand-secondary text-2xl font-black font-mono tracking-tight">{st.value}</div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">{st.label}</h4>
                    <p className="text-[10px] text-gray-300 leading-normal mt-0.5">{st.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. NOTICE BOARD & ACADEMIC CALENDAR (2 COLUMNS) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="notices-and-calendar-section">
        
        {/* Academic Notices (Left) */}
        <div className="lg:col-span-2 space-y-6" id="notices-panel">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-brand-primary animate-bounce" />
                <span>캠퍼스 공지게시판</span>
              </h2>
              <p className="text-xs text-gray-400 font-bold">CBNU Board Notification</p>
            </div>
            {/* Simple Searchbar */}
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="공지사항 실시간 필터..."
                value={noticeSearch}
                onChange={(e) => setNoticeSearch(e.target.value)}
                className="w-full text-xs px-3.5 py-2 bg-gray-50 hover:bg-gray-150/50 rounded-xl border border-gray-200 focus:border-brand-primary focus:outline-none pl-8"
              />
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>

          {/* Filtering Categories */}
          <div className="flex flex-wrap gap-1.5 border-b border-gray-100 pb-3">
            {['전체', '일반', '학사', '장학', '채용'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveNoticeCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-bold transition-all border ${
                  activeNoticeCategory === cat 
                    ? 'bg-brand-primary text-white border-brand-primary' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notices List */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <div 
                  key={notice.id} 
                  onClick={() => alert(`'${notice.title}' 공문 전문을 다운로드 및 연계 리딩합니다. (학생 지원 시스템 연계)`)}
                  className="p-4 bg-white rounded-2xl border border-gray-150 hover:border-brand-primary shadow-sm hover:shadow transition-all duration-300 cursor-pointer flex justify-between items-center gap-4 group"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 text-[9px] font-black rounded ${
                        notice.category === '장학' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        notice.category === '학사' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        notice.category === '채용' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {notice.category}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono font-medium">{notice.department}</span>
                      {notice.isImportant && (
                        <span className="px-1.5 py-0.2 bg-red-100 text-red-700 text-[8px] font-black rounded uppercase tracking-wider animate-pulse">필독</span>
                      )}
                      {notice.isNew && (
                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-brand-primary line-clamp-1 truncate transition-colors">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono text-gray-400">{notice.date.slice(5)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-400 text-xs font-semibold">
                검색 필터 조건에 합당한 공지가 없습니다.
              </div>
            )}
          </div>
        </div>

        {/* Academic Calendar Timeline (Right) */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col justify-between" id="calendar-panel">
          <div>
            <div className="flex justify-between items-end border-b border-gray-100 pb-3 mb-4">
              <div className="space-y-0.5">
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-1.5">
                  <Calendar className="w-5 h-5 text-brand-secondary" />
                  <span>학사 일정표</span>
                </h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Academic Timeline</p>
              </div>
              <span className="text-[10px] text-brand-primary-light font-bold font-mono">2026 Season</span>
            </div>

            <div className="space-y-4">
              {academicCalendar.map((cal) => (
                <div key={cal.id} className="flex gap-4 items-start group">
                  <div className="bg-brand-primary/5 group-hover:bg-brand-primary group-hover:text-white transition-colors p-2.5 rounded-xl text-center shrink-0 w-12 border border-brand-primary/10">
                    <span className="block text-xs font-mono font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-secondary">{cal.month}월</span>
                    <span className="block text-lg font-black font-mono leading-none text-brand-primary group-hover:text-white mt-0.5">{cal.day}</span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <h4 className="text-xs font-extrabold text-gray-800 line-clamp-1 group-hover:text-brand-primary transition-colors">
                      {cal.title}
                    </h4>
                    <p className="text-[10px] font-semibold text-gray-400 font-mono tracking-wide">{cal.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => alert('공식 1개년 연간 학사 일정 및 교무 규정 파일 다운로드를 연계합니다.')}
            className="w-full mt-6 py-2.5 bg-gray-50 hover:bg-brand-primary/5 hover:text-brand-primary text-[11px] font-bold text-gray-600 rounded-xl transition-all border border-gray-200"
          >
            연간 전체 학사정보 조회 (PDF)
          </button>
        </div>

      </section>

    </div>
  );
}
