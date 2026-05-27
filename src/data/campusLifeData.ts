import { CampusLifePhoto, Facility, DormSpec, StudentTestimonial, DailyMenu } from '../types';

export const lifePhotos: CampusLifePhoto[] = [
  {
    id: 'photo-1',
    title: '동행 대동제: 봄날의 캠퍼스 벚꽃',
    category: '축제',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    description: '충북대학교 솔받광장 주위를 화사하게 채색한 왕벚꽃 가로수 터널 아래에서 소중한 학창 시절의 찰나를 남겨봅니다.',
    date: '2026-04-12'
  },
  {
    id: 'photo-2',
    title: '기계연구동 메이커스페이스 동아리 실습',
    category: '동아리',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    description: '동호 자치 메이커스 단원들이 임베디드 코딩 조립 및 3D 프린팅 프로토타입 조립 제작 테스트를 집도하고 있는 모임 현장.',
    date: '2026-04-28'
  },
  {
    id: 'photo-3',
    title: '신축 중앙도서관 스마트 멀티미디어존',
    category: '학습/도서관',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    description: '태블릿 대여, 실시간 협업 유리 부스형 캐럴, 영화상영 상설 코너까지 탑재하여 학구열을 한껏 유발케 하는 메카입니다.',
    date: '2026-05-18'
  },
  {
    id: 'photo-4',
    title: '정규 춘계 거점국립대 우정 농구 대전',
    category: '체육',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    description: '충북대 황소 체육관에서 강세를 보이며 준결승행 슛을 꽂아 넣고 단체 환호를 거품 물며 질러내는 농구 동아리 카이저.',
    date: '2026-05-05'
  }
];

export const facilities: Facility[] = [
  {
    id: 'fac-1',
    name: 'Modern Dormitory',
    koreanName: '학생생활관 (양성재·양진재)',
    description: '풍요로운 대학 문화의 보금자리이자 자치 안전 공간',
    amenities: ['1인실, 2인실 및 기부 주택실', '세탁 코인실', '정독 스터디 라운지', '체력 단련실', '무인 택배 시스템'],
    hours: '통금시간: 23:50 ~ 익일 04:30',
    location: '캠퍼스 동편 기숙대 대로변',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
    details: '충북대학교 학생생활관은 약 4천여 명의 사생을 포괄하는 최신식 랜드마크 주거 단지입니다. 각 방마다 완비된 개별 냉난방, 전용 욕실과 초고속 유무선 기가 인터넷이 공급되며 영양 수급을 책임지는 사생 전용 식당이 부착되어 학업에 전념할 수 있게 돕습니다.'
  },
  {
    id: 'fac-2',
    name: 'Unified Central Library',
    koreanName: '중앙도서관 및 디지털 아카이브',
    description: '방대한 지적 전산과 지식 탐구가 이루어지는 융합 허브',
    amenities: ['230만 권 단행본 소장', '협업 유리 세미나 부스', '24시간 무인 열람 구역', '북카페 & 테라스 휴게실'],
    hours: '일반열람실: 24시간 연중무휴 | 자료실: 09:00 ~ 21:00',
    location: '지도의 중심, 본관 인접 대건물',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
    details: '지상 5층 규모의 최신식 스마트 라이브러리로 원클릭 모바일 앱 도서 대여, 멀티 패드 좌석 예약이 가능합니다. 최적의 온습도 컨트롤러와 안구 피로 저감형 유기 배색 조명이 설계된 최상위 학습 복합 컴플렉스입니다.'
  },
  {
    id: 'fac-3',
    name: 'CBNU Sports Center',
    koreanName: '개신 수영 및 테니스 종합 스포츠센터',
    description: '청춘의 열정과 강인한 체력을 기르는 실내 복합 문화센터',
    amenities: ['정독 규격 50m 실내 수영장', '웨이트 전문 피트니스 센터', '정식 인조잔디 대운동장', '실내 암벽등반 클라이밍'],
    hours: '평일: 06:00 ~ 22:00 | 토요일: 09:00 ~ 18:00 (일요일 휴무)',
    location: '학생생활관 서편 정문 사거리 방향',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    details: '재학생 대상 특별 제휴 및 파격 환급 바우처 혜택이 주어집니다. 전문 현지 라이프 가드가 배치된 공인 수영장 및 최첨단 스마트 트레드밀, 기구 필라테스 강좌를 청강하며 균형 잡힌 심신 관리를 도모할 수 있습니다.'
  },
  {
    id: 'fac-4',
    name: 'Gaeshin Cultural Center',
    koreanName: '제1학생회관 & 개신문화관',
    description: '열띤 자치 활동, 동아리와 만남이 흐르는 역동의 정거장',
    amenities: ['학생 우체국 및 신한은행 지점', '안경점 및 무인 보조 인쇄실', '동아리 방 70여 개소', '소/대강당 콘서트홀'],
    hours: '상시 개방: 08:00 ~ 23:00',
    location: '도서관 앞 분수광장 서측',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    details: '총학생회 및 각 학부 동아리의 본산입니다. 교우 관계의 시작점이자 안락한 생활 편의시설이 총집결된 곳으로, 다양한 학생 주도의 비전 제시 포럼, 버스킹, 프리마켓이 매달 기획되어 소통을 빚어냅니다.'
  }
];

export const dormSpecs: DormSpec[] = [
  {
    name: '개성재 (전통 관제 생활관)',
    capacity: '1,200명',
    roomTypes: ['2인 1실 (공용 욕실)', '2인 1실 (개별 욕실)'],
    fee: '학기당 약 750,000원 ~ 920,000원 (식비 포함옵션 선택 가능)',
    features: ['학구적인 면학 분위기 형성', '안정성이 공인된 소방 대피 설비 배치', '캠퍼스 강의동과 가장 우수한 접근 도보 수치']
  },
  {
    name: '양성재 (현대식 신축 생활관)',
    capacity: '1,950명',
    roomTypes: ['2인 1실 (모든 실 개별 샤워/화장실 완비)', '1인 장애우 특별 보조실'],
    fee: '학기당 약 1,150,000원 ~ 1,300,000원',
    features: ['동별 별도의 쾌적한 피트니스 존 보유', '남/여 전용 지문인식 복층 게이트 시큐리티 탑재', '고풍스러운 무인 테이크아웃 밀박스 자판기']
  },
  {
    name: '양진재 (아파트형 스마트 레지던스)',
    capacity: '1,100명',
    roomTypes: ['4인 1세대 (개별 방 4개, 공동 거실 및 주방 완비)', '2인 1실 리조트형'],
    fee: '학기당 약 1,300,000원 ~ 1,500,000원',
    features: ['간단 조리가 승인된 공동 하이브리드 인덕션 부엌 보유', '광대한 전경 감상이 가능한 루프탑 열림 소원정', '각 동 지하 실내 전용 주차라인 배정']
  }
];

export const testimonials: StudentTestimonial[] = [
  {
    id: 'test-1',
    name: '김지윤',
    department: '경영학과',
    year: 3,
    quote: '솔밭 광장에서 펼쳐지는 봄 대동제 버스킹 무대에서 노래 동아리 리드보컬로 활동했던 추억과, 학교 창업지원단에서 지원하는 청주시 로컬 브랜딩 마케팅 캡스톤 프로젝트 활동을 병행했습니다. 대학이 학생들의 자발적 학외 문화와 창작 열정에 정말 투자를 전폭적으로 해줘서 매달이 흥겹습니다.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: '이민호',
    department: '컴퓨터공학과',
    year: 4,
    quote: '학교 국제교류본부의 세밀한 교환학생 맞춤 매칭 로드맵 덕에 미국 오레곤 주립대학으로 다녀왔습니다. 타교 학기 연동 시스템을 통해 취득 학점을 100% 온전히 승인받을 수 있었고 학비 대납 보조 수당 충당으로 재정적 고단함 없이 해외 연구 문화를 체득한 결과, 현재 글로벌 기업의 인공지능 연구소 최종 오퍼를 얻어내는 쾌거를 이루었습니다.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export const weeklyCafeteriaMenu: DailyMenu[] = [
  {
    date: '2026-06-01',
    dayOfWeek: '월',
    breakfast: ['참치수프', '버터모닝빵 & 딸기잼', '신선 계란후라이', '바나나셰이크'],
    lunch: ['수제 돈까스 & 일식 매콤 카레', '가쓰오 팽이버섯 장국', '무말랭이 무침', '포기김치 & 파인애플 슬라이스'],
    dinner: ['얼큰 버섯 육개장', '백미밥', '고등어 양념조림', '감자 채볶음', '깍두기'],
    calories: { breakfast: '540 kcal', lunch: '890 kcal', dinner: '720 kcal' }
  },
  {
    date: '2026-06-02',
    dayOfWeek: '화',
    breakfast: ['황태계란해장국', '오곡밥', '시금치 나물무침', '두부조림', '포기김치'],
    lunch: ['숯불 불고기 낙지 덮밥', '얼큰 근대국', '모둠 튀김만두 (초간장)', '백설기', '석박지'],
    dinner: ['크림베이컨스파게티', '수제 어니언 마늘빵', '치킨 텐더 샐러드 & 아일랜드 드레싱', '수박'],
    calories: { breakfast: '480 kcal', lunch: '920 kcal', dinner: '810 kcal' }
  },
  {
    date: '2026-06-03',
    dayOfWeek: '수',
    breakfast: ['야채닭죽', '갈릭 모닝토스트', '구운 달걀', '요구르트'],
    lunch: ['양백 청주 소고기무국', '기장밥', '철판 치즈 제육볶음', '청포묵 무침', '상추쌈 & 쌈장', '총각김치'],
    dinner: ['해물 짬뽕국', '야채 볶음밥', '등심 사천탕수육', '단무지 무침', '춘권 튀김'],
    calories: { breakfast: '510 kcal', lunch: '850 kcal', dinner: '880 kcal' }
  },
  {
    date: '2026-06-04',
    dayOfWeek: '목',
    breakfast: ['감자 미역국', '흑미밥', '스팸 구이', '열무나물', '포기김치'],
    lunch: ['동인동식 간장 갈비찜 [호주산 소]', '설렁탕 국물', '파김치 & 고추장아찌 무침', '요플레'],
    dinner: ['정통 수제 함박스테이크 (브라운 야채소스)', '단호박 수프', '모닝 모짜렐라 카프레제 샐러드', '콜라'],
    calories: { breakfast: '620 kcal', lunch: '950 kcal', dinner: '790 kcal' }
  },
  {
    date: '2026-06-05',
    dayOfWeek: '금',
    breakfast: ['누룽지탕', '오징어 젓갈류', '야채 계란말이', '요구르트'],
    lunch: ['맑은 들깨 미역국', '흰밥', '매콤 춘천 닭갈비 & 고구마 사리', '김가루 묵무침', '포기김치'],
    dinner: ['부대찌개 (라면&치즈 사리 추가)', '쌀밥', '스위트콘 샐러드', '두부 가라아게', '깍두기'],
    calories: { breakfast: '450 kcal', lunch: '870 kcal', dinner: '750 kcal' }
  }
];
