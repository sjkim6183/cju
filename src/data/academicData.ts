import { Department, SpecialProgram } from '../types';

export const departments: Department[] = [
  {
    id: 'dept-1',
    name: '컴퓨터공학과',
    college: '공과대학',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    description: '최첨단 4차 산업혁명의 핵심인 인공지능(AI), 클라우드 컴퓨팅, 고신뢰 소프트웨어 엔지니어를 육성합니다. 탄탄한 이론적 토대 위에 종합적인 실습 경험을 결합하여 가치를 창출합니다.',
    studentRatio: '14:1',
    employmentRate: '88.5%',
    careers: ['풀스택 개발자', 'AI/인공지능 연구원', '클라우드 보안 설계자', 'IT 솔루션 아키텍트'],
    subjects: ['알고리즘 및 자료구조', '기계학습 및 머신러닝', '운영체제 설계', '웹/앱 프레임워크 캡스톤'],
    clubs: ['네스트 (NEST): 웹/모바일 소프트웨어 개발 학회', '바이러너스 (Vironus): 악성코드 및 보안 분석 자치 동아리']
  },
  {
    id: 'dept-2',
    name: '경영학부',
    college: '사회과학대학',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800&auto=format&fit=crop',
    description: '기업의 전략적 의사결정에서부터 마케팅, 재무금융, 인적자원 관리까지 아우르는 융합적 가치를 배웁니다. 글로벌 비즈니스 전쟁터의 혁신과 리더십을 주도할 비전을 제시합니다.',
    studentRatio: '18:1',
    employmentRate: '74.2%',
    careers: ['마케팅 및 브랜드 매니저', '금융 컨설턴트 및 공인회계사(CPA)', '인사관리 전문가', '빅데이터 비즈니스 애널리스트'],
    subjects: ['경영전략론', '기업재무의 기초', '글로벌 브랜드 관리', '조직 행동론 세미나'],
    clubs: ['씨네틱스 (Cinetics): 모의 주식 및 스타트업 피칭 동아리', '글로컬 리더 (Glocal): 해외 시장 조사를 위한 학회']
  },
  {
    id: 'dept-3',
    name: '생명과학과',
    college: '자연과학대학',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop',
    description: '유전 공학, 분자생물학, 생태계 건강성 등 자연의 무한한 질서와 가치를 연구하여 생명공학산업(BT)의 중심에 설 전문 연구 인력을 양성합니다.',
    studentRatio: '10:1',
    employmentRate: '69.0%',
    careers: ['국공립 바이오 연구소 연구원', '제약 생산 및 품질 관리(QA) 엔지니어', '질병 모니터링 환경 분석관', '변리사'],
    subjects: ['유전학 및 유전자 재조합 기술', '응용 분자생물학', '미생물 생리학 실습', '기초 종양 면역학'],
    clubs: ['현미경 속의 우주: 생물 종 다양성과 생명 보존 소모임', '유전 가위 리서처: 신기술 탐험 학회']
  },
  {
    id: 'dept-4',
    name: '심리학과',
    college: '사회과학대학',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    description: '인간의 마음과 행동의 작동 원리를 과학적 방법론(실험, 뇌 영상, 통계 등)을 기반으로 체계 규명합니다. 다양한 사회 현상 속 정신 건강과 심적 웰빙을 다룹니다.',
    studentRatio: '11:1',
    employmentRate: '63.4%',
    careers: ['임상심리사 및 심리상담 치료전문가', 'UX 디자인 리서처(인간 중심 설계)', '광고/소비자 매체 기획 전문가', '교정직 및 보호관찰 행정 공무원'],
    subjects: ['발달 심리학 및 보건 상담', '인지 신경 과학', '임상 및 상담 심리 실습', '소비자 및 광고 전략 연구'],
    clubs: ['공감 (Gong-Gam): 심리 연극 및 마음 테라피 자치회', '마인드 트래커: 뇌 인지 과학 연구반']
  },
  {
    id: 'dept-5',
    name: '국어국문학과',
    college: '인문대학',
    image: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=800&auto=format&fit=crop',
    description: '한국의 전래 고전 문학의 미학을 전승하고, 소설, 현대 문과 한국어 교육의 깊은 이해를 기반으로 문화 콘텐츠 창작 생태계를 이해하고 발전시킵니다.',
    studentRatio: '12:1',
    employmentRate: '59.8%',
    careers: ['방송 작가 및 신문기자', '외국어로서의 한국어 교원', '콘텐츠 및 시나리오 작가', '에디터 및 번역 전문가'],
    subjects: ['한국 전래 설화론', '한국어 형태 통사론', '미디어 창작의 실제', '한국 고전 현대 평설'],
    clubs: ['펜의 힘: 시 및 단편소설 창작 학회', '국어 교담회: 외국 대상 한글 교수 방법론 빌드반']
  },
  {
    id: 'dept-6',
    name: '디자인학과',
    college: '예술/디자인',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    description: '시각 디자인, UX/UI, 브랜드 경험 구축, 3D 가상 공간 디자인 등 다양한 매체를 정밀하고 감성적으로 혁신하는 크리에이티브 디렉터를 기릅니다.',
    studentRatio: '9:1',
    employmentRate: '76.1%',
    careers: ['UX/UI 프로덕트 디이너', '브랜드 크리에이티브 디렉터', '3D 입체 영상 아티스트', '웹툰/일러스트레이터 작가'],
    subjects: ['모바일 인터랙션 인터페이스 디자인', '타이포그래피 및 레이아웃', '브랜드 디자인 기획', '3D 모션 그래픽스 실무'],
    clubs: ['미메시스 (Mimesis): 매년 정기 작품 전시 전시회 빌드 동아리', '도토리: 창작 캐릭터 피규어 및 이모티콘 굿즈 빌더']
  }
];

export const specialPrograms: SpecialProgram[] = [
  {
    id: 'prog-1',
    title: '지능형 융합 기술 생태계 트랙',
    badge: '정부 주도 글로벌 인력 육성',
    description: '인문학과 컴퓨터공학, 또는 사회과학과 뇌영상 데이터를 결합하는 등, 학파의 전형적인 한계를 부수고 신규 과학지평을 개척하기 위해 융합 연구 플랫폼을 제공해 주는 독점 프로그램입니다.',
    benefits: [
      '융합트랙 이수 시 학업 보조 장학금 매학기 150만 원 보조',
      '전담 지도 교수를 통한 1:1 맞춤형 공동 논문 지도 서비스',
      '국내 대기업 인턴십 및 연구 장비 및 실습실 지원'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prog-2',
    title: '글로벌 듀얼 네트워크 교환학생 프로그램',
    badge: '세계 12개 대학 공동 복수학위',
    description: '충북대학교 교육 프로그램을 이수 후, 미주, 호주 또는 유럽 협정 자매대학에서 2년간 수학하여 정식 학위 2개를 취득하고 세계를 무대로 커리어를 전방위 전개할 수 있습니다.',
    benefits: [
      '자매대학 등록금 100% 면제 혜택 부여 및 편입 수당 가용',
      '파견 전 전담 현지 적응 원어민 멘토 수라단 운용',
      '해외 기업 연계 비자 발급 및 프레이 구인 네트워킹 매칭'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  }
];
