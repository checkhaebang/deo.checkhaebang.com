import { CheckQuestion } from "./models";
import { ChoiceType } from "../persona/models/constants";
import { StatusCategory } from "./models/constants";
export const checklist: Array<CheckQuestion> = [
  {
    uid: 1,
    title: "입주가능일 협의가 가능한가요?",
    type_: ChoiceType.SingleChoice,
    label: "건물",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 1,
        question_id: 1,
        contents: "",
      },
    ],
  },
  {
    uid: 6,
    title: "건물 종류",
    type_: ChoiceType.MultipleChoice,
    label: "건물",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 256,
        question_id: 6,
        contents: "빌라",
      },
      {
        uid: 257,
        question_id: 6,
        contents: "오피스텔",
      },
      {
        uid: 258,
        question_id: 6,
        contents: "단독주택",
      },
    ],
  },
  {
    uid: 7,
    title: "방 종류",
    type_: ChoiceType.MultipleChoice,
    label: "건물",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 259,
        question_id: 7,
        contents: "원룸",
      },
      {
        uid: 260,
        question_id: 7,
        contents: "투룸",
      },
      {
        uid: 261,
        question_id: 7,
        contents: "투룸이상",
      },
      {
        uid: 262,
        question_id: 7,
        contents: "쉐어하우스",
      },
    ],
  },
  {
    uid: 8,
    title: "건물 시설",
    type_: ChoiceType.MultipleChoice,
    label: "건물",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 263,
        question_id: 8,
        contents: "옥상",
      },
      {
        uid: 264,
        question_id: 8,
        contents: "주차장",
      },
    ],
  },
  {
    uid: 9,
    title: "샷시 상태가 양호한가요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 6,
        question_id: 9,
        contents: "",
      },
    ],
  },
  {
    uid: 11,
    title:
      "곰팡이 흔적, 물이 흐른 흔적, 곰팡이, 변색, 부분 도배한 부분이 없나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 8,
        question_id: 11,
        contents: "",
      },
    ],
  },
  {
    uid: 14,
    title: "창이나 문 근처에서 외풍이 들지는 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 11,
        question_id: 14,
        contents: "",
      },
    ],
  },
  {
    uid: 15,
    title: "겨울의 경우, 벽이 너무 차갑지는 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 12,
        question_id: 15,
        contents: "",
      },
    ],
  },
  {
    uid: 18,
    title: "방문, 화장실 문이 잘 닫히나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 15,
        question_id: 18,
        contents: "",
      },
    ],
  },
  {
    uid: 19,
    title: "집이 습하진 않은가요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 16,
        question_id: 19,
        contents: "",
      },
    ],
  },
  {
    uid: 20,
    title: "조망권이 침해되지는 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 17,
        question_id: 20,
        contents: "",
      },
    ],
  },
  {
    uid: 21,
    title: "낮에 방문했을 때 전등을 전부 끄고 햇빛이 잘 드는지 확인하셨나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 18,
        question_id: 21,
        contents: "",
      },
    ],
  },
  {
    uid: 23,
    title: "복도 소리가 방 내부까지 잘 들리진 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 20,
        question_id: 23,
        contents: "",
      },
    ],
  },
  {
    uid: 25,
    title: "방 형태",
    type_: ChoiceType.MultipleChoice,
    label: "방 상태",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 265,
        question_id: 25,
        contents: "분리형",
      },
      {
        uid: 266,
        question_id: 25,
        contents: "오픈형",
      },
      {
        uid: 267,
        question_id: 25,
        contents: "복층",
      },
    ],
  },
  {
    uid: 26,
    title: "월세+관리비+공과금+(대출월이자) 계산을 해보셨나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 22,
        question_id: 26,
        contents: "",
      },
    ],
  },
  {
    uid: 27,
    title: "보증금 대출이 가능한 매물인가요?",
    type_: ChoiceType.SingleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 23,
        question_id: 27,
        contents: "",
      },
    ],
  },
  {
    uid: 28,
    title: "콘센트 위치 및 개수를 확인하셨나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 24,
        question_id: 28,
        contents: "",
      },
    ],
  },
  {
    uid: 29,
    title: "남향인가요? 나침반 어플로 방향을 확인해보세요.",
    type_: ChoiceType.SingleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 25,
        question_id: 29,
        contents: "",
      },
    ],
  },
  {
    uid: 35,
    title: "빨래 건조를 할만한 여유 공간이 있나요?",
    type_: ChoiceType.SingleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 31,
        question_id: 35,
        contents: "",
      },
    ],
  },
  {
    uid: 37,
    title: "관리비 포함 내역",
    type_: ChoiceType.MultipleChoice,
    label: "방 정보",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 268,
        question_id: 37,
        contents: "가스",
      },
      {
        uid: 269,
        question_id: 37,
        contents: "전기",
      },
      {
        uid: 270,
        question_id: 37,
        contents: "수도",
      },
      {
        uid: 271,
        question_id: 37,
        contents: "청소비",
      },
      {
        uid: 272,
        question_id: 37,
        contents: "인터넷",
      },
      {
        uid: 273,
        question_id: 37,
        contents: "TV",
      },
    ],
  },
  {
    uid: 38,
    title: "창을 열었을 때 옆 건물과 너무 가깝지 않은가요?",
    type_: ChoiceType.SingleChoice,
    label: "방범",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 33,
        question_id: 38,
        contents: "",
      },
    ],
  },
  {
    uid: 40,
    title: "밤에 집 주변이 너무 어둡진 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "방범",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 35,
        question_id: 40,
        contents: "",
      },
    ],
  },
  {
    uid: 44,
    title: "옵션이 고장 없이 정상작동하나요?",
    type_: ChoiceType.SingleChoice,
    label: "옵션",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 39,
        question_id: 44,
        contents: "",
      },
    ],
  },
  {
    uid: 50,
    title: "방 옵션",
    type_: ChoiceType.MultipleChoice,
    label: "옵션",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 274,
        question_id: 50,
        contents: "세탁기",
      },
      {
        uid: 275,
        question_id: 50,
        contents: "냉장고",
      },
      {
        uid: 276,
        question_id: 50,
        contents: "에어컨",
      },
      {
        uid: 277,
        question_id: 50,
        contents: "가스레인지",
      },
      {
        uid: 278,
        question_id: 50,
        contents: "전자레인지",
      },
      {
        uid: 279,
        question_id: 50,
        contents: "TV",
      },
      {
        uid: 280,
        question_id: 50,
        contents: "침대",
      },
      {
        uid: 281,
        question_id: 50,
        contents: "신발장",
      },
      {
        uid: 282,
        question_id: 50,
        contents: "옷장",
      },
      {
        uid: 283,
        question_id: 50,
        contents: "책상",
      },
    ],
  },
  {
    uid: 53,
    title: "회사/학교와의 교통편 확인을 하셨나요?",
    type_: ChoiceType.SingleChoice,
    label: "집 주변",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 47,
        question_id: 53,
        contents: "",
      },
    ],
  },
  {
    uid: 54,
    title: "집 주변에 언덕, 오르막이 없나요?",
    type_: ChoiceType.SingleChoice,
    label: "집 주변",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 48,
        question_id: 54,
        contents: "",
      },
    ],
  },
  {
    uid: 58,
    title: "근처에 공원이나 산책로가 있나요?",
    type_: ChoiceType.SingleChoice,
    label: "집 주변",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 52,
        question_id: 58,
        contents: "",
      },
    ],
  },
  {
    uid: 59,
    title: "집 주변 편의시설",
    type_: ChoiceType.MultipleChoice,
    label: "집 주변",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 284,
        question_id: 59,
        contents: "편의점",
      },
      {
        uid: 285,
        question_id: 59,
        contents: "마트",
      },
      {
        uid: 286,
        question_id: 59,
        contents: "병원",
      },
      {
        uid: 287,
        question_id: 59,
        contents: "약국",
      },
      {
        uid: 288,
        question_id: 59,
        contents: "세탁소",
      },
    ],
  },
  {
    uid: 60,
    title: "변기, 수전, 샤워기 수압을 괜찮나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 53,
        question_id: 60,
        contents: "",
      },
    ],
  },
  {
    uid: 61,
    title: "수챗구멍, 세면대 물이 잘 빠지나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 54,
        question_id: 61,
        contents: "",
      },
    ],
  },
  {
    uid: 62,
    title: "화장실에 창이 있나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 55,
        question_id: 62,
        contents: "",
      },
    ],
  },
  {
    uid: 63,
    title: "환풍기와 같은 환기 시설이 잘 되어 있나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 56,
        question_id: 63,
        contents: "",
      },
    ],
  },
  {
    uid: 65,
    title: "수도나 샤워기에 물이 새진 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 58,
        question_id: 65,
        contents: "",
      },
    ],
  },
  {
    uid: 67,
    title: "부엌 싱크대에서 냄새가 나진 않나요?",
    type_: ChoiceType.SingleChoice,
    label: "화장실/부엌",
    status: StatusCategory.Looking,
    checks: [
      {
        uid: 60,
        question_id: 67,
        contents: "",
      },
    ],
  },
];
