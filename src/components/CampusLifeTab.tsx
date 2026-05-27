import { useState } from 'react';
import { lifePhotos, facilities, dormSpecs, testimonials, weeklyCafeteriaMenu } from '../data/campusLifeData';
import { CampusLifePhoto, DailyMenu } from '../types';
import InteractiveMap from './InteractiveMap';
import { Camera, Map, Home, Utensils, MessageSquare, Landmark, Play, X, Heart, Award, Sparkles, Flame, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CampusLifeTab() {
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>('전체');
  const [selectedPhoto, setSelectedPhoto] = useState<CampusLifePhoto | null>(null);
  const [selectedMealDay, setSelectedMealDay] = useState<'월' | '화' | '수' | '목' | '금'>('월');
  const [activeFacilityId, setActiveFacilityId] = useState<string | null>(null);

  // Filter photos
  const filteredPhotos = lifePhotos.filter((p) => {
    return activePhotoCategory === '전체' || p.category === activePhotoCategory;
  });

  // Current meal
  const currentMenu = weeklyCafeteriaMenu.find((m) => m.dayOfWeek === selectedMealDay) || weeklyCafeteriaMenu[0];

  return (
    <div className="space-y-16 pb-20" id="campus-life-tab-view">
      
      {/* 1. HERO REPLICA */}
      <section className="text-center max-w-3xl mx-auto space-y-4" id="campus-life-header-section">
        <span className="inline-block px-3 py-1 bg-brand-secondary/15 text-brand-primary font-black text-xs tracking-widest uppercase rounded-lg border border-brand-secondary/30">
          CBNU CAMPUS LIFE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-snug">
          활기찬 개신 캠퍼스에서 <br />
          <span className="text-brand-primary">꿈을 채워가다</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-xl mx-auto font-medium">
          역동적인 에너지, 다양성 넘치는 자치 문화, 그리고 무한히 뻗어 나가는 열정의 지도가 그려지는 충북대학교 캠퍼스 생활을 만나보세요.
        </p>
      </section>

      {/* 2. LIFE IN PICTURES GALLERY */}
      <section className="space-y-8 max-w-7xl mx-auto" id="gallery-section">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-1.5">
              <Camera className="w-5.5 h-5.5 text-brand-primary" />
              <span>오늘의 개신 갤러리</span>
            </h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Life in Pictures</p>
          </div>

          {/* Categories for gallery */}
          <div className="flex flex-wrap gap-1.5">
            {['전체', '축제', '동아리', '학습/도서관', '체육'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePhotoCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all border ${
                  activePhotoCategory === cat
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-white hover:bg-gray-50 text-gray-600 border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              id={`gallery-card-${photo.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-[100.5%] h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="absolute bottom-3 left-3 bg-brand-primary text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                  {photo.category}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] text-gray-400 font-mono font-medium">{photo.date}</span>
                <h4 className="text-xs font-black text-gray-800 line-clamp-1 group-hover:text-brand-primary transition-colors">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox dialog modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden max-w-md w-full border border-gray-100 shadow-2xl relative"
                id="gallery-lightbox-modal"
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full z-10"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="h-64 relative">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 inline-block px-2.5 py-1 bg-brand-primary text-white text-[10px] font-black rounded uppercase">
                    {selectedPhoto.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs text-gray-400 font-mono font-bold">촬영일자: {selectedPhoto.date}</span>
                  <h3 className="text-lg font-black text-gray-900 leading-snug">{selectedPhoto.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{selectedPhoto.description}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. HOUSING & FACILITIES (BENTO GRID REPLICA) */}
      <section className="space-y-8 max-w-7xl mx-auto" id="facilities-section">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-1.5">
            <Landmark className="w-5.5 h-5.5 text-brand-primary" />
            <span>최첨단 편의 학생활동 시설</span>
          </h3>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Housing & Core Facilities</p>
        </div>

        {/* Bento Board */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {facilities.map((fac, idx) => {
            const isLarge = idx === 0 || idx === 1; // First two large cards
            return (
              <div
                key={fac.id}
                onClick={() => {
                  setActiveFacilityId(fac.id);
                  setTimeout(() => {
                    const detailEl = document.getElementById('facility-modal-details');
                    if (detailEl) detailEl.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between ${
                  isLarge ? 'md:col-span-3' : 'md:col-span-3 lg:col-span-3'
                }`}
                id={`facility-card-${fac.id}`}
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-[100.5%] h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute top-4 left-4 bg-brand-secondary text-brand-primary-dark text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                      {fac.name}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg sm:text-xl font-black text-white leading-tight">{fac.koreanName}</h4>
                      <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">{fac.description}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {fac.amenities.map((amenity, aIdx) => (
                        <span key={aIdx} className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono font-bold">
                    <span>이용시간: {fac.hours.split(' | ')[0]}</span>
                    <span className="text-brand-primary group-hover:translate-x-1 duration-300 transition-transform flex items-center gap-0.5">상세보기 →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FACILITY LIGHTBOX / EXPANSION DRAWER */}
      <AnimatePresence>
        {activeFacilityId && (() => {
          const fac = facilities.find(f => f.id === activeFacilityId);
          if (!fac) return null;
          return (
            <motion.div
              id="facility-modal-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-brand-primary/5 rounded-3xl p-6 sm:p-8 border border-brand-primary/10 max-w-5xl mx-auto space-y-6 text-left relative"
            >
              <button
                onClick={() => setActiveFacilityId(null)}
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-brand-primary hover:bg-brand-primary/10 rounded-full"
                title="상세 닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-brand-primary text-white text-[10px] font-black uppercase rounded">
                  시설 상세 보고서 ({fac.name})
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">{fac.koreanName} 소개</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-4xl">
                  {fac.details}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-primary/10">
                  <div>
                    <span className="text-xs text-brand-primary font-bold">운영 시간 및 정보</span>
                    <p className="text-xs text-gray-600 font-mono font-medium mt-1 uppercase tracking-wider">{fac.hours}</p>
                  </div>
                  <div>
                    <span className="text-xs text-brand-primary font-bold">구조 위치</span>
                    <p className="text-xs text-gray-600 font-sans font-semibold mt-1">{fac.location}</p>
                  </div>
                </div>

                {/* Subspec display for Dormitories */}
                {fac.id === 'fac-1' && (
                  <div className="mt-6 pt-5 border-t border-brand-primary/10 space-y-4">
                    <span className="block text-xs font-black text-brand-primary-dark">관사/생활관 유형별 세부 요율표 (2026학기 기준)</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {dormSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="bg-white p-4 rounded-2xl border border-gray-150 space-y-2.5">
                          <h5 className="text-xs font-black text-gray-900 border-b border-gray-100 pb-2">{spec.name}</h5>
                          <div className="space-y-1 text-[11px] text-gray-600">
                            <p>• 수용정원: <span className="font-bold text-gray-800">{spec.capacity}</span></p>
                            <p>• 방 구조: <span className="font-bold text-gray-800">{spec.roomTypes.join(', ')}</span></p>
                            <p>• 등록요금: <span className="font-medium text-brand-primary-light">{spec.fee}</span></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* 5. CAMPUS CAFETERIA MENU WIDGET (INVENTIVE HIGH CRAFT MODULE) */}
      <section className="bg-white rounded-3xl border border-gray-150 shadow-xl p-6 sm:p-8 max-w-5xl mx-auto space-y-6" id="cafeteria-meal-widget">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100 pb-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-2xl font-black text-gray-900 flex items-center gap-1.5">
              <Utensils className="w-5.5 h-5.5 text-brand-secondary" />
              <span>개신 대식당 오늘의 식단 안내</span>
            </h3>
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider font-mono">Student Cafeteria Daily Menu Hub</p>
          </div>

          {/* Weekday tab toggles */}
          <div className="flex gap-1">
            {(['월', '화', '수', '목', '금'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedMealDay(day)}
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  selectedMealDay === day
                    ? 'bg-brand-primary text-brand-secondary shadow-md font-black shadow-brand-primary/15 scale-105'
                    : 'bg-gray-100 hover:bg-gray-150 text-gray-600 hover:text-gray-900 border border-gray-150 font-bold'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Meals Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Breakfast Card */}
          <div className="bg-orange-50/20 p-5 rounded-2xl border border-orange-100/50 space-y-4">
            <div className="flex justify-between items-center border-b border-orange-100 pb-2">
              <span className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-800 text-[10px] font-black rounded uppercase">
                조식 (Breakfast)
              </span>
              <span className="text-[10px] font-mono text-gray-400 font-bold">{currentMenu.calories.breakfast}</span>
            </div>
            <ul className="space-y-1.5 min-h-[90px]">
              {currentMenu.breakfast.map((m, idx) => (
                <li key={idx} className="text-xs text-gray-700 font-semibold">• {m}</li>
              ))}
            </ul>
          </div>

          {/* Lunch Card */}
          <div className="bg-emerald-50/20 p-5 rounded-2xl border border-emerald-100/50 space-y-4">
            <div className="flex justify-between items-center border-b border-emerald-100 pb-2">
              <span className="inline-block px-2.5 py-0.5 bg-brand-primary text-brand-secondary text-[10px] font-black rounded uppercase">
                중식 (Lunch)
              </span>
              <span className="text-[10px] font-mono text-gray-400 font-bold">{currentMenu.calories.lunch}</span>
            </div>
            <ul className="space-y-1.5 min-h-[90px]">
              {currentMenu.lunch.map((m, idx) => (
                <li key={idx} className="text-xs text-gray-800 font-extrabold">• {m}</li>
              ))}
            </ul>
          </div>

          {/* Dinner Card */}
          <div className="bg-blue-50/20 p-5 rounded-2xl border border-blue-100/50 space-y-4">
            <div className="flex justify-between items-center border-b border-blue-100 pb-2">
              <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded uppercase">
                석식 (Dinner)
              </span>
              <span className="text-[10px] font-mono text-gray-400 font-bold">{currentMenu.calories.dinner}</span>
            </div>
            <ul className="space-y-1.5 min-h-[90px]">
              {currentMenu.dinner.map((m, idx) => (
                <li key={idx} className="text-xs text-gray-700 font-semibold">• {m}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-[10px] text-gray-400 font-bold text-center">
          * 식기는 식당사정에 의해 다소 변경 변경될 수 있으며 영양보충 및 알러지 유발 식품 유의표는 대식당 입구 보드로 개시됩니다.
        </div>
      </section>

      {/* 6. TESTIMONIALS CAROUSEL (STUDENT VOICES) */}
      <section className="space-y-8 max-w-5xl mx-auto" id="student-voices-section">
        <div className="space-y-1 text-center">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center justify-center gap-1.5">
            <MessageSquare className="w-5.5 h-5.5 text-brand-primary" />
            <span>재학생들이 들려주는 충북대 이야기</span>
          </h3>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Student Testimonials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {testimonials.map((test) => (
            <div key={test.id} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-4xl text-brand-secondary select-none font-serif leading-none">“</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {test.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-primary/10"
                />
                <div>
                  <h5 className="text-xs font-black text-slate-800">{test.name} 학우</h5>
                  <p className="text-[10px] text-gray-400 font-bold">{test.department} / {test.year}학년 재학</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INTERACTIVE CAMPUS MAP WIDGET INTEGRATION */}
      <section className="space-y-8 max-w-7xl mx-auto" id="campus-map-interactive-view">
        <div className="space-y-1 text-left">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 flex items-center gap-1.5">
            <Map className="w-5.5 h-5.5 text-brand-primary" />
            <span>캠퍼스 대동 종합 공간 지도</span>
          </h3>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Explore Our Campus</p>
        </div>

        {/* Embedded Interactive Map component we built */}
        <InteractiveMap />
      </section>

    </div>
  );
}
