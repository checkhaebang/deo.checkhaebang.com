import { QuestionCategory, ChoiceType } from "./models/constants";
import { PersonaQuestion } from "./models";
/** 질문 mock 데이터 */
export const questions: Array<PersonaQuestion> = [
  {
    uid: 1,
    title: "둘 중 더 중요하게 생각하는 것은?",
    choices: [
      {
        uid: 1,
        question_id: 1,
        contents:
          "가성비가 제일 중요\n <hr>합리적인 가격</hr>에 가성비 갑인 방...",
        category: QuestionCategory.Normal,
      },
      {
        uid: 11,
        question_id: 1,
        contents:
          "내 삶의 질이 가장 중요하지!\n 무조건 <hr>방의 퀄리티</hr>가 좋아야한다",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 2,
    title: "방범에 대해 어떻게 생각하시나요?",
    choices: [
      {
        uid: 2,
        question_id: 2,
        contents:
          "<hr>방범, 치안이 제일 중요</hr>하다!\n 왜냐면 난 소중하니까~",
        category: QuestionCategory.Normal,
      },
      {
        uid: 12,
        question_id: 2,
        contents:
          "내 몸은 내가 알아서 지킨드아!\n 방범이 <hr>일순위까진 아니다</hr>",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 3,
    title: "반려동물을 키우시나요?",
    choices: [
      {
        uid: 3,
        question_id: 3,
        contents:
          "<hr>반려동물과 함께</hr> 살고 있거나\n 입양할 예정이다! 아싸~",
        category: QuestionCategory.Normal,
      },
      {
        uid: 13,
        question_id: 3,
        contents: "반려동물을 <hr>키우고 있지 않고</hr>\n 키울 생각도 없어요",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 4,
    title: "둘 중 더 못 참겠는 것은?",
    choices: [
      {
        uid: 4,
        question_id: 4,
        contents:
          "<hr>쪄.죽.따</hr> 쪄죽어도 따뜻한 물샤워\n 추운게 젤 싫어요...",
        category: QuestionCategory.Normal,
      },
      {
        uid: 14,
        question_id: 4,
        contents:
          "<hr>얼.죽.아.</hr> 얼어죽어도 아이스\n 더위는 진짜 못참겠다 ㅠㅠ",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 5,
    title: "자취방 짐이 많다 vs 적다",
    choices: [
      {
        uid: 5,
        question_id: 5,
        contents: "뭘 잘 못 버려요ㅠㅠ\n <hr>짐이 많은 편</hr>이에요..",
        category: QuestionCategory.Normal,
      },
      {
        uid: 15,
        question_id: 5,
        contents: "미니멀 라이프의 정석!\n <hr>짐이 적은 편</hr>이에요",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 6,
    title: "나는 이런 사람이다?",
    choices: [
      {
        uid: 6,
        question_id: 6,
        contents:
          "친구.. 술.. 약속 3박자를 갖춘\n <hr>바쁜 인싸</hr>가 바로 접니다.",
        category: QuestionCategory.Normal,
      },
      {
        uid: 16,
        question_id: 6,
        contents: "이불 밖은 위험해~\n 집을 사랑하는 <hr>집순이/집돌이</hr>",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 7,
    title: "나는 예민한 사람인가요?",
    choices: [
      {
        uid: 7,
        question_id: 7,
        contents:
          "냄새나 소리에 <hr>파워 예민</hr>하다\n 소음이나 악취는 정말 싫어요ㅠㅠ",
        category: QuestionCategory.Normal,
      },
      {
        uid: 17,
        question_id: 7,
        contents:
          "냄새나 소리 <hr>신경을 잘 안쓴다.</hr>\n 둔해서 그런거 잘 모른다.",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 8,
    title: "운동을 좋아하시나요?",
    choices: [
      {
        uid: 8,
        question_id: 8,
        contents: "나는 헬장!\n 운동을 사랑하는 <hr>헬스 장인</hr>",
        category: QuestionCategory.Normal,
      },
      {
        uid: 18,
        question_id: 8,
        contents: "운동이 뭐죠?\n 움직이는 것도 싫어하는 <hr>헬린이</hr>",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 9,
    title: "정리를 잘 하는 스타일이신가요?",
    choices: [
      {
        uid: 9,
        question_id: 9,
        contents:
          "정리가 안되어 있으면 스트레스ㅠㅠ\n 더러운건 못참는 <hr>깔끔이</hr>",
        category: QuestionCategory.Normal,
      },
      {
        uid: 19,
        question_id: 9,
        contents: "정리가 뭐죠?\n 청소는 <hr>몰아서 하는 편</hr>이다",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
  {
    uid: 10,
    title: "집에서 요리를 자주 하시나요?",
    choices: [
      {
        uid: 10,
        question_id: 10,
        contents: "자주 해먹는 편이다.\n <hr>우리집 요리사</hr>는 바로 나다!",
        category: QuestionCategory.Normal,
      },
      {
        uid: 20,
        question_id: 10,
        contents: "요리 직접 해먹기보단\n <hr>시켜먹거나 밖에서</hr> 사먹기!",
        category: QuestionCategory.Normal,
      },
    ],
    type_: ChoiceType.SingleChoice,
  },
];
