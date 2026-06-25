const stations = [
  { name: "서울 강남 - 파르나스", address: "테헤란로 521, B4F", region: "서울", power: "250kW" },
  { name: "서울 강남 - 센터필드", address: "테헤란로 231, B5F", region: "서울", power: "250kW" },
  { name: "서울 강남 - 빗썸금융타워", address: "테헤란로 129, B4F", region: "서울", power: "250kW" },
  { name: "서울 압구정 - 안다즈", address: "논현로 854, B4F", region: "서울", power: "250kW" },
  { name: "서울 여의도 - IFC", address: "국제금융로 10, P5", region: "서울", power: "250kW" },
  { name: "서울 여의도 - CCMM", address: "여의공원로 101, B6F", region: "서울", power: "250kW" },
  { name: "서울 용산 - 그랜드하얏트", address: "소월로 322, B2F", region: "서울", power: "250kW" },
  { name: "서울 용산 - 드래곤시티", address: "청파로 95, B3F", region: "서울", power: "250kW" },
  { name: "서울 잠실 - 롯데월드타워", address: "올림픽로 300, B3F", region: "서울", power: "250kW" },
  { name: "서울 종각 - 센트로폴리스", address: "공평동 5-1, B6F", region: "서울", power: "250kW" },
  { name: "서울 신림 - 타임스트림", address: "신림로 330, B6F", region: "서울", power: "250kW" },
  { name: "서울 신사", address: "강남대로 652, B4F", region: "서울", power: "250kW" },
  { name: "서울 성수 - D타워", address: "왕십리로 83-21, B5F", region: "서울", power: "250kW" },
  { name: "서울 중랑 - 이노시티", address: "망우로 353, B4F", region: "서울", power: "250kW" },

  { name: "경기 수원 - 광교 법조타운", address: "법조로149번길 269", region: "경기", power: "250kW" },
  { name: "경기 수원 - 롯데아울렛 광교", address: "도청로 10, B4F", region: "경기", power: "250kW" },
  { name: "경기 수원 - AK플라자", address: "덕영대로 924", region: "경기", power: "250kW" },
  { name: "경기 성남 - 판교 카카오아지트", address: "판교역로 166, B2F", region: "경기", power: "250kW" },
  { name: "경기 성남 - 테크원", address: "백현동 463-420", region: "경기", power: "250kW" },
  { name: "경기 하남 - 스타필드", address: "미사대로 750, 4F", region: "경기", power: "250kW" },
  { name: "경기 고양 - 일산 소노캄", address: "태극로 20, B3F", region: "경기", power: "250kW" },

  { name: "인천 송도 - 트리플스트리트", address: "송도과학로 16번길 33-4, B2F", region: "인천", power: "250kW" },
  { name: "인천 영종 - 그랜드하얏트", address: "영종해안남로321번길 208", region: "인천", power: "250kW" },

  { name: "부산 해운대 - 롯데백화점", address: "센텀남대로 59, B5F", region: "부산", power: "250kW" },
  { name: "부산 기장 - 롯데아울렛", address: "기장해안로 147", region: "부산", power: "250kW" },
  { name: "부산 IFC", address: "전포대로 133, B3F", region: "부산", power: "250kW" },
  { name: "부산 파라다이스호텔", address: "해운대해변로 296", region: "부산", power: "250kW" },

  { name: "대구 EXCO", address: "엑스코로 10", region: "대구", power: "250kW" },
  { name: "대구 수성", address: "수성못6길 18", region: "대구", power: "250kW" },

  { name: "대전 롯데백화점", address: "계룡로 598", region: "대전", power: "250kW" },

  { name: "광주 홀리데이인", address: "상무누리로 55", region: "광주", power: "250kW" },

  { name: "제주 롯데호텔", address: "중문관광로 72번길 35", region: "제주", power: "250kW" }
    // ===== 울산 =====
  ,{ name: "울산 - 모다아울렛", address: "진장유통로 78-6", region: "울산", power: "250kW" },
  { name: "울산 - 현대백화점", address: "삼산로 (울산)", region: "울산", power: "250kW" },

  // ===== 경주 =====
  { name: "경주 - 신라명가", address: "탑동 676-1", region: "경주", power: "250kW" },
  { name: "경주 - 라한셀렉트", address: "보문로 338", region: "경주", power: "250kW" },
  { name: "경주 - 광광휴게소", address: "서라벌대로 324", region: "경주", power: "250kW" },

  // ===== 부산 =====
  { name: "부산 해운대 - 롯데백화점", address: "센텀남대로 59, B5F", region: "부산", power: "250kW" },
  { name: "부산 해운대 - 파라다이스호텔", address: "해운대해변로 296", region: "부산", power: "250kW" },
  { name: "부산 기장 - 롯데프리미엄아울렛", address: "기장해안로 147", region: "부산", power: "250kW" },
  { name: "부산 남구 - IFC", address: "전포대로 133, B3F", region: "부산", power: "250kW" },
  { name: "부산 동래 - 농심호텔", address: "금강공원로 23", region: "부산", power: "250kW" },
  { name: "부산 연제 - 테슬라센터", address: "좌수영로 290", region: "부산", power: "250kW" }
];

const listEl = document.getElementById("stationList");
const searchInput = document.getElementById("searchInput");

function render(list) {
  listEl.innerHTML = "";

  list.forEach((s) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>⚡ ${s.name}</h3>
      <p>${s.address}</p>
      <p>지역: ${s.region}</p>
      <p>속도: ${s.power}</p>
    `;

    card.onclick = () => openModal(s);

    listEl.appendChild(card);
  });
}

function openModal(s) {
  document.getElementById("modalTitle").innerText = s.name;
  document.getElementById("modalInfo").innerText =
    `${s.address}\n지역: ${s.region}\n속도: ${s.power}`;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.trim();

  const filtered = stations.filter(s =>
    s.name.includes(keyword) ||
    s.address.includes(keyword) ||
    s.region.includes(keyword)
  );

  render(filtered);
});

render(stations);

window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    if (splash) splash.style.display = "none";
  }, 1500);
});