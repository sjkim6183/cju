import React, { useState } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import AcademicsTab from './components/AcademicsTab';
import CampusLifeTab from './components/CampusLifeTab';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, HelpCircle, X, ChevronRight, GraduationCap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: '안녕하세요! 충북대학교 스마트 개신 챗봇 비서입니다. 입학 정원, 장학금 지원 조건 또는 동아리 활동 중 무엇이든 부담 없이 문의해 주세요! 💚' }
  ]);
  const [userQuery, setUserQuery] = useState('');

  // Floating helper response simulation
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const query = userQuery.trim();
    const nextMsg = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(nextMsg);
    setUserQuery('');

    // Simulate response
    setTimeout(() => {
      let botResponse = '문의하신 사항은 충북대학교 전산망에 등록되어 있는 관련 부서 담당자 확인 후 재공시됩니다. 상세한 행정 처리가 필요하신 경우 [학생지원부: 043-261-2114]로 전화주시기 바랍니다.';
      
      const q = query.toLowerCase();
      if (q.includes('식단') || q.includes('학식') || q.includes('밥')) {
        botResponse = '식사는 월요일부터 금요일까지 조식, 중식, 석식으로 양성재 및 개성재 식당에서 정시 배식됩니다. "캠퍼스 라이프" 탭 중앙에서 주간 전체 식단 및 칼로리를 확인하세요!';
      } else if (q.includes('기숙사') || q.includes('생활관')) {
        botResponse = '기숙사는 양성재, 양진재, 개성재 총 3개 동으로 약 4천여 명을 수용합니다. 세부 요금과 구비 시설은 "캠퍼스 라이프"의 "학생생활관" 상세 정보를 정독해 주세요.';
      } else if (q.includes('컴공') || q.includes('컴퓨터공학') || q.includes('공대')) {
        botResponse = '컴퓨터공학과는 4차 산업혁명의 AI 및 클라우드 핵심을 집중 실무 교육합니다. "학부/대학원 안내" 탭을 클릭하여 컴퓨터공학 학과 커리큘럼 및 취업 현황을 조사해보세요!';
      } else if (q.includes('지도') || q.includes('맵') || q.includes('도서관 위치')) {
        botResponse = '도서관은 캠퍼스 중앙 본관 인접 지대에 자리하고 있습니다. 순환 셔틀 노선과 상세 편의시설은 "캠퍼스 라이프" 최하단 "인터랙티브 대동 지도"에서 핀을 클릭하십시오.';
      } else if (q.includes('장학') || q.includes('돈')) {
        botResponse = '우리 대학은 국가장학금 1-2차 연계 프로세스 외에도 우수개신 성적 장학, 다문화 한마음 복지 장려 수당을 폭넓게 지급합니다. 공지게시판의 "장학" 카테고리를 필터해 보세요!';
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 850);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'academics':
        return <AcademicsTab />;
      case 'campus-life':
        return <CampusLifeTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] flex flex-col justify-between" id="portal-applet-root">
      
      <div>
        {/* Header navigation bar */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Global tab wrapper with smooth fade transition page effects */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer statistics & details info */}
      <Footer />

      {/* 8. INTERACTIVE CHAT HELPER WIDGET */}
      <div className="fixed bottom-6 right-6 z-40" id="portal-floating-chat-widget">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              className="bg-white rounded-3xl border border-gray-150 shadow-2xl w-80 sm:w-96 overflow-hidden flex flex-col h-[480px] mb-4 origin-bottom-right"
            >
              {/* Advisor Header */}
              <div className="bg-brand-primary p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-brand-secondary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-tight font-sans">개신 스마트 안내 비서</h4>
                    <p className="text-[9px] uppercase tracking-widest font-mono text-brand-secondary">CBNU Smart Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 hover:bg-white/10 text-white/80 hover:text-white rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Feed */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gray-50/50">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-brand-primary text-white rounded-tr-none'
                          : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Quick Prompts suggestions */}
              <div className="p-2 border-t border-gray-50 flex gap-1 overflow-x-auto bg-white whitespace-nowrap scrollbar-none">
                {['오늘의 식단 안내', '양성재 요금 문의', '컴공과 학과 정보'].map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setUserQuery(suggestion);
                    }}
                    className="text-[10px] font-bold px-2.5 py-1.5 bg-gray-50 hover:bg-brand-primary/5 hover:text-brand-primary text-gray-600 rounded-lg border border-gray-150 transition-all shrink-0"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Chat Editor Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-100 flex gap-2 bg-white">
                <input
                  type="text"
                  placeholder="질문을 기입하세요... (예: 식단 정보)"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="flex-1 text-xs px-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-brand-primary hover:bg-brand-primary-light text-brand-secondary hover:text-white rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer relative group-hover:ring-4 group-hover:ring-brand-primary/20"
          id="toggle-floating-chat-button"
          title="개신 스마트 도우미 소환"
        >
          {isChatOpen ? <X className="w-6 h-6 stroke-[2]" /> : <MessageCircle className="w-6 h-6 stroke-[2]" />}
        </button>
      </div>

    </div>
  );
}
