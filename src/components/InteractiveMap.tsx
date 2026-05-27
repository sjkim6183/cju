import { useState } from 'react';
import { MapPin, Navigation, Info, Compass, Bus, Coffee, Printer } from 'lucide-react';
import { motion } from 'motion/react';

interface BuildingInfo {
  id: string;
  code: string;
  name: string;
  englishName: string;
  description: string;
  coordinates: { x: number; y: number }; // Percentage coordinate for positioning elements
  facilities: string[];
  tips: string;
}

export default function InteractiveMap() {
  const [selectedBuilding, setSelectedBuilding] = useState<string>('hq');
  const [showShuttleLine, setShowShuttleLine] = useState<boolean>(true);

  const buildings: Record<string, BuildingInfo> = {
    hq: {
      id: 'hq',
      code: 'N10',
      name: '대학본부 (본관)',
      englishName: 'University Headquarters',
      description: '학교 행정의 허브이자 입학처, 교무과, 총장실 등이 위치한 대표 랜드마크 건물입니다.',
      coordinates: { x: 50, y: 35 },
      facilities: ['입학 공청실', '행정 서류 무인 발급기'],
      tips: '1층 종합민원센터에서 학생증 재발급 및 휴복학 직인을 수급받을 수 있습니다.'
    },
    lib: {
      id: 'lib',
      code: 'N12',
      name: '중앙도서관 (신축)',
      englishName: 'Central Library',
      description: '200만 권 소장 장서와 혁신 스터디 라운지, 세미나용 다국적 홀이 입점된 지식의 최전선.',
      coordinates: { x: 45, y: 55 },
      facilities: ['이마트24 편의점', '드롭탑 커피 전문점', '클라우드 인쇄복합기'],
      tips: '모바일 앱 "도서관 모바일패스"로 좌석 예약 및 게이트 출입이 즉시 가능합니다.'
    },
    union: {
      id: 'union',
      code: 'E3',
      name: '제1학생회관',
      englishName: 'Student Union Building 1',
      description: '다양한 역동 동아리 총학방이 위치하며 금융, 우체국, 안경점이 모여있는 학생 허브 복합시설.',
      coordinates: { x: 30, y: 48 },
      facilities: ['우체국 창구', '신한은행 영업점', '학생 안경점', '동아리 카페'],
      tips: '지하 문구점에서 전공교재 제본 및 스프링철 편집이 즉각 배차됩니다.'
    },
    culture: {
      id: 'culture',
      code: 'N15',
      name: '개신문화관',
      englishName: 'Gaeshin Cultural Center',
      description: '주요 학회, 연설, 밴드 공연 및 다양한 학생 주도 행사가 상설 유치되는 대형 콘서트홀.',
      coordinates: { x: 60, y: 50 },
      facilities: ['서적 판매소', '상설 전시홀', '샤워 탈의실'],
      tips: '매 학기 초 전공 도서 바자회나 동아리 대합창제가 이곳 로비 일사천리로 개강합니다.'
    },
    eng: {
      id: 'eng',
      code: 'E10',
      name: '공과대학 본관 (E10동)',
      englishName: 'College of Engineering E10',
      description: '컴퓨터공학 및 인프라 설계, 지능형 미래 모빌리티 등 미래 기술 인력들을 배양해내는 요람.',
      coordinates: { x: 25, y: 30 },
      facilities: ['SW 상상 실습라운지', '브레드이발소 카페', '창업 지원실'],
      tips: '3층 테크노 연구실 라인은 24시간 연중 무휴 오픈형 랩실로 가용됩니다.'
    },
    dorm: {
      id: 'dorm',
      code: 'S4',
      name: '학생생활관 (양성재)',
      englishName: 'Student Dormitory - Yangsungjae',
      description: '전국 및 세계 각지에서 유학 온 4천여 학우들이 어우러져 생활 여가를 보장받는 레지던스.',
      coordinates: { x: 75, y: 65 },
      facilities: ['전용 학생식당', '무인 세탁 셀프존', '피트니스 전용 라인'],
      tips: '배달 음식 픽업존은 행정동 주 출입구 우측 쉼터에 지정 설계되어 있습니다.'
    }
  };

  const getActiveData = buildings[selectedBuilding] || buildings.hq;

  // Shuttle path points (simulating campus circular shuttle)
  const shuttleRoute = [
    { x: 25, y: 30, name: '공대 앞' },
    { x: 30, y: 48, name: '학생회관' },
    { x: 45, y: 55, name: '중앙도서관' },
    { x: 60, y: 50, name: '개신문화관' },
    { x: 75, y: 65, name: '생활관 정문' },
    { x: 50, y: 35, name: '대학본부' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 mini-map" id="campus-interactive-map-panel">
      
      {/* Map visual stage */}
      <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 p-6 relative min-h-[420px] flex flex-col justify-between select-none">
        
        {/* Map Header */}
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold text-gray-800 border border-emerald-100">
            <Compass className="w-4 h-4 text-brand-primary animate-spin-slow" />
            <span>개신 캠퍼스 인터랙티브 맵</span>
          </div>
          <button
            onClick={() => setShowShuttleLine(!showShuttleLine)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold transition-all border ${
              showShuttleLine 
                ? 'bg-brand-primary text-white border-brand-primary' 
                : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>순환 셔틀 노선 {showShuttleLine ? '활성화' : '숨기기'}</span>
          </button>
        </div>

        {/* Camp board simulation vectors */}
        <div className="absolute inset-0 m-12 border-2 border-dashed border-emerald-900/10 rounded-3xl pointer-events-none flex items-center justify-center">
          <span className="text-emerald-900/5 font-black text-6xl tracking-widest font-sans">CBNU</span>
        </div>

        {/* Vector connectors if shuttle line visible */}
        {showShuttleLine && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d={`M ${shuttleRoute.map(pt => `${pt.x}%,${pt.y}%`).join(' L ')} Z`}
              fill="none"
              stroke="#004d2c"
              strokeWidth="3.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -20 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="opacity-55"
            />
          </svg>
        )}

        {/* Dynamic Pins */}
        <div className="absolute inset-0 m-6">
          {Object.values(buildings).map((b) => {
            const isSelected = selectedBuilding === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBuilding(b.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group"
                style={{ left: `${b.coordinates.x}%`, top: `${b.coordinates.y}%` }}
                id={`map-pin-${b.id}`}
              >
                {/* Ping wave */}
                {isSelected && (
                  <span className="absolute -inset-2 rounded-full bg-brand-primary/15 animate-ping" />
                )}
                
                <div className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all shadow-md ${
                  isSelected 
                    ? 'bg-brand-primary text-brand-secondary scale-110 font-black z-30 ring-4 ring-brand-secondary/30' 
                    : 'bg-white text-gray-700 hover:bg-brand-primary hover:text-white hover:scale-105 font-bold'
                }`}>
                  <MapPin className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-brand-secondary' : 'text-brand-primary-light group-hover:scale-110'}`} />
                  <span className="text-xs whitespace-nowrap">{b.name.split(' (')[0]}</span>
                  <span className="text-[9px] scale-90 font-mono tracking-wider opacity-60 bg-gray-100 group-hover:bg-brand-primary-dark group-hover:text-white font-medium px-1 py-0.2 rounded">
                    {b.code}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-[11px] text-gray-400 font-semibold bg-white/75 backdrop-blur-xs py-1.5 px-3 rounded-lg border border-gray-100/50 self-start z-10 flex items-center gap-1">
          <Info className="w-3.5 h-3.5" />
          <span>각 핀(Pin)을 선택해 세부 시설과 이동 꿀팁을 확인하세요.</span>
        </div>

      </div>

      {/* Detail inspect panel */}
      <div className="bg-white p-6 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between" id="campus-building-detail-panel">
        
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-black uppercase text-brand-secondary-dark tracking-widest bg-brand-secondary/15 px-2.5 py-1 rounded-md">
              캠퍼스 세부 건물 정보 ({getActiveData.code})
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
              <Navigation className="w-3.5 h-3.5" />
              <span>Campus Zone</span>
            </div>
          </div>

          <h3 className="text-xl font-extrabold text-gray-900 mb-1 leading-snug">
            {getActiveData.name}
          </h3>
          <p className="text-xs text-gray-400 font-medium font-sans uppercase tracking-[0.1em] mb-4">
            {getActiveData.englishName}
          </p>

          <p className="text-sm text-gray-600 leading-relaxed font-sans mb-5">
            {getActiveData.description}
          </p>

          {/* Quick specs section */}
          <div className="space-y-4 mb-5">
            <div>
              <p className="text-xs text-gray-500 font-bold mb-2">건물 내부 탑재 편의시설</p>
              <div className="flex flex-wrap gap-1.5">
                {getActiveData.facilities.map((fac, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-primary bg-brand-primary/5 px-2.5 py-1 rounded-lg border border-brand-primary/10">
                    {fac.includes('커피') ? <Coffee className="w-3.5 h-3.5" /> : fac.includes('인쇄') ? <Printer className="w-3.5 h-3.5" /> : <Info className="w-3.5 h-3.5" />}
                    {fac}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10">
              <p className="text-xs font-black text-brand-secondary-dark mb-1 flex items-center gap-1">
                <span>🍀 사생/학생 단골 꿀팁!</span>
              </p>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                {getActiveData.tips}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation simulate action */}
        <button
          onClick={() => alert(`'${getActiveData.name}' 목적지 설정을 가상 대입합니다. 모바일 도보 길찾기가 연동 기획됩니다.`)}
          className="w-full py-3 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
        >
          <Navigation className="w-4 h-4 rotate-45" />
          <span>현위치에서 길찾기 시뮬레이션</span>
        </button>

      </div>

    </div>
  );
}
