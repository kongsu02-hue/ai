// 행성 데이터 (NASA 공개 자료 기준, 수치는 근사값)
const PLANETS = [
  {
    id: "mercury", name: "수성", en: "Mercury", type: "rocky", typeLabel: "암석형",
    img: "images/mercury.jpg", color: "#b5a89a",
    diameter: 4879, distanceAU: 0.39, distance: "약 5,790만 km",
    year: "88일", day: "약 58.6일", moons: "0개", gravity: 0.38, temp: "-173 ~ 427°C",
    summary: "태양에 가장 가깝고 가장 작은 행성입니다.",
    desc: "대기가 거의 없어 낮에는 400°C 넘게 뜨겁고 밤에는 -170°C 아래로 떨어집니다. 표면은 달처럼 수많은 충돌구로 덮여 있습니다.",
    fact: "수성의 1년(88일)은 하루(일출에서 다음 일출까지 약 176일)보다 짧습니다."
  },
  {
    id: "venus", name: "금성", en: "Venus", type: "rocky", typeLabel: "암석형",
    img: "images/venus.jpg", color: "#e3c27a",
    diameter: 12104, distanceAU: 0.72, distance: "약 1억 820만 km",
    year: "225일", day: "약 243일 (역방향)", moons: "0개", gravity: 0.91, temp: "평균 약 464°C",
    summary: "두꺼운 이산화탄소 대기로 덮인 가장 뜨거운 행성입니다.",
    desc: "강력한 온실효과 때문에 태양에서 더 먼 금성이 수성보다 뜨겁습니다. 지구와 크기가 비슷해 '지구의 쌍둥이'라고도 불립니다.",
    fact: "금성은 다른 대부분의 행성과 반대 방향으로 자전해서 해가 서쪽에서 뜹니다."
  },
  {
    id: "earth", name: "지구", en: "Earth", type: "rocky", typeLabel: "암석형",
    img: "images/earth.jpg", color: "#4f8fd8",
    diameter: 12742, distanceAU: 1.0, distance: "약 1억 4,960만 km",
    year: "365.25일", day: "약 23시간 56분", moons: "1개", gravity: 1.0, temp: "평균 약 15°C",
    summary: "생명체가 사는 것으로 알려진 유일한 행성입니다.",
    desc: "표면의 약 71%가 액체 상태의 물로 덮여 있습니다. 대기와 자기장이 해로운 우주 방사선을 막아 줍니다.",
    fact: "태양과 지구 사이의 평균 거리가 천문단위(1 AU)의 기준이 됩니다."
  },
  {
    id: "mars", name: "화성", en: "Mars", type: "rocky", typeLabel: "암석형",
    img: "images/mars.jpg", color: "#d0643b",
    diameter: 6779, distanceAU: 1.52, distance: "약 2억 2,790만 km",
    year: "687일", day: "약 24시간 37분", moons: "2개", gravity: 0.38, temp: "평균 약 -63°C",
    summary: "산화철 먼지 때문에 붉게 보이는 행성입니다.",
    desc: "태양계에서 가장 높은 화산인 올림푸스 산이 있습니다. 과거에 물이 흘렀던 흔적이 있어 탐사선이 활발히 조사하고 있습니다.",
    fact: "올림푸스 산의 높이는 약 22km로, 에베레스트 산의 약 2.5배입니다."
  },
  {
    id: "jupiter", name: "목성", en: "Jupiter", type: "gas", typeLabel: "가스형",
    img: "images/jupiter.jpg", color: "#d8a878",
    diameter: 139820, distanceAU: 5.2, distance: "약 7억 7,850만 km",
    year: "약 11.9년", day: "약 9시간 56분", moons: "95개 이상", gravity: 2.53, temp: "구름 상층 약 -110°C",
    summary: "태양계에서 가장 큰 행성입니다.",
    desc: "주로 수소와 헬륨으로 이루어진 거대 가스 행성입니다. 거대한 폭풍인 대적점은 수백 년 넘게 이어지고 있습니다.",
    fact: "목성 안에 지구가 1,300개 넘게 들어갈 수 있습니다."
  },
  {
    id: "saturn", name: "토성", en: "Saturn", type: "gas", typeLabel: "가스형",
    img: "images/saturn.jpg", color: "#e6d29a",
    diameter: 116460, distanceAU: 9.54, distance: "약 14억 3,000만 km",
    year: "약 29.5년", day: "약 10시간 34분", moons: "270개 이상", gravity: 1.07, temp: "구름 상층 약 -140°C",
    summary: "아름다운 고리로 유명한 행성입니다.",
    desc: "고리는 대부분 얼음 조각과 암석 부스러기로 이루어져 있습니다. 위성 타이탄은 두꺼운 대기를 가진 유일한 위성입니다.",
    fact: "토성은 평균 밀도가 물보다 낮습니다."
  },
  {
    id: "uranus", name: "천왕성", en: "Uranus", type: "ice", typeLabel: "얼음형",
    img: "images/uranus.jpg", color: "#8fd3dc",
    diameter: 50724, distanceAU: 19.2, distance: "약 28억 7,000만 km",
    year: "약 84년", day: "약 17시간 14분 (역방향)", moons: "28개 이상", gravity: 0.89, temp: "약 -195°C",
    summary: "옆으로 누운 채 자전하는 얼음 거인입니다.",
    desc: "자전축이 약 98° 기울어져 있어 공전하는 동안 극지방이 태양을 정면으로 향하기도 합니다. 대기의 메테인 때문에 청록색으로 보입니다.",
    fact: "천왕성의 극지방은 약 42년 동안 낮이 이어지고, 다시 42년 동안 밤이 이어집니다."
  },
  {
    id: "neptune", name: "해왕성", en: "Neptune", type: "ice", typeLabel: "얼음형",
    img: "images/neptune.jpg", color: "#4a6fe0",
    diameter: 49244, distanceAU: 30.1, distance: "약 45억 km",
    year: "약 165년", day: "약 16시간 6분", moons: "16개", gravity: 1.14, temp: "약 -200°C",
    summary: "태양에서 가장 먼 행성이자 바람이 가장 강한 행성입니다.",
    desc: "초속 600m에 달하는 바람이 붑니다. 관측이 아니라 수학 계산으로 위치를 먼저 예측해 발견한 행성입니다.",
    fact: "1846년 발견된 뒤 2011년에야 처음으로 태양을 한 바퀴 다 돌았습니다."
  }
];
