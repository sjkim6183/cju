import { useState } from 'react';
import { departments, specialPrograms } from '../data/academicData';
import { Department } from '../types';
import { Search, ChevronDown, ChevronUp, Briefcase, GraduationCap, Award, BookOpen, HeartPulse, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AcademicsTab() {
  const [selectedCollege, setSelectedCollege] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDeptId, setExpandedDeptId] = useState<string | null>(null);

  const colleges = ['전체', '인문대학', '사회과학대학', '자연과학대학', '공과대학', '예술/디자인'] as const;

  // Filter departments based on college filter & search query
  const filteredDepts = departments.filter((dept) => {
    const matchesCollege = selectedCollege === '전체' || dept.college === selectedCollege;
    const matchesSearch = dept.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dept.careers.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCollege && matchesSearch;
  });

  const toggleExpandDept = (id: string) => {
    if (expandedDeptId === id) {
      setExpandedDeptId(null);
    } else {
      setExpandedDeptId(id);
    }
  };

  return (
    <div className="space-y-16 pb-20" id="academics-tab-view">
      
      {/* SECTION HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4" id="academics-header-section">
        <span className="inline-block px-3 py-1 bg-brand-primary/5 text-brand-primary text-xs font-black tracking-widest uppercase rounded-lg border border-brand-primary/10">
          CHUNGBUK ACADEMICS
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-snug">
          다양한 학문적 우수성을 통한 <br />
          <span className="text-brand-primary">글로벌 인재 양성</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-xl mx-auto font-medium">
          충북대학교는 15개 단과대학 및 대학원 체제 아래, 시대를 호령하는 선구자적 지식 탐색과 견고한 실업 실전 교육과정을 배제 없이 헌정하고 있습니다.
        </p>
      </section>

      {/* FILTER & SEARCH CONTROL BAR */}
      <section className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xl space-y-4 max-w-5xl mx-auto" id="academic-search-filter-bar">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input 
              type="text"
              placeholder="전공 학과명, 진로 키워드 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-4 py-3 bg-gray-50 hover:bg-gray-100/50 focus:bg-white rounded-2xl border border-gray-200 focus:border-brand-primary focus:outline-none pl-10 transition-colors"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Quick stats badge */}
          <div className="text-xs font-bold text-gray-400 shrink-0">
            검색 결과: <span className="text-brand-primary text-sm font-black">{filteredDepts.length}</span>개의 연구 학부 배치 완료
          </div>

        </div>

        {/* Filter buttons row */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-50">
          {colleges.map((col) => (
            <button
              key={col}
              onClick={() => {
                setSelectedCollege(col);
                setExpandedDeptId(null);
              }}
              className={`text-xs px-4 py-2 rounded-xl font-bold transition-all border ${
                selectedCollege === col
                  ? 'bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/10'
                  : 'bg-white hover:bg-gray-50 text-gray-600 border-gray-200 shadow-sm'
              }`}
            >
              {col}
            </button>
          ))}
        </div>
      </section>

      {/* DEPARTMENTS CARD GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" id="departments-grid">
        <AnimatePresence mode="popLayout">
          {filteredDepts.map((dept) => {
            const isExpanded = expandedDeptId === dept.id;
            return (
              <motion.div
                layout
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`dept-card-${dept.id}`}
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-[100.5%] h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-primary text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border border-emerald-100">
                      {dept.college}
                    </span>
                    <h3 className="absolute bottom-4 left-4 text-xl font-black text-white tracking-tight">
                      {dept.name}
                    </h3>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                      {dept.description}
                    </p>

                    {/* Stats metrics */}
                    <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                      <div className="text-center border-r border-gray-200">
                        <span className="block text-[10px] font-bold text-gray-400">학생대비 교원비율</span>
                        <span className="text-xs font-black text-gray-800 font-mono">{dept.studentRatio}</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-[10px] font-bold text-gray-400">평균 취업률</span>
                        <span className="text-xs font-black text-brand-primary-light font-mono">{dept.employmentRate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => toggleExpandDept(dept.id)}
                    className="w-full py-2.5 bg-gray-50 hover:bg-brand-primary/5 hover:text-brand-primary text-xs font-bold text-gray-600 rounded-xl transition-all border border-gray-100 flex items-center justify-center gap-1"
                  >
                    <span>{isExpanded ? '상세 학과 정보 숨기기' : '학과 교과과정 & 소모임 보기'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Expanded sliding details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-100 overflow-hidden space-y-4 text-left"
                      >
                        {/* Core subjects */}
                        <div>
                          <p className="text-[10px] font-black text-gray-400 tracking-wider uppercase mb-1.5 flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-brand-primary" />
                            <span>1~4학년 코어 이수 교과</span>
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {dept.subjects.map((sub, sIdx) => (
                              <span key={sIdx} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100 font-medium">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Careers */}
                        <div>
                          <p className="text-[10px] font-black text-gray-400 tracking-wider uppercase mb-1.5 flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
                            <span>졸업 후 주요 진출 분야</span>
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {dept.careers.map((car, cIdx) => (
                              <span key={cIdx} className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100 font-medium">
                                {car}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Clubs info */}
                        <div className="bg-brand-secondary/5 rounded-xl p-3 border border-brand-secondary/10">
                          <p className="text-[10px] font-bold text-brand-secondary-dark mb-1">🔥 학부 공인 자치 학회 & 소모임</p>
                          <ul className="space-y-1 text-[11px] text-gray-600">
                            {dept.clubs.map((club, idx) => (
                              <li key={idx} className="leading-snug">
                                • {club}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* SPECIAL PROGRAMS PANEL */}
      <section className="space-y-8 max-w-7xl mx-auto" id="special-programs-section">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">미래를 여는 특별 프로그램</h2>
          <p className="text-xs sm:text-sm text-gray-400 font-bold font-mono tracking-wider uppercase">Chungbuk Special Integration Tracks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {specialPrograms.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-5"
            >
              {/* Image col */}
              <div className="relative sm:col-span-2 h-48 sm:h-full">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Text info col */}
              <div className="p-6 sm:p-8 sm:col-span-3 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 bg-brand-secondary/20 text-brand-secondary-dark text-[10px] font-black rounded uppercase">
                    {prog.badge}
                  </span>
                  <h3 className="text-lg font-black text-gray-900 leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {prog.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-50">
                  <p className="text-[10px] font-black text-brand-primary uppercase tracking-wide">수혜 혜택 지원 및 안내</p>
                  <ul className="space-y-1">
                    {prog.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-xs text-gray-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary-light shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
