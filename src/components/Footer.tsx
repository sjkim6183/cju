import { GraduationCap, ArrowUp, Phone, MapPin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: '학사 & 대학로',
      items: [
        { label: '입학평가 정보시스템', url: '#' },
        { label: '종합정보포털 (개신누리)', url: '#' },
        { label: '스마트 러닝 (e-Campus)', url: '#' },
        { label: '장학/복지 특별가이드', url: '#' },
      ],
    },
    {
      title: '주요 연계 부서',
      items: [
        { label: '중앙도서관 아카이브', url: '#' },
        { label: '공동실험실습관', url: '#' },
        { label: '국제교류본부 한국인턴센터', url: '#' },
        { label: '생활관 양성재 행정실', url: '#' },
      ],
    },
    {
      title: '대학 법령 & 정책',
      items: [
        { label: '개인정보 처리방침', url: '#', highlight: true },
        { label: '대학정보공시 (경영지표)', url: '#' },
        { label: '학칙 및 고시공고', url: '#' },
        { label: '원클릭 인권 상담소', url: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-brand-primary pt-16 pb-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot top layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo & Info column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-brand-secondary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-widest font-sans uppercase">
                  충북대학교
                </span>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest font-mono">
                  Chungbuk National University
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              인성과 학식을 지닌 가치 혁신 리더들의 요람.전통의 가치 위에 미래의 지혜를 포개며 중부권을 가로질러 세계 최고의 혁신 연구 지평을 열어 갑니다.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>[28644] 충청북도 청주시 서원구 충대로 1 충북대학교</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>내선 전화문의: 043-261-2114</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>대표 웹메일: webmaster@cbnu.ac.kr</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-brand-secondary pl-2">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`'${item.label}' 페이지로 이동합니다 (시뮬레이션).`);
                      }}
                      className={`hover:text-white transition-colors flex items-center gap-1 group py-0.5 ${
                        item.highlight ? 'text-brand-secondary font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-500" id="footer-bottom-info">
            <span>© 2026 Chungbuk National University. All Rights Reserved.</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-primary-light" />
              개인정보 보호 조치 완료 의무 공시
            </span>
          </div>

          {/* Floating actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 bg-slate-800 hover:bg-brand-primary text-slate-300 hover:text-white rounded-xl transition-all duration-300 shadow-md flex items-center justify-center group"
              title="맨 위로 스크롤"
              id="footer-scroll-to-top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
