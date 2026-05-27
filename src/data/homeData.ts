import { NewsItem, AcademicNotice, AcademicCalendarEvent, UniversityStat } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: '2026 글로벌 혁신 연구소 개소식 및 비전 선포',
    category: '연구/혁신',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    description: '충북대학교가 세계 최고 수준의 글로벌 과학 인재 양성과 지자체 협력기반 혁신 생태계 조성을 위한 글로벌 혁신 연구소를 개소하였습니다. 연구중심 거점대학으로 거듭나며 우수 인력 유치 및 학산학 기술협력을 본격 추동합니다.',
    views: 1245,
    featured: true
  },
  {
    id: 'news-2',
    title: '첨단 바이오·의학 실습실 증축 공사 안전 기원제 개최',
    category: '캠퍼스 소식',
    date: '2026-05-10',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    description: '바이오 메디컬 연구 선도 모델 구축을 위한 핵심 연구 인프라 확보의 일환으로 최첨단 융합 실습홀 증축 기공식이 행해졌습니다. 연구 특화 공간 구비로 학생들의 연구 역량을 극대화할 전망입니다.',
    views: 894
  },
  {
    id: 'news-3',
    title: '가을 대개신 문화 예술 축제 "개신 열린 밤" 스케치',
    category: '학술/행사',
    date: '2026-05-02',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    description: '개신문화관 야외 광장에서 펼쳐진 문화 예술 축제가 학우들과 지역 주민 5천여 명의 참여 속에 성료되었습니다. 열정에 가득 찬 무대와 감동을 담아왔습니다.',
    views: 1532
  }
];

export const academicNotices: AcademicNotice[] = [
  {
    id: 'not-1',
    title: '2026학년도 2학기 국가장학금 1차 신청 일정 및 가이드라인 안내',
    category: '장학',
    date: '2026-05-24',
    department: '학생과',
    isNew: true,
    isImportant: true
  },
  {
    id: 'not-2',
    title: '2026학년도 하반기 글로벌 교환학생(미주/유럽권) 선발 기준 및 설명회 공고',
    category: '학사',
    date: '2026-05-22',
    department: '국제교류본부',
    isNew: true,
    isImportant: true
  },
  {
    id: 'not-3',
    title: '개신문화관 IT 인프라 점검에 따른 캠퍼스 네트워크 일시 중단 안내',
    category: '일반',
    date: '2026-05-20',
    department: '정보화운영본부',
    isNew: false
  },
  {
    id: 'not-4',
    title: '융합연구원 생명과학 혁신 트랙 석·박사 과정 산학 연계 장학생 특별 모집',
    category: '채용',
    date: '2026-05-18',
    department: '융합연구원',
    isNew: false,
    isImportant: true
  },
  {
    id: 'not-5',
    title: '2026년도 여름방학 생활관 입사 신청 안내 및 기숙사비 공고',
    category: '일반',
    date: '2026-05-15',
    department: '학생생활관',
    isNew: false
  },
  {
    id: 'not-6',
    title: '수강 신청 장바구니 제도 및 미이수인원 이월 정책 개선안 수렴 공청회',
    category: '학사',
    date: '2026-05-12',
    department: '학사지원과',
    isNew: false
  },
  {
    id: 'not-7',
    title: '청주시 소재 첨단 ICT 강소기업 연계 하계 청년 인턴십 모집 (학점인정형)',
    category: '채용',
    date: '2026-05-08',
    department: '취업지원본부',
    isNew: false
  },
  {
    id: 'not-8',
    title: '교내 미화 환경 봉사단 "푸른 개신" 5기 신규 단원 추가 추가 모집',
    category: '일반',
    date: '2026-05-05',
    department: '사회봉사지원센터',
    isNew: false
  }
];

export const academicCalendar: AcademicCalendarEvent[] = [
  {
    id: 'cal-1',
    month: '06',
    day: '10',
    title: '1학기 기말고사 및 학점평가 기간',
    dates: '06.10 ~ 06.23',
    type: 'academic'
  },
  {
    id: 'cal-2',
    month: '06',
    day: '24',
    title: '하계 방학 시작 및 계절학기 개강',
    dates: '06.24 ~ 07.18',
    type: 'academic'
  },
  {
    id: 'cal-3',
    month: '07',
    day: '15',
    title: '여름방학 해외 파견 한마음 어학연수 출발',
    dates: '07.15 ~ 08.10',
    type: 'festival'
  },
  {
    id: 'cal-4',
    month: '08',
    day: '15',
    title: '광복절 (공휴일)',
    dates: '08.15',
    type: 'holiday'
  },
  {
    id: 'cal-5',
    month: '08',
    day: '21',
    title: '2025학년도 후기 학위수여식',
    dates: '08.21 11:00',
    type: 'academic'
  },
  {
    id: 'cal-6',
    month: '09',
    day: '01',
    title: '2학기 개강 및 복학 수강신청 확인 변경',
    dates: '09.01 ~ 09.07',
    type: 'academic'
  }
];

export const universityStats: UniversityStat[] = [
  {
    value: '1951년',
    label: '개교 및 역사',
    description: '중부권 최고의 혁신 거점국립대학교',
    iconName: 'GraduationCap'
  },
  {
    value: '22,000+',
    label: '재학생 학부 및 대학원',
    description: '전세계에서 모인 글로벌 인재들의 상호 교류',
    iconName: 'Users'
  },
  {
    value: '94개',
    label: '학부 전공 트랙',
    description: '인문학부터 최첨단 세미컨덕터, 의예과 구성',
    iconName: 'BookOpen'
  },
  {
    value: 'A등급',
    label: '대학 혁신 지원 사업',
    description: '교육부 주관 대학 평가 최상위 혁신 등급 획득',
    iconName: 'Award'
  }
];
